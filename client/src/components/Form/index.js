import React from 'react';
import "./style.css";

function Form(props) {
    return(
        <div className="container">
            <form>
                <div className="form-group ">
                    <label htmlFor="search"><h3>Search for and Save Books</h3></label>
                    <input
                        id="search"
                        className="form-control"
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        placeholder="Search Books"
                    />
                    <button onClick={props.handleFormSubmit} className=" btn btn-primary mb-5 mt-3">
                        Search
                    </button>
                    
                </div>

            </form>
        </div>
    )
}

export default Form;