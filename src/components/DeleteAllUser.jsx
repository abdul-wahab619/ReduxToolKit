import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(deleteUsers());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={clearAll}>
        DeleteAllUsers
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
export default DeleteAllUser;
