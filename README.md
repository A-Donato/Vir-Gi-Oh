# VirGiOh

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## Deploying New Versions

1) install firebase tools
```
npm install -g firebase-tools
```
2) Login with your firebase credentials

```
firebase login
```
3) Initialize firebase cli in your project
```
firebase init
```
Upon initializing the project you’ll be asked a few questions:
    
    (En alguna parte de todo esto te pide que digas si queres empezar un proyecto nuevo, o usar uno existente, o vincular con google cloud y pelotudeces asi. Selecciona vincular con existente y busca el ygo-ud o algo asi).
    A) Firebase CLI features (bla bla bla) select (with spacebar) => Hosting. (and press enter)
    B) Public directory => Type:"dist/vir-gi-oh" (sin las comillitas capo)
    C) Configure as single-page app => OBVIOUSLY YES.
    D) Overwrite index.html => Pls no.

4) Run the magic command 
```
npm run virgi-deploy
```
