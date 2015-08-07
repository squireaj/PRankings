# Power Rankings 
Custom Angular Directives Tutorial

>In this tutorial we will be going over the basics of building a custom directive. By the end you will have built your very own directive. While this directive doesn't cover every concept in directive building its is one that I think is very usefull in a veriety of situations. Even though we won't be using every property in our app I will give you a brief overview of the basic concepts. 

### What You Will Build 

<div align= "center">
	### What You Will Build 
	<!-- ![Project Screenshot](https://raw.github.com/squireaj/PRankings/master/logos/video.gif) -->
	<img src="https://raw.github.com/squireaj/PRankings/master/logos/video.gif">
</div>

### What We Will Be Covering 

- Getting Started
- DDO - Directive Definition Object
- Directive Properties 
  - Scope
  - Controllers
  - Template & Template URL
  - Restrict
 - Conclution 



### Getting Started

>Building a directive is much like building a service in Angular. It is a modular piece of code that you can use anywhere in your app. If you’ve been using Angular for a while you will notice that the syntax for the shell of a directive is quite familiar.

##### First lets build the shell if the directive.  

![Project Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/Directive1.gif)

- First of all you define your agular directive just the same as an Angular service or controller. See its not so scary... 

- Now we will build the directive definition object. 

### Directive Definition Object. 

>A DDO or directive definition object is the hub of your directive. This is where everything that makes your directive what it is come together. The DDO is returned and Angular’s $compile function then knows what qualities and functions to pass on to the DOM.  

![Project Screenshot](https://raw.github.com/squireaj/PRankings/master/readmeImg/DDO.gif)

- Your DDO is comprised of directive properties. 

- The directive properties that we will be using in this app are as follows (We will be going over them later on)
  - Scope
  - Controller
  - Template URL
  - Restrict

### Directive Properties

>Directive properties are what make up your DDO. Most of them should look familiar to you scope, controller and templateURL shouldn't be foregn concepts to you. For the most part they are exactly what they sound like. Scope is a little different so we will go over that first. 

##### Scope

 - A custom directive by default will inherit the parent scope of wherever it is used. If you want to make your directive truly modular you will need to isolate the scope. The directive property of "scope" is defining the relationship you want to have with the parent scope where that particular instance of your directive lives. 









