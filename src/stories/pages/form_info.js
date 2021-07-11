import CodeBlock from "../code_block"
import ReactMarkDown from "react-markdown"
import React from "react"

const FormInfo = () => (
  <ReactMarkDown source={require('../markdown/form_info.md')} renderers={{
    CodeBlock,
    Code: CodeBlock,
  }} />
)

export default FormInfo
