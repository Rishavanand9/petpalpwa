import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

// Define the type for individual button props
export interface ButtonItem {
    name: string;
    id: string;
    onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'default' | 'primary' | 'success' | 'danger';
}

// Define the props for the FloatingTabs component
interface FloatingTabsProps {
    buttons: ButtonItem[];
    activeButtonId?: string;
}

// Styled components
const FloatingTabsWrapper = styled.div`
  position: relative;
  padding: 0px 8px;
`;

const FloatingTabsContainer = styled.div`
  display: flex;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 8px;
  gap: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  box-shadow: 0 10px 10px 0 ${({ theme }) => theme.colors.secondary};
  -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
  
  &::-webkit-scrollbar {
    display: none;
  }
`;


const StyledButton = styled.button<{
    isActive: boolean;
    variant: 'default' | 'primary' | 'success' | 'danger';
}>`
  flex: 1;
  min-width: max-content;
  border-radius: 6px;
  border: none;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  ${({ isActive, variant, theme }) => {
        // Default styling
        let bgColor = isActive ? theme.colors.primary : theme.colors.gray[100];
        let textColor = isActive ? theme.colors.background : theme.colors.text;

        // Variant-specific styling
        if (variant === 'primary') {
            bgColor = isActive ? theme.colors.primary : theme.colors.gray[100];
            textColor = isActive ? theme.colors.background : theme.colors.text;
        } else if (variant === 'success') {
            bgColor = isActive ? '#86efac' : theme.colors.gray[100];
            textColor = '#166534';
        } else if (variant === 'danger') {
            bgColor = isActive ? '#fca5a5' : theme.colors.gray[100];
            textColor = '#dc2626';
        }

        return `
      background-color: ${bgColor};
      color: ${textColor};
      &:hover {
        background-color: ${isActive ? bgColor : theme.colors.gray[200]};
      }
    `;
    }}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 11px;
    padding: 10px;
  }
`;

const FloatingTabs: React.FC<FloatingTabsProps> = ({ buttons, activeButtonId }) => {
    const containerRef = useRef<HTMLDivElement>(null);



    // Scroll to active button if present
    useEffect(() => {
        if (containerRef.current && activeButtonId) {
            const activeButton = containerRef.current.querySelector(`[data-id="${activeButtonId}"]`) as HTMLElement;
            if (activeButton) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const buttonRect = activeButton.getBoundingClientRect();

                // If the button is not fully visible, scroll to make it visible
                if (buttonRect.left < containerRect.left || buttonRect.right > containerRect.right) {
                    const scrollOffset = activeButton.offsetLeft - (containerRef.current.clientWidth / 2) + (activeButton.clientWidth / 2);
                    containerRef.current.scrollTo({
                        left: Math.max(0, scrollOffset),
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, [activeButtonId]);

    return (
        <FloatingTabsWrapper>
            <FloatingTabsContainer
                ref={containerRef}
                onScroll={() => { }}
            >
                {buttons.map((button) => (
                    <StyledButton
                        key={button.id}
                        data-id={button.id}
                        isActive={activeButtonId === button.id}
                        variant={button.variant || 'default'}
                        onClick={(e) => button.onClick(e)}
                    >
                        {button.name}
                    </StyledButton>
                ))}
            </FloatingTabsContainer>
        </FloatingTabsWrapper>
    );
};

export default FloatingTabs;