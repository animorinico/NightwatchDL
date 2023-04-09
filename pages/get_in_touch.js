// Get in Touch Page Object class. Here we have the objects (elements) in the form and also functions/commands

const objects = {
    getInTouchButton: "#menu-item-846 a",
    getInTouchTitle: "div[class*='dl-getintouch-modal'] h3",
    getInTouchModal: "div[class*='dl-getintouch-modal']",
    sendButton: "#wpforms-submit-872",
    nameInput: "#wpforms-872-field_0",
    emailInput: "#wpforms-872-field_1",
    companyInput: "#wpforms-872-field_6",
    messageInput: "#wpforms-872-field_2",
    nameFieldError: "#wpforms-872-field_0-error",
    emailFieldError: "#wpforms-872-field_1-error",
    companyFieldError: "#wpforms-872-field_6-error",
    messageFieldError: "#wpforms-872-field_2-error"
};

const getInTouchCommands = function (browser) {

    //Opens Get In Touch Form
    this.openGetInTouchForm = function () {
        browser.click(objects.getInTouchButton);
    };

    //Sends the form
    this.sendForm = function(){
        browser.click(objects.sendButton);
    };

    //Asserts that all required fields are framed in red colour
    this.assertRequiredFieldsAreRed = function(){
        browser
            .assert.attributeContains(objects.nameFieldError,"style", "display: inline;")
            .assert.attributeContains(objects.emailFieldError,"style", "display: inline;")
            .assert.attributeContains(objects.companyFieldError,"style", "display: inline;")
            .assert.attributeContains(objects.messageFieldError,"style", "display: inline;");
    };
    return this;
}

module.exports = {
    "commands": getInTouchCommands,
    "obj": objects
}