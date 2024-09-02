"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Canvas() {
    const canvasRef = useRef(null);
    const images = useRef([]);
    const frameIndex = useRef(0);

    useEffect(() => {
        // Load images dynamically
        const loadImages = () => {
            const totalImages = 170; // Set this to the number of images you have
            for (let i = 1; i <= totalImages; i++) {
                const img = new Image();
                img.src = `/images/canvas/${i}.png`;
                images.current.push(img);
            }

            // Display the first image after loading
            images.current[0].onload = () => {
                drawImage(0); // Display the first image after it has loaded
            };
        };

        const drawImage = (index) => {
            const img = images.current[index];
            const ctx = canvasRef.current.getContext('2d');
            if (img && ctx) {
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                const scale = Math.min(
                    canvasRef.current.width / img.width,
                    canvasRef.current.height / img.height
                );
                const x = (canvasRef.current.width / 2) - (img.width / 2) * scale;
                const y = (canvasRef.current.height / 2) - (img.height / 2) * scale;
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / maxScroll;
            frameIndex.current = Math.min(
                images.current.length - 1,
                Math.floor(scrollFraction * images.current.length)
            );
            drawImage(frameIndex.current);
        };

        loadImages();

        gsap.to(frameIndex.current, {
            value: images.current.length - 1,
            ease: 'none',
            scrollTrigger: {
                trigger: canvasRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                onUpdate: handleScroll
            }
        });

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={620}
            height={620}
            style={{
                position: 'fixed',
                top: "50px",
                right: "-170px",
                zIndex: 1000, // Adjust z-index if necessary
            }}
        />
    );
}
