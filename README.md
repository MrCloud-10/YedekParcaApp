# Project
In this project

1- Data is representing with app/Models

/user

*User:> id,name,surname,imgS,username,email,password (taking from database )

*LoginValidate:>loginUser,password (this data type is using by Logging in)

/product

*Product:>id,name,price,number,imgS,modelId[] (taking from database )

*Model:>id,name,brandId (taking from database )

*Brand:>id,name (taking from database )

This models have one datasource which as representing Database and one repository which as using it when we need data 

2- app/services

There is two service, these are auth and authguard for authenticatication.
auth service is looking login database validations and takes loggined user.
auth guard is waiting for logging and guarding dashboard.


3- app/layouts

This structure is like a junction between modules in the project.

4- app/auth

This modul is for validation processes.
This modul almost ended but it has a few shortcomings.

5- app/dashboard

This modul is for listing product and using to add products to basket.

6- Shortcomings

It will be improved that searching by brand or br model.
There can be builded better UI with css.
There can be added an User page.

## Starting The Project

Go to project directory
Run `npm install` after that run `ng serve`

## Using the Project

You can use this validation inputs; 

for User: "yusufbulut","yusufblt10@outlook.com", for password : "12345abC"

User: "otokoç","otokoc@otokoc.com",password :"Otokoç123"

User: "jsangular","jsangular@npm.com", password:"npmInsta11"

and You can reach them in to project models/user/user.datasource

## What is Done?

It can login to the system in more than one way and is managed through a single login.

Login

1. Username(alphanumeric) / Mail (alphanumeric)
2. Password (at least 8 characters, at least 1 uppercase and 1 lowercase letter and special character requirement)(special Char taked with just numbers)


Dashboard

1. Listed product items
2. Filtering can be with brand, model and searching with product number
3. Adding one or more  product items to basket with which entered numbers
4. Counting the basket and erasing products from basket
5. Listing Counts and Basket items


# Yedekparcauyg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3, with Visual Studio Code.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

