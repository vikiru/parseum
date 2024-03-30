/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    daisyui: {
        themes: [
            {
                theme: {
                    primary: '#000000',
                    secondary: '#ffffff',
                    accent: '#ff0000',
                    neutral: '#000000',
                    'base-100': '#ffffff',
                    info: '#0000ff',
                    success: '#00ff00',
                    warning: '#ffff00',
                    error: '#ff0000',
                },
            },
        ],
    },
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui'), require('tailwind-scrollbar')],
};
