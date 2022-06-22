import Layout from "../../components/Layout";
import { createStyles } from "../../types/emotion-styles";
import { useTheme } from "@emotion/react";

function index() {
  const styles = createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      backgroundColor: "#f7f8fc",
      backgroundImage:
        "url('https://www.wallpaperflare.com/static/100/599/786/vinyl-records-fragments-fall-broken-wallpaper.jpg')",
      width: "100%",
      height: "100%",
    },
    Title: {
      color: "white",
    },
  });
  return (
    <Layout>
      <div css={styles.container}>
        <h1
          css={styles.Title}
          style={{ fontFamily: "Press Start 2P, cursive" }}
        >
          Lost Signal
        </h1>
        <h1 css={styles.Title}>404 Not Found</h1>
      </div>
    </Layout>
  );
}

export default index;
