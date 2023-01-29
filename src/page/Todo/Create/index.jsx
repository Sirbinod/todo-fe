import Form from "../../../components/Form";
import Layout from "../../../components/Layout";

export function CreateTodo() {
  return (
    <>
      <Layout data={false}>
        <div className="container">
          <Form data="Create" />
        </div>
      </Layout>
    </>
  );
}
