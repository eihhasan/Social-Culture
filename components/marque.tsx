"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marque";

export default function ThreeDMarqueeDemo() {
    const images = [
        "/carousel.JPG",
        "/carousel2.JPG",
        "/carousel3.JPG",
        "/carousel.JPG",
        "/carousel2.JPG",
        "/carousel3.JPG",
        "/carousel.JPG",
        "/carousel2.JPG",
        "/carousel3.JPG",
        "/carousel.JPG",
        "/carousel2.JPG",
        "/carousel3.JPG",
        "/carousel.JPG",
        "/carousel2.JPG",
        "/carousel3.JPG",
        "/carousel.JPG",
        "/carousel2.JPG",
        "/carousel3.JPG",
        "/carousel.JPG",
        "/carousel2.JPG",
        "/carousel3.JPG",
        "/carousel.JPG",
        "/carousel2.JPG",
        "/carousel3.JPG",
        "/carousel.JPG",
        "/carousel2.JPG",
        "/carousel3.JPG",
        "/carousel.JPG",
        "/carousel2.JPG",
        "/carousel3.JPG",
        "/carousel.JPG",
        "/carousel2.JPG",
        "/carousel3.JPG",
    ];
    return (
        <section className="border border-transparent ">
            <div className="mx-auto my-10 max-w-7xl rounded-3xl relative overflow-hidden border border-transparent">
                {/* Base Background with Radial Gradients */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: "#151221",
                    }}
                >
                    {/* First Radial Gradient */}
                    <div
                        className="absolute"

                    />

                    {/* Second Radial Gradient */}
                    <div
                        className="absolute"

                    />

                    {/* Overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundColor: "#000",
                        }}
                    />
                </div>

                {/* Animated Background Grid */}


                {/* Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse-glow" />
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 right-1/3 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow"
                    style={{ animationDelay: "2s" }}
                />

                {/* Content */}
                <div className="relative" style={{ zIndex: 5 }}>
                    <ThreeDMarquee images={images} />
                </div>
            </div>
        </section>
    );
}
