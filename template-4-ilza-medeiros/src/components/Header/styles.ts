import styled from "styled-components";

export const Container = styled.header`
  height: 10rem;
  width: 100%;
  max-width: calc(100vw - 20rem);
  padding: 1rem 2rem;

  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;

  > h1 {
    font-size: 2rem;
    color: var(--gray-600);
  }

  > h2 {
    font-size: 1rem;
    color: var(--gray-400);
  }
`;
