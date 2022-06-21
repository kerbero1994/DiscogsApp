import Footer from "../Footer";
import NavBar from "../NavBar";
import { createStyles } from "../../types/emotion-styles";
import { ThemeProvider, Theme } from "@emotion/react";
import { useAppSelector } from "../../hooks";
type Props = {
  children: JSX.Element;
};
const styles = createStyles({
  Principal_container: {
    minHeight: "100vh",
    margin: "0",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
  },
  Page_Container: {
    padding: "12px",
  },
});
const themeLight: Theme = {
  text: "#000",
  background: "#fff",
  buttonText: "#000",
  buttonTextHover: "#fff",
  buttonBorder: "#000",
  buttonBg: "rgba(0, 0, 0, 0)",
  buttonBgHover: "rgba (0, 0, , 1)",
};
const themeDark: Theme = {
  text: "#fff",
  background: "#121212",
  buttonText: "#fff",
  buttonTextHover: "#000",
  buttonBorder: "#fff",
  buttonBg: "rgba(255, 255, 255, 0)",
  buttonBgHover: "rgba (255, 255, 255, 1)",
};

const Layout = ({ children }: Props) => {
  const themeValue = useAppSelector((state) => state.Settings.themeDark);
  return (
    <ThemeProvider theme={themeValue ? themeDark : themeLight}>
      <div css={styles.Principal_container}>
        <NavBar />
        <main css={styles.Page_Container}>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
