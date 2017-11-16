module.exports = {
    "extends": "airbnb",
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": 'webpack.common.js'
            }
        }
    },
    "globals": {
        "document": true,
        "window": true
    },
    "parser": "babel-eslint",
    "rules": {
      "strict": 0
    }
};
