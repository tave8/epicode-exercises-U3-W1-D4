import { Component } from "react"


class SingleComment extends Component {
    render() {
        return (
            <p>{this.props.review.comment}</p>
        )
    }
}


export default SingleComment