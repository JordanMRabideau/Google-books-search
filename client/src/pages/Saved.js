import React, {Component} from "react";
import API from "../utils/API";
import ResultsContainer from "../components/results-container"
import SavedCard from "../components/saved-components/saved-card"

class Saved extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })    
            )
            .catch(err => console.log(err));
    }
    
    deleteBook = id => {
        API.deleteBook(id)
            .then(this.loadBooks)
    }

    render() {
        return(
            <div>
                {this.state.books.length ? 
                  <ResultsContainer>
                   {this.state.books.map(book => (
                      <SavedCard
                      id={book._id}
                      key={book._id}
                      title={book.title}
                      author={book.author}
                      image={book.image}
                      synopsis={book.synopsis}
                      method={this.deleteBook}
                      />
                    ))}
                  </ResultsContainer>
                  : null
                }
               
            </div>
        )
    }
}

export default Saved