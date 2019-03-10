# classic-React-No-ecmascript

this is classic react library practice.
Taken from "Learning React" by oreilly books.

# Why classic
most of the time react uses bundle framework to compile the source code of es6 to normal browser javascript. but classic react does not. You just drop in react components from packages using normal links inside html wihtout heavy load and bundling and deploying.

Another important reason to understand react from grounds up so people understand more using normal javascript and debug code more thoroughly and easily.

# example:
    `var MyComponent = function(){
        React.Component.call(this);
        this.state = {
            compoData: Array(9)
        };

        this.componentWillMount= function(){
            this.setState({compoData: ['k', 'l', 's']});
        };

        this.render = function(){
            return React.createElement('div', {props}, 'content');
        }
    }
    
    Mycomponent.prototype = Object.assign(React.Component.prototype);
    Mycomponent.prototype.constructor = Mycomponent;

    ReactDOM.render(React.createElement(MyComponent, {props}), document.getElementById('root'));
    `

