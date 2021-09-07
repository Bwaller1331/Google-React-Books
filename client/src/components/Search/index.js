import React from 'react';
import Form from '../Form';
import Results from '../Results';
import API from '../../utils/API';
import { Component } from 'react';


class Search extends Component {
    state = {
        value:"",
        books:[]
    };

    makeBook = bookData => {
        return {
        _id: bookData.id,
        title: bookData.volumeInfo.title,
        authors: bookData.volumeInfo.authors,
        description: bookData.volumeInfo.description,
        link: bookData.volumeInfo.previewLink,
        image: bookData.volumeInfo.imageLinks.thumbnail
        }
    }

    searchBook = query => {
        API.getBook(query)
        .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData))}))
        .catch(err => console.error(err));
    }

    componentDidMount(){
        this.searchBook();
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    }

    render() {
        return (
            <div>
                <Form
                search = {this.state.search}
                handleInputChange = {this.handleInputChange}
                handleFormSubmit = {this.handleFormSubmit}
                />
                <div className="container">
                    <h2>Results</h2>
                    <Results books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default Search;