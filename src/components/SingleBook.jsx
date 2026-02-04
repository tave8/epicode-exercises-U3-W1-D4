import { Card } from "react-bootstrap"

const SingleBook = (props) => {
  const { book } = props
  return (
    <Card style={{ width: "18rem", height: "500px" }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
