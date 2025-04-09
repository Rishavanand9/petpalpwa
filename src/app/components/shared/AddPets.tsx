import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';
import Image from 'next/image';
import { AddPhoto } from '@/app/(auth)/styles';

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 10px 0;
  align-items: center;
`;

const AddPetButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #ccc;
  min-width: 120px;
  flex: 1;
`;

const PhotoContainer = styled.div`
    position: relative;
    width: 70px;
    height: 70px;
`;

const PhotoPreview = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
`;

interface Pet {
    name: string;
    age: string;
    species: string;
    breed: string;
    weight: string;
    nature: string;
    info: string;
    photo?: File;
    photoPreviewUrl?: string;
}

interface Props {
    onSave: (pets: Pet[]) => void;
}

const AddPets: React.FC<Props> = ({ onSave }) => {
    const [pets, setPets] = useState<Pet[]>([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [currentPet, setCurrentPet] = useState<Pet>({
        name: '',
        age: '',
        species: '',
        breed: '',
        weight: '',
        nature: '',
        info: '',
    });
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCurrentPet(prev => ({ ...prev, [name]: value }));
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setCurrentPet(prev => ({
                ...prev,
                photo: file,
                photoPreviewUrl: previewUrl
            }));
        }
    };

    const addOrUpdatePet = () => {
        // Basic validation
        if (!currentPet.name.trim()) {
            alert("Pet name is required");
            return;
        }

        let updatedPets;
        if (editingIndex !== null) {
            updatedPets = [...pets];
            updatedPets[editingIndex] = currentPet;
        } else {
            updatedPets = [...pets, currentPet];
        }
        
        // Update state with the new pets array
        setPets(updatedPets);

        // Reset form
        if (currentPet.photoPreviewUrl) {
            URL.revokeObjectURL(currentPet.photoPreviewUrl);
        }

        setCurrentPet({
            name: '',
            age: '',
            species: '',
            breed: '',
            weight: '',
            nature: '',
            info: '',
        });
        setEditingIndex(null);
        setShowAddForm(false);
    };

    return (
        <div>
            <Row>
                <h3>My Pets</h3>
                <AddPetButton onClick={() => setShowAddForm(true)}>+</AddPetButton>
            </Row>

            {pets.map((pet, index) => (
                <Card key={index}>
                    <Row>
                        {pet.photoPreviewUrl && (
                            <PhotoContainer>
                                <PhotoPreview>
                                    <Image
                                        src={pet.photoPreviewUrl}
                                        alt={pet.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </PhotoPreview>
                            </PhotoContainer>
                        )}
                        <div>
                            <strong>{pet.name}</strong>
                            <div>Age: {pet.age}, Species: {pet.species}</div>
                            <div>Breed: {pet.breed}, Weight: {pet.weight}kgs</div>
                            {pet.nature && <div>Nature: {pet.nature}</div>}
                            {pet.info && <em>{pet.info}</em>}
                        </div>
                    </Row>
                    <Row>
                        <Button onClick={() => {
                            setCurrentPet(pet);
                            setEditingIndex(index);
                            setShowAddForm(true);
                        }}>Edit</Button>
                        <Button onClick={() => {
                            const updatedPets = pets.filter((_, i) => i !== index);
                            setPets(updatedPets);
                            onSave(updatedPets);
                        }}>Delete</Button>
                    </Row>
                </Card>
            ))}

            {showAddForm && (
                <Card>
                    <h3>{editingIndex !== null ? 'Edit Pet' : 'Add New Pet'}</h3>
                    <Row>
                        <PhotoContainer>
                            {currentPet.photoPreviewUrl ? (
                                <PhotoPreview>
                                    <Image
                                        src={currentPet.photoPreviewUrl}
                                        alt="Pet"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </PhotoPreview>
                            ) : (
                                <AddPhoto>
                                    <label htmlFor="pet-photo" style={{ cursor: 'pointer', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        +
                                    </label>
                                </AddPhoto>
                            )}
                            <input
                                id="pet-photo"
                                type="file"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                style={{ display: 'none' }}
                            />
                        </PhotoContainer>
                    </Row>
                    <Input label="Name" name="name" value={currentPet.name} onChange={handleChange} />
                    <Input label="Age" name="age" value={currentPet.age} onChange={handleChange} />
                    <Row>
                        <Select name="species" value={currentPet.species} onChange={handleChange}>
                            <option value="">Species</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Bird">Bird</option>
                        </Select>
                        <Select name="breed" value={currentPet.breed} onChange={handleChange}>
                            <option value="">Breed</option>
                            <option value="Labrador">Labrador</option>
                            <option value="Persian">Persian</option>
                        </Select>
                    </Row>
                    <Row>
                        <Input label="Weight (kgs)" name="weight" value={currentPet.weight} onChange={handleChange} />
                        <Select name="nature" value={currentPet.nature} onChange={handleChange}>
                            <option value="">Nature</option>
                            <option value="Aggressive">Aggressive</option>
                            <option value="Friendly">Friendly</option>
                        </Select>
                    </Row>
                    <TextArea
                        rows={3}
                        label="Additional Info"
                        placeholder="Additional Information like diet preferences, medical history, etc."
                        value={currentPet.info}
                        onChange={handleChange} />
                    <Row>
                        <Button onClick={addOrUpdatePet}>
                            {editingIndex !== null ? 'Update Pet' : 'Add Pet'}
                        </Button>
                        <Button onClick={() => {
                            setShowAddForm(false);
                            setEditingIndex(null);
                            setCurrentPet({
                                name: '',
                                age: '',
                                species: '',
                                breed: '',
                                weight: '',
                                nature: '',
                                info: '',
                            });
                        }}>Cancel</Button>
                    </Row>
                </Card>
            )}
        </div>
    );
};

export default AddPets;
