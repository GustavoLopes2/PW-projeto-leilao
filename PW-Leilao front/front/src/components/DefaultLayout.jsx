import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const DefaultLayout = ({ children, onProfileClick, onLogoutClick }) => {
    return (
        <>
            <Header onProfileClick={onProfileClick} onLogoutClick={onLogoutClick} />
            {children}
            <Footer />
        </>
    );
}

export default DefaultLayout;
