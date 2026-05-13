import React from 'react';
import Link from './Link';
const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];
const Navbar = () => {
    return (
        <nav>

            <ul className='flex justify-center'>
                {
                    navLinks.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>


            {/* <ul className='flex'>
                {
                    navLinks.map(route => <li className='hover:bg-blue-600 p-2 rounded-xl mr-5 '>
                        <a href="{route.path}">{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className='flex gap-5 justify-center'>
                <li className='hover:bg-blue-600 p-2 rounded-xl mr-5 '><a href="./">Home</a></li>
                <li className='hover:bg-blue-600 p-2 rounded-xl mr-5'><a href="./">About</a></li>
                <li className='hover:bg-blue-600 p-2 rounded-xl mr-5'><a href="./">Blog</a></li>
            </ul> */}



        </nav>
    );
};

export default Navbar;