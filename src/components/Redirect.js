import React, { Component } from 'react';
import fire from '../config/fire';
import SignIn from './SignIn';
import App from './App';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
class Redirect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      name: null,
      imgUrl: null,
    };
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: true });
      } else {
        this.setState({ user: false });
      }
    })
  }
  componentDidMount() {
    const _onInit = auth2 => {
      console.log('init OK', auth2)
    }
    const _onError = err => {
      console.log('error', err)
    }
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        })
        .then(_onInit, _onError)
    })
  }
  signIn = () => {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signIn().then(googleUser => {
      const profile = googleUser.getBasicProfile()
      this.setState({
        name: profile.getName(),
        imgUrl: profile.getImageUrl(),
      })
    })
  }
  signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signOut().then(() => {
      this.setState({
        name: null,
        imgUrl: null,
      })
    })
  }
  render() {
    const { name, imgUrl } = this.state
    return (
      <div className="Redirect">
        {!!name && <p>Привет, {name}!</p>}
        {!!name && <img src={imgUrl} />}
        {!!name && <button onClick={this.signOut}>Log out</button>}
        { this.state.user || name ? (<App  googleUser={name}/>) : (<SignIn />)}

        <div>
          <br></br>
        </div>
        {!name &&
          <Container component="main" maxWidth="xs">
            <Button
              type={'submit'}
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.signIn}
            >
              Login Google
          </Button>
          </Container>
        }
      </div>
    );
  }
}

export default Redirect;