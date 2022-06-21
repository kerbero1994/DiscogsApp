import { useAppSelector } from "../../hooks";
import SearchInput from "../../components/SearchInput";
import Layout from "../../components/Layout";
import Pagination from "../../components/PaginationResults";
import InfinityScroll from "../../components/InfinityScrollResults";
function Home() {
  const ViewOnPagination = useAppSelector((state) => state.Settings.pagination);
  return (
    <Layout>
      <>
        <SearchInput />
        {ViewOnPagination ? <Pagination /> : <InfinityScroll />}
      </>
    </Layout>
  );
}

export default Home;
