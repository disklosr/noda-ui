import menu from './test-menu.json'

const fetchUrl = 'https://noda.mallow.disklosr.com/menu'


const getMenu = async (category, date) => {
    return getRealMenu(category);
}

const getFakeMenu = () => {
    menu.random = Math.random().toString()
    return menu;
}

const submitForm = async (formData) => {
    var result = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
    });

    return result.ok
}

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const getRealMenu = async (category) => {
    try {
        var response = await fetch(fetchUrl + `/${category}/today`);
        if (response.ok) {
            var menu = await response.json()

            if (menu.message != null && menu.message != undefined)
                return menu;

            var flattenedItems = new Set(menu.Menu.reduce((acc, item) => acc.concat(item.entryItems), []))

            if (flattenedItems.size === 0)
                return { message: 'The retrieved menu doesn\'t seem right!' }

            if (flattenedItems.size === 1)
                return { message: 'Today\'s menu haven\'t been published yet' }

            return menu;
        }

        else return { message: 'An error occured while fetching the menu' }
    }

    catch (e) {
        console.log(e);
        return { message: 'An error occured while fetching the menu' }
    }
}

export default { getMenu, submitForm }
