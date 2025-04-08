"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AppName from "./components/shared/AppName";
import AppLogo from "./components/shared/AppLogo";
import appConfig from "@/config";
import { ContentWrapper, SplashContainer, Text } from "./styles";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/welcome');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SplashContainer>
      <ContentWrapper>
        <AppLogo />
        <AppName />
        <Text>{appConfig.tagLine}</Text>
      </ContentWrapper>
    </SplashContainer>
  );
}