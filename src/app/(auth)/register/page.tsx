"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/app/components/shared/Input';
import Button from '@/app/components/shared/Button';
import AppLogo from '@/app/components/shared/AppLogo';
import { ErrorText, Form, LinkSpan, RadioGroup, RadioOption, RegisterContainer, TermsContainer } from './styles';
import { TitleText } from '@/app/(main)/welcome/styles';
import { REGISTER_TEXT } from '@/constants';
import { validateEmailPhone, validatePassword } from '@/utils/validation';

interface FormData {
    emailPhone: string;
    password: string;
    userType: 'petOwner' | 'petHost' | 'both';
    acceptTerms: boolean;
}

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        emailPhone: '',
        password: '',
        userType: 'both',
        acceptTerms: false,
    });
    const [errors, setErrors] = useState<{ emailPhone?: string; password?: string }>({});

    useEffect(() => {
        const accepted = localStorage.getItem('acceptedEula');
        if (accepted === 'true') {
            setFormData(prev => ({
                ...prev,
                acceptTerms: true,
            }));
            localStorage.removeItem('acceptedEula'); // clear it after use
        }
    }, []);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const emailPhoneError = validateEmailPhone(formData.emailPhone);
        const passwordError = validatePassword(formData.password);

        if (emailPhoneError || passwordError) {
            setErrors({ emailPhone: emailPhoneError, password: passwordError });
            return;
        }

        try {
            console.log('Form submitted:', formData);
            router.push('/verify');
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        if (name === 'emailPhone') {
            setErrors(prev => ({ ...prev, emailPhone: '' }));
        } else if (name === 'password') {
            setErrors(prev => ({ ...prev, password: '' }));
        }
    };

    return (
        <RegisterContainer>
            <AppLogo />
            <TitleText>{REGISTER_TEXT.TITLE}</TitleText>

            <Form onSubmit={handleSubmit} autoComplete="off">
                <Input
                    label={REGISTER_TEXT.EMAIL_PHONE}
                    type="text"
                    name="emailPhone"
                    value={formData.emailPhone}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
                {errors.emailPhone && <ErrorText>{errors.emailPhone}</ErrorText>}

                <Input
                    label={REGISTER_TEXT.PASSWORD}
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                {errors.password && <ErrorText>{errors.password}</ErrorText>}

                <RadioGroup>
                    <div>{REGISTER_TEXT.USER_TYPE}</div>
                    <RadioOption>
                        <input
                            type="radio"
                            name="userType"
                            value="petOwner"
                            checked={formData.userType === 'petOwner'}
                            onChange={handleInputChange}
                        />
                        {REGISTER_TEXT.PET_OWNER}
                    </RadioOption>
                    <RadioOption>
                        <input
                            type="radio"
                            name="userType"
                            value="petHost"
                            checked={formData.userType === 'petHost'}
                            onChange={handleInputChange}
                        />
                        {REGISTER_TEXT.PET_HOST}
                    </RadioOption>
                    <RadioOption>
                        <input
                            type="radio"
                            name="userType"
                            value="both"
                            checked={formData.userType === 'both'}
                            onChange={handleInputChange}
                        />
                        {REGISTER_TEXT.BOTH}
                    </RadioOption>
                </RadioGroup>

                <TermsContainer>
                    <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        required
                    />
                    <LinkSpan>
                        {REGISTER_TEXT.ACCEPT_TERMS}
                        <a href="/eula" >
                            {REGISTER_TEXT.TERMS_AND_CONDITIONS}
                        </a>
                    </LinkSpan>
                </TermsContainer>

                <Button type="submit" variant="primary" size={16}>
                    {REGISTER_TEXT.CREATE_ACCOUNT}
                </Button>
            </Form>
        </RegisterContainer>
    );
}
