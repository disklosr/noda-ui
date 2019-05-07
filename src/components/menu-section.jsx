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

const titleToEmojiMap = {
    'chef': '👨‍🍳',
    'entrée': '🥗',
    'viande': '🥩',
    'workshop': '🍕',
    'dessert': '🍰',
    'garniture': '🥦',
    'soupe': '🥣',
    'pates': '🍝',
    'pâtes': '🍝',
    'default': '🍲'
}

const getEmoji = titleName => {

    var title = titleName.toLowerCase();
    for (var key of Object.keys(titleToEmojiMap)) {
        if (title.includes(key))
            return titleToEmojiMap[key];
    }

    return titleToEmojiMap['default']
}

export default Menu;