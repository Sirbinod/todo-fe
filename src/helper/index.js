import { gql } from "@apollo/client";

export const FINDTODOS = gql`
  query FindTodos {
    FindTodos {
      status
      message
      data {
        id
        name
        description
      }
    }
  }
`;

export const FINDTODO = gql`
  query FindOneTodo($id: String!) {
    FindOneTodo(id:$id) {
      status
      message
      data {
        id
        name
        description
      }
    }
  }
`;

export const DALETETODO = gql`
  mutation DeleteTodo($id: String!) {
    DeleteTodo(id: $id) {
      status
      message
    }
  }
`;

export const CREATETODO = gql`
  mutation CreateTodo($data: TodoInput!) {
    CreateTodo(data: $data) {
      status
      message
    }
  }
`;

export const UPDATETODO = gql`
  mutation UpdateTodo($data: TodoUpdate!) {
    UpdateTodo(data: $data) {
      status
      message
    }
  }
`;