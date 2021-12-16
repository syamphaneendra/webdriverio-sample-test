Webdriver.io
============


WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and stable test suite.

It is designed to be:
- Extendable - Adding helper functions, or more complicated sets and combinations of existing commands is simple and really useful
- Compatible - WebdriverIO can be run on the WebDriver Protocol for true cross-browser testing as well as Chrome DevTools Protocol for Chromium based automation using Puppeteer.
- Feature Rich - The huge variety of built-in and community plugins allows you to easily integrate and extend your setup to fulfill your requirements.

You can use WebdriverIO to automate:

🌐   modern web applications written in React, Vue, Angular, Svelte or other frontend frameworks

📱   hybrid or native mobile applications running in an emulator/simulator or on a real device

💻   native desktop applications (e.g. written with Electron.js)
<br/><br/>

## Getting Started
Homepage: https://webdriver.io/

GitHub: https://github.com/webdriverio/webdriverio

## Pros
- Manual and automated cross-browser testing possible on all major browsers
- Native support of mobile testing

## Cons
- Having to deal with browser drivers setup and correspondent browser version might be overwhelming, especially if configuring CI (this can be mitigated with cloud based services)

## Supported browsers

One of the strenght of Webdriver.io is the supported browser list. Compared to other tools it's quite extensive and covers:
- Microsoft Edge
- Google Chrome (and all the Chromium family)
- Mozilla Firefox
- Safari (note that this is hardly supported by other frameworks)

## Initial Setup

For the initial setup make sure you have node and npm installed (or yarn if you prefer it) then run the following commands
```
npm install
```
or if you are using yarn simply

```
yarn
```

## Additional configuration
If you are aiming for cross-browser tersting, depending on your Operating System and your Browser family and version you will need to install the appropiate driver. More details can be found here https://webdriver.io/docs/automationProtocols/

### Google Chrome (Chromium family)
- These two browsers are easy to support and cover as their respective drivers come as npm packages so can be direcly installed with the following command for Chrome and Chromium family
```
npm install wdio-chromedriver-service --save-dev
```
or this one for Firefox
```
npm install @wdio/firefox-profile-service --save-dev
```
### Mozilla Firefox
First of all make sure you have Mozilla Firefox browser installed on your local machine or on your CI VM/Docker container (or use an image that already has it):
```
# On Windows
choco install firefox

# On Linux .deb pakcages
sudo apt install firefox

# On MacOS
brew install firefox
```
### Microsoft Windows/Edge

### Apple MacOS/Safari
- First of all make Sure You Have Safari’s WebDriver
Safari and Safari Technology Preview each provide their own safaridriver executable. Note that for Safari versions 10 and above, SafariDriver comes bundled by default with the browser that’s preinstalled in the macOS. For earlier versions of Safari you will need to install the Safari WebDriver extension. However, this extension is no longer supported for Safari testing

- Make sure you already have the executable on your device:
Safari’s executable should be located at /usr/bin/safaridriver. Check it's there and check its version matches the Safari version you have installed on your Mac `/usr/bin/safaridriver --version`

- Each safaridriver is capable of launching only the Safari version it’s associated with, and the two can run simultaneously. Although you can launch safaridriver manually by running a safaridriver executable, most Selenium libraries launch the driver automatically. See the documentation for your preferred client library to learn how to specify which browser to use.

## Local test execution
To run the test suite locally:
```
npm test
```

