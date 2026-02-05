import { Component } from "react"
import OpenAI from "../classes/OpenAI"

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
      `${bookTitle}`+
      `"""`

    const openai = new OpenAI({ simplify: true })
    const data = await openai.ask(prompt)
    const aiSummary = data.message

    this.setState({
        bookSummary: aiSummary
    })

    // askOpenAI("how are you?")
    //   .then((openaiAnswer) => {
    //     console.log(openaiAnswer)
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })
  }

  render() {
    return (
      <>
        <p>{this.state.bookSummary}</p>
      </>
    )
  }
}

export default AIBookSummary
