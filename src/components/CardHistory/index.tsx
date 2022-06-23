import React, { useState } from "react";
import { createStyles } from "../../types/emotion-styles";
import { useTheme } from "@emotion/react";
import { AiFillCaretRight, AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteHistory,
  replaceSEARCH,
  connectionState,
} from "../../Redux/Actions/index";
import { useNavigate } from "react-router-dom";

function index({
  searchTerm,
  time,
  result,
  index,
}: {
  searchTerm: string;
  time: string;
  result: object;
  index: number;
}) {
  const theme = useTheme();
  const styles = createStyles({
    card: {
      margin: "10px",
      backgroundColor: theme.cardBodyBackground,
      borderRadius: "10px",
      boxShadow: "0 2px 20px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      width: "300px",
    },
    card_header: {
      minWidth: "100%",
    },
    card_body: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "4px 20px 20px 20px",
    },
    options: {},
    options_info: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      marginBottom: "4px",
    },
    title: {
      color: theme.text,
    },
    img: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    tag: {
      background: "#47bcd4",
      borderRadius: "50px",
      fontSize: "12px",
      margin: "4px",
      color: "#fff",
      padding: "2px 10px",
      textTransform: "uppercase",
      cursor: "pointer",
    },
    tags_container: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      marginBottom: "4px",
    },
    button: {
      backgroundColor: "DodgerBlue",
      border: "none",
      color: "white",
      padding: "12px 16px",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "50px",
      marginRight: "8px",
      marginTop: "8px",
    },
    center_animation: {
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    card_details: {
      width: "100%",
      maxHeight: "150px",
      overflow: "auto",
    },
  });
  const Dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div css={styles.card}>
      <>
        <div css={styles.card_body}>
          <h4 css={styles.title}>{searchTerm}</h4>
          <div css={styles.tags_container}>
            {time && <span css={styles.tag}>{time}</span>}
          </div>
          <div css={styles.options_info}>
            <a
              onClick={() => {
                Dispatch(connectionState("SUCCESS"));
                Dispatch(replaceSEARCH(result));
                navigate("/");
              }}
              css={styles.button}
            >
              <AiFillCaretRight />
            </a>
            <a
              css={styles.button}
              onClick={() => {
                console.log(index);
                Dispatch(deleteHistory(index));
              }}
            >
              <AiFillDelete />
            </a>
          </div>
        </div>
      </>
    </div>
  );
}

export default index;
