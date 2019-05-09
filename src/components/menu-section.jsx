import React from 'react'

function Menu({ menuSection, index }) {
    return (
        <div className="card shadow animated fadeInUp" style={{ animationDuration: '500ms', animationDelay: `${index * 50}ms` }}>
            <div className="card-header" >
                <div className="card-title h6">
                    <span>{getEmoji(menuSection.entryName)}</span> {menuSection.entryName}
                </div>
            </div>
            <div className="card-body menu-card-body">
                <dl>
                    {menuSection.entryItems.map((item, index) =>
                        <dd key={index}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`//google.com/search?tbm=isch&q=${item}`}
                                className="btn btn-list-item btn-block text-left">{item}
                            </a>
                        </dd>
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