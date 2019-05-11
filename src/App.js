import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Menu from './components/menu'
import CategorySelector from './components/category-selector'
import Footer from './components/footer'
import ContactForm from './components/contact-form'
import Notification from './components/notification'
import menuRepository from './infra/menu-repository'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuRetrieved: false,
      category: null,
      menu: null,
      modalActive: false,
      notification: null,
      notificationStatus: null
    };

    this.getTodayMenu = this.getTodayMenu.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.onContactMe = this.onContactMe.bind(this);
    this.onCloseContactMe = this.onCloseContactMe.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async getTodayMenu(category) {
    var getMenuPromise = menuRepository.getMenu(category);
    var waitPromise = sleep(500);

    var result = await Promise.all([getMenuPromise, waitPromise]);

    this.setState({ menuRetrieved: true, menu: result[0], category: category });
  };

  async componentDidMount() {
    await this.getTodayMenu('noda');
  }

  async onRefresh(category) {
    this.setState({ menuRetrieved: false, category: category, menu: null });
    await this.getTodayMenu(category);
  }

  onContactMe() {
    this.setState({ modalActive: true })
  }

  onCloseContactMe() {
    this.setState({ modalActive: false })
  }

  async onSubmit(formData) {
    var result = await menuRepository.submitForm(formData);

    if (result) {
      this.setState({ modalActive: false, notification: "Your message have been sent.", notificationStatus: "success" })
    }

    else {
      this.setState({ modalActive: false, notification: "An error occured while sending the message, please try again.", notificationStatus: "error" })
    }

    await sleep(8000);
    this.setState({ notification: null, notificationStatus: null });
  }



  render() {
    return (
      <div className="container grid-md">
        <Navbar />
        <div className="columns">
          <div className="col-12">
            <Notification message={this.state.notification} status={this.state.notificationStatus} />
            <CategorySelector onRefresh={this.onRefresh} category={this.state.category} />
            <Menu baseState={this.state} />
            <ContactForm modalActive={this.state.modalActive} onCloseContactMe={this.onCloseContactMe} onSubmit={this.onSubmit} />
            <Footer onContactMe={this.onContactMe} />
          </div>
        </div>
      </div>
    );
  }
}

const sleep = function (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default App;
