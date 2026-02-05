import { Component } from "react"
import CommentsList from "./CommentsList"
import AddComment from "./AddComment"

class CommentArea extends Component {

  render() {
    return (
      this.props.bookIsSelected && (
        <>
          {/* leave your review */}
          <AddComment book={this.props.book} />

          {/* reviews for this book */}
          <CommentsList book={this.props.book} />
        </>
      )
    )
  }

}

export default CommentArea
