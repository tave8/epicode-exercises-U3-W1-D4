import { Component } from "react"
import { Card } from "react-bootstrap"
import CommentArea from "./CommentArea"
import AIBookSummary from "./AIBookSummary"


class SingleBook extends Component {
  state = {
    selected: false,
  }

  // funzione freccia: eredita il this dell'istanza della classa
  // funzione normale: ha un proprio this
  // event handler: meglio usare funzioni freccia per evitare di dover usare il .bind
  toggleSelected = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render() {
    const { book } = this.props
    return (
      <Card style={{ width: "18rem", height: this.state.selected ? "1200px" : "500px" }} className={this.state.selected ? "selected-card" : ""} key={book.asin}>
        <Card.Img variant="top" src={book.img} onClick={this.toggleSelected} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          {/* AI summary */}
          {this.state.selected && <AIBookSummary book={book} />}
          {/* comment area: rate, review, reviews list etc. */}
          <CommentArea bookIsSelected={this.state.selected} book={book} />
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
