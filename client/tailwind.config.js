module.exports = {
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            pretendard: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, Helvetica\\ Neue, Segoe\\ UI, Apple\\ SD\\ Gothic\\ Neo, Noto\\ Sans\\ KR, Malgun\\ Gothic, sans-serif',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
