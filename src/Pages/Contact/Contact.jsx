import "./Contact.scss";
import TextAnimate from "../../Components/TextAnimate/TextAnimate";
import TextZone from "../../Components/TextZone/TextZone";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import HeaderPrimary from "../../Components/HeaderPrimary/HeaderPrimary";
import Container from "../../Components/Container/Container";

const Contact = () => {
  const [processing, setProcessing] = useState(false);
  const formRef = useRef();
  const text =
    "Contact me to resolve any queries you have and we can get started with your project right away.";

  const handleClick = (e) => {
    e.preventDefault();
    setProcessing(true);
    emailjs
      .sendForm(
        "service_eiboynh",
        "template_lzygkxe",
        formRef.current,
        "ZFdpndrA2VyADKPkr"
      )
      .then(
        (result) => {
          setProcessing(false);
          // console.log(result.text);
          alert("Message Delivered");
        },
        (error) => {
          setProcessing(false);
          // console.log(error.text);
          alert("Could not deliver message.");
        }
      );
  };
  return (
    <Container>
      <div className="contact">
        {/* <TextAnimate text={"Say hi"} /> */}
        <HeaderPrimary text={"Say hi"} />
        <TextZone text={text} />
        <form className="contactForm" ref={formRef} onSubmit={handleClick}>
          <div className="formTop">
            <input type="text" required placeholder="Name" name="user_name" />
            <input
              type="email"
              required
              placeholder="Email Address"
              name="user_email"
            />
          </div>
          <input
            type="text"
            required
            placeholder="Subject"
            name="user_subject"
          />
          <textarea
            id=""
            cols="30"
            rows="10"
            required
            placeholder="Message"
            name="message"
          ></textarea>
          <PrimaryButton text={processing ? "Processing..." : "Send Message"} />
        </form>
      </div>
    </Container>
  );
};

export default Contact;
