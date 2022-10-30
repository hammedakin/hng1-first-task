import React from 'react';
import zuri from '../assets/zuri.png'
import I4G from '../assets/I4G.png'


const Footer = () => {
    return (
        <footer className='pb-4 pt-5'>
            <div className="container-fluid text-center">
            <hr />
                <div className="row justify-content-between">
                    <div className="my-2 col-md-3">
                        <img src={zuri} alt="Zuri" className="" />
                    </div>
                    <div className="my-2 col-md-3">
                        <small>
                            HNG Internship 9 Frontend Task
                        </small>
                    </div>
                    <div className="my-2 col-md-3">
                        <img src={I4G} alt="I4G" className="" />

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;