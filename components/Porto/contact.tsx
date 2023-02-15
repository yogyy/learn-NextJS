// import Link from 'next/link';
import React, {useState} from 'react';
import {Accent1} from '../links/Accent';
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
    <div className="layout">
      <h1>
        <Accent1>Contact me</Accent1>
      </h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {showModal && (
            <div>
              <div className="absolute flex flex-col bg-white dark:bg-gray-900 h-full text-center justify-center gap-6 w-full -left-1">
                <h3>Email address must end with &quot;@gmail.com&quot;.</h3>
                <button
                  className="text-red-500 dark:text-red-800 font-bold"
                  type="button"
                  onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          )}
          <div className="w-11/12">
            <label className={styles.label} htmlFor="name">
              Name:
            </label>
            <input
              placeholder="Full Name"
              className={`w-full p-2 mb-4 bg-gray-300 placeholder:text-sky-500 text-black ${styles.input}`}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-11/12">
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              className={`w-full p-2 mb-4 bg-gray-300 placeholder:text-sky-500 text-black  ${styles.input}`}
              placeholder="Email"
              required
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-11/12">
            <label className={styles.label} htmlFor="message">
              Message:
            </label>
            <textarea
              required
              placeholder="Message"
              className={`w-full p-2 mb-4 bg-gray-300 placeholder:text-sky-500 text-black ${styles.textarea}`}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleTextAreaChange}
            />
          </div>
          <button
            className="w-11/12 bg-gray-900 text-sky-500 border-lime-100 dark:text-sky-800 font-semibold dark:bg-white border-none p-2 rounded-md "
            type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
