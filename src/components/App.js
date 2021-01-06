import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';
import { connect } from 'react-redux';
import { delete_user } from '../redux/actions/index';
import fire from '../config/fire';


class App extends Component {
    state = {
        characters: this.props.data
    };
    handleSubmit = character => {
        this.setState({ characters: [...this.props.data, character] });
    }
    handleSubmit2 = data => {
        this.setState({ characters: this.props.data });
    }
    logout() {
        fire.auth().signOut();
    }


    render() {
        const { characters } = this.state;
        return (
            <div className="container">
                <h1>Add user</h1>
                <Form handleSubmit={this.handleSubmit} />
                <br></br>
                <Table
                    handleSubmit={this.handleSubmit2}
                    characterData={characters}
                    removeCharacter={this.props.removeCharacter}
                />
                <div style={{ textAlign: 'center' }}>
                {!this.props.googleUser &&<button onClick={this.logout}>Logout</button>}                 
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.tab_reducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeCharacter: (id) => dispatch(delete_user(id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
