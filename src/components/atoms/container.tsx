import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.Children;
}
const Container: React.FC<Props> = ({ children }: Props) => (
  <Div>{children}</Div>
);
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;
export default Container;
