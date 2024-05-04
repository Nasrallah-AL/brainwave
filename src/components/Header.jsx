import {brainwave} from "../assets/index.js";
import {navigation} from "../constants/index.js";
import {useLocation} from "react-router-dom";
import Button from "./Button.jsx";
import {HamburgerMenu} from "./design/Header.jsx";
import {useEffect, useRef, useState} from "react";
import MenuSvg from "../assets/svg/MenuSvg.jsx";
import {disablePageScroll , enablePageScroll } from "scroll-lock";

const Header = () => {
    const pathname = useLocation();
    const [openNav, setOpenNav] = useState(false);

    const handleOpenNavbar = () => {
        if(openNav){
            setOpenNav(false);
            enablePageScroll();
        }else {
            setOpenNav(true);
            disablePageScroll();
        }
    }
    const handleOnClick = () => {
        if(!openNav) return;
        enablePageScroll();
        setOpenNav(false);


    }

    return (
        <div className={`fixed top-0 left-0 w-full z-50  border-b 
        border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm 
        ${openNav ? 'bg-n-8 ' : 'bg-n-8/90 backdrop-blur-sm'}
        `}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img
                        src={brainwave}
                        alt="Brainwave logo"
                        width={190}
                        height={40}
                    />
                </a>
                <nav className={`
                fixed top-[5rem] left-0 right-0
                 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent bg-n-8  
                  ${openNav ? 'flex animate-fadeIn' : 'hidden' }
                 `}>
                    <div className="relative m-auto z-2 flex flex-col lg:flex-row items-center justify-center">
                        {navigation.map(link => (
                            <a  onClick={handleOnClick}
                                href={link.url}
                                key={link.id}
                                className={`block relative uppercase font-code text-2xl lg:text-xs lg:font-semibold
                                text-n-1 hover:text-color-1 transition-colors px-6 py-6 md:py-8 lg:-mr-0.25 xl:px-12
                                lg:hover:text-n-1 lg:leading-5 
                                ${link.onlyMobile && 'lg:hidden'} 
                                ${pathname.hash === link.url  ?  'z-2 lg:text-n-1' : 'lg:text-n-1/50' }
                                `}
                            >
                                {link.title}
                            </a>
                        ))}


                    </div>
                    <HamburgerMenu bgAnimation={openNav ? `animate-pulse duration-1000` : 'animate-none'} />
                </nav>

                <a href="#signup"
                    className="hidden lg:block button mr-8 text-n-1/50 hover:text-n-1 transition-colors">
                    New Account
                </a>

                <Button className="hidden lg:flex">
                    Sign In
                </Button>

                <Button className="ml-auto lg:hidden" px="px-3" onClick={handleOpenNavbar}>
                    <MenuSvg openNavigation={openNav}/>
                </Button>

            </div>
        </div>
    )
}

export default Header;