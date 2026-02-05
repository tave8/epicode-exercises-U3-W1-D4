import { Component } from "react"
import { Container, Col, Form, Row, Button } from "react-bootstrap"

class AddComment extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Form>
              <Col>
                {/* review rating */}
                <Form.Group>
                  <Form.Label>Choose rating</Form.Label>
                  <Form.Select defaultValue={1}>
                    <option value="1">1</option>
                    <option value="1">2</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col>
                {/* review text */}
                <Form.Group>
                  <Form.Label>Review</Form.Label>
                  <Form.Control placeholder={`How did you find ${this.props.book.title}?`} style={{ minHeight: "200px" }} />
                </Form.Group>
              </Col>

              {/* submit review button */}
              <Button type="submit">Submit</Button>
            </Form>
          </Row>
        </Container>
      </>
    )
  }
}

export default AddComment
