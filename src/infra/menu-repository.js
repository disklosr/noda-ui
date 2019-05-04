import menu from './test-menu.json'

const getMenu = (category, date) => {
    return getFakeMenu();
}

const getFakeMenu = () => {
    return menu;
}

export default { getMenu }