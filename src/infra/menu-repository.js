import menu from './test-menu.json'

const fetchUrl = '//noda.francecentral.cloudapp.azure.com:8081/menu/noda/today'


const getMenu = async (category, date) => {
    return getRealMenu();
}

const getFakeMenu = () => {
    return menu;
}

const getRealMenu = async () => {
    try {
        var response = await fetch(fetchUrl);
        if (response.ok)
            return response.json()

        else return { message: 'An error occured while fetching the menu' }
    }

    catch (e) {
        return { message: 'An error occured while fetching the menu' }
    }
}

export default { getMenu }