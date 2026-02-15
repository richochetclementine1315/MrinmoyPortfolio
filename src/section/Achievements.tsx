

/**
 * Achievements Section
 */

interface Achievement {
    id: string;
    title: string;
    organization: string;
    description: string;
    date: string;
    logo: string;
    highlight?: string;
}

const achievements: Achievement[] = [
    {
        id: 'gssoc',
        title: 'Top 19.4% of Contributors',
        organization: 'GirlScript Summer Of Code',
        description: 'Ranked 581 in a national Open-Source Program',
        date: 'Oct 2025',
        logo: '/Screenshot%202026-02-14%20221726.png',
        highlight: 'Top 19.4%'
    },
    {
        id: 'postman',
        title: 'Postman API Fundamentals Student Expert',
        organization: 'Postman.Inc',
        description: 'Earned Postman Student Expert Certification by demonstrating proficiency in API design, testing, and documentation, gaining hands-on experience with real-world RESTful API workflows and automation through Postman collections.',
        date: 'Oct 2024',
        logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg'
    },
    {
        id: 'sih',
        title: "Top 18 Teams in SIH'24 Internal",
        organization: 'JAIN University (Bengaluru)',
        description: 'Qualified among the top 18 teams out of 103 in the Internal Hackathon for Smart India Hackathon 2024.',
        date: 'Oct 2024',
        logo: 'https://www.sih.gov.in/img1/logo/SIH2023-logo.png',
        highlight: 'Top 18/103'
    },
    {
        id: 'codeforces',
        title: 'Codeforces: Rating 891 (max. Newbie 1026)',
        organization: 'Codeforces',
        description: 'Educational Codeforces Round 182 (Div.2): Rank 8027',
        date: '',
        logo: 'https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-3029920.png'
    },
    {
        id: 'codechef',
        title: 'Starters 215 (Rated)',
        organization: 'CodeChef',
        description: 'Global Rank: 1780',
        date: 'Dec 2025',
        logo: 'https://miro.medium.com/v2/resize:fit:333/1*1W0-bbmt4iiEpp_pPrS0VQ.png',
        highlight: 'Rank 1780'
    }
];

const Achievements: React.FC = () => {
    return (
        <section id="achievements" className="relative min-h-screen py-20 bg-black overflow-hidden">
            {/* Simple gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-neon-green">
                    Achievements & Certificates
                </h2>

                {/* Achievement Cards Grid */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((achievement) => (
                        <div
                            key={achievement.id}
                            className="group relative bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 hover:border-neon-green/50 transition-all duration-300"
                        >
                            {/* Highlight Badge */}
                            {achievement.highlight && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-neon-green/20 border border-neon-green text-neon-green text-sm font-bold rounded-full">
                                    {achievement.highlight}
                                </div>
                            )}

                            <div className="flex gap-4 mb-4">
                                {/* Logo */}
                                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-lg p-3 flex items-center justify-center border border-gray-800/50 group-hover:border-neon-green/30 transition-colors">
                                    <img
                                        src={achievement.logo}
                                        alt={achievement.organization}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Crect fill="%23222" width="80" height="80"/%3E%3Ctext fill="%2339ff14" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E🏆%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>

                                {/* Title and Organization */}
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-neon-green transition-colors mb-1">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-neon-yellow font-medium text-sm md:text-base">
                                        {achievement.organization}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 leading-relaxed mb-4">
                                {achievement.description}
                            </p>

                            {/* Date */}
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {achievement.date}
                            </div>

                            {/* Hover Effect Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
