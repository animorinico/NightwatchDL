//General functions/actions for all suites

const envValues = require("../resources/environment.js"); //Imports elements used

const utils = (browser) => {

    //Launches the browser and visits the specified url
    this.openBrowser = () => {
        browser
            .windowMaximize()
            .url(envValues.mainUrl);
        return browser;
    };

    //Closes the browser
    this.closeBrowser = () => {
        browser
            .pause(3000)
            .end();
    };

    //Adds a pause
    this.addPause = (ms) => {
        browser.pause(ms);
    };

    return this;
};

module.exports = utils;