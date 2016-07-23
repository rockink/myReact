module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "./assets/js/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};
