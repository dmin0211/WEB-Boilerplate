const path = require('path');

module.exports = {
    // Entry Point 1개
    entry: './src/index.js',
    // Entry Point 2개 이상
    // entry: {
    //     index : "./src/index.js",
    //     about : "./src/about.js",
    // },

    // output 은 하나만 지정 가능
    output: {
        // bundling output
        filename: "main.js",
        // bundling 출력의 대상이 되는 Directory - 반드시 절대 경로
        path: path.resolve(__dirname, 'dist'),
        // 브라우저가 참조 시 출력 Directory 의 공용 URL
        publicPath: "/assets/"

    }
}