import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux'
import { logIn } from '../redux/actions';
import fire from '../config/fire';
import App from './App';
class SignIn extends Component {

  state = {
    password: null,
    email: null,
  }
  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }
  render() {
    const useStyles = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));


    const validationsSchema = yup.object().shape({
      email: yup.string().email('Invalid email').required('Required field'),
      password: yup.string().typeError('Should be a string').required('Required field')
    })
    const classes = useStyles;
    return (
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        valideateOnBlur
        onSubmit={(values) => (
          this.setState({
            email: values.email,
            password: values.password
          }),
          console.log(this.state),
          this.handleButtonClick()
        )}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (

          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
        </Typography>

               <TextField
                variant="outlined"
                type={'text'}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name={'email'}
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                variant="outlined"
                type={'text'}
                margin="normal"
                required
                fullWidth
                name={'password'}
                label="Password"
                type="password"
                id="password"
                value={values.password}
                autoComplete="current-password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button
                type={'submit'}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.login}
              >
                Login
          </Button>
               <div>
                <br></br>
              </div>
              <Button
                type={'submit'}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.signUp}
              >
                Sign Up
          </Button>
            </div>
          </Container>
        )}
      </Formik>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    logInf: state.auth_reducer.logged
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login_bool: (log) => dispatch(logIn(log))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);