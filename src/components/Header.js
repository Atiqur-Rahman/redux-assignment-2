import React from 'react';

const Header = () => {
    return (
        <header id="header">
            <div class="container">
                <p className="font-extrabold text-xl text-white">
                    Find <br /> Yourself with Us
                </p>
                <div class="flex items-center">
                    <a class="text-white min-w-[50px] font-medium" href="#">
                        Home
                    </a>
                    <button class="log-btn btn">Login</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
