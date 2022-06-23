/** @jsxRuntime classic */
/** @jsx jsx */
import { createStyles } from "../../types/emotion-styles";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../Redux/Actions/index";
import { Link } from "react-router-dom";
import { WiDaySunny, WiMoonAltWaxingCrescent2 } from "react-icons/wi";
import { useAppSelector } from "../../hooks";

function index() {
  const theme = useTheme();
  const styles = createStyles({
    container: {
      backgroundImage: theme.background,
      color: theme.text,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      minHeight: "100 px",
    },
    logo: {
      flex: "0 1 auto",
      display: "flex",
      flexDirection: "row",
      textDecoration: "none",
      color: theme.text,
    },
    menu: {
      flex: "1 1 auto",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    img: {
      width: "50px",
      height: "50px",
      objectFit: "cover",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "12px",
    },
    menu_item: {
      textDecoration: "none",
      height: "100%",
      cursor: "pointer",
      color: theme.text,
      padding: "12px",
      "&:hover": {
        backgroundColor: theme.buttonHover,
      },
    },
    Theme_button: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  });
  const Dispatch = useDispatch();
  const DarkTheme = useAppSelector((state) => state.Settings.themeDark);
  return (
    <div css={styles.container}>
      <Link to={"/"} css={styles.logo}>
        <img
          css={styles.img}
          src="../../../public/assets/images/LogoD.png"
          alt="logo"
        />
        <div css={styles.title}>Discogs App</div>
      </Link>
      <div css={styles.menu}>
        <Link to={"/History"} css={styles.menu_item}>
          History
        </Link>
        <Link to={"/Favorites"} css={styles.menu_item}>
          Favorites
        </Link>
        <a
          css={styles.menu_item}
          onClick={() => {
            Dispatch(changeTheme());
          }}
        >
          {DarkTheme ? (
            <div css={styles.Theme_button}>
              <WiMoonAltWaxingCrescent2 style={{ marginRight: "4px" }} /> Dark
            </div>
          ) : (
            <div css={styles.Theme_button}>
              <WiDaySunny style={{ marginRight: "4px" }} color="yellow" /> Light
            </div>
          )}
        </a>
      </div>
    </div>
  );
}

export default index;
