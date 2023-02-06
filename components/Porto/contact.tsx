import Link from 'next/link';
import React, {useState} from 'react';
import styles from './contact.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement logic to send the form data to your email here
    if (!formData.email.endsWith('@gmail.com')) {
      setShowModal(true);
      return;
    }
    fetch('http://localhost:8000/email', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to submit form');
        } else {
          console.log('send email success');
          console.log(formData);
        }
      })
      .catch((error) => {
        console.error(error);
        alert('failed to submit email, try again later');
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className={styles.contact}>
      <h1>Contact me</h1>
      <div className={styles.container}>
        <div className={styles.social}>
          <h2>Get in touch</h2>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href={'/'}>
                <div className={styles.div}>
                  <span className={styles.svg}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512">
                      <title>Logo Facebook</title>
                      <path
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className={styles.media}>Facebook</span>
                </div>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href={'/'}>
                <div role="button" className={styles.div}>
                  <span className={styles.svg}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512">
                      <title>Logo Linkedin</title>
                      <path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                    </svg>
                  </span>
                  <span className={styles.media}> Linkedin</span>
                </div>
              </Link>
            </li>
            <li className={styles.li}>
              <Link href={'/'}>
                <div className={styles.div}>
                  <span className={styles.svg}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512">
                      <title>Logo Instagram</title>
                      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                    </svg>
                  </span>
                  <span className={styles.media}>Instagram</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {showModal && (
            <div className={styles.modal}>
              <div className={styles.modal_content}>
                <h3>Email address must end with &quot;@gmail.com&quot;.</h3>
                <button className={styles.button} type="button" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          )}
          <h2>Email me</h2>
          <div>
            <label className={styles.label} htmlFor="name">
              Name:
            </label>
            <input
              placeholder="Full Name"
              className={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.email}>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              className={styles.input}
              placeholder="Email"
              required
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="message">
              Message:
            </label>
            <textarea
              required
              placeholder="Message"
              className={styles.textarea}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleTextAreaChange}
            />
          </div>
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
