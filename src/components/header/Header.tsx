import cl from './header.module.scss';
import Container from '../ui/container/Container.tsx';
import TeamHeader from '../team/team-header/TeamHeader.tsx';
import MemberHeader from '../team/member-header/MemberHeader.tsx';
import { useMatch } from 'react-router';
import ButtonLogout from './ButtonLogout.tsx';

const Header = () => {
  const memberRoute = useMatch('/team/:id');

  const otherRoutes = () => {
    return !memberRoute;
  };

  return (
    <header className={cl.header}>
      <Container className={cl.headerWrapper}>
        {otherRoutes() && <TeamHeader />}
        {memberRoute && <MemberHeader />}
        <ButtonLogout />
      </Container>
    </header>
  );
};

export default Header;
