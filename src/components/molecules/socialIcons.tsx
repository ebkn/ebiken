import { h, FunctionComponent } from 'preact';
import styled from 'styled-components';
import SocialIcon from '../atoms/socialIcon';

interface Link {
  url: string;
  name: string;
  icon: string;
}
interface Props {
  links: Link[];
}

/** @jsx h */
const SocialIcons: FunctionComponent<Props> = ({ links }) => (
  <IconsWrapper>
    {links.map(({ url, name, icon }) => (
      <SocialIcon
        url={url}
        name={name}
        icon={icon}
        key={name}
      />
    ))}
  </IconsWrapper>
);
const IconsWrapper: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;
export default SocialIcons;
