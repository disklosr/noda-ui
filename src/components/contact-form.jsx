import React from 'react'

const defaultState = {
    subject: '',
    email: '',
    emailValid: true,
    name: '',
    message: ''
};

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = defaultState;

        this.onCloseContactMe = this.onCloseContactMe.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onSubjectChange = this.onSubjectChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
    }

    async onSubmit() {
        await this.props.onSubmit(this.state);
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value, emailValid: event.target.validity.valid });
    }

    onSubjectChange(event) {
        this.setState({ subject: event.target.value });
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value });
    }

    onCloseContactMe() {
        this.setState(defaultState);
        this.props.onCloseContactMe();
    }

    render() {
        return (
            <div className={"modal modal-lg " + (this.props.modalActive === true ? ' active' : '')}>
                <a className="modal-overlay" aria-label="Close"></a>
                <div className="modal-container">
                    <div className="modal-header">
                        <button className="btn btn-clear float-right" onClick={this.onCloseContactMe} aria-label="Close"></button>
                        <div className="modal-title h5">Contact form</div>
                    </div>
                    <div className="modal-body">
                        <div className="content">
                            <div className="form-group">
                                <label className="form-label" htmlFor="name-input">Name</label>
                                <input id="name-input" className="form-input" placeholder="Your name" className="form-input" onChange={this.onNameChange} />

                                <label className="form-label" htmlFor="email-input">Email</label>
                                <input id="email-input" className="form-input" type="email" placeholder="Your email for contact" onChange={this.onEmailChange} />

                                <label className="form-label" htmlFor="email-input">Subject</label>
                                <input id="email-input" className="form-input" placeholder="What's this about?" onChange={this.onSubjectChange} />

                                <label className="form-label" htmlFor="input-example-3">Message*</label>
                                <textarea onChange={this.onMessageChange} className="form-input" id="input-example-3" placeholder="Type your message here" value={this.state.message} rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className={"btn btn-primary " + (this.state.message === '' || !this.state.emailValid ? "disabled" : "")} onClick={this.onSubmit}>Send message</button>
                        <span> </span>
                        <button className="btn" onClick={this.onCloseContactMe}>Dismiss</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm