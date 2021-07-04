# ionic-6-fcm-demo-working

## Useful links

https://github.com/cmgustavo/fcm-ng

https://enappd.com/blog/how-to-implement-firebase-push-notifications-in-ionic-apps/157/

https://ionicframework.com/docs/native/fcm

https://stackoverflow.com/a/49166976/6001295


## Commands to run

```
npm install
ionic cordova platform add android

cp ./google-services.json platforms/android/app  # download your json file from firebase project 
ionic cordova build android

```

#### plugin used

`ionic cordova plugin add cordova-plugin-fcm-ng --variable PAGE_LINK_DOMAIN=com.<domain_name>`


https://enappd.com/blog/how-to-implement-firebase-push-notifications-in-ionic-apps/157/
https://www.npmjs.com/package/cordova-plugin-fcm-with-dependecy-updated
https://github.com/cmgustavo/cordova-plugin-fcm

https://stackoverflow.com/questions/60345180/variables-missing-use-variable-app-domain-value-variable-page-link-domai   
