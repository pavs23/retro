module.exports = {
    "extends": "airbnb",
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "webpack.common.js"
            }
        }
    },
    "globals": {
        "document": true,
        "window": true
    }
};
