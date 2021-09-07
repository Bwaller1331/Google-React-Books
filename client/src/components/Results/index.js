
import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
class Results extends Component {
    state = {
        savedBooks : []
    }

    componentDidMount() {
        API.getSavedBooks()
        .then(savedBooks => this.setState({savedBooks : savedBooks}))
        .catch(err => console.error(err));
        
    }

    handleSave = book => {
        if (this.state.savedBooks.map(book=>book._id).includes(book._id)) {
            API.deleteBook(book._id)
            .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id)}))
            .catch(err => console.error(err));
        } else {
            API.saveBook(book)
            .then(savedBook => this.setState({savedBooks: this.state.savedBooks.concat([savedBook])}))
            .catch(err => console.error(err));
        }
    }


render() {
    return(
        <div className="result-box">
            {!this.props.books.length ? (
                <h1 className="text-center">No results</h1>
            ) : (
                <div>
                    {this.props.books.map(result => (
                        <div className="card mb-3" key={result._id}>
                            <div className="row">
                                <div className="col-md-2">
                                    <img className ="img-fluid" alt={result.title} src={result.image} />
                                </div>
                                <div className = "col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">{result.title}</h4>
                                        <p className="card-text">{result.description}</p>
                                        <div>
                                            <a className="btn badge-pill btn-dark mt-3" href={result.link} rel="noopener noreferrer" target="blank">View</a>
                                            <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-dark mt-3 ml-3">
                                                {this.state.savedBooks.map(book => book._id).includes(result._id) ? "Unsave" : "Save"}
                                                </button> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
        )
    }
}

export default Results;