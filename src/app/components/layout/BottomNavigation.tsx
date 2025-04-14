import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

// Types
interface NavItemProps {
    icon: string;
    label: string;
    path: string;
    active: string;
    onClick: () => void;
}

interface StyledProps {
    active: boolean;
}

// Navigation Config
const NAV_ITEMS = [
    { icon: 'mdi:home', label: 'Home', path: '/home' },
    { icon: 'mdi:magnify', label: 'Search', path: '/search' },
    { icon: 'mdi:book-open-variant', label: 'Bookings', path: '/bookings' },
    { icon: 'mdi:message', label: 'Messages', path: '/messages' },
    { icon: 'mdi:menu', label: 'Menu', path: '/menu' }
];

// Styled Components
const NavContainer = styled.div`
  position: fixed;
  bottom: 16px;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 4px 8px;
  margin: 0 16px;
  width: 100%;
  max-width: 400px;
`;

const NavItemButton = styled.button<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 8px 0;
  background: ${props => props.active ? '#e0e7ff' : 'transparent'};
  border-radius: 9999px;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.active ? '#e0e7ff' : '#f3f4f6'};
  }
`;

const IconWrapper = styled.div<StyledProps>`
  margin-bottom: 4px;
  color: ${props => props.active ? '#4f46e5' : '#6b7280'};
`;

const Label = styled.span<StyledProps>`
  font-size: 12px;
  color: ${props => props.active ? '#4f46e5' : '#6b7280'};
  font-weight: ${props => props.active ? '600' : '400'};
`;

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
    return (
        <NavItemButton active={active === 'true'} onClick={onClick}>
            <IconWrapper active={active === 'true'}>
                <Icon icon={icon} width="24" height="24" />
            </IconWrapper>
            <Label active={active === 'true'}>{label}</Label>
        </NavItemButton>
    );
};

// Component
const BottomNavigation: React.FC = () => {
    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    return (
        <NavContainer>
            <NavBar>
                {NAV_ITEMS.map((item) => (
                    <NavItem
                        key={item.path}
                        icon={item.icon}
                        label={item.label}
                        path={item.path}
                        active={(window.location.pathname.includes(item.path)).toString()}
                        onClick={() => handleNavigation(item.path)}
                    />
                ))}
            </NavBar>
        </NavContainer>
    );
};

export default BottomNavigation;