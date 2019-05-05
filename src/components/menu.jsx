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
        console.log(menu)
        this.setState(state => ({ menuRetrieved: true, menu: menu }));
    };

    async componentDidMount() {
        await this.getTodayMenu();
    }

    render() {
        console.log(this.state)
        if (this.state.menuRetrieved === false) {
            return <EmptyMenu />
        }

        else if (this.state.menu.Menu == undefined) {
            return <EmptyMenu message={this.state.menu.message} />
        }
        else {
            return this.state.menu.Menu.map(section => <MenuSection menuSection={section} />)
        }
    }
}

const EmptyMenu = ({ message }) =>
    <div className="card shadow">
        <div className="card-body">
            {message || "No menu to display"}
        </div>
    </div>;

export default Menu;