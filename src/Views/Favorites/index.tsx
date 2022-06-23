import { useAppSelector } from "../../hooks";
import { createStyles } from "../../types/emotion-styles";
import CardResult from "../../components/CardsResults";
import Layout from "../../components/Layout";

function Pagination() {
  const List = useAppSelector((state) => state.Favorites.List);
  const theme = useAppSelector((state) => state.Settings.themeDark);
  const styles = createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0",
      backgroundColor: theme ? "#001E3C" : "#F7F8FC",
      height: "100%",
      width: "100%",
    },
    elements_container: {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      backgroundColor: theme ? "#001E3C" : "#F7F8FC",
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
              <div>
                <img
                  src="https://pbs.twimg.com/media/Da9ZNzxX0AEIq_z.jpg"
                  alt="NO favorites"
                />
                <img
                  src="https://pbs.twimg.com/media/DYoEki1UMAAMV4-.jpg"
                  alt="NO favorites"
                />
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Pagination;
