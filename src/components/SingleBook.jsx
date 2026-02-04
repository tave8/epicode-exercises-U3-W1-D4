import { Component } from "react"
import { Card } from "react-bootstrap"

class SingleBook extends Component {
  state = {
    selected: false,
  }

  toggleSelected() {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    const { book } = this.props
    return (
      <Card style={{ width: "18rem", height: "500px" }} className={this.state.selected ? "selected-card" : ""} key={book.asin} onClick={this.toggleSelected.bind(this)}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
