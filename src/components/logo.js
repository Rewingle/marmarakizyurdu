/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/logo.png';
import logoWhite from 'assets/images/logo-white.png';

export default function Logo({ white }) {
  const styles={
      logoStyle:{
        ':hover':{
          cursor:'pointer'
        }
      }
  }
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        ':hover':{
          cursor:'pointer'
        }
      }}
    >
      <Image src={white ? logoWhite : logo} alt="landing page"/>
    </Link>
  );
}
