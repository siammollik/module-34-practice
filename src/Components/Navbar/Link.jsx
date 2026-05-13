import React from 'react';

const Link = ({route}) => {
    return (
        <li className='hover:bg-blue-600 p-2 rounded-xl mr-5 '>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;