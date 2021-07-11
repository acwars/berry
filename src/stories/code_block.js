import React from 'react'
import PropTypes from "prop-types"
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'

import "highlight.js/styles/tomorrow-night-eighties.css"

Lowlight.registerLanguage('js', js);

export default class CodeBlock extends React.PureComponent {
  static displayName = 'CodeBlock'
  static propTypes = {
    literal: PropTypes.string,
    language: PropTypes.string,
    inline: PropTypes.bool
  }
  render() {
    const { language, literal, inline } = this.props
    return (
      <Lowlight
        language={language || 'js'}
        value={literal}
        inline={inline}
      />
    );
  }
}
