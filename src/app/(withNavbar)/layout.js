import React from "react";
import Navbar from "./../components/navbar/Navbar";

const WithNavbarLayout = ({ children }) => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            {children}
        </div>
    );
};

export default WithNavbarLayout;
