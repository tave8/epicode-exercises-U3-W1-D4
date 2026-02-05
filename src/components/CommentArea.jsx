import { Component } from "react"
import CommentsList from "./CommentsList"

class CommentArea extends Component {

  render() {
    return (
      this.props.bookIsSelected && (
        <>
          {/* leave your review */}
          <textarea placeholder={`How did you find ${this.props.book.title}?`}></textarea>

          {/* reviews for this book */}
          <CommentsList book={this.props.book} />
        </>
      )
    )
  }
  
}

export default CommentArea
