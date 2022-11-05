import React from 'react';
import slack from '../assets/slack.png'
import git from '../assets/git.png'
import { Link } from 'react-router-dom';


const Links = () => {
    const links = [
        {
            id: "btn__zuri",
            url: "https://training.zuri.team/",
            name: "Twitter Link"
        },
        {
            id: "teams",
            url: "http://zuri.team",
            name: "Zuri Team"
        },
        {
            id: "books",
            url: "http://books.zuri.team",
            name: "Zuri Books"
        },
        {
            id: "book__python",
            url: "https://books.zuri.team/python-for-beginners?ref_id=hammedakin",
            name: "Python Books"
        },
        {
            id: "pitch",
            url: "https://background.zuri.team",
            name: "Background Check for Coders"
        },
        {
            id: "book__design",
            url: "https://books.zuri.team/design-rules",
            name: "Design Books"
        },
    ]
    return (
        <main>
            <section>
                <div className="container">
                    {links.map(({ url, name, id }, i) =>
                        <div className="links fw-bold" key={i}>
                            <a type='button'
                                href={url}
                                target="_blank" rel="noopener noreferrer"
                                className='text-dark w-100'
                                id={id}
                            >
                                {name}
                            </a>
                        </div>
                    )}
                    <div className="links fw-bold">
                        <Link type='button'
                            to="/contact"
                            className='text-dark w-100'
                            id="contact"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="container text-center pb-4 pt-3">
                    <img src={slack} alt="slack" id='profile__img' className='mx-2' />
                    <a href="http://github.com/hammedakin" target="_blank" rel="noopener noreferrer">
                        <img src={git} alt="git" id='profile__img' className='mx-2' />
                    </a>

                </div>
            </section>
        </main>
    );
}

export default Links;