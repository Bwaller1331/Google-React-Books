
import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../Results/index.js";
import "./style.css";

class Saved extends Component {
    state ={
        savedBooks:[],
    }

    componentDidMount() {
        API.getSavedBooks()
        .then(savedBooks => this.setState({ savedBooks: savedBooks}))
        .catch(err => console.error(err))
        }

        render() {
            return(
                <div className="container container-fluid ">
                    <h3>Saved Books</h3>
                    <Results books={this.state.savedBooks} />
                </div>
            )
        }
}

export default Saved;
