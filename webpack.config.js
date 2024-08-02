const path = require('path')
const webpack = require('webpack')

module.exports = [
    {
        entry: './frontend-js/app.js',
        output: {
            filename: 'main-bundled.js',
            path: path.resolve(__dirname, 'public/script')
        },
        mode: "production",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    },
    {
        entry: './game/game.js',
        output: {
            filename: 'game-bundled.js',
            path: path.resolve(__dirname, 'game/export/')
        },
        mode: "production",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    }
]