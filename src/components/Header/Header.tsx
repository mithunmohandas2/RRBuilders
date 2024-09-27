import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { menuList } from "../../assets/menuList";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const mainMenuRef = useRef<any>(null);
    const [selectedMenu, setSelectedMenu] = useState<null | string>(null);

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
            <div className="px-[16px] md:px-8 pt-4 2xl:px-16 z-50 text-golden md:border-b border-gray-500 hover:bg-black/70 sm:h-[160px]">
                <div className="flex justify-between items-center">

                    <div className="md:flex">
                        <div className={`flex items-center text-2xl font-semibold gap-3`}>
                            <Link to={"/admission"}> <img className="w-10 sm:w-20 cursor-pointer zoomEffect mb-4" src="/images/logo.png" alt="RR Builders Logo" /> </Link>
                        </div>

                        {/*============ Large display Header ===============*/}
                        <div className="ms-5 lg:ms-14 items-center hidden md:flex md:gap-5 xl:gap-16 mt-2 text-xs lg:text-sm xl:text-md 2xl:text-lg">
                            {menuList.map((item, index) => (
                                item?.link ?
                                    <div key={index} className="h-full flex items-center lineEffect cursor-pointer hover:text-goldenLight px-2"
                                        onMouseEnter={() => setSelectedMenu(item?.name)}>
                                        <Link to={item.link} className="font-semibold zoomEffect">{item?.name}</Link>
                                    </div>
                                    :
                                    <div key={index} className="h-full flex items-center cursor-pointer hover:text-goldenLight lineEffect px-2"
                                        onMouseEnter={() => setSelectedMenu(item?.name)}>
                                        <div className="font-semibold zoomEffect"> {item?.name} </div>
                                    </div>
                            ))}
                        </div>
                    </div>

                    <div className="items-center hidden md:flex md:gap-5 xl:gap-16 mt-2 text-xs lg:text-sm xl:text-md 2xl:text-lg">
                        <button className="px-8 rounded-3xl py-2 bg-golden hover:bg-goldenLight text-black zoomEffect">GET IN TOUCH</button>
                    </div>

                    {selectedMenu && <>
                        {
                            menuList.filter((item) => item?.name === selectedMenu).map((item, index) => (
                                item?.subMenu &&
                                item.subMenu.map(subMenuItem => (
                                    <div className="absolute w-full top-[160px] start-0 bg-black/70" onMouseLeave={() => setSelectedMenu(null)}>
                                        <div key={index} className="font-semibold cursor-pointer hover:text-goldenLight p-3">
                                            <button>{subMenuItem?.name}</button>
                                        </div>
                                    </div>
                                ))
                            ))
                        }
                    </>}


                    {/*============= Mobile Header ===================*/}

                    {/* Hamburger Menu button */}
                    <div className={`md:hidden z-50`}>
                        <button className="cursor-pointer" onClick={toggleMainMenu}>
                            <span className="text-4xl pb-3">&#9776;</span>
                        </button>
                    </div>

                    {isOpen && (
                        <div ref={mainMenuRef}
                            className="md:hidden z-50 absolute top-0 left-0 w-full bg-black p-8 h-[100vh]">
                            <div className="relative flex flex-col  mx-4 my-4 gap-6 py-5">

                                <div className="flex items-center justify-end px-4 w-full ">
                                    <span className="material-symbols-outlined cursor-pointer" onClick={toggleMainMenu}> close </span>
                                </div>
                                {menuList.map((item, index) => (
                                    item?.link ? <Link key={index} to={item.link} className="text-xl font-semibold">{item?.name}</Link> :
                                        <div key={index} className="text-xl font-semibold"> {item?.name} </div>
                                ))}

                            </div>
                        </div>
                    )}

                </div>
            </div>

        </>
    );
};

export default Header;
