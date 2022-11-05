import React from 'react';
import { useState } from 'react';

const ContactForm = () => {

    const [fnameVal, setfnameVal] = useState(false);
    const [lnameVal, setlnameVal] = useState(false);
    const [emailVal, setemailVal] = useState(false);
    const [emailformat, setemailformat] = useState(false);
    const [messageVal, setmessageVal] = useState(false);
    const [checkVal, setcheckVal] = useState(false);

    const [formValue, setFormValue] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
    });
    const [check_field, setcheck_field] = useState(false);

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const onChange = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
        if (formValue.first_name) {
            setfnameVal(false)
        }
        if (formValue.last_name) {
            setlnameVal(false)
        }
        if (formValue.email) {
            setemailVal(false)
        }
        if (formValue.email.match(mailformat)) {
            setemailformat(false)
        }
        if (formValue.message) {
            setmessageVal(false)
        }
        if (check_field) {
            setcheckVal(false)
        } else {
            setcheckVal(true)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formValue.first_name) {
            setfnameVal(true)
        }
        if (!formValue.last_name) {
            setlnameVal(true)
        }
        if (!formValue.email) {
            setemailVal(true)
        }
        if (!formValue.email.match(mailformat)) {
            setemailformat(true)
        }
        if (!formValue.message) {
            setmessageVal(true)
        }
        if (!check_field) {
            setcheckVal(true)
        } else {
            setcheckVal(false)
        }
    }
    console.log(emailformat);
    // console.log(check_field);

    return (
        <>
            <section className="contact mb-5 pb-5">
                <form >
                    <div className="row">
                        <div class="mb-3 col-md-6">
                            <label class="form-label text-dark" for="first_name">First name</label>
                            <input type="text" id="first_name" class={`form-control ${fnameVal && 'invalid-field'}`}
                                placeholder='Enter your first name'
                                name="first_name"
                                required
                                onChange={(e)=>onChange(e)}
                                value={formValue.first_name}
                            />
                            {fnameVal &&
                                <div class="invalid-text">Please enter first name </div>
                            }
                        </div>

                        <div class="mb-3 col-md-6">
                            <label class="form-label text-dark" for="last_name">Last name</label>
                            <input type="text" id="last_name" class={`form-control ${lnameVal && 'invalid-field'}`}
                                placeholder='Enter your last name'
                                name="last_name"
                                required
                                onChange={(e)=>onChange(e)}
                                value={formValue.last_name}
                            />
                            {lnameVal &&
                                <div class="invalid-text">Please enter a last name </div>
                            }
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label text-dark" for="email">Email</label>
                        <input type="email" id="email" class={`form-control ${(emailVal || emailformat) && 'invalid-field'}`}
                            placeholder='yourname@email.com'
                            name="email"
                            required
                            onChange={(e)=>onChange(e)}
                            value={formValue.email}
                        />
                        {emailVal &&
                            <div class="invalid-text">Please enter email </div>
                        }
                        {emailformat &&
                            <div class="invalid-text">Please enter valid email </div>
                        }
                    </div>

                    <div class="mb-3">
                        <label class="form-label text-dark" for="message">Message</label>
                        <textarea class={`form-control ${messageVal && 'invalid-field'} `}
                            placeholder='Send me a message and I`ll reply you as soon as possible... '
                            name="message"
                            required
                            onChange={(e)=>onChange(e)}
                            value={formValue.message}
                            id="message" rows="4"></textarea>
                        {messageVal &&
                            <div class="invalid-text">Please enter a message </div>
                        }
                    </div>

                    <div class="form-check row mb-4">
                        <div className="col d-flex">
                            <input class={`form-check-input me-2 ${checkVal && 'invalid-field'}`} type="checkbox" id="check"
                                name="check_field"
                                required
                                onChange={() => setcheck_field(!check_field)}
                                value={check_field}
                            // checked={check_field ? true : false}
                            />
                            <label class="form-check-label" for="check">
                                You agree to providing your data to Hammed who may contact you.
                            </label>
                        </div>
                        {checkVal &&
                            <div class="invalid-text">Please accept the terms and condition </div>
                        }
                    </div>

                    <button type="submit"
                        id='btn__submit'
                        class="btn btn-primary text-capitalize rounded-5 shadow-none py-3 btn-block mb-4"
                        onClick={(e) => handleSubmit(e)}
                    >Send message</button>
                </form>
            </section>
        </>
    );
}

export default ContactForm;