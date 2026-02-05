import { Component } from "react"
import OpenAI from "../classes/OpenAI"
import { Container, Col, Form, Row, Button, Spinner } from "react-bootstrap"

class AIBookSummary extends Component {
  state = {
    isLoading: true,
    book: this.props.book,
    bookSummary: "",
  }

  componentDidMount() {
    this.getBookSummaryFromTitle(this.state.book.title)
  }

  getBookSummaryFromTitle = async (bookTitle) => {
    // console.log(bookTitle)
    const prompt =
      `I give you the title of a book.` +
      `Your task is to summarize this book.` +
      `Max 100 characters. Be concise and neutral.` +
      `Title:` +
      `"""` +
      `${bookTitle}` +
      `"""`
    try {
      this.setState({ isLoading: true })

      const openai = new OpenAI({ simplify: true })
      const data = await openai.ask(prompt)
      const aiSummary = data.message

      this.setState({
        bookSummary: aiSummary,
      })

      this.setState({ isLoading: false })
    } catch (err) {
      console.error(err)
      this.setState({ isLoading: false })
    }
  }

  render() {
    return (
      <>
        <div>
          {/* book summary */}
          <p>{this.state.bookSummary}</p>

          {/* spinner */}
          {this.state.isLoading && (
            <div className="text-center mt-3">
              <Spinner variant="success" animation="border" />
            </div>
          )}
        </div>
      </>
    )
  }
}

export default AIBookSummary
