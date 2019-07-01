# Burger
Homework: Week 14 - Create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM

## Objectives

As with every week, leverage knowledge from the previous weeks, add the following: 
1. ORM - 
2. Deploy node.js/express to heroku and MySQL to jawsDB -
3. MVC Design Pattern - 
4. Integration - 

## Assignment

Note: The functionality described reflect the assignment with my modifications to what is built.

* _Eat-Da-Burger!_ is a restaurant app that lets users input the names of burgers they'd like to eat.
* Whenever a user submits a burger's name, the app will add the burger to the database and display the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
* A `Duplicate` burger button will add another burger with the same name to the left side of the page., waiting to be devoured.
* The app will store every burger in a database, whether devoured or not. 
* A `Delete` devoured burgers button is available to help with database maintenance.