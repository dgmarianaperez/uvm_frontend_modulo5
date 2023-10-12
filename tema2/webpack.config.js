const path = require('path')

//especificando entrada y salida y cómo será el empaquetamiento:
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    }
}