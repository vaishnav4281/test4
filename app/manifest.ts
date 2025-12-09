import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Satheesan Koroth - LIC Agent Kozhikode',
        short_name: 'Satheesan Koroth',
        description: 'Expert LIC insurance and housing finance services in Kozhikode. Get personalized insurance plans, home loans, and financial planning advice.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        orientation: 'portrait-primary',
        icons: [
            {
                src: '/favicon.ico',
                sizes: '32x32',
                type: 'image/x-icon',
            },
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable',
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        categories: ['finance', 'business', 'insurance'],
        lang: 'en-IN',
        dir: 'ltr',
    }
}
