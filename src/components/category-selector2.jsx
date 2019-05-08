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
        this.props.onRefresh(this.state.category);
        event.preventDefault();
    }

    render() {
        return (
            <div className="card shadow">
                <div className="card-body" >
                    <div className="input-group">
                        <select className="form-select select-lg" value={this.state.category} onChange={this.handleChange}>
                            <option>noda</option>
                            <option>32blanche</option>
                            <option>vsh</option>
                        </select>
                        <button onClick={this.handleSubmit} className="btn btn-primary input-group-btn btn-lg" >Refresh</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategorySelector;