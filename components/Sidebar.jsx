import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router';
import { images } from '../constants'
import SidebarNav from '../configs/SidebarNav'

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useRouter()

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1]
        const activeItem = SidebarNav.findIndex(item => item.section === curPath)

        setActiveIndex(curPath.length === 0 ? 0 : activeItem)
    }, [location])

    const closeSidebar = () => {
        document.querySelector('.main__content').style.transform = 'scale(1) translateX(0)'
        setTimeout(() => {
            document.body.classList.remove('sidebar-open')
            document.querySelector('.main__content').style = ''
        }, 500);
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <Image src={images.logo} alt="" />
                <div className="sidebar-toggle" onClick={closeSidebar}>
                    <i className='bx bx-x'></i>
                </div>
            </div>
            <div className="sidebar__menu">
                {
                    SidebarNav.map((nav, index) => (
                        <Link href={nav.link} key={`nav-${index}`} className={`sidebar__menu__item ${activeIndex === index && 'active'}`} onClick={closeSidebar}>
                            <div className="sidebar__menu__item__icon">
                                {nav.icon}
                            </div>
                            <div className="sidebar__menu__item__txt">
                                {nav.text}
                            </div>
                        </Link>
                    ))
                }
                <div className="sidebar__menu__item">
                    <div className="sidebar__menu__item__icon">
                        <i className='bx bx-log-out'></i>
                    </div>
                    <div className="sidebar__menu__item__txt">
                        Deconnexion
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
