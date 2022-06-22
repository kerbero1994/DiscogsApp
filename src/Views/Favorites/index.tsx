import { useAppSelector } from "../../hooks";
import { createStyles } from "../../types/emotion-styles";
import CardResult from "../../components/CardsResults";
import Layout from "../../components/Layout";

function Pagination() {
  const List = useAppSelector((state) => state.Favorites.List);
  const styles = createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      backgroundColor: "#f7f8fc",
      height: "100%",
    },
    elements_container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
  });
  return (
    <>
      <Layout>
        <div css={styles.container}>
          <div css={styles.elements_container}>
            {List && List.length > 0 ? (
              List.map((element: any) => {
                return <CardResult {...element} key={element.id} />;
              })
            ) : (
              <div>No favorites </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Pagination;
