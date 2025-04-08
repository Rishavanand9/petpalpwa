"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/app/components/shared/Input';
import Button from '@/app/components/shared/Button';
import AppLogo from '@/app/components/shared/AppLogo';
import { TitleText } from '@/app/(main)/welcome/styles';
import { ErrorText, Form, VerifyContainer } from './styles';
import UploadID from '@/app/components/shared/Upload';
import TextArea from '@/app/components/shared/TextArea';

interface FormData {
    address: string;
    otp: string;
    idImage?: File;
}

export default function VerifyPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        address: '',
        otp: '',
    });
    const [errors, setErrors] = useState<{ address?: string; otp?: string }>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        const newErrors: { address?: string; otp?: string } = {};
        if (!formData.address) {
            newErrors.address = 'Address is required';
        }
        if (!formData.otp || formData.otp.length < 4) {
            newErrors.otp = 'Valid OTP is required';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            // TODO: Implement verification API call here
            console.log('Verification submitted:', formData);
            router.push('/create-profile'); // Redirect to profile creation after verification
        } catch (error) {
            console.error('Verification error:', error);
        }
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        let files: FileList | null = null;

        // Check if the event target is an input element and if it has files
        if ('files' in e.target) {
            files = (e.target as HTMLInputElement).files;
        }

        if (type === 'file' && files) {
            setFormData(prev => ({
                ...prev,
                [name]: files[0],
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value,
            }));
        }

        // Clear errors when user types
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    return (
        <VerifyContainer>
            <AppLogo />
            <TitleText>Verification</TitleText>

            <Form onSubmit={handleSubmit} autoComplete="off">
                <UploadID onChange={handleInputChange} />
                <TextArea
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                />
                {errors.address && <ErrorText>{errors.address}</ErrorText>}

                <Input
                    label="Enter OTP"
                    name="otp"
                    value={formData.otp}
                    onChange={handleInputChange}
                    required
                    maxLength={6}
                    pattern="[0-9]*"
                />
                <Button variant="secondary" size={10} width="40%">
                    Send OTP
                </Button>
                {errors.otp && <ErrorText>{errors.otp}</ErrorText>}

                <Button type="submit" variant="primary" size={16} mT={2}>
                    Verify Identity
                </Button>
            </Form>
        </VerifyContainer>
    );
}