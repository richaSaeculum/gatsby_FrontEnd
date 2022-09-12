import React, { useContext } from 'react';
import Drawer from '../drawer/drawer';
import { DrawerContext } from '../drawer/drawer-context';
import Menu from './menu';
import {
  MobileMenuWrapper,
  DrawerContentWrapper,
  LogoTextMobile,
  DrawerHead,
  DrawerLogo,
  DrawerClose,
  HamburgerIcon,
} from './navbar.style';
import { FiX } from 'react-icons/fi';
import Link from 'next/link';

const MobileMenu = ({
  items,
  ...props
}) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleDrawer = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <MobileMenuWrapper {...props}>
      <Drawer
        width="285px"
        placement="left"
        drawerHandler={
          <HamburgerIcon>
            <span />
            <span />
            <span />
          </HamburgerIcon>
        }
        open={state.isOpen}
        toggleHandler={toggleDrawer}
      >
        <DrawerContentWrapper>
          <DrawerHead>
            <DrawerLogo>
              <Link href="/">
                {/* <img src={'/images/logo.png'} alt="logo" /> */}
                <LogoTextMobile className='mobile-logo'>The Common Logic</LogoTextMobile>
              </Link>
            </DrawerLogo>
            <DrawerClose onClick={toggleDrawer}>
              <FiX />
            </DrawerClose>
          </DrawerHead>
          <Menu items={items} className="mobile-menu" />
        </DrawerContentWrapper>
      </Drawer>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
