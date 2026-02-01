import { HeroSection } from "@/components/HeroSection";
import { LoginModal } from "@/components/LoginModal";
import { useState } from "react";

export default function Home() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    function closeLoginModal() {
        setIsLoginModalOpen(false);
    }

    function openLoginModal() {
        setIsLoginModalOpen(true)
    }

    return <>
        <HeroSection onOpen={openLoginModal}/>
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal}/>
    </>
}