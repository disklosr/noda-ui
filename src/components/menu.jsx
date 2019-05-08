import React from 'react';
import MenuSection from './menu-section';
import StatusCard from './status-card';

function Menu({ baseState }) {

    if (baseState.menuRetrieved === false) {
        return <LoadingMenu />
    }

    else if (baseState.menu.Menu === undefined) {
        return <StatusCard status="NotPublishedYet" message={baseState.menu.message} />
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

export default Menu;