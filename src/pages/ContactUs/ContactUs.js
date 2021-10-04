import { Button } from '@material-ui/core';
import { useState } from 'react';
import contat from '../../assets/contactus.svg';
import styles from './contactus.module.css';
import {useForm} from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactUs = () => {

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const emailAddress = "astrocredence7@gmail.com"

    // const firstNameHandle = e => {
    //     setFirstname(e.target.value);
        
    // }
    // const lastNameHandle = e => {
    //     setLastName(e.target.value);
    // }
    // const emailHandle = e => {
    //     setEmail(e.target.value);
    // }
    // const messageHandle = e => {
    //     setMessage(e.target.value);
    // }
    const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: styles.submit,
          toastId: 'notifyToast'
        });
      };
    

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();

      const onSubmit = async (data) => {
        const { fname, lname ,email, message } = data;
        
         window.open(
            `mailto:${emailAddress}?subject=Question&body=Name: ${fname} ${lname}|| Email: ${email}|| Message: ${message}`
        );

        toastifySuccess();
      };

    
    

    return (
        <div className="styles.contactUsBackground">
            <div className={styles.contactUsContainer}>
                <div className={styles.contactUsTitleHolder}>
                    <div className={styles.contactz}>
                        <p>Got a Questions? Contact Us</p>
                    
                        <p className={styles.titleContent}>We’re here to help and answer any question 
                        you might have. We look forward to hearing from you</p>
                    </div>
                </div>
               
                <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}noValidate>
                    <div className={styles.formStyle}>
                        <label for="exampleInputEmail1">First Name</label>
                        <input
                            type="text"
                            class="form-control"
                            {...register('fname', {
                                required: { value: true, message: 'Please enter your name' },
                                pattern: /^[a-zA-Z_]/,
                                maxLength: {
                                  value: 30,
                                  message: 'Please use 30 characters or less'
                                }
                              })}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"/>
                             {errors.fname && <span className={styles.errorMessage}>{errors.fname.message}</span>}
                            

                    </div>

                    <div className={styles.formStyle}>
                        <label for="exampleInputEmail1">Last Name</label>
                        <input
                            {...register('lname', {
                                required: { value: true, message: 'Please enter your name' },
                                pattern: /^[a-zA-Z_]/,
                                maxLength: {
                                  value: 30,
                                  message: 'Please use 30 characters or less'
                                }
                              })}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"/>
                            {errors.lname && <span className={styles.errorMessage}>{errors.lname.message}</span>}

                    </div>

                    <div className={styles.formStyle}>
                        <label for="exampleInputEmail1">Email</label>
                        <input
                             {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                              })}
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            
                            />
                            {errors.email && (
                      <span className={styles.errorMessage}>Please enter a valid email address</span>
                    )}

                    </div>

                    <div className={styles.formStyle}>
                        <label for="exampleInputEmail1">Message</label>
                        <textarea
                            {...register('message', {
                                required: true
                              })}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"/>

                    </div>
                    <ToastContainer  id="notifyToast"/>
                    {errors.message && <span className={styles.errorMessage}>Please enter a message</span>}
                    <Button className={styles.contactUsButton} type="submit"  >Send Message</Button>
                </form>
                
            </div>
        </div>
    )
}

export default ContactUs