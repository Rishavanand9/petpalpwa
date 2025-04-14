"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Input from '@/app/components/shared/Input';
import Button from '@/app/components/shared/Button';
import AppLogo from '@/app/components/shared/AppLogo';
import { TitleText } from '@/app/welcome/styles';
import { ErrorText, Form, AuthContainer, ProfileSection, ProfileCircle, AddIcon, SliderContainer, ChipsContainer, ChipsGrid, Chip, ResidenceOptions, RadioGroup, RadioOption, AddPhoto } from '../styles';
import TextArea from '@/app/components/shared/TextArea';
import AddPets from '@/app/components/shared/AddPets';
import PhotoUploadContainer from '@/app/components/shared/PhotoUploadContainer';

interface FormData {
    profilePic: File | null;
    fullName: string;
    bio: string;
    petExperience: string;
    currentPets: Array<string>;
    petPreferences: Array<string>;
    residenceType: 'shortStay' | 'longStay' | 'both';
}

interface FormErrors {
    fullName?: string;
    bio?: string;
    petExperience?: string;
}

// Add this constant for experience levels
const EXPERIENCE_LEVELS = {
    '0': 'Beginner',
    '1': 'Intermediate',
    '2': 'Advanced',
    '3': 'Expert'
};

export default function CreateProfilePage() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        profilePic: null,
        fullName: '',
        bio: '',
        petExperience: '',
        currentPets: [],
        petPreferences: [],
        residenceType: 'both'
    });
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const [errors, setErrors] = useState<FormErrors>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        const newErrors: FormErrors = {};
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }
        if (!formData.bio.trim()) {
            newErrors.bio = 'Bio is required';
        }
        if (!formData.petExperience) {
            newErrors.petExperience = 'Pet experience is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            // TODO: Implement profile creation API call here
            console.log('Profile created:', formData);
            router.push('/home'); // Redirect to home after profile creation
        } catch (error) {
            console.error('Profile creation error:', error);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));

        // Clear errors when user types
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const handleChipSelection = (category: 'currentPets' | 'petPreferences', value: string) => {
        setFormData(prev => ({
            ...prev,
            [category]: prev[category].includes(value)
                ? prev[category].filter(item => item !== value)
                : [...prev[category], value]
        }));
    };

    const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({ ...prev, profilePic: file }));
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };


    const handlePetsSave = (pets: any[]) => {
        console.log(pets);
    }

    return (

        <AuthContainer style={{ margin: '30em 0.5em' }}>
            <AppLogo />
            <TitleText>Profile Creation</TitleText>

            <Form onSubmit={handleSubmit} autoComplete="off">

                <ProfileSection>
                    <ProfileCircle>
                        {previewUrl ? (
                            <Image
                                src={previewUrl}
                                alt="Profile"
                                fill
                                style={{ borderRadius: '50%', objectFit: 'cover' }}
                            />
                        ) : (
                            <AddPhoto>
                                <label htmlFor="profile-pic" style={{ cursor: 'pointer', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    +
                                </label>
                            </AddPhoto>
                        )}
                        <AddIcon>
                            <label htmlFor="profile-pic" style={{ cursor: 'pointer' }}>+</label>
                            <input
                                id="profile-pic"
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePicChange}
                                style={{ display: 'none' }}
                            />
                        </AddIcon>
                    </ProfileCircle>
                </ProfileSection>

                <Input
                    label="Full Name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                />
                {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}

                <TextArea
                    label="Bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    required
                />
                {errors.bio && <ErrorText>{errors.bio}</ErrorText>}

                <SliderContainer>
                    <label htmlFor="petExperience">Pet Experience Level</label>
                    <input
                        type="range"
                        id="petExperience"
                        name="petExperience"
                        min="0"
                        max="3"
                        step="1"
                        value={formData.petExperience}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            height: '24px',
                            marginTop: '8px'
                        }}
                        required
                    />
                    <div className="slider-labels">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Advanced</span>
                        <span>Expert</span>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '8px', color: '#007AFF' }}>
                        {EXPERIENCE_LEVELS[formData.petExperience as keyof typeof EXPERIENCE_LEVELS]}
                    </div>
                </SliderContainer>
                {errors.petExperience && <ErrorText>{errors.petExperience}</ErrorText>}

                <AddPets onSave={handlePetsSave} />

                <ChipsContainer>
                    <h4>Pet Preferences</h4>
                    <ChipsGrid>
                        {['Dog', 'Cat', 'Bird', 'Fish', 'Other'].map(pet => (
                            <Chip
                                key={pet}
                                selected={formData.petPreferences.includes(pet)}
                                onClick={() => handleChipSelection('petPreferences', pet)}
                            >
                                {pet}
                            </Chip>
                        ))}

                    </ChipsGrid>
                </ChipsContainer>

                <ResidenceOptions>
                    <h4>Residence Type</h4>
                    <RadioGroup>
                        {[
                            { value: 'shortStay', label: 'Short Stays (Hours)' },
                            { value: 'longStay', label: 'Long Stays (Days / Months)' },
                            { value: 'both', label: 'Both' }
                        ].map(option => (
                            <RadioOption key={option.value}>
                                <input
                                    type="radio"
                                    name="residenceType"
                                    value={option.value}
                                    checked={formData.residenceType === option.value}
                                    onChange={handleInputChange}
                                />
                                {option.label}
                            </RadioOption>
                        ))}
                    </RadioGroup>
                </ResidenceOptions>

                <Button
                    type="submit"
                    variant="primary"
                >
                    Save Profile
                </Button>
            </Form>
        </AuthContainer>
    );
}