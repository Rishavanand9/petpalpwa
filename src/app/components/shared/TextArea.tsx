import React from 'react';
import styled from 'styled-components';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 12px;
  color: #333;
`;

const StyledTextArea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  outline: none;
  min-height: 100px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(187, 188, 240, 0.49);
  }
`;

const TextArea: React.FC<TextAreaProps> = ({ label, id, ...props }) => {
  const textAreaId = id || label.replace(/\s+/g, '-').toLowerCase();

  return (
    <Wrapper>
      <Label htmlFor={textAreaId}>{label}</Label>
      <StyledTextArea id={textAreaId} {...props} />
    </Wrapper>
  );
};

export default TextArea;
