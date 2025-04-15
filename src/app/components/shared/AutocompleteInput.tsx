'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

const SuggestionBox = styled.ul`
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 6px;
  max-height: 150px;
  overflow-y: auto;
  padding: 8px;
  background-color: white;
  list-style: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const SuggestionItem = styled.li`
  padding: 6px 8px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #eee;
  }
`;

const defaultMockData = [
  'Golden Retriever',
  'Labrador',
  'Poodle',
  'Pitbull',
  'Parrot',
  'Turtle',
  'Snake',
  'Fish',
  'Bird',
  'Cat',
  'Dog',
  'Rabbit',
  'Hamster',
  'Guinea Pig',
  'Mouse',
  'Rat',
  'Snake',
  'Fish',
];

interface AutoCompleteInputProps {
  label: string;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchData?: (query: string) => Promise<string[]>; // custom data fetch function
  placeholder?: string;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  label,
  id,
  onChange,
  fetchData,
  placeholder,
  ...props
}) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Debounce input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);
    return () => clearTimeout(handler);
  }, [query]);

  // Fetch suggestions
  useEffect(() => {
    const getSuggestions = async () => {
      if (!debouncedQuery) {
        setSuggestions([]);
        return;
      }

      if (fetchData) {
        try {
          const results = await fetchData(debouncedQuery);
          setSuggestions(results);
        } catch (err) {
          console.error('Error fetching suggestions:', err);
          setSuggestions([]);
        }
      } else {
        const filtered = defaultMockData.filter((item) =>
          item.toLowerCase().includes(debouncedQuery.toLowerCase())
        );
        setSuggestions(filtered);
      }
    };

    getSuggestions();
  }, [debouncedQuery, fetchData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onChange?.(e);
  };

  const handleSuggestionClick = (item: string) => {
    setQuery(item);
    setSuggestions([]);
  };

  return (
    <div>
      <Input
        label={label}
        id={id}
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        {...props}
      />
      {suggestions.length > 0 && (
        <SuggestionBox>
          {suggestions.map((item, index) => (
            <SuggestionItem key={index} onClick={() => handleSuggestionClick(item)}>
              {item}
            </SuggestionItem>
          ))}
        </SuggestionBox>
      )}
    </div>
  );
};

export default AutoCompleteInput;
