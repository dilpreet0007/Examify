import { Link } from 'react-router-dom';
import logoImage from 'src/assets/images/logos/examify-logo.png';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  marginRight: '10px',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <img src={logoImage} alt="Examify logo" style={{ height: '56px', width: 'auto', display: 'block' }} />
    </LinkStyled>
  );
};

export default Logo;
