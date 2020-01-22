# NextDots-Exercise
NextDots Exercise - RN w/ Typescript


# Execution Steps
- Clone the Repo
	> git clone https://github.com/MaxiGT/NextDots-Exercise.git
- Install Dependencies
	> npm i
- Install IOs PODs
	> cd ios && pod install && cd ..
- Execute for IOs
	> npm run ios
	> **Note:** This npm Script was modified manually to remove the *ios/build* folder on every execution in order to avoid the in-famous 	*red screens of death*
- Execute for Android
	> npm run android

# Libraries Used
- React v16.9.0
- React Native v.0.61.5
- React Navigation v4.0.10
- React Redux v7.1.3
- Redux v4.0.5
- Redux Thunk v2.3.0
- Typescript v3.7.3

# List Performance
There are a couple of steps that can be easily taken in order to improve the List performance, which are:

- **Implement React Native's FlatList component**, which, out of the box, handles the in-memory allocation dynamically by allocating memory and cleaning up once the component is no longer on screen.

- **Implement image cache**, for this, there are several approaches possible, we can either select one of the many libraries out there or, we can implement a native/manual approach with the device's internal DB.
	> The IMG loading is the heaviest memory allocation task, hence, reason why it's best to use cache
