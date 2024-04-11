import { Menu } from "../../components/menu";




export const Home = ({ children }) => {
  return (
    <>
    <Menu/>
      <main>{children}</main>
    </>
  );
};