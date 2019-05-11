import React from 'react'

const Notification = ({ message, status }) =>
    <div className={`toast toast-${status} animated fadeIn ` + (message === null ? "d-none" : "")}>
        {/* <button className="btn btn-clear float-right"></button> */}
        <span>{message}</span>
    </div>

export default Notification;