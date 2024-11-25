import React, { FC, ReactNode } from "react";
import Style from "./layout.module.css";
import cx from "classnames";

interface ILayoutProps {
  as?: React.ElementType;
  children: ReactNode;
  classname?: string;
  columnsType?: "default" | "centerWide";
  hideOverflow?: boolean;
}

export const Layout: FC<ILayoutProps> = ({
  as: Tag = "div",
  children,
  classname,
  columnsType = "default",
  hideOverflow = true,
}) => {
  return (
    <Tag
      className={cx(
        Style.blockGrid,
        Style[columnsType],
        hideOverflow && Style.hideOverflow,
        classname
      )}
    >
      {children}
    </Tag>
  );
};
