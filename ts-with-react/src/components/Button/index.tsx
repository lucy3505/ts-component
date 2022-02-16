import React, { FC, memo } from "react";
import classNames from "classnames";

type ButtonType = "primary" | "default" | "danger" | "link";
type ButtonSize = "lg" | "sm";
// export enum ButtonType {
//   Primary = "primary",
//   Default = "default",
//   Danger = "danger",
//   Link = "link",
// }

interface BaseButtonProps {
  btnType?: ButtonType;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  href?: string;
  autoFocus?: boolean;
  children: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;

type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = (props) => {
  const { btnType, disabled, size, children, href, className, ...restProps } =
    props;
  //btn,btn-lg,btn-primary
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  disabled: false,
  btnType: "default",
};
export default memo(Button);
