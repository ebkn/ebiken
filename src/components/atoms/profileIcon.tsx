import { h, FunctionComponent } from 'preact';
import styled from 'styled-components';
import info from '../info';

/** @jsx h */
const ProfileIcon: FunctionComponent<{}> = () => (
  <Wrapper>
    <Img src={`/images/${info.icon}`} alt="avatar" />
  </Wrapper>
);
const Wrapper: any = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
`;
const Img: any = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
export default ProfileIcon;