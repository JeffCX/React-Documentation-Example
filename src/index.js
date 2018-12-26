import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//first 
//import App from './MainConcepts/HelloWorld';

//second 
//import App from './MainConcepts/IntroToJS';

//third 
/*
import Tick from './MainConcepts/RenderElement';
setInterval(Tick,1000)
*/

//fourth
//import App from './MainConcepts/FunctionalClassComponent';

//fifth  
//import App from './MainConcepts/StateAndLifeCycle';

//Sixth 
//import App from './MainConcepts/HandleEvent';

//Seventh
//import App from "./MainConcepts/ConditionalRender"

//Eighth
import App from "./MainConcepts/ListAndKeys"

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
