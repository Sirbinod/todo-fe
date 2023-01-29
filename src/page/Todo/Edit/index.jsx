import Form from "../../../components/Form";
import Layout from "../../../components/Layout";

export function EditTodo() {
  return (
    <>
      <Layout data={false}>
        <Form data="Edit" />
      </Layout>
    </>
  );
}
