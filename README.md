# ReduxSimpleStarter

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```
Notes:-
A container is a react component that has direct connection to the state managed by redux.
React and redux are totally disjointed libraries, the tird library react-redux is used in containers or smart components for the react and redux to communicate.
Whenever the application state changes, the container will automatically rerender.
Any user action direct/indirect triggeres an action, the action creator sends the action Type and some data (optional) to ALL the reducers. Based on the type the reducers can choose to act, this is called redux lifecycle.
