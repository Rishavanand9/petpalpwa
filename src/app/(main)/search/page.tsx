'use client';
import { useState } from "react";
import AutoCompleteInput from "@/app/components/shared/AutocompleteInput";
import MapComponent from "@/app/components/shared/MapComponent";
import Dropdown from "@/app/components/shared/Dropdown";
import styled from "styled-components";

const DropdownContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

export default function Search() {
    const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
    const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

    const speciesOptions = ["Dog", "Cat", "Bird", "Fish", "Other"];
    const breedOptions = ["Labrador", "Poodle", "Parrot", "Goldfish", "Snake"];

    const dropdownOptions = [
        {
            label: "Species",
            options: speciesOptions,
            selectedValue: selectedSpecies,
            onSelect: setSelectedSpecies,
            placeholder: "Select a Species"
        },
        {
            label: "Breed",
            options: breedOptions,
            selectedValue: selectedBreed,
            onSelect: setSelectedBreed,
            placeholder: "Select a Breed"
        }
    ]

    return (
        <div>
            <AutoCompleteInput
                label="What are you looking for?"
                id="Search-Input"
                fetchData={() => Promise.resolve([])}
                onChange={(e) => console.log('Input changed:', e.target.value)}
                placeholder="Search for host or a pet"
            />
            <DropdownContainer>
                {dropdownOptions.map((option) => (
                    <Dropdown
                        key={option.label}
                        options={option.options}
                        onSelect={option.onSelect}
                        selectedValue={option.selectedValue}
                        placeholder={option.placeholder}
                    />
                ))}
            </DropdownContainer>
            {/* <MapComponent /> */}
        </div>
    );
}
