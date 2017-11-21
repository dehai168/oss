module.exports = {
    'app home test': function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL

        browser
            .url(devServer)
            .waitForElementVisible('#app', 2000)
            .assert.title('oss')
            .assert.containsText('h5', '你好世界')
            .end()
    }
}