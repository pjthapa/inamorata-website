import { useState } from "react";
import { send } from "emailjs-com";
import "../styles/forms.css"

function ContactForm(){
    const[toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_61zh939',
          'template_b3ccyjp',
          toSend,
          'pPx66hx2iOb8m3oUJ'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Thank you for reaching out. We will get back to you soon!")
            
          })
          .catch((err) => {
            console.log('FAILED...', err);
            alert("Sorry, but it seems the contact form is down. Please contact us again!")
          });
      };   

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    

    return(
        <div className="contact form">
            <form onSubmit={onSubmit}>
                <div className="name">
                    <label for="from_name">Name: </label>
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your name"
                        value={toSend.from_name}
                        onChange={handleChange}
                        required />
                    <br />
                </div>
                <div className="phone_number">
                    <label for="to_name">Phone Number:</label>
                    <input
                        type='text'
                        name='to_name'
                        placeholder='Your Phone Number'
                        value={toSend.to_name}
                        onChange={handleChange}
                        required
                    />
                    <br />
                </div>
                <div className="email">
                    <label for="reply_to">Your email: </label>
                    <input
                        type='email'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                        required
                    />
                    <br />
                </div>
                <div className="message">
                    <label for="message">Message: </label>
                    <textarea rows="5" column="5"
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                        required
                    />
                    <br />
                </div>

                <button type="submt">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm