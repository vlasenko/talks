import { dark } from 'mdx-deck/themes'
import highlightStyle from 'react-syntax-highlighter/styles/prism/darcula'
import prismRuby from 'react-syntax-highlighter/languages/prism/ruby'

export default {
  ...dark,
  prism: {
    style: highlightStyle,
    languages: {
      ruby: prismRuby
    }
  }
}