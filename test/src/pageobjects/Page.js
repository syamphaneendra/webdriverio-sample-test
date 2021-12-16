
module.exports = class Page {
    
     launchBrowser () {
        browser.url(`http://zero.webappsecurity.com/index.html`)
        browser.maximizeWindow();
    }
}
