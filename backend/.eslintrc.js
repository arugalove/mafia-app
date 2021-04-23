module.exports = {
    extends: [
        'airbnb-typescript',
        'prettier'
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        "import/prefer-default-export": 0,
        "no-restricted-syntax": 0
    }
};
