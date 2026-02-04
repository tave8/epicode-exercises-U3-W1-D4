import { Component } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import booksList from "../data/books-scifi.json"

class AllTheBooks extends Component {
  state = {
    activeBook: null,
  }

  setActiveBook(newBook) {
    this.setState({ activeBook: newBook })
  }

  render() {
    return (
      <Container style={{ marginTop: this.props.marginTop || 0 }}>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
          {booksList.map((book) => {
            return (
              <Col key={book.asin} className="d-flex justify-content-center">
                <Card
                  onClick={() => {
                    this.setActiveBook(book)
                  }}
                  style={{ width: "18rem", height: "500px" }}
                >
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default AllTheBooks
