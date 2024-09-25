import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { menuList } from "../../assets/menuList";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const mainMenuRef = useRef<any>(null);

    const toggleMainMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = (e: { target: any; }) => {
        if (mainMenuRef.current && !mainMenuRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", closeMenu);
        return () => {
            document.removeEventListener("mousedown", closeMenu);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <div className="px-[16px] md:px-8 py-4 2xl:px-16 z-50">
                <div className="flex justify-between items-center">

                    <div className={`flex items-center text-2xl font-semibold gap-3`}>
                        <Link to={"/admission"}> <img className="w-20 cursor-pointer zoomEffect" src="/images/logo.png" alt="Lord's Academy Logo" /> </Link>
                    </div>

                    {/* Mobile Mode */}
                    <div className={`md:hidden z-50`}>
                        <button className="cursor-pointer" onClick={toggleMainMenu}>
                            <span className="text-4xl pb-3">&#9776;</span>
                        </button>
                    </div>

                    {/* Mobile Header */}
                    {isOpen && (
                        <div ref={mainMenuRef}
                            className="md:hidden z-50 absolute top-0 left-0 w-full bg-white p-8 h-[100vh]">
                            <div className="relative flex flex-col  mx-4 my-4 gap-6 py-5">

                                <div className="flex items-center justify-end px-4 w-full ">
                                    <span className="material-symbols-outlined cursor-pointer" onClick={toggleMainMenu}> close </span>
                                </div>
                                {menuList.map((item, index) => (
                                    item?.link ? <Link key={index} to={item.link} className="text-xl font-semibold">{item?.name}</Link> :
                                        <div className="text-xl font-semibold"> {item?.name} </div>
                                ))}

                            </div>
                        </div>
                    )}

                    {/* Large display Header */}
                    <div className="items-center hidden md:flex md:gap-5 mt-2 text-xs lg:text-sm xl:text-md 2xl:text-lg">
                        {menuList.map((item, index) => (
                            item?.link ? <Link key={index} to={item.link} className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect">{item?.name}</Link> :
                                <div className="font-semibold cursor-pointer hover:text-blue-700 zoomEffect"> {item?.name} </div>
                        ))}
                    </div>

                </div>
            </div>

        </>
    );
};

export default Header;
