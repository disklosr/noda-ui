import React from 'react';
import MenuSection from './menu-section';

function Menu({ baseState }) {

    if (baseState.menuRetrieved === false) {
        return <LoadingMenu />
    }

    else if (baseState.menu.Menu === undefined) {
        return <EmptyMenu message={baseState.menu.message} />
    }
    else {
        return baseState.menu.Menu.map((section, index) =>
            <MenuSection menuSection={section} key={index} index={index} />
        )
    }
}


const LoadingMenu = () =>
    <div className="card shadow">
        <div className="card-body" >
            <div className="loading loading-lg" />
        </div>
    </div>;

const EmptyMenu = ({ message }) =>
    <div className="card shadow">
        <div className="card-body">
            {message || "No menu to display"}
        </div>
    </div>;

export default Menu;