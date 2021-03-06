import axios from 'axios';

export default {
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    },

    getBooks: function() {
        return axios.get("/api/books")
    },

    deleteBook: function(id) {
        console.log(id)
        return axios.delete("/api/books/" + id)
    }
}