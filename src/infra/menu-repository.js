import menu from './test-menu.json'

const fetchUrl = 'https://noda.francecentral.cloudapp.azure.com:8081/menu'


const getMenu = async (category, date) => {
    return getRealMenu(category);
}

const getFakeMenu = () => {
    menu.Menu[0].entryName = Math.random().toString()
    return menu;
}

const getRealMenu = async (category) => {
    try {
        var response = await fetch(fetchUrl + `/${category}/today`);
        if (response.ok) {
            var menu = await response.json()
            console.log(menu)
            var flattenedItems = new Set(menu.Menu.reduce((acc, item) => acc.concat(item.entryItems), []))
            console.log(flattenedItems)

            if (flattenedItems.size === 0)
                return { message: 'The retrieved menu doesn\'t seem right!' }

            if (flattenedItems.size === 1)
                return { message: 'Today\'s menu haven\'t been published yet' }

            return menu;
        }

        else return { message: 'An error occured while fetching the menu' }
    }

    catch (e) {
        return { message: e + 'An error occured while fetching the menu' }
    }
}

export default { getMenu }