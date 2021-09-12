module.exports = function (api) {

    // plugin이나 preset을 캐시하여 다시 실행하지 않도록
    api.cache(true);

    // preset 추가
    const presets = [
        [
            '@babel/preset-env',
            {
                targets: '> 0.25%, not dead',
                // 0.25% 이상의 시장 점유율을 가지는 브라우저에 대해 지원하겠다.
                // not dead : 보안 update를 하는 브라우저에 대해 지원하겠다.
                'corejs': 3,
                // polyfill은 core-js를 사용하겠다.
                useBuiltIns: 'usage',
                // 모든 polyfill을 가져오는게 아니라 필요한 Polyfill를 import해서 사용하겠다.
                modules: 'auto',
                // bable 의 es6이 이미 적용된 경우 false 로 아닌 경우 commonjs 로 자동 설정.
            },
        ],
    ];

    return {
        presets,
    };
};

// 출처
// https://parkjihwan.tistory.com/18