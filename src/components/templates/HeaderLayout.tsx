import { ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";
type Props = {
  children: ReactNode;
};
export const HeaderLayout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
