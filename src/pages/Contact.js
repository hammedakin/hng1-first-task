import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <main>

            <section className="">
                <div className="container">
                    <div className="col-md-8 mx-auto">
                    <div className="my-5">
                        <h1 className="fw-bolder my-3">
                            Contact Me
                        </h1>
                        <h5 className="form-label">
                            Hi there, contact me to ask me about anything you have in mind.
                        </h5>
                    </div>
                    <ContactForm />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default Contact;