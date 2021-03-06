import React, { useState } from "react";
import { createStyles } from "../../types/emotion-styles";
import { useTheme } from "@emotion/react";
import {
  AiFillHeart,
  AiOutlineEllipsis,
  AiOutlineLink,
  AiFillCloseCircle,
} from "react-icons/ai";
import { useAppSelector } from "../../hooks";
import { useDispatch } from "react-redux";
import { addFavorites, deleteFavorites } from "../../Redux/Actions/index";
import LoadingAnimation from "../LoadingScreen/Animation";

function index({
  cover_image,
  title,
  type,
  year,
  country,
  id,
  resource_url,
}: {
  cover_image: string;
  title: string;
  type: string;
  year: string;
  country: string;
  id: number;
  resource_url: string;
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
  const Favorites = useAppSelector((state) => state.Favorites.List);
  const Dispatch = useDispatch();
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({
    name: "",
    profile: "",
    uri: "",
  });
  const fetchData = async () => {
    try {
      setLoading(true);
      if (resource_url) {
        const response = await fetch(`${resource_url}`);
        const data = await response.json();
        setLoading(false);
        setShowMore(true);
        setResults(data);
      } else {
        alert("No more information");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert("is not possible get the information");
    }
  };
  return (
    <div css={styles.card}>
      {loading ? (
        <div css={styles.center_animation}>
          <LoadingAnimation />
        </div>
      ) : (
        <>
          <div css={styles.card_header}>
            <img css={styles.img} src={cover_image} alt={title} />
          </div>
          <div css={styles.card_body}>
            {showMore ? (
              <>
                <h4>{results.name}</h4>
                <div css={styles.card_details}>
                  <p>{results.profile}</p>
                </div>
              </>
            ) : (
              <>
                {" "}
                <div css={styles.tags_container}>
                  {country && <span css={styles.tag}>{country}</span>}
                  {type && <span css={styles.tag}>{type}</span>}
                  {year && <span css={styles.tag}>{year}</span>}
                </div>
                <h4 css={styles.title}>{title}</h4>
              </>
            )}
            <div css={styles.options_info}>
              <a
                onClick={() => {
                  fetchData();
                }}
                css={styles.button}
              >
                <AiOutlineEllipsis />
              </a>
              <a
                css={styles.button}
                onClick={() => {
                  if (Favorites.some((e) => e.id === id)) {
                    Dispatch(deleteFavorites(id));
                  } else {
                    Dispatch(
                      addFavorites({
                        cover_image,
                        title,
                        type,
                        year,
                        country,
                        id,
                        resource_url,
                      })
                    );
                  }
                }}
              >
                <AiFillHeart
                  color={Favorites.some((e) => e.id === id) ? "red" : "white"}
                />
              </a>
              {results.uri !== "" && (
                <>
                  <a css={styles.button} href={results.uri}>
                    <AiOutlineLink />
                  </a>
                  <button
                    onClick={() => {
                      setShowMore(false);
                      setResults({
                        name: "",
                        profile: "",
                        uri: "",
                      });
                    }}
                    css={styles.button}
                  >
                    <AiFillCloseCircle />
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default index;
