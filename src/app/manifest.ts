import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Barata Ribeiro | Portfolio',
        short_name: 'Barata Ribeiro',
        description:
            'Welcome to my portfolio, where I display my work as a Full-stack Developer and UI Designer. Explore my projects and my approach to creating user-friendly, visually appealing digital solutions.',
        start_url: '/',
        display: 'standalone',
        background_color: '#f7f7f5',
        theme_color: '#d1ea08',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '50x50',
                type: 'image/x-icon',
            },
        ],
    };
}
