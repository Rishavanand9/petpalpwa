"use client";
import AppLogo from "@/app/components/shared/AppLogo";
import AppName from "@/app/components/shared/AppName";
import Button from "@/app/components/shared/Button";
import { ButtonContainer, GuestLink, LimitedText, WelcomeContainer, TitleText } from "./styles";
import { WELCOME_TEXT } from "@/constants";
import { useRouter } from 'next/navigation';

export default function Welcome() {
    const router = useRouter();

    return (
        <WelcomeContainer>

            <TitleText>{WELCOME_TEXT.TITLE}</TitleText>
            <AppLogo />
            <AppName />

            <ButtonContainer>
                <Button variant="primary" size={16} onClick={() => router.push('/register')}>
                    {WELCOME_TEXT.SIGN_UP}
                </Button>
                <Button variant="secondary" size={16} onClick={() => router.push('/login')}>
                    {WELCOME_TEXT.LOG_IN}
                </Button>

                <div style={{ textAlign: 'center', marginTop: '8px' }}>
                    <div>{WELCOME_TEXT.OR}</div>
                    <GuestLink href="/guest">
                        {WELCOME_TEXT.GUEST}
                    </GuestLink>
                    <div>
                        <LimitedText>{WELCOME_TEXT.LIMITED}</LimitedText>
                    </div>

                </div>
            </ButtonContainer>
        </WelcomeContainer>
    );
}