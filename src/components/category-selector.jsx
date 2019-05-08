import React, { Component } from 'react'

class CategorySelector extends Component {
    constructor(props) {
        super(props);
        this.state = { category: 'noda' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ category: event.target.value });
    }

    async handleSubmit(event) {
        this.props.onRefresh(event.target.value);
        event.preventDefault();
    }

    render() {
        return (
            <div id="category-selector" className="btn-group btn-group-block">
                <button value="noda" onClick={this.handleSubmit} className={'btn ' + (this.props.category === 'noda' ? 'btn-primary' : '')}>Noda</button>
                <button value="32blanche" onClick={this.handleSubmit} className={'btn ' + (this.props.category === '32blanche' ? 'btn-primary' : '')}>32 Blanche</button>
                <button value="vsh" onClick={this.handleSubmit} className={'btn ' + (this.props.category === 'vsh' ? 'btn-primary' : '')}>La Ruche &amp; L'Abeille</button>
            </div>
        );
    }
}

export default CategorySelector;