import Image from "next/image";

export default function AppLogo() {
    return (
        <Image src="/appLogo.svg" alt="appLogo" width={100} height={100} />
    );
}
