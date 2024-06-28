import type { Config } from 'tailwindcss'

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors:{
                // Cal Poly Pomona Colors
                'cpp-green': '#164734',
                'cpp-gold': '#FFB71A',
            },
            fontFamily: {
                'sans': ['"DM Sans"', 'sans-serif'],
                'display': ['"DM Serif Display"', 'serif'],
                'odor-mean-chey': ['"OdorMeanChey"', 'sans-serif'],
            },
            fontSize:{
                // Font size specifically for navbar
                'nv': ['1.25rem', {
                    lineHeight:1,
                }],
            },
        },
        screens: {
            'xsm': '435px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px'
        },
        container: {
            padding: "2rem",
            center: true,
        }
    },
}