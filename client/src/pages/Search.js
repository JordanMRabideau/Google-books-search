import React, {Component} from "react";
import Form from "../components/search-components/search-form"
import BookCard from "../components/book-card"
import TextInput from "../components/search-components/search-form/text-input"
import SearchButton from "../components/search-components/search-form/search-button"
import ResultsContainer from "../components/results-container"
import API from "../utils/API";


const axios = require('axios');

class Search extends Component {
  state= {
    search: "",
    results: [],
  }

  handleInputChange = event => {
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  searchGoogleApi = () => {
    axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=AIzaSyBSGhTD9d_JX9xdB8HluVUwdBZ7naNaLKA`
    ).then(
      (response) => {
        console.log(response.data.items[0].volumeInfo)
        this.setState({
          results: response.data.items
        })
      }
    ).catch(
      (err) => {
        console.log(err)
      }
    )
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
      this.searchGoogleApi();
      this.setState({
        search: ""
      })
    }
  }

  saveBook = (bookData) => {
    // event.preventDefault();
    API.saveBook(bookData)
  }

  getCardInfo = event => {
    console.log(event.target)
  }
  render() {
      return (
        <div>
            <Form>
              <TextInput 
                name="search"
                value={this.state.search}
                onChange={this.handleInputChange}
              />
              <SearchButton 
                onClick={this.handleFormSubmit}
              />
            </Form>
            {this.state.results.length ? 
              <ResultsContainer>
                {this.state.results.map(book => (
                  <BookCard 
                    key={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors !== undefined ? book.volumeInfo.authors.join(", ") : null}
                    link={book.volumeInfo.previewLink}
                    image={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.smallThumbnail :
                    null}
                    // If the description is greater than 600 characters long, cut it off and insert elipses
                    synopsis={
                      book.volumeInfo.description ?
                        (book.volumeInfo.description.length > 600? 
                          book.volumeInfo.description.substring(0,599) + "..."
                          : book.volumeInfo.description)
                        : null
                    }
                    method={this.saveBook}
                  />
                ))}
              </ResultsContainer>
            : null}
        </div>
      )
  }
}

export default Search;