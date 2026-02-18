import React, { useState } from 'react';
import DotGrid from '../components/effects/DotGrid';

/**
 * Experience Section with DotGrid Background
 */

interface ExperienceCard {
    id: string;
    title: string;
    logo: string;
    description: string;
    link?: string;
    isMerged?: boolean;
    images?: string[]; // Array of image paths for gallery
}

const experiences: ExperienceCard[] = [
    {
        id: 'gssoc25',
        title: "GirlScript Summer Of Code '25",
        logo: '/Screenshot%202026-02-14%20221726.png',
        description: 'Achieved a top-tier ranking of 581 among 50,000+ participants, successfully merged 5+ pull requests, and made substantive contributions across two distinct projects, demonstrating high-impact technical engagement and collaborative proficiency.',
        link: 'https://gssoc-tracker.netlify.app/dashboard/richochetclementine1315',
        images: [
            '/Screenshot%202026-02-14%20222024.png',
            '/Screenshot%202026-02-14%20222008.png'
        ]
    },
    {
        id: 'cncf1',
        title: 'CNCF-Tag-Security',
        logo: '/cncf-logo.png',
        description: 'Identified a rendering defect within the TAG Security design resources page, wherein the hexadecimal color references are erroneously bound to non-functional image assets, degrading visual integrity and user experience. Proposed remediation includes restoring the referenced assets or refactoring the page architecture to eliminate dependency on decorative image bindings for color representation. <span className="text-green-400">(Closes issue #1468)</span>',
        link: 'https://github.com/cncf/tag-security/pull/1468',
        isMerged: true
    },
    {
        id: 'cncf2',
        title: 'CNCF-Tag-Contributor-Strategy',
        logo: '/cncf-logo.png',
        description: 'Identified and escalated the outdated Bitly redirect (cncf-contribstrat-agenda) referencing superseded CNCF TAG Contributor Strategy notes, initiating corrective action to align it with the current canonical document. This intervention safeguards documentation accuracy, mitigates stakeholder confusion, and reinforces authoritative source governance.(Closes issue #761)',
        link: 'https://github.com/cncf/tag-contributor-strategy/pull/798',
        isMerged: true
    },
    {
        id: 'cncf3',
        title: 'CNCF-Tag-Contributor-Strategy',
        logo: '/cncf-logo.png',
        description: 'Remediated the invalid hyperlink to the "Reviewing Guide" within the HowTo: Make a Contributing Guide documentation, restoring navigational integrity and reference continuity (Closes issue #704), Successfully ensuring accurate cross-referencing and preserves the structural coherence of the contributor guidance framework',
        link: 'https://github.com/cncf/tag-contributor-strategy/pull/799',
        isMerged: true
    },
    {
        id: 'gssoc24',
        title: "GirlScript Summer Of Code '24",
        logo: '/Screenshot%202026-02-14%20221726.png',
        description: 'Completed the program with substantial practical exposure to contemporary web development methodologies and advanced version control workflows, demonstrating applied technical proficiency.',
        images: [
            '/Mrinmoy_Matilal_Badge_Contributor_GSSoC2024-Extd%20(1).png'
        ]
    }
];

const Experience: React.FC = () => {
    const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

    const toggleCard = (id: string) => {
        setExpandedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <section id="experience" className="relative min-h-screen py-20 bg-black overflow-hidden">
            {/* DotGrid Background */}
            <div className="absolute inset-0">
                <DotGrid
                    dotSize={5}
                    gap={15}
                    baseColor="#271E37"
                    activeColor="#39ff14"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-neon-green">
                    Experience & OSS Contributions
                </h2>

                {/* Experience Cards */}
                <div className="max-w-5xl mx-auto space-y-8">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="group relative bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 hover:border-neon-green/50 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                {/* Logo */}
                                <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-lg p-4 flex items-center justify-center border border-gray-800/50 group-hover:border-neon-green/30 transition-colors">
                                    <img
                                        src={exp.logo}
                                        alt={exp.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Content Area */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-neon-green transition-colors">
                                            {exp.title}
                                        </h3>
                                        {/* Merged Badge for CNCF */}
                                        {exp.isMerged && (
                                            <span className="px-3 py-1 bg-fuchsia-500/20 border border-fuchsia-500/50 text-fuchsia-400 text-sm font-medium rounded-full">
                                                Merged
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3">
                                        {/* Link Button */}
                                        {exp.link && (
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-2 bg-neon-green/10 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 rounded-lg font-medium"
                                            >
                                                View Details
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}

                                        {/* Image Gallery Toggle Button */}
                                        {exp.images && exp.images.length > 0 && (
                                            <button
                                                onClick={() => toggleCard(exp.id)}
                                                className="inline-flex items-center gap-2 px-6 py-2 bg-neon-yellow/10 border border-neon-yellow text-neon-yellow hover:bg-neon-yellow hover:text-black transition-all duration-300 rounded-lg font-medium"
                                            >
                                                {expandedCards.has(exp.id) ? 'Hide' : 'View'} Images
                                                <svg
                                                    className={`w-4 h-4 transition-transform duration-300 ${expandedCards.has(exp.id) ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Expandable Image Gallery */}
                            {exp.images && exp.images.length > 0 && (
                                <div
                                    className={`overflow-hidden transition-all duration-500 ${expandedCards.has(exp.id) ? 'max-h-[1000px] mt-6 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-gray-800/50">
                                        {exp.images.map((image, idx) => (
                                            <div
                                                key={idx}
                                                className="relative aspect-video bg-white/5 rounded-lg overflow-hidden border border-gray-800/50 hover:border-neon-green/50 transition-colors group/img"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${exp.title} - Image ${idx + 1}`}
                                                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Hover Effect Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
