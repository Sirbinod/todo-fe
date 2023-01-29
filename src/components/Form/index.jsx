import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CREATETODO, FINDTODO, UPDATETODO } from "../../helper";
import { useNavigate, useParams } from "react-router-dom";

const Form = ({ data }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  const { data: getTodo } = useQuery(FINDTODO, { variables: { id } });

  useEffect(() => {
    if (getTodo) {
      setName(getTodo?.FindOneTodo?.data?.name);
      setDesc(getTodo?.FindOneTodo?.data?.description);
    }
  }, [getTodo]);

  const { handleSubmit } = useForm();

  const [createTodo] = useMutation(CREATETODO);
  const [updateTodo] = useMutation(UPDATETODO);
  const onSubmit = () => {
    const formData = { name: name, description: desc };
    if (id) {
      updateTodo({
        variables: { data: { id: id, ...formData } },
      })
        .then((response) => {
          if (response?.data?.UpdateTodo?.status == 200) {
            navigate("/");
          } else {
            setError(response?.data?.CreateTodo?.message);
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      createTodo({ variables: { data: formData } })
        .then((response) => {
          if (response?.data?.CreateTodo?.status == 201) {
            navigate("/");
          } else {
            setError(response?.data?.CreateTodo?.message);
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  return (
    <div className="max-w-lg m-auto">
      <div className="mb-4">
        <h1 className="text-lg font-semibold">{data} Todo</h1>
      </div>
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="title"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              rows={3}
              placeholder="description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
          {error ? <p className="text-red-700">{error}</p> : <></>}
        </form>
      </div>
    </div>
  );
};
export default Form;
