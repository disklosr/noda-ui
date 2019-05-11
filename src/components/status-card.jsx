import illustration1 from '../assets/fogg-come-back-later-2.png'
import illustration3 from '../assets/fogg-no-comments.png'
import illustration5 from '../assets/fogg-no-messages-3.png'

import React from 'react'

var notPublishedYet = [illustration1, illustration3, illustration5]

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const selectedIllustration = getRandomElement(notPublishedYet);

function StatusCard({ status, message }) {
    var illustration = null;

    switch (status) {
        case 'NotPublishedYet':
            illustration = selectedIllustration
            break;
    }

    return (
        <div className="card shadow">
            <div className="card-header">
                <div className="text-center">{message}</div>
            </div>
            <div className="card-body">
                <img className="img-responsive animated fadeIn fast" src={illustration} />
            </div>
        </div>
    )
}


export default StatusCard;