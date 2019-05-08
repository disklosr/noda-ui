import React, { Component } from 'react';
import MenuSection from './menu-section';
import menuRepository from '../infra/menu-repository'

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuRetrieved: false,
            menu: null
        };
    }

    async getTodayMenu() {
        var menu = await menuRepository.getMenu();
        this.setState(state => ({ menuRetrieved: true, menu: menu }));
    };

    async componentDidMount() {
        await this.getTodayMenu();
    }

    render() {
        if (this.state.menuRetrieved === false) {
            return <LoadingMenu />
        }

        else if (this.state.menu.Menu === undefined) {
            return <EmptyMenu message={this.state.menu.message} />
        }
        else {
            return this.state.menu.Menu.map((section, index) =>
                <MenuSection menuSection={section} key={index} />
            )
        }
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