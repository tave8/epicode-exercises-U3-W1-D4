import { Component } from "react"
import { Container, Col, Form, Row, Button } from "react-bootstrap"

class AddComment extends Component {
  state = {
    formValues: {
      rating: "5",
      comment: "",
    },
  }

  onFormSubmit = (event) => {
    event.preventDefault()
  }

  onRatingChange = (event) => {
    const newRating = event.target.value
    this.setState({
      formValues: { ...this.state.formValues, rating: newRating },
    })
  }

  onCommentChange = (event) => {
    const newComment = event.target.value
    this.setState({
      formValues: { ...this.state.formValues, comment: newComment },
    })
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Form onSubmit={this.onFormSubmit}>
              <Col>
                {/* review rating */}
                <Form.Group>
                  <Form.Label>Choose rating</Form.Label>
                  <Form.Select onChange={this.onRatingChange} value={this.state.formValues.rating}>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col>
                {/* review text */}
                <Form.Group>
                  <Form.Label>Review</Form.Label>
                  <Form.Control onChange={this.onCommentChange} value={this.state.formValues.comment} placeholder={`How did you find ${this.props.book.title}?`} style={{ minHeight: "200px" }} />
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
