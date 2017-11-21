// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    'app login test': function(browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL

        browser
            .url(devServer + '/login')
            .waitForElementVisible('#app', 2000)
            .assert.containsText('/div[0]/div[0]', 'i am login')
            .end()
    }
}