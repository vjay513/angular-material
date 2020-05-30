# CRUD

## Angular setup
If you are new to Angular or getting started with a new Angular application


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:8100/`. The app will automatically reload if you change any of the source files.

within `angular.json`changes default port number to 8100
```
"serve": {
  "options": {
    "port": 8100
  }
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# angular-material
CRUD operations with Angular Material, Ngrx, Node and mongodb


## Install Angular Material
Use the Angular CLI's install schematic to set up your Angular Material project by running the following command:

```
ng add @angular/material`
```
## Lazy-loading feature modules

- Create the feature module with the CLI, using the --route flag.
- Configure the routes.
```
ng new customer-app --routing
```

## Create a feature module with routing
```
ng generate module customers --route customers --module app.module
```

## 
