import heroImage from "@/assets/img/boxboxd-hero-image.jpeg";
import { Button } from "@/shared/ui/button";

export function HeroSection() {
  return (
    <div className="w-full relative">
      <img
        src={heroImage}
        alt="hero section image"
        className="w-full h-160 object-cover"
      />

      <div className="absolute inset-0 bg-hero-vignette"></div>

      <div className="relative flex flex-col gap-8 align-center">
        <div
          className="flex flex-col text-zinc-100 absolute 
        z-20 bottom-12 left-1/2 -translate-x-1/2 items-center text-center font-semibold text-4xl"
        >
          <span>Track races you've watched.</span>
          <span>Unlock achievements.</span>
          <span>Tell your friends what's good.</span>
        </div>
        <div className="flex justify-center">
          <Button size={"sm"}>Get started - It's free! </Button>
        </div>
      </div>
    </div>
  );
}
