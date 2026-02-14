import React, { useEffect, useRef } from 'react';
import LightRays from '../components/effects/LightRays';

/**
 * Skills Section with LightRays Background
 */

interface Technology {
    name: string;
    icon: string;
    category: string;
}

const technologies: Technology[] = [
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Language' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Language' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Language' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'Language' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'Tool' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tool' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'Tool' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Database' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Database' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', category: 'Database' },
    { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', category: 'Tool' }
];

const Skills: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationId: number;
        let scrollPosition = 0;
        const scrollSpeed = 0.5;

        const animate = () => {
            scrollPosition += scrollSpeed;

            if (scrollPosition >= slider.scrollWidth / 2) {
                scrollPosition = 0;
            }

            slider.scrollLeft = scrollPosition;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    return (
        <section id="skills" className="relative min-h-screen py-20 bg-black overflow-hidden">
            {/* LightRays Background */}
            <div className="absolute inset-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#39ff14"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    pulsating={false}
                    fadeDistance={2}
                    saturation={1}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-neon-green">
                    Skills & Technologies
                </h2>

                {/* Featured Tech Stack - Golang */}
                <div className="max-w-3xl mx-auto mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-neon-yellow">
                        ⭐ Top Choice Tech Stack
                    </h3>
                    <div className="bg-black/40 backdrop-blur-sm border-2 border-neon-green/50 rounded-lg p-8 hover:border-neon-green transition-all duration-300 group">
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-lg p-6 flex items-center justify-center border border-neon-green/30 group-hover:border-neon-green/60 transition-all duration-300 group-hover:scale-110">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
                                    alt="Golang"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <h4 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                                    Golang
                                </h4>
                                <p className="text-gray-400 text-lg">
                                    Primary language for building high-performance backend systems
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technologies Slider */}
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
                        Technologies I Work With
                    </h3>

                    <div className="relative overflow-hidden">
                        {/* Gradient Overlays */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                        {/* Slider Container */}
                        <div
                            ref={sliderRef}
                            className="flex gap-6 overflow-x-hidden py-8"
                            style={{ scrollBehavior: 'auto' }}
                        >
                            {/* Duplicate items for seamless loop */}
                            {[...technologies, ...technologies].map((tech, index) => (
                                <div
                                    key={`${tech.name}-${index}`}
                                    className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-lg p-4 hover:border-neon-green/50 transition-all duration-300 group flex flex-col items-center justify-center gap-3"
                                >
                                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Crect fill="%23333" width="80" height="80"/%3E%3Ctext fill="%2339ff14" font-family="Arial" font-size="12" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E${tech.name}%3C/text%3E%3C/svg%3E';
                                            }}
                                        />
                                    </div>
                                    <span className="text-sm md:text-base font-medium text-gray-400 group-hover:text-neon-green transition-colors text-center">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
