import React, { useState } from 'react';
import Squares from '../components/effects/Squares';

/**
 * Projects Section with Squares Background and Project Cards Slider
 */

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    githubLink: string;
    demoLink?: string;
}

const projects: Project[] = [
    {
        id: 'project1',
        title: 'Dojo',
        description: 'Dojo is a collaborative platform for competitive programmers that brings learning and practice together. It enables users to solve problems, discuss solutions with peers, and stay updated with notifications for upcoming contests across multiple competitive programming platforms—all in one place.',
        image: '/Screenshot%202026-02-10%20151657.png', // Replace with your image path
        techStack: ['Go', 'Typescript', 'PostgreSQL', 'OAuth2.0','GraphQL','WebSockets','WebScraping'],
        githubLink: 'https://github.com/richochetclementine1315/Dojo',
        demoLink: 'https://dojo-cp.vercel.app/'
    },
    {
        id: 'project2',
        title: 'Minify',
        description: 'Engineered a high-performance URL shortening service leveraging Go for backend concurrency, React for a dynamic frontend interface, and Redis for optimized in-memory data storage and rapid retrieval.',
        image: '/Screenshot 2026-02-15 030750.png',
        techStack: ['Go', 'React', 'Redis', 'Docker'],
        githubLink: 'https://github.com/richochetclementine1315/Minify',
        demoLink: 'https://minify-links.vercel.app/'
    },
    {
        id: 'project3',
        title: 'Roger',
        description: 'A ML Based Career Suggestion System That was built for the the purpose of Smart India Hackathon(SIH) 2024 and was one of the 18 selected projects in the internal hackathon out of the 103 registered projects',
        image: '/Screenshot 2026-02-15 031708.png',
        techStack: ['Python', 'Machine Learning', 'SMOTE', 'Flask'],
        githubLink: 'https://github.com/richochetclementine1315/Roger'
    },
    {
        id: 'project4',
        title: 'Swift',
        description: 'A React-based emergency response system that uses Dijkstra algorithm with a priority queue to find the fastest routes for emergency vehicles through a simulated city.',
        image: '/Screenshot 2026-02-15 032213.png',
        techStack: ['React', 'Dijkstra', 'Priority Queue'],
        githubLink: 'https://github.com/richochetclementine1315/Swift',
        demoLink: 'https://emergency-response-fast-route-syste.vercel.app/'
    },
    {
        id: 'project5',
        title: 'Quill',
        description: 'Architected a high-performance blog platform utilizing Golang for efficient backend processing, React.js for a responsive client-side interface, and MySQL for robust relational data management.',
        image: 'https://www.seekpng.com/png/full/101-1010261_quill-logo.png',
        techStack: ['Go', 'React', 'MySQL'],
        githubLink: 'https://github.com/richochetclementine1315/Quill',
        demoLink: 'https://quill-blogs.vercel.app/'
    }
];

const Projects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section id="projects" className="relative min-h-screen py-20 bg-black overflow-hidden">
            {/* Squares Background */}
            <div className="absolute inset-0">
                <Squares
                    speed={0}
                    squareSize={40}
                    direction="diagonal"
                    borderColor="#39ff14"
                    hoverFillColor="#78b20a"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-neon-green">
                    Proof of Work
                </h2>

                {/* Project Slider */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="relative">
                        {/* Project Card */}
                        <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden">
                            {/* Project Image */}
                            <div className="relative h-64 md:h-80 bg-gray-900/50">
                                <img
                                    src={projects[currentIndex].image}
                                    alt={projects[currentIndex].title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23111" width="400" height="300"/%3E%3Ctext fill="%2339ff14" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EProject Image%3C/text%3E%3C/svg%3E';
                                    }}
                                />
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    {projects[currentIndex].title}
                                </h3>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {projects[currentIndex].techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-neon-green/10 border border-neon-green/50 text-neon-green text-sm font-medium rounded-full cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {projects[currentIndex].description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={projects[currentIndex].githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-2 bg-neon-green/10 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 rounded-lg font-medium"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                    {projects[currentIndex].demoLink && (
                                        <a
                                            href={projects[currentIndex].demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-2 bg-neon-yellow/10 border border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-black transition-all duration-300 rounded-lg font-medium"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-black/60 backdrop-blur-sm border border-neon-green/50 text-neon-green hover:bg-neon-green hover:text-black p-3 rounded-full transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-black/60 backdrop-blur-sm border border-neon-green/50 text-neon-green hover:bg-neon-green hover:text-black p-3 rounded-full transition-all duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Slider Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-neon-green w-8'
                                    : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* View All Projects Button */}
                <div className="flex justify-center">
                    <a
                        href="https://github.com/richochetclementine1315" // Replace with your GitHub profile
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-black/60 backdrop-blur-sm border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 rounded-lg font-bold text-lg"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
