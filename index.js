'use strict';
//in the name of My creator i start
//the whole class is javascript instance
var Human = function () {
    //first extends react and its Components class and pass the obj as parameter
    React.Component.call(this);
    //this is the component class name presented in react dev tools
    this.displayName =  'Human';
    //render method is a method of the class object
    this.render= function () {
        //you have to call React.createElement() every time you return.
        //it is equivalanet to '()' in es6;
        return React.createElement('div', null, 'React element content');
      }
  };

  //to create the class and extends from React.Component we have to add the prototype

  Human.prototype = Object.assign(React.Component.prototype);
  Human.prototype.constructor = Human;

  //render the component in dom using ReactDOM.render method
///notice we call React.createELement again to create the instance of the component to render
  ReactDOM.render(React.createElement(Human), document.getElementById('root'));