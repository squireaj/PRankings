# Power Rankings 
Custom Angular Directives Tutorial

>In this tutorial I will be going over the basics of building a custom Angular directive. By the end of this tutorial you will be able to build your very own directive. The example doesn't cover every concept but it is very useful in a variety of situations.

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

>Building a directive is much like building a service in Angular. It is a piece of modular code that can be used anywhere in your app. If you’ve been using Angular for a while you will notice the syntax for the shell of a directive is familiar.

##### Directive Shell.  

![Project Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/Directive1.gif)

- First you define your Angular directive the same as an Angular service or controller. 

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

>Directive properties are what make up your DDO. Most of them should look familiar to you, scope, controller and templateURL shouldn't be foreign concepts. For the most part they are exactly what they sound like. Scope is a little different so we will go over that first. 

##### Scope:

 - A custom directive by default will inherit the parent scope of wherever it is used. If you want to make your directive truly modular you will need to isolate the scope. The directive property of "scope" is defining the relationship you want to have with the parent scope. 
 
##### Local Scope Properties
![LocalScopeProperties Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/localScopeProperties.gif)

## " = " 
  
  - Creates two way binding between the directive and its parent scope. If you change a variable that is assigned the scope property of '=' inside the directive it will be reflected on the parent controller's scope. 

## " & "  

  - Is used to pass expressions to your directive. The most common use for this property is to pass functins. You are able to call the parent controller's function inside the directive when it is assigned the '&' scope property. 

## " @ " 

  - Will parse whatever it is passed as a string. If you want access to a local scope property you will need to wrap it in curly braces.
 
 ##### Local Scope Property Hookup
![ScopeView Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/ScopeView.gif)

 - If you follow the lines you will see which names must match. 
 - Each local scope property has values that the user of the directive defines when the directive is used. 
 - In the next slide I will show you what it looks like in the Template. 

##### Template/TemplateURL:

- Custom directive templates are where the visual part of your directive lives.  

##### Template
![Template Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/Template.gif)

 - If you are using an isolate scope then you need to remember that any variables, objects or functions you use must come from either the scope directive property or from the directive's own controller.
 
##### Controller:

- The controller for a custom directive is just like any other Angular controller except it is only responsible for the directive and its template. 

##### Controller
![Project Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/Controller.gif)

 - Your controller will have the rest of your directives functionality in it. The example has a couple of functions that make the toggle work. 
 - This is where you would define any variables that you would need internally for your directive. 
 
##### Restrict: 
 - Restrict is what it sounds like it restricts your directive to being used in the way you design it. The default and most common way to use directives are either as attributes or elements.  You can also create directives that are comments or classes but they are almost never used. 

##### Restrict
![Project Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/Restrict.gif)

### Conclusion

 - Directives can range from simple to very complex but their general purpose is the same. Create something once so you can use it over and over again. 
 - Directives are made of the same basic parts, a directive definition object or DDO, Controller, and Template. 
 - You now have the basic building blocks to start making your own directives, have fun!. 






