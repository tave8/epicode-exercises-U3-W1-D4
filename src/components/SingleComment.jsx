import { Component } from "react"
import { Container, Col, Form, Row, Button, Spinner } from "react-bootstrap"

class SingleComment extends Component {

  handlerDeleteComment = (event) => {
    // const commentId = this.props.review._id

    // const apiUrl = `https://striveschool-api.herokuapp.com/api/comments/${commentId}`

    // const reviewToDelete = {

    // }

    // const config = {
    //   method: "POST",
    //   body: JSON.stringify(reviewToDelete),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization:
    //       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczMmNiMjg1ZTNiMTAwMTViNWVkNzgiLCJpYXQiOjE3NjkxNTU3NjMsImV4cCI6MTc3MDM2NTM2M30.BxSnAzs-jRVXg8PvTmmmQNOcI4pkhyHK6ADl2JGsKzk",
    //   },
    // }

    // fetch(apiUrl, config)
    //   .then((response) => {
    //     if (response.ok) {
    //       alert("Review successfully added")
    //       this.setState({
    //         formValues: initialReview,
    //       })
    //     } else {
    //       throw new Error("Error while adding review")
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("error while saving", err)
    //   })
  }

  render() {
    return (
      <>
        <p>
          {this.props.review.rate} | {this.props.review.comment}{" "}
          <Button variant="danger" className="fs-6" onClick={this.handlerDeleteComment}>
            Delete
          </Button>{" "}
        </p>
      </>
    )
  }
}

export default SingleComment
