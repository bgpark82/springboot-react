var path = require('path');

module.exports = {

    entry: {  
        app:'./src/main/js/app.js'  
    },   
        devtool: 'sourcemaps',  
        cache: true,  
        mode: 'development',   
    output: {  
        path: path.resolve(__dirname),  
        filename: './src/main/resources/static/built/[name].bundle.js'  
    },  
    module: {  
        rules: [  
            {  
                test: path.join(__dirname, '.'),  
                exclude: /(node_modules)/,  
                use: [{  
                    loader: 'babel-loader',  
                    options: {  
                        "presets": ["@babel/preset-env", "@babel/preset-react","@babel/typescript"],
                        "plugins": ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-runtime"]
                    }  
                }]  
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },  
        ]  
    },
    resolve: { extensions: ['.ts','.tsx','.js']}  
};  
