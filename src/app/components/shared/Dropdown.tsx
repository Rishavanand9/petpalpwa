'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
`;

const DropdownButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid #ccc;
  padding: 6px 8px;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-size: 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    opacity: 0.7;
  }
`;

const DropdownList = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 5px 0 0;
  padding: 0;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 1000;
`;

const DropdownItem = styled.li`
  padding: 6px 8px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`;


type DropdownProps = {
  options: string[];
  placeholder?: string;
  onSelect: (value: string) => void;
  selectedValue: string | null;
};

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder = 'Select...', onSelect, selectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(selectedValue);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent dropdown from opening
    setSelected(null);
    onSelect('');
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setIsOpen((prev) => !prev)}>
        <span>{selected || placeholder}</span>
        <IconWrapper>
          {selected && (
            <ClearButton onClick={handleClear}>
              <Icon icon="mdi:close" width="16" height="16" />
            </ClearButton>
          )}
          <Icon 
            icon="mdi:chevron-down" 
            width="20" 
            height="20"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease-in-out',
            }}
          />
        </IconWrapper>
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
        {options.map((option, idx) => (
          <DropdownItem key={idx} onClick={() => handleSelect(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownWrapper>
  );
};

export default Dropdown;
