# Power Rankings 
Custom Angular Directives Tutorial

>In this tutorial I will be going over the basics of building a custom Angular directive. By the end of this tutorial if you follow along you will have built your very own directive. The example doesn't cover every concept but it is very usefull in a veriety of situations.

### What You Will Build 

<div align= "center">
	<img src="https://raw.github.com/squireaj/PRankings/master/logos/video.gif">
</div>

### What We Will Be Covering 

- Getting Started
- DDO - Directive Definition Object
- Directive Properties 
  - Scope
  	- @
  	- =
  	- &
  - Template & Template URL
  - Controllers
  - Restrict
- Conclusion

### Getting Started

>Building a directive is much like building a service in Angular. It is a modular piece of code that can be used anywhere in your app. If you’ve been using Angular for a while you will notice the syntax for the shell of a directive is familiar.

##### Directive Shell.  

![Project Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/Directive1.gif)

- First you define your agular directive the same as an Angular service or controller.
- Next we will build our directive definition object. 

### Directive Definition Object. 

>A DDO or directive definition object is the hub of your directive. This is where everything that makes your directive what it is comes together. The DDO is returned and Angular’s $compile function then knows what qualities and functions to pass on to the DOM.  

##### Directive Definition Object

![DDO Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/DDO.gif)

- Your DDO is comprised of directive properties. 

- The directive properties that we will be using in this app are as follows.
  - Scope
  - Controller
  - Template URL
  - Restrict

### Directive Properties

>Directive properties are what make up your DDO. Most of them should look familiar to you, scope, controller and templateURL shouldn't be foreign concepts to you. For the most part they are exactly what they sound like. Scope is a little different so we will go over that first. 

##### Scope:

 - A custom directive by default will inherit the parent scope of wherever it is used. If you want to make your directive truly modular you will need to isolate the scope. The directive property of "scope" is defining the relationship you want to have with the parent scope. 
 
##### Local Scope Properties
![LocalScopeProperties Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/localScopeProperties.gif)

## " = " 
  
  - Creates two way binding between the directive and its parent scope. If you change a varible that is assigned the scope property of '=' inside the directive it will be reflected on the parent controller's scope. 

## " & "  

  - & -- Is used to pass functions to your custom directive. You are able to call the parent controller's function inside the directive when it is assigned the '&' scope property. 

## " @ " 

  - @ -- Gives you access to the parent scopes objects. But if you make a change inside the directive that will not be reflected outside of the directive’s scope.
 
 ##### Local Scope Property Hookup
![ScopeView Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/ScopeView.gif)

 - If you follow the lines you will see which names must match. 
 - Each local scope property has values that the user of the directive defines when the directive is used. 
 - In the next slide I will show you what it looks like in the Template. 

##### Template/TemplateURL:

- Custom directive templates are where the visual part of your directive lives.  

##### Template
![Template Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/Template.gif)

 - If you are using an isolate scope then you need to remember that any variables, objects or functions you use must come from either the scope directive property or from the directives controller.
 
##### Controller:

- The controller for a custom directive is just like any other Angular controller except it is only responsible for the directive and its template. 

##### Controller
![Project Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/Controller.gif)

 - Your controller will have the rest of your directives functionality in it. The example has a cupple of functions that make the toggle work. 
 - This is where you would define any varibles that you would need internally for your directive. 
 
##### Restrict: 
 - Restrict is what it sounds like it restricts your directive to being used in the way you design it. The default and most common was to use directives are either as attributes or elements.  


##### Restrict
![Project Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/Restrict.gif)

### Conclusion






