/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { jsx } from "@emotion/react";
import { createStyles } from "../../types/emotion-styles";

const styles = createStyles({
  container: {
    backgroundColor: "Black",
    padding: "1em",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    minHeight: "100 px",
  },
});

function index() {
  return <footer css={styles.container}>Footer</footer>;
}

export default index;
