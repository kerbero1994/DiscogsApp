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
    width: "100%",
  },
  Page_Container: {
    backgroundColor: "#f7f8fc",
  },
});
const themeLight: Theme = {
  text: "#000",
  background: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
  backgroundField: "#F7F8FC",
  cardBodyBackground: "#FFFFFF",
  buttonText: "#000",
  buttonHover: "#E9E9ED",
  buttonTextHover: "#fff",
  buttonBorder: "#000",
  buttonBg: "rgba(0, 0, 0, 0)",
  buttonBgHover: "rgba (0, 0, , 1)",
  LogoFilter: "invert(1)",
};

const themeDark: Theme = {
  text: "#fff",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  backgroundField: "#001E3C",
  cardBodyBackground: "#006FDF",
  buttonHover: "#3b3b3b",
  buttonText: "#fff",
  buttonTextHover: "#000",
  buttonBorder: "#fff",
  buttonBg: "rgba(255, 255, 255, 0)",
  buttonBgHover: "rgba (255, 255, 255, 1)",
  LogoFilter: "invert(0)",
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
