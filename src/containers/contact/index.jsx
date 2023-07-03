import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsMessenger, BsMailbox } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_60sqpns', 'template_pzcjs8z', form.current, '19xCsAI1Z7K3HdPdP')
      .then((result) => {
        console.log(result.text);
        toast.success('hi, Laraib this side \n Thanks for contacting me');
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('ops!! Failed to send message');
      });

    form.current.reset();
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsMailbox size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        
        <form ref={form} onSubmit={sendEmail}>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(200px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="contact__content__form">
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input type="text" name="name" className="inputName" required />
                  <label htmlFor="name" className="nameLabel">Name</label>
                </div>
                <div>
                  <input type="text" name="email" className="inputEmail" required />
                  <label htmlFor="email" className="emailLabel">Email</label>
                </div>
                <div>
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    type="text"
                    rows="5"
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Message
                  </label>
                </div>
              </div>
              <button type="submit">Send <BsMessenger size={20} /></button>
            </div>
          </Animate>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
