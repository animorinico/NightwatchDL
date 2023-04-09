//Test Suite for Get in Touch Form
//Here I added some Pauses because it runs very quickly, just uncomment the lines if you wanna have a better look
//of what the test does

var getInTouch = require("../pages/get_in_touch.js");
var utils = require("../utils/browser_utils.js"); //Imports utils.js and assigns it utils

module.exports = {
    beforeEach: function (browser){
        utils(browser).openBrowser();
    },

    "Validate Get in Touch Required Fields": function (browser) {
        //GIVEN User opened Get in Touch Form
        getInTouch.commands(browser).openGetInTouchForm();
        utils(browser).addPause(4000);

        //THEN the Title and the Form are visible/open
        browser.assert.containsText(getInTouch.obj.getInTouchTitle, "Get In Touch")
        browser.assert.attributeContains(getInTouch.obj.getInTouchModal, "class", "open")

        //WHEN User sends the form without completing any value of it
        getInTouch.commands(browser).sendForm();

        //THEN All the required fields have a red frame indicating these are required
        getInTouch.commands(browser).assertRequiredFieldsAreRed();
        utils(browser).addPause(4000);

        //WHEN User fills one by one, THEN the red frame is gone
        browser
        .setValue(getInTouch.obj.nameInput, "Name")
        .assert.attributeContains(getInTouch.obj.nameFieldError,"style", "display: none;")

        .setValue(getInTouch.obj.emailInput, "email@gmail.com")
        .assert.attributeContains(getInTouch.obj.emailFieldError,"style", "display: none;")

        .setValue(getInTouch.obj.companyInput, "Company")
        .assert.attributeContains(getInTouch.obj.companyFieldError,"style", "display: none;")

        .setValue(getInTouch.obj.messageInput, "Message")
        .assert.attributeContains(getInTouch.obj.messageFieldError,"style", "display: none;");
        utils(browser).addPause(4000);
    }

}