import { Component } from "react"
import { Container, Col, Form, Row, Button } from "react-bootstrap"

const initialReview = {
  rate: "5",
  comment: "",
}

class AddComment extends Component {
  state = {
    formValues: initialReview,
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    if (this.state.formValues.comment.trim() == "") {
      alert("Review cannot be empty")
      return 
    }

    // the asin of the current book
    const bookAsin = this.props.book.asin

    const reviewToAdd = { ...this.state.formValues, elementId: bookAsin }

    const apiUrl = `https://striveschool-api.herokuapp.com/api/comments`

    const config = {
      method: "POST",
      body: JSON.stringify(reviewToAdd),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczMmNiMjg1ZTNiMTAwMTViNWVkNzgiLCJpYXQiOjE3NjkxNTU3NjMsImV4cCI6MTc3MDM2NTM2M30.BxSnAzs-jRVXg8PvTmmmQNOcI4pkhyHK6ADl2JGsKzk",
      },
    }

    fetch(apiUrl, config)
      .then((response) => {
        if (response.ok) {
          alert("Review successfully added")
          this.setState({
            formValues: initialReview,
          })
        } else {
          throw new Error("Error while adding review")
        }
      })
      .catch((err) => {
        console.log("error while saving", err)
      })
  }

  onRateChange = (event) => {
    const newRate = event.target.value
    this.setState({
      formValues: { ...this.state.formValues, rate: newRate },
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
          {/* best practice: row -> col */}
          <Form onSubmit={this.onFormSubmit}>
            <Row className="flex-column g-3">
              {/* review rate */}
              <Col>
                {/* review rate */}
                <Form.Group>
                  <Form.Label>Choose rate</Form.Label>
                  <Form.Select onChange={this.onRateChange} value={this.state.formValues.rate}>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {/* review comment */}
              <Col>
                {/* review text */}
                <Form.Group>
                  <Form.Label>Review</Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={this.onCommentChange}
                    value={this.state.formValues.comment}
                    placeholder={`How did you find ${this.props.book.title}?`}
                    style={{ minHeight: "200px" }}
                  />
                </Form.Group>
              </Col>

              {/* submit button */}
              <Col className="text-center">
                {/* submit review button */}
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </>
    )
  }
}

export default AddComment
