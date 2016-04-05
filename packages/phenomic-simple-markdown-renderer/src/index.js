import remark from "remark"
import html from "remark-html"

const defaultOptions = {
  commonmark: true,
}

export default (text, options = defaultOptions) => (
  (text) => (
    remark
      .use(html, { entities: "escape" })
      .process(text, defaultOptions)
  )
)
