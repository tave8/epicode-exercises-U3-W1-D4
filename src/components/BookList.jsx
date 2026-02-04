import { Component } from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component {
  render() {
    return (
      <Container style={{ marginTop: this.props.marginTop || 0 }}>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
          {/* books */}
          {this.props.books.map((book) => {
            return (
              <Col key={book.asin} className="d-flex justify-content-center">
                <SingleBook book={book} />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default BookList
