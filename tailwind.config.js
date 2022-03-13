const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './app/**/*.php',
        './resources/**/*.html',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.ts',
        './resources/**/*.tsx',
        './resources/**/*.php',
        './resources/**/*.vue',
        './resources/**/*.twig',
    ],
    options: {
        defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
        whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/, /show$/],
    },
    theme: {
        colors: {
            inherit: colors.inherit,
            current: colors.current,
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            slate: colors.slate,
            gray: colors.gray,
            zinc: colors.zinc,
            neutral: colors.neutral,
            stone: colors.stone,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose,
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ],
}