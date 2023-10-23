import styles from "../ContactUs/Contact.module.css";
import service from "../../assets/Service.png";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="VIA SUPPORT CHAT"
              icon={<MdOutlineMessage fontSize={20} />}
            />
            <Button text="VIA CALL" icon={<FaPhoneAlt fontSize={20} />} />
          </div>

          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize={20} />}
          />

          <form>
            <div className={styles.form_div}>
              <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>

              <div className={styles.form_control}>
                <label htmlFor="name">Email</label>
                <input type="email" name="email" />
              </div>

              <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name="text" id="" cols="30" rows="5"></textarea>
              </div>
            </div>
          </form>

          <div className={styles.random_btn}>
            <Button text="SUBMIT" fontSize={20} />
          </div>
        </div>

        <div className={styles.contact_Image}>
          <img src={service} alt="service" />
        </div>
      </section>
    </>
  );
};

export default Contact;
