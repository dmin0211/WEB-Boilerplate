const path = require('path');

module.exports = {
    // Entry Point 1개
    entry: {
        index: './src/index.js',
    },
    // Entry Point 2개 이상
    // entry: {
    //     index: "./src/index.js",
    //     about: "./src/about.js",
    // },

    // output 은 하나만 지정 가능
    output: {
        // bundling output
        filename: "[name].js",
        // bundling 출력의 대상이 되는 Directory - 반드시 절대 경로
        path: path.resolve(__dirname, 'dist'),
        // 브라우저가 참조 시 출력 Directory 의 공용 URL
        // "" - html 상대경로, / - server 의 root, url
        publicPath: "auto", // script 태그로 자동으로 결정
        // entry point 에서 export 되는 라이브러리 설정
        library: {
            name: 'MyLibrary',
            // type 종류 : https://webpack.kr/configuration/output/#outputlibrary
            type: 'var',
            // type: var 와 사용되는 export 설정
            export: ['hello'],
        },
        // asset module 의 default file name 수정
        assetModuleFilename: 'images/[name].[hash][ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // style -> css 순서가 보장되어야 함
                use: ['style-loader', 'css-loader'],
            },
            {
                // image 내장 asset 모듈 사용
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                // Font 내장 asset 모듈 사용
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    // 특정 directory 로 asset 을 내보냄
                    filename: 'font/[name].[hash][ext][query]'
                }
            },

            // Loading Data(JSON, CSV, TSV, XML)
            // JSON 은 기본으로 지원됨 (ex. import data from 'data.json' 이 기본으로 적용됨)
            // CSV('npm install --save-dev csv-loader' 필요)
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            // TSV('npm install --save-dev xml-loader' 필요)
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            // Custom Parser 사용 가능
            // {
            //     test: /\.json5$/i,
            //     type: 'json',
            //     parser: {
            //         parse: json5.parse,
            //     }
            // }
        ]
    }
}