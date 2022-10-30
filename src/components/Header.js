import React from 'react';
import user from '../assets/user.png'
import back from '../assets/back.png'

const Header = () => {
    return (
        <header className='text-center my-5'>
            <div className="container">
                {/* <div className="d-flex"> */}
                    <div className="">
                        <img src={user} alt="User" id='profile__img' />
                        <h5 className="fw-bold mt-3">
                            Hammed Akinyemi
                        </h5>
                        <p className="m-0 d-none" id='slack' >
                            <i className='bi bi-slack me-2' />
                            hammedakin
                        </p>
                        <p className="m-0" id='twitter'>
                            <a href="http://twitter.com/hammedakin_" target="_blank" rel="noopener noreferrer">
                                <i className='bi bi-twitter me-2' />
                                hammedakin_
                            </a>
                        </p>
                    </div>
                    <div className="back-icon">
                        <img src={back} alt="User" id='profile__img' />
                    </div>
                </div>
            {/* </div> */}

        </header>
    );
}

export default Header;