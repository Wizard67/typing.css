module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: [
                'last 2 versions',
                'ie 9',
            ],
            flexbox: "no-2009",
            remove: true,
        }),
        require('cssnano')({
            preset: 'default',
        }),
        require("css-mqpacker"),
    ]
}
