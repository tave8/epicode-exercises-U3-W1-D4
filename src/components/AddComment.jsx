import { Component } from "react"

class AddComment extends Component {
  render() {
    return <textarea placeholder={`How did you find ${this.props.book.title}?`}></textarea>
  }
}

export default AddComment
