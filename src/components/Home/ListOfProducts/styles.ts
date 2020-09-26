import styled from "styled-components";

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin: 8px 8px;
  height: 100%;
`;
