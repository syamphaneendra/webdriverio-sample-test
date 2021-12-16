
module.exports = class Hooks {
    
    static resetSession () {
        browser.deleteCookies();
    }
}
