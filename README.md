## How To Use

Before Starting few thing to check
- Before running the prebuild command `npx expo run:android` make sure you are connected to a pyhsical device if you want to run it there, otherwise emulator will be used.
- Make sure that the application is closed or already uninstalled


```bash
# Clone this repository
$ https://github.com/jaypersanchez/olympia-gofit.git

# Install dependencies
$ npm install

# prebuild the app
$ npx expo run:android

# Run the app
$ npm start

# Run on android
$ a
```

## What to do if Prebuild does not work!?

```bash
# Run the app
$ npm start

# prebuild the app
$ npx expo run:android

# Run on android
$ a
```

## Troubleshooting
### Sometimes you will encounter this error
```ruby
CommandError: No development build (com.qbii.oylmpiagofit) for this project is installed. Please make and install a development build on the device first.
```
### Solution
- Make sure that the application is closed or already uninstalled
```bash
# stop the execution then prebuild the app again (repeat steps again till it work)
$ npx expo run:android

# Run on android
$ a
```
