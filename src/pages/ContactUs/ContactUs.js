import { useState, memo } from "react";
import styles from "./contactus.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Box from "@material-ui/core/Box";

const INITIAL_STATE = {
  fName: "",
  lName: "",
  email: "",
  message: "",
  emailAddress: "astrocredence7@gmail.com",
};

const ContactUs = () => {
  const [firstName, setFirstname] = useState(INITIAL_STATE.fName);
  const [lastName, setLastName] = useState(INITIAL_STATE.lname);
  const [email, setEmail] = useState(INITIAL_STATE.email);
  const [message, setMessage] = useState(INITIAL_STATE.message);

  // Error states
  const [isFNameError, setFNameError] = useState(false);
  const [isEmailError, setEmailError] = useState(false);
  const [isMessageError, setMessageError] = useState(false);

  const handleFirstName = (evt) => {
    setFirstname(evt.target.value);
    setFNameError(false);
  };

  const handleLastName = (evt) => {
    setLastName(evt.target.value);
  };

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
    setEmailError(false);
  };

  const handleMessage = (evt) => {
    setMessage(evt.target.value);
    setMessageError(false);
  };

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: styles.submit,
      toastId: "notifyToast",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isError = false;

    if (!firstName) {
      setFNameError(true);
      isError = true;
    }
    if (!email) {
      setEmailError(true);
      isError = true;
    }
    if (!message) {
      setMessageError(true);
      isError = true;
    }

    if ( isError ) {
      return;
    } else {
      window.open(
        `mailto:${INITIAL_STATE.emailAddress}?subject=Question&body=Name: ${firstName} ${lastName}|| Email: ${email}|| Message: ${message}`
      );
  
      toastifySuccess();
    }
  };

  return (
    <Container maxWidth="lg" className={styles.contact}>
      <section className={styles.contactHeading}>
        <h3>Got a question?</h3>

        <p>Fill the form and we'll get in touch with you at the earliest.</p>
        <small>
          <em>- Astrocredence</em>
        </small>
      </section>

      <section className={styles.contactForm}>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="input-fName"
            label="First Name"
            placeholder="E.g. John"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={firstName}
            variant="outlined"
            required
            onChange={handleFirstName}
            error={isFNameError}
            helperText="Name is required"
          />

          <TextField
            id="input-lName"
            label="Last Name"
            placeholder="E.g. Doe"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={lastName}
            variant="outlined"
            onChange={handleLastName}
          />

          <TextField
            id="input-email"
            label="Email Address"
            placeholder="E.g. john.doe@example.com"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={email}
            variant="outlined"
            required
            onChange={handleEmail}
            error={isEmailError}
            helperText="Email is required"
          />

          <TextField
            id="input-message"
            label="Message"
            fullWidth
            placeholder="Enter your message here"
            multiline
            margin="normal"
            maxRows={4}
            value={message}
            variant="outlined"
            required
            onChange={handleMessage}
            error={isMessageError}
            helperText="Message is required"
          />

          <ToastContainer id="notifyToast" />

          <Box textAlign="right">
            <Button type="submit" variant="contained" color="primary">
              Send &nbsp;
              <SendIcon />
            </Button>
          </Box>
        </form>
      </section>
    </Container>
  );
};

export default memo(ContactUs);
