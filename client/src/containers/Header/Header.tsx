import { HeaderStyled } from './styled';

import { HeaderAppPresentation, HeaderAppName, HeaderAppImage } from './styled';
import { Container, Content } from '../../App.styled';

import appLogoImage from '../../assets/icons/hw-logo.ico';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Container>
        <Content>
          <HeaderAppPresentation>
            <HeaderAppName>Habits Watcher</HeaderAppName>
            <HeaderAppImage
              src={appLogoImage}
              alt="app logo"
            />
          </HeaderAppPresentation>
        </Content>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
