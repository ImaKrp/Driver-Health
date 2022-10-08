import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 1.8rem;
  position: relative;
`;

export const Label = styled.span`
  position: absolute;
  top: ${({ isWritten }) => (isWritten ? "-1.9rem" : "0.4rem")};
  left: 0.6rem;
  transition: top 0.4s;
  font-size: 1.4rem;
`;

export const TextareaUI = styled.textarea`
  border-radius: 0.6rem;
  border: 1px solid black;
  padding: 0.4rem 0.6rem;
  height: 20rem;
  width: 100%;
  font-size: 1.4rem;
  resize: none;
`;
