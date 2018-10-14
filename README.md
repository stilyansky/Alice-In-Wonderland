# Project Title

WireDelta - Tech Sample - Javascript L1


## Project Description

This is 3 day technical assignment for a Technical Internship position at WireDelta.
The task was to create four different calculators:
* Task 1 - a calculator that determents the users age based on his year of birth and the current year.
* Task 2 - a calculator that calculates the amount of snack the user will need until his death.
* Task 3 - a calculator that calculates the circumference and the area of a circle based on a radius set by the user.
* Task 4 - a temperature converter for Fahrenheit to Celsius and vice versa.


## Built With

The website has been build with:
* HTML5
* CSS3
* JavaScript ES6

### HTML

The website is designed in two main sections:
* Welcome Screen
* Tasks Solutions - Calculators

**NOTE** - the .js file has been added to the bottom of the page in order to speed up the loading time
(so that the HTML can load first and the functionality afterwards)

#### Welcome Screen

This part of the page serves as a Welcome message and introduces the calculators.
Upon clicking onto the hole (serves as a button), this Welcome Screen becomes hidden
and the next part - Tasks Solutions - Calculators, is being displayed.

#### Tasks Solutions - Calculators

On this page are the solutions to all 4 tasks.
Each task is set up in a table for easy of use.
The first three tasks use a button in order to show the result, where as the last
one displays the results dynamically directly in the opposite input field.  

Default values have been added to all fields in order to avoid empty input.


### CSS

The website has been designed for a optimal resolution of 1366x768, since it is the most
popular resolution currently(https://www.w3schools.com/browsers/browsers_display.asp).

Additional it the website has been adapted to support smaller resolutions with some adjustments
to the size of the elements.

All elements have been ordered with CSS GRID in order to make for an easy setup.


### JavaScript

ES6 has been used throughout this project.

The .js file has been ordered like so:
* 1. the function that hides the Welcome Screen and shows the Tasks Solutions - Calculators
* 2. a function that is used to display the results from each calculation to the website
* 3. variable that stores the current year (it is outside of Task 1 - The Age Calculator function, so that it can be display upon page load)
* 4. functions for all the tasks ordered like so: Task 1, Task 2, Task 3, Task 4 (Task 4 has a generic function that is used for highlighting of the result)


## Authors

* **Stilyan Rusev** - *Initial work* - [stilyansky](https://github.com/stilyansky)


## Acknowledgments

* icons for each task have been Created by Creative Stall from The Noun project
