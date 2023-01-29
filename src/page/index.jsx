import { useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import Table from "../components/Table";
import { FINDTODOS } from "../helper";

export function Home() {
  const { loading, data,refetch } = useQuery(FINDTODOS);
  return (
    <>
      <Layout data={true}>
        <div className="container ">
          <div className="">
            <Table
              item={data?.FindTodos?.data}
              loading={loading}
              refetch={refetch}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
