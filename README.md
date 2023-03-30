ANMS App
=====================

This project supports the ANMS mobile application.

## Setup

This project is a Hybrid mobile application that provides the ANMS a mobile user experience to its members, patients and stake holders.  
The following needs to be installed in order to build and deploy this project:

Install Node.js first (version 6.14.3). And then run the following NPM (node package manager) global installs:
```sh
$ npm install -g cordova
$ npm install -g ionic
```
To run the web server for showing the app, do the following: 
```sh
$ ionic serve
```
To check ADB for USB devices and to run the app on an emulator:
```sh
$ adb devices
$ ionic run android --prod
```

## Plugins
WARNING: When adding a plugin, always use 'ionic plugin add' and NOT cordova. This will cause mutiple, silent errors that are a pain to debug.
Always save plugin so config.xml updates, such as:
```sh
$ ionic plugin add cordova-plugin-file-opener2 --save
```
Then, add the name of the plugin to package.json, then: npm update


## Building, Testing and Deployment
To build the app for a specific platform, do the following by adding the platform and then building: 
```sh
$ ionic cordova platform add android
$ ionic cordova platform add ios
$ ionic cordova build android
$ ionic cordova build ios
$ ionic build browser 
```


## Testing
To upload a test view to Ionic View, do the following:
```sh
$ ionic upload
```

To build native apps and upload to Ionic for a Production build, do the following:
```sh
$ ionic package build android --profile neuserv --release
$ ionic package build ios --profile neuserv --release
```


## Cert Generation (prod)
```sh
C:\OpenSSL-Win64\bin\openssl.exe
C:\Program Files\Java\jdk1.8.0_40\bin\keytool.exe -genkey -v -keystore neuserv-key.keystore -alias neuserv -keyalg RSA -keysize 2048 -validity 10000
# generate self sign key
$ openssl.exe genrsa -des3 -out neuserv.key 2048
# generate CSR file
$ openssl.exe req -new -key neuserv.key -out CertificateSigningRequest.certSigningRequest -subj "/emailAddress=neuharthr@gmail.com, CN=Neuserv, C=US"
# convert cer to pem
$ openssl.exe x509 -in ios_distribution.cer -inform DER -out ios_distribution.pem -outform PEM
# create p12 file
$ openssl.exe pkcs12 -export -inkey neuserv.key -in ios_distribution.pem -out dmkey-prod.p12
```


## Cert Generation (dev)
```sh
# generate self sign key
$ openssl.exe genrsa -des3 -out neuserv-dev.key 2048
# generate CSR file
$ openssl.exe req -new -key neuserv-dev.key -out CertificateSigningRequest-dev.certSigningRequest -subj "/emailAddress=neuharthr@gmail.com, CN=Neuserv, C=US"
//convert cer to pem
$ openssl.exe x509 -in ios_development.cer -inform DER -out ios_development.pem -outform PEM
# create p12 file
$ openssl.exe pkcs12 -export -inkey neuserv-dev.key -in ios_development.pem -out dmkey-dev.p12
```
