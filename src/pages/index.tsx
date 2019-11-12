import { FC } from 'react';
import Layout from '../layout';
import Container from '../components/atoms/container';
import ProfileIcon from '../components/atoms/profileIcon';
import Title from '../components/atoms/title';
import SocialIcons from '../components/molecules/socialIcons';
import Badges from '../components/molecules/badges';
import CenteredText from '../components/molecules/centeredText';
import info from '../info';

const IndexPage: FC<{}> = () => (
  <Layout>
    <Container>
      <ProfileIcon fileName={info.icon} />
      <Title title={info.name} />
      <SocialIcons links={info.links} />
      <Badges />
      <CenteredText text={info.shortProfile} />
    </Container>
  </Layout>
);
export default IndexPage;
