module.exports = {
    plugins: [
        // require('autoprefixer')({
        //     grid: true
        // }),
        require('postcss-import'),
        require('postcss-font-magician')({
            variants: {
                'Bangers': {
                    '400': []
                }
            }
        }),
        require('postcss-cssnext')({
            features: {
                autoprefixer: {
                    grid: true,
                    flexbox: false,
                },
                customProperties: false,
                calc: false
            }
        })
    ]
}