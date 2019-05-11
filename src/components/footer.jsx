import React from 'react'

const separator = ' — '


const Footer = ({ modalActive, onContactMe, onCloseContactMe }) =>
    <div className="footer text-subtle text-center text-subtle text-small">
        <span>Built with ❤ by </span>
        <a href="https://github.com/disklosr/noda-ui">Anas Mazioudi</a>
        <br />
        <a href="#" onClick={onContactMe}>Contact me</a>
        <span> {separator} </span>
        <a href="https://paypal.me/disklosr">Buy me a </a>
        <span role="img" aria-label="coffee">☕</span>
        <br />
        <span>Illustrations by </span>
        <a href="https://icons8.com/ouch">Ouch.pics</a>
    </div>

export default Footer;