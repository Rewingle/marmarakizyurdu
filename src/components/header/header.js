/** @jsx jsx */
import { jsx, Box, Container, MenuButton, Flex, Button } from 'theme-ui';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import { NavLink } from 'components/link';
import menuItems from './header.data';
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const router = useRouter()
  const isHome = router.pathname == '/'
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <Box sx={styles.headerWrapper}>

      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
        <Box
          as="header"
          sx={styles.header}
          className={mobileMenu ? 'is-mobile-menu' : ''}
        >
          <Container>
            <Box sx={styles.headerInner}>
              <Logo sx={styles.logoStyle} />

              <Flex
                as="nav"
                sx={styles.navbar}
                className={mobileMenu ? 'navbar active' : 'navbar'}
              >
                <Box
                  as="ul"
                  sx={styles.navList}
                  className={mobileMenu ? 'active' : ''}
                >

                  {menuItems.map(({ path, label }, i) => (
                    <li key={i}>
                      {path == 'gallery' ?
                        <Link href='/galeri'>
                          <NavLink
                            label={label}
                            onClick={closeMobileMenu}
                          />
                        </Link>

                        : isHome ? <NavLink
                          path={path}
                          label={label}
                          onClick={closeMobileMenu}
                        /> : path == 'gallery' ?

                          <Link href='/' onClick={closeMobileMenu}>
                            <a style={{
                              color: 'white', lineHeigh: '1.5', fontWeight: 'normal', boxSizing: 'border-box',
                              listStyle: 'none', textDecoration: 'none', ':hover': { cursor: 'pointer' }, marginRight: '2.8em',
                            }}>{label}</a></Link> : <Link href='/galeri'>
                            <NavLink
                              label={label}
                              onClick={closeMobileMenu}
                            />
                          </Link>
                      }
                    </li>
                  ))}

                </Box>
                {mobileMenu ? <Link href='/basvur' passHref >
                  <a target='_blank' rel="noopener noreferrer">
                    <Button sx={styles.joinNow} variant="primaryMd"  >
                      Şimdi başvur
                    </Button>
                  </a>
                </Link> : null}
              </Flex>

              {mobileMenu ? (
                <Button variant="text" sx={styles.closeButton}>
                  <GrClose onClick={closeMobileMenu} size="20px" color='#fff' style={{ ':hover': { cursor: 'pointer' } }} />
                </Button>
              ) : (
                <MenuButton sx={styles.toggleMenu}
                  aria-label="Toggle Menu"
                  onClick={toggleMobileMenu}
                />
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}

const styles = {
  headerWrapper: {
    zIndex: 1000,
    position: 'relative',
    fontFamily: 'Helvetica',
    '.is-sticky': {
      header: {
        backgroundColor: '#10132d',
        boxShadow: '0 6px 13px rgba(38, 78, 118, 0.1)',
        py: [10],
      },
    },
  },
  logoStyle: {
    ':hover': {
      cursor: 'pointer'
    }
  },
  header: {
    position: 'fixed',
    backgroundColor: '#10132d',
    left: 0,
    right: 0,
    py: [20],
    /*  transition: 'all 0.3s ease-in-out 0s',
     '&.is-mobile-menu': {
       backgroundColor: '#10132d',
     }, */
  },
  toggleMenu: {
    color: 'white',
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1000,
    '@media only screen and (max-width: 968px)': {
      '.navbar': {
        position: 'absolute',
        top: '100%',
        backgroundColor: '#10132d',
        width: '100%',
        left: 0,
        p: '20px 30px',
        display: 'block',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        opacity: 0,
        visibility: 'hidden',
        transition: 'all 0.3s ease-in-out 0s',
        '&.active': {
          opacity: 1,
          visibility: 'visible',
          fontWeight: '600',
          fontSize: '24px'
        },
        ul: {
          display: 'block',
          'li + li': {
            marginTop: 5,
          },
        },
        button: {
          marginTop: 8,
          width: '100%',
        },
      },
    },
  },
  navbar: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    color: 'white',
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    p: 0,
    backgroundColor: '#10132d',
    '.nav-item': {
      cursor: 'pointer',
      fontWeight: 400,
      padding: 0,
      margin: '0 20px',
    },
    '.active': {
      color: 'primary',
    },
  },
  joinNow: {
    marginLeft: 'auto',
    fontFamily: "Helvetica"
  },
  closeButton: {
    height: '32px',
    padding: '4px',
    minHeight: 'auto',
    width: '32px',
    ml: '3px',
    ':hover': { cursor: 'pointer' },
    backgroundColor: 'white',
    borderRadius: '50%'
  },
};
