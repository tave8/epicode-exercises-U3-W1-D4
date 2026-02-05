import { Component } from "react"
import SingleComment from "./SingleComment"
import { Container, Col, Form, Row, Button, Spinner, Alert } from "react-bootstrap"

class CommentsList extends Component {
  state = {
    reviews: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getReviews(this.props.book.asin)
  }

  getReviews = (bookAsin) => {
    this.setState({
      isLoading: true,
    })

    const url = `https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`
    const config = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczMmNiMjg1ZTNiMTAwMTViNWVkNzgiLCJpYXQiOjE3NjkxNTU3NjMsImV4cCI6MTc3MDM2NTM2M30.BxSnAzs-jRVXg8PvTmmmQNOcI4pkhyHK6ADl2JGsKzk",
      },
    }

    fetch(url, config)
      .then((resp) => {
        if (resp.ok) {
          return resp.json()
        } else {
          throw Error("error while fetching reviews")
        }
      })
      .then((data) => {
        const reviews = data
        this.setState({
          reviews,
          isLoading: false,
        })
      })
      .catch((err) => {
        console.error(err)
        this.setState({
          isLoading: false,
        })
      })
  }

  render() {
    return (
      <>
        {/* spinner: loading */}
        {this.state.isLoading && (
          <div className="text-center mt-3">
            <Spinner variant="success" animation="border" />
          </div>
        )}

        {/* comments */}
        <Container style={{}} className="mt-2">
          {/* title */}
          <Row>
            <Col>
              <p className="fs-3 text-center">User reviews</p>
            </Col>
          </Row>

          {/* reviews */}
          <Row className="flex-column flex-nowrap" style={{ height: "200px", overflowY: "auto" }}>
            {this.state.reviews.map((review) => {
              return (
                <Col key={review._id}>
                  <SingleComment key={review._id} review={review} />
                </Col>
              )
            })}

            {/* no reviews */}
            {this.state.reviews.length == 0 && this.state.isLoading == false && (
              <Alert variant="info">
                <p>No reviews found.</p>
              </Alert>
            )}
          </Row>
        </Container>
      </>
    )
  }
}

export default CommentsList
