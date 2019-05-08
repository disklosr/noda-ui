import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Menu from './components/menu'
import CategorySelector from './components/category-selector'
import Footer from './components/footer'
import menuRepository from './infra/menu-repository'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuRetrieved: false,
      category: null,
      menu: null
    };

    this.getTodayMenu = this.getTodayMenu.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  async getTodayMenu(category) {
    var menu = await menuRepository.getMenu(category);
    this.setState(state => ({ menuRetrieved: true, menu: menu, category: category }));
  };

  async componentDidMount() {
    await this.getTodayMenu('noda');
  }

  async onRefresh(category) {
    this.setState(state => ({ menuRetrieved: false, category: category, menu: null }));
    await this.getTodayMenu(category);
  }

  render() {
    return (
      <div className="container grid-md">
        <Navbar />
        <div className="columns">
          <div className="col-12">
            <CategorySelector onRefresh={this.onRefresh} category={this.state.category} />
            <Menu baseState={this.state} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
