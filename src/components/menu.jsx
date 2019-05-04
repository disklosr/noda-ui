import React from 'react'

function Menu({ menuSection }) {
    return (
        <div className="card shadow">
            <div className="card-header" >
                <div className="card-title h6"> <span>{getEmoji(menuSection.entryName)}</span> {menuSection.entryName}</div>
            </div>
            <div className="card-body">
                <dl>
                    {menuSection.entryItems.map((item, index) =>
                        <dd key={index}>{item}</dd>
                    )}
                </dl>
            </div>
        </div>
    )
}

const getEmoji = titleName => {
    var title = titleName.toLowerCase();
    if (title.includes('chef'))
        return '🍛';

    else return '🍖'
}

export default Menu;