

/**
 * Contact Section
 */

interface ContactLink {
    id: string;
    name: string;
    label: string;
    url: string;
    icon: string;
    color: string;
}

const contactLinks: ContactLink[] = [
    {
        id: 'github',
        name: 'GitHub',
        label: '@richochetclementine1315',
        url: 'https://github.com/richochetclementine1315',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        color: '#ffffff'
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        label: 'Mrinmoy Matilal',
        url: 'https://www.linkedin.com/in/mrinmoy-matilal',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
        color: '#0A66C2'
    },
    {
        id: 'leetcode',
        name: 'LeetCode',
        label: '@Mrinmoy_1315',
        url: 'https://leetcode.com/u/Mrinmoy_1315/',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
        color: '#FFA116'
    },
    {
        id: 'codeforces',
        name: 'Codeforces',
        label: '@mrinmoymatilal1315',
        url: 'https://codeforces.com/profile/mrinmoymatilal1315',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-3029920.png',
        color: '#1F8ACB'
    },
    {
        id: 'codechef',
        name: 'CodeChef',
        label: '@ricochet_1315',
        url: 'https://www.codechef.com/users/ricochet_1315',
        icon: 'https://miro.medium.com/v2/resize:fit:333/1*1W0-bbmt4iiEpp_pPrS0VQ.png',
        color: '#5B4638'
    },
    {
        id: 'email',
        name: 'Email',
        label: 'mrinmoymatilal1315@gmail.com',
        url: 'mailto:mrinmoymatilal1315@gmail.com',
        icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
        color: '#EA4335'
    }
];

const Contacts: React.FC = () => {
    return (
        <section id="contact" className="relative min-h-screen py-20 bg-black overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-neon-green">
                        Let's Connect
                    </h2>
                    <p className="text-xl text-gray-400">
                        Feel free to reach out through any of these platforms
                    </p>
                </div>

                {/* Contact Links Grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contactLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 hover:border-neon-green/50 transition-all duration-300 hover:scale-105"
                        >
                            {/* Icon */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-white/5 rounded-lg p-2 flex items-center justify-center border border-gray-800/50 group-hover:border-neon-green/30 transition-colors">
                                    <img
                                        src={link.icon}
                                        alt={link.name}
                                        className="w-full h-full object-contain"
                                        style={{ filter: link.id === 'github' ? 'invert(1)' : 'none' }}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="48" height="48"%3E%3Crect fill="%23333" width="48" height="48"/%3E%3Ctext fill="%2339ff14" font-family="Arial" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3E🔗%3C/text%3E%3C/svg%3E';
                                        }}
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
                                    {link.name}
                                </h3>
                            </div>

                            {/* Label */}
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors break-all">
                                {link.label}
                            </p>

                            {/* External Link Icon */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-5 h-5 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>

                            {/* Hover Effect Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-500"></div>
                        </a>
                    ))}
                </div>

                {/* Additional CTA */}
                <div className="max-w-2xl mx-auto mt-16 text-center">
                    <div className="bg-black/40 backdrop-blur-sm border border-neon-green/30 rounded-lg p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Open to Opportunities
                        </h3>
                        <p className="text-gray-400 mb-6">
                            I'm currently looking for new opportunities in backend development and open-source contributions.
                            Let's build something amazing together!
                            <p className="text-neon-green mb-6">If You Love a Chatting session with a cup of coffee or chai as much as I do then let's connect over a cup of coffee or chai ;)</p>
                        </p>
                        <a
                            href="mailto:mrinmoymatilal1315@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-neon-green text-black hover:bg-neon-yellow transition-all duration-300 rounded-lg font-bold"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send me an Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
