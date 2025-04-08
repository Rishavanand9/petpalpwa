import React, { useState } from 'react';
import styled from 'styled-components';

const HiddenInput = styled.input`
  display: none;
`;

const UploadContainer = styled.label`
  background-color: #fef7cc;
  border-radius: 10px;
  padding: 1.5rem 2rem;
  width: 70vw;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const UploadTitle = styled.div`
  font-weight: 500;
  font-size: 1rem;
  color: #333;
`;

const UploadSubtitle = styled.div`
  font-size: 0.875rem;
  color: #999;
`;

const FileName = styled.div`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #555;
  word-break: break-word;
`;

interface UploadIDProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadID: React.FC<UploadIDProps> = ({ onChange }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFileName(e.target.files[0].name);
    }
    onChange(e); // still propagate to parent
  };

  return (
    <UploadContainer>
      <UploadTitle>Upload ID</UploadTitle>
      <UploadSubtitle>Tap to Upload</UploadSubtitle>
      <HiddenInput
        type="file"
        name="idImage"
        accept="image/*"
        onChange={handleChange}
      />
      {fileName && <FileName>{fileName}</FileName>}
    </UploadContainer>
  );
};

export default UploadID;
