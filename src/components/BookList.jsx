import { Component } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {
  state = {
    userSearch: "",
  }

  searchBooks() {
    const userSearch = this.state.userSearch.toLowerCase()
    // the books that the match the search pattern 
    const filteredBooks = this.props.books.filter((book) => {
        const bookTitle = book.title.toLowerCase()
        const isBookSearched = bookTitle.includes(userSearch)
        return isBookSearched
    })

    return filteredBooks.map((book) => {
      return (
        <Col key={book.asin} className="d-flex justify-content-center">
          <SingleBook book={book} />
        </Col>
      )
    })
  }

  render() {
    return (
      <Container style={{ marginTop: this.props.marginTop || 0 }}>
        {/* search */}
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control
                  type="search"
                  // freccina sotto -> collego il valore dello stato al valore dell'input
                  value={this.state.userSearch}
                  onChange={(event) => {
                    this.setState({
                      userSearch: event.target.value,
                    })
                  }}
                  placeholder="Search here..."
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        {/* books */}
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">{this.searchBooks()}</Row>
      </Container>
    )
  }
}

export default BookList
