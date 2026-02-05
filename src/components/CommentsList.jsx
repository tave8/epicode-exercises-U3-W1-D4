import { Component } from "react"
import SingleComment from "./SingleComment"
import { Container, Col, Form, Row, Button } from "react-bootstrap"

class CommentsList extends Component {
  state = {
    reviews: [],
  }

  componentDidMount() {
    this.getReviews(this.props.book.asin)
  }

  getReviews = (bookAsin) => {
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
        })
      })
  }

  render() {
    return (
      <Container style={{ overflowY: "auto" }}>
        <Row className="flex-column" >
          {this.state.reviews.map((review) => {
            return (
              <Col key={review._id}>
                <SingleComment key={review._id} review={review} />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default CommentsList
