// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { House, List, RocketLaunch, SignOut, Target, User } from "phosphor-react";
import userSlice from "../../store/userStore";


const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const logout = userSlice(state => state.logout)
    const menuItem = [
        {
            path: "/dashboard",
            name: "Home",
            icon: <House />,
        },
        {
            path: "/dashboard",
            name: "Savings",
            icon: <Target />,
        },
        {
            path: "/dashboard",
            name: "Invest",
            icon: <RocketLaunch />,
        },
        {
            path: "/dashboard",
            name: "Account",
            icon: <User />,
        },
    ];
    return (
        <div style={{ width: isOpen ? "18%" : "5%" }} className="bg-blueBg h-full w-[15%] flex flex-col items-center justify-between gap-4 fixed py-4">
            <div className="flex items-center gap-4 ">
                <div style={{ marginLeft: isOpen ? "0px" : "0px" }} className="bars svg-1">
                    <List onClick={toggle} />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="flex items-center justify-center gap-4 "

                    >
                        <div className="icon svg-1 hover:scale-110">{item.icon}</div>
                        <h3 style={{ display: isOpen ? "block" : "none" }} className="link_text">
                            {item.name}
                        </h3>
                    </NavLink>
                ))}
            </div>
            <div className="logout flex items-center justify-center svg-1" onClick={() => logout()}>
                <SignOut size={24} />
            </div>
        </div>

    );
};

export default SideBar;
