/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    getBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    saveBook: function (bookData) {
        return axios.post("/api/books",bookData).then(result => result.data);
    },
    deleteBook: function (id) {
        return axios.delete("/api/books/"+ id).then(result => result.data);
    },
    getSavedBooks: function () {
        return axios.get("/api/books").then(result => result.data);
    }
};