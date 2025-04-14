'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import AppLogo from '../shared/AppLogo';
import { HeaderContainer, LocationWrapper, IconWrapper, NotificationWrapper, NotificationCount, ProfileIcon } from './styles';


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      {/* Logo */}
      <AppLogo width={50} height={50} />

      {/* Location */}
      <LocationWrapper>
        <Icon icon="mdi:map-marker" style={{ marginRight: '6px', fontSize: '12px' }} />
        HSR Layout, Bangalore
      </LocationWrapper>

      {/* Right Icons */}
      <IconWrapper>
        <NotificationWrapper>
          <Icon icon="mdi:bell-outline" />
          <NotificationCount>4</NotificationCount>
        </NotificationWrapper>
        <ProfileIcon icon="mdi:account-circle-outline" />
      </IconWrapper>
    </HeaderContainer>
  );
};

export default Header;
