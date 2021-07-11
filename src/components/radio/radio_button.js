import React, { PureComponent } from "react";
import Radio from "./radio";

export default class RadioButton extends PureComponent {
  static defaultProps = {
    isButton: true
  };
  render() {
    return <Radio {...this.props} />;
  }
}
