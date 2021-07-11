import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import cls from "classnames";
import { LoadingIcon } from "../icon";

export default class Spin extends PureComponent {
  state = {
    visible: true
  };
  static defaultProps = {
    prefixCls: "berry-spin",
    size: "",
    tip: "",
    spinning: true,
    indicator: <LoadingIcon />
  };
  static propTypes = {
    prefixCls: PropTypes.string.isRequired,
    tip: PropTypes.string,
    spinning: PropTypes.bool,
    indicator: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.object
    ]),
    size: PropTypes.oneOf(["", "default", "small", "large"])
  };
  constructor(props) {
    super(props);
  }
  render() {
    const {
      prefixCls,
      className,
      indicator,
      size,
      tip,
      children,
      spinning,
      ...attr
    } = this.props;

    if (!spinning) {
      return children;
    }

    if (children) {
      return (
        <div className={`${prefixCls}-container`}>
          <div
            className={cls(prefixCls, className, {
              [`${prefixCls}-wrap`]: true
            })}
            {...attr}
          >
            <span
              className={cls(`${prefixCls}-indicator`, {
                [`${prefixCls}-${size}`]: !!size
              })}
            >
              {indicator}
            </span>
            {tip ? <div className={`${prefixCls}-tip`}>{tip}</div> : undefined}
          </div>
          <div className={cls(`${prefixCls}-blur`)}>{children}</div>
        </div>
      );
    }

    return (
      <div
        className={cls(prefixCls, className, `${prefixCls}-spinning`)}
        {...attr}
      >
        <span
          className={cls(`${prefixCls}-indicator`, {
            [`${prefixCls}-${size}`]: !!size
          })}
        >
          {indicator}
        </span>
      </div>
    );
  }
}
