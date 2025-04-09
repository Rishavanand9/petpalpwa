"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/app/components/shared/Input';
import Button from '@/app/components/shared/Button';
import AppLogo from '@/app/components/shared/AppLogo';
import { TitleText } from '@/app/(main)/welcome/styles';
import { LOGIN_TEXT } from '@/constants';
import { validateEmailPhone, validatePassword } from '@/utils/validation';
import { ErrorText, Form, LinkSpan, AuthContainer } from '@/app/(auth)/styles';

interface FormData {
    emailPhone: string;
    password: string;
}

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        emailPhone: '',
        password: ''
    });
    const [errors, setErrors] = useState<{ emailPhone?: string; password?: string }>({});


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
            router.push('/home');
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
        <AuthContainer>
            <AppLogo />
            <TitleText>{LOGIN_TEXT.TITLE}</TitleText>

            <Form onSubmit={handleSubmit} autoComplete="off">
                <Input
                    label={LOGIN_TEXT.EMAIL_PHONE}
                    type="text"
                    name="emailPhone"
                    value={formData.emailPhone}
                    onChange={handleInputChange}
                    autoComplete="off"
                    required
                />
                {errors.emailPhone && <ErrorText>{errors.emailPhone}</ErrorText>}

                <Input
                    label={LOGIN_TEXT.PASSWORD}
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                {errors.password && <ErrorText>{errors.password}</ErrorText>}

                <Button type="submit" variant="primary" size={16}>
                    {LOGIN_TEXT.LOGIN}
                </Button>
            </Form>
            <LinkSpan>
                {LOGIN_TEXT.FORGOT_PASSWORD}
            </LinkSpan>
        </AuthContainer>
    );
}
