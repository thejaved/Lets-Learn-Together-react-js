import React from 'react';
import './Contact.css';
import Pages_Elements from '../components/Pages_Elements/Pages_Elements';
import Buttons from '../components/Buttons/Buttons';
const Contact = () => {
    return (
        <div className='contact_page'>
            <Pages_Elements page_title={'Contact Us'} page_content={`If you have any queries regarding Site, Advertisement, and any other issue, please feel free to contact me.`}/>
            <div className="contact_inner_container">
                <div className="top_contact_container">
                    <h2>Contact US</h2>
                    <hr />
                    <div className="contact_details">
                        <div className="address">
                            <span>
                                <i className='bx bxs-plane-take-off'></i>
                            </span>
                            <div className="inner_details">
                                <h3>Address</h3>
                                <p>C-4 New Light Colony.</p>
                            </div>
                        </div>
                        <div className="phone_number">
                            <span>
                                <i className='bx bx-phone' ></i>
                            </span>
                            <div className="inner_details">
                                <h3>Phone</h3>
                                <p><a href="tel:">+91 7428617161</a></p>
                            </div>
                        </div>
                        <div className="Emali_ID">
                            <span>
                                <i className='bx bxl-gmail' ></i>
                            </span>
                            <div className="inner_details">
                                <h3>Email</h3>
                                <p><a href="mailto:">javedkhanmailid@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className="bottom_contact_container">
                        <p>If you have any query regarding Site, Advertisement, and any other issue, please feel free to contact.</p>
                        <hr />
                        <form action='GET'>
                        <div className="contact_name_content">
                            <label htmlFor="name">Name</label>
                            <input type="text" required/>
                        </div>
                        <div className="contact_Email_content">
                            <label htmlFor="email">Email</label>
                            <input type="email" required/>
                        </div>
                        <div className="contact_messages_content">
                            <label htmlFor="Messages">Messages</label>
                            <input type="text" required/>
                        </div>
                        <Buttons type='submit' title='Send'/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;
