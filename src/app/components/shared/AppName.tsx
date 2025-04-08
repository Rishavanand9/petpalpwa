import { styled } from "styled-components";
import appConfig from "@/config"; 

const StyledAppName = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  font-size: 1.5rem;
`;

export default function AppName() {
    return (
        <StyledAppName>{appConfig.name}</StyledAppName>
    );
}
