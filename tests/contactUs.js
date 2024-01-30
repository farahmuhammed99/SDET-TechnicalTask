const dataTest = require("../dataTest/dataTest.json");
// const pic = require("path");

describe("This is the contact us Page Testing", function () {
 it.skip("Check the visibility of the items",function(browser){ 
var contactus= browser.page.index.index(); //homepage visibility
contactus.navigate(); 
contactus.expect.element("@contactusButton").is.visible; 
contactus.element("@contactusButton").click();
var contactUs = browser.page.contactsusPage.contactUsPage();
contactUs.navigate();
contactUs.expect.element("@subjectHeadingDropdown").is.visible;
contactUs.expect.element("@email").is.visible;
contactUs.expect.element("@orderNumber").is.visible;
contactUs.expect.element("@documentUpload").is.visible;
contactUs.expect.element("@sendButton").is.visible;


browser.end();
  });
});

it('Fill in the fields', function(browser){
      var contactUs = browser.page.contactsusPage.contactUsPage();
     contactUs.navigate();

      contactUs.element("@email").setValue(dataTest.emailAddress);
      contactUs.assert.valueEquals("@email",dataTest.emailAddress);



      contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
      contactUs.assert.valueEquals("@orderNumber", dataTest.OrderNumber);
      contactUs.element("@message").setValue(dataTest.Message1);
      contactUs.assert.valueEquals("@message",dataTest.Message1);
      contactUs.click("@subjectHeadingDropdown");
      contactUs.click('@webmasterOption');
      //contactUs.uploadDocument("@documentUpload", '/path/to/your/file.txt');
  
      // Click the Send button
      contactUs.click("@sendButton")
        .pause(2000); 
      browser.end();
    });
    it('Enter a text instead of an E-mail',function(browser){
        var contactUs = browser.page.contactsusPage.contactUsPage();
        contactUs.navigate();
    
         contactUs.element("@email").setValue(dataTest.InvalidEmailaddress);
         contactUs.assert.valueEquals("@email",dataTest.InvalidEmailaddress);
         contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
         contactUs.assert.valueEquals("@orderNumber",dataTest.OrderNumber);
         contactUs.element("@message").setValue(dataTest.Message2);
         contactUs.assert.valueEquals("@message",dataTest.Message2);
         contactUs.click("@subjectHeadingDropdown");
         contactUs.click('@webmasterOption');
         //contactUs.uploadDocument("@documentUpload", '/path/to/your/file.txt');
     
         // Click the Send button
         contactUs.click("@sendButton")
           .pause(2000); 
           contactUs.expect.element("@errorMessage").is.visible;
         browser.end();
        
    });
 
it('Enter Invalid Email',function(browser){
    var contactUs = browser.page.contactsusPage.contactUsPage();
    contactUs.navigate();

     contactUs.element("@email").setValue(dataTest.emailAddress);
     contactUs.assert.valueEquals("@email",dataTest.emailAddress);
     contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
     contactUs.assert.valueEquals("@orderNumber",dataTest.OrderNumber);
     contactUs.element("@message").setValue(dataTest.Message1);
     contactUs.assert.valueEquals("@message",dataTest.Message1);
     contactUs.click("@subjectHeadingDropdown");
     contactUs.click('@webmasterOption');
     //contactUs.uploadDocument("@documentUpload", '/path/to/your/file.txt');
 
     // Click the Send button
     contactUs.click("@sendButton")
       .pause(2000); 
       contactUs.expect.element("@errorMessage").is.visible;
     browser.end();
    
});
/*it('Check for the mandatory fields',function(browser){ 
    var contactUs = browser.page.contactsusPage.contactUsPage();
    contactUs.navigate();
    contactUs.click("@sendButton");
    contactUs.expect.element("@errorMessage").is.visible;
    
    contactUs.element("@email").setValue(dataTest.InvalidEmailaddress);
    contactUs.assert.valueEquals("@email",dataTest.InvalidEmailaddress);
    contactUs.click("@sendButton");
    contactUs.expect.element("@errorMessage").is.visible;
    contactUs.click("@subjectHeadingDropdown");
     contactUs.click('@webmasterOption');
     contactUs.click("@sendButton");
     contactUs.expect.element("@errorMessage").is.visible;
     contactUs.element("@message").setValue(dataTest.Message2);
     contactUs.assert.valueEquals("@message",dataTest.Message2);
     contactUs.click("@sendButton")
     .pause(2000);
     
     browser.end();
});*/


   
it('Leave the Email field blank',function(browser){
    var contactUs = browser.page.contactsusPage.contactUsPage();
    contactUs.navigate();

     contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
     contactUs.assert.valueEquals("@orderNumber", dataTest.OrderNumber);
     contactUs.element("@message").setValue(dataTest.Message1);
     contactUs.assert.valueEquals("@message",dataTest.Message1);
     contactUs.click("@subjectHeadingDropdown");
     contactUs.click('@webmasterOption');
     //contactUs.uploadDocument("@documentUpload", '/path/to/your/file.txt');
 
     // Click the Send button
     contactUs.click("@sendButton");
       
       contactUs.expect.element("@errorMessage").is.visible;
     browser.end();
    
});
it('Leave the subject heading blank',function(browser){
    var contactUs = browser.page.contactsusPage.contactUsPage();
    contactUs.navigate();
    contactUs.element("@email").setValue(dataTest.emailAddress);
    contactUs.assert.valueEquals("@email",dataTest.emailAddress);
     
     contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
     contactUs.assert.valueEquals("@orderNumber",dataTest.OrderNumber);
     contactUs.element("@message").setValue(dataTest.Message1);
     contactUs.assert.valueEquals("@message",dataTest.Message1);
    
     //contactUs.uploadDocument("@documentUpload", '/path/to/your/file.txt');
 
     // Click the Send button
     contactUs.click("@sendButton")
       .pause(2000); 
       contactUs.expect.element("@errorMessage").is.visible;
     browser.end();
    
});
it('Leave the Message field blank',function(browser){
    var contactUs = browser.page.contactsusPage.contactUsPage();
    contactUs.navigate();

    contactUs.element("@email").setValue(dataTest.emailAddress);
    contactUs.assert.valueEquals("@email",dataTest.emailAddress);
    contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
    contactUs.assert.valueEquals("@orderNumber", dataTest.OrderNumber);
    
     //contactUs.uploadDocument("@documentUpload", '/path/to/your/file.txt');
 
     // Click the Send button
     contactUs.click("@sendButton");
       
       contactUs.expect.element("@errorMessage").is.visible;
     browser.end();
    
});

       
it('Leave the message field and the subject heading blank',function(browser){
    var contactUs = browser.page.contactsusPage.contactUsPage();
    contactUs.navigate();

     contactUs.element("@email").setValue(dataTest.emailAddress);
     contactUs.assert.valueEquals("@email",dataTest.emailAddress);
     contactUs.element("@orderNumber").setValue(dataTest.OrderNumber);
     contactUs.assert.valueEquals("@orderNumber", dataTest.OrderNumber);

     contactUs.click("@subjectHeadingDropdown");
     contactUs.click('@webmasterOption');
     //contactUs.uploadDocument("@documentUpload", '/path/to/your/file.txt');
 
     // Click the Send button
     contactUs.click("@sendButton")
       .pause(2000); 
       contactUs.expect.element("@errorMessage").is.visible;
     browser.end();
    
});

