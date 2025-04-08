'use client';

import Button from "@/app/components/shared/Button";
import { EulaContainer, Footer, Heading, List, Paragraph, SubHeading } from "./styles";
import { useRouter } from "next/navigation";


export default function Eula() {
  const router = useRouter();

  const handleAccept = () => {
    router.back();
    localStorage.setItem('acceptedEula', 'true');
  }

  return (
    <EulaContainer>
      <Heading>PetPal – End User License Agreement (EULA)</Heading>
      <Paragraph><strong>Effective Date:</strong> [Insert Date]</Paragraph>
      <Paragraph><strong>Version:</strong> 1.0</Paragraph>

      <SubHeading>1. Acceptance of Terms</SubHeading>
      <Paragraph>
        By downloading, accessing, or using the PetPal mobile or web application (“App”), you agree to be bound by this EULA.
      </Paragraph>

      <SubHeading>2. License Grant</SubHeading>
      <Paragraph>You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes only.</Paragraph>
      <List>
        <li>Use the app for booking and pet profile management</li>
        <li>Do not redistribute, modify, or reverse-engineer the application</li>
      </List>

      <SubHeading>3. User Responsibilities</SubHeading>
      <List>
        <li>Provide accurate, up-to-date profile and pet information</li>
        <li>Comply with all laws and respect other users</li>
      </List>

      <SubHeading>4. Account Security</SubHeading>
      <Paragraph>You are responsible for keeping your login credentials secure.</Paragraph>

      <SubHeading>5. Content Ownership</SubHeading>
      <Paragraph>You retain rights to uploaded content but grant us permission to use it for platform operations.</Paragraph>

      <SubHeading>6. Prohibited Use</SubHeading>
      <List>
        <li>No harassment, fraud, or misuse</li>
        <li>No collection of data or impersonation</li>
      </List>

      <SubHeading>7. Suspension and Termination</SubHeading>
      <Paragraph>
        PetPal may terminate your account for violation of terms without prior notice.
      </Paragraph>

      <SubHeading>8. Limitation of Liability</SubHeading>
      <Paragraph>
        PetPal is not responsible for injuries, losses, or damages from pet interactions or service misuse.
      </Paragraph>

      <SubHeading>9. Indemnification</SubHeading>
      <Paragraph>
        You agree to hold PetPal harmless from any claims related to your use of the platform.
      </Paragraph>

      <SubHeading>10. Updates and Modifications</SubHeading>
      <Paragraph>
        This EULA may be updated. Continued use implies acceptance of changes.
      </Paragraph>

      <SubHeading>11. Governing Law</SubHeading>
      <Paragraph>This agreement is governed by the laws of [Insert Jurisdiction].</Paragraph>

      <SubHeading>12. Contact Us</SubHeading>
      <Paragraph>
        For any questions, email us at <strong>legal@petpal.com</strong>.
      </Paragraph>

      <Footer>
      <Button onClick={handleAccept}>Accept</Button>
      </Footer>
    </EulaContainer>
  );
}
