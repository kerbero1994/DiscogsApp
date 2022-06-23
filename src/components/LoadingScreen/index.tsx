import React from "react";
import { createStyles } from "../../types/emotion-styles";
import { useTheme } from "@emotion/react";
import Animation from "./Animation";

function LoadingScreen() {
  const styles = createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      backgroundColor: "#f7f8fc",
      width: "100%",
      height: "100%",
    },
    Title: {
      color: "white",
    },
  });
  return (
    <div css={styles.container}>
      <Animation />
    </div>
  );
}

export default LoadingScreen;
