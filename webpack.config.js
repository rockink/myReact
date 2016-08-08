module.exports = [{
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
},{
    entry: "./router/router.js",
    output: {
        path: __dirname,
        filename: "./assets/js/router.js"
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
},{
    entry: "./about/about.js",
    output: {
        path: __dirname,
        filename: "./assets/js/about.js"
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
},
{
    entry: "./dashboard/dashboard.js",
    output: {
        path: __dirname,
        filename: "./assets/js/dashboardB.js"
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
}];
