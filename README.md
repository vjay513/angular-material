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

## Add Ngrx to the Application
`@ngrx/store`

Store is RxJS powered state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular.
```
npm install @ngrx/store --save
```
`@ngrx/store-devtools`

Store Devtools provides developer tools and instrumentation for Store.
```
npm install @ngrx/store-devtools --save
```
`@ngrx/effects`

Effects are an RxJS powered side effect model for Store. Effects use streams to provide new sources of actions to reduce state based on external interactions such as network requests, web socket messages and time-based events.
```
npm install @ngrx/effects --save
```
`@ngrx/router-store`

Bindings to connect the Angular Router with Store. During each router navigation cycle, multiple actions are dispatched that allow you to listen for changes in the router's state. You can then select data from the state of the router to provide additional information to your application.
```
npm install @ngrx/router-store --save
```
`@ngrx/entity`
Entity State adapter for managing record collections.

Entity provides an API to manipulate and query entity collections.

- Reduces boilerplate for creating reducers that manage a collection of models.
- Provides performant CRUD operations for managing entity collections.
- Extensible type-safe adapters for selecting entity information.
```
npm install @ngrx/entity --save
```
`@ngrx/data`

NgRx Data is an extension that offers a gentle introduction to NgRx by simplifying management of ***entity*** data while reducing the amount of explicitness.
```
npm install @ngrx/data --save
```

`@ngrx/schematics`
Scaffolding library for Angular applications using NgRx libraries.

Schematics provides Angular CLI commands for generating files when building new NgRx feature areas and expanding existing ones. Built on top of Schematics, this tool integrates with the Angular CLI.
```
npm install @ngrx/schematics --save-dev
```
