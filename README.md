# SimpleApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Criteres de notation 

Le tp complet est sur le repo et compile (+ 12)
La migration est faite et le code se lance et compile (+3)
Le search est fait et fonctionne parfaitement (+3)
Le code est clean (pas de commentaire inutile, variable bien nommée...) // code simple ! (+1)
Vous savez pourquoi la migration est intéressante pour la suite du cours (+1)

## Etapes indispensables du projet

Tp pour le 4 Mai 13h30 (max) :
0 - Prerequis avoir le tp de finalize (un commit)
1 - Creer un repo a votre nom sur github de l'organisation
2 - Migrer de la version 5 => 8 (un commit) ( https://update.angular.io/ )
3 - Migrer de la version 8 => 9 (un commit)
4 - Implementer un search (un commit)
( rechercher un article selon le titre, le contenu, le nom de l'auteur)
5 - Expliquer pourquoi la migration est intéressante pour la suite du cours (un commit "README")


## Commandes effectuées

Pour lancer le projet ouvrir dans 2 fenêtres différentes :
'json-server server.json'
'ng serve'

Pour updater le projet sur Git : 
'git add .'
'git commit -m « Commentaire »'
'git push'

Version 5 to 6 : 
During the upgrade : npm install @angular/cli@6
'npm run ng update @angular/cli@6'
'npm run ng update @angular/core@6'
After the upgrade : 
'npm install -g rxjs-tslint'
'rxjs-5-to-6-migrate -p src/tsconfig.app.json'
Angular CLI : 6.2.9
Angular : 6.1.10

Version 6 to 7 :
'ng update @angular/cli@7 @angular/core@7'
Angular CLI : 7.3.10
Angular : 7.2.16

Version 7 to 8 : 
'ng update @angular/cli@8 @angular/core@8'
Angular CLI : 8.3.26
Angular : 8.2.14
-> Commit to GitHub

Version 8 to 9 :
'ng update @angular/core @angular/cli'
Angular CLI : 9.1.4
Angular : 9.1.4
->	Commit to GitHub


# Les + de la migration

Etre sur la version la plus récente et donc maintenue qui prend en compte les changements et les dépréciations.
Bénéficier des dernières fonctionnalités d'Angular.
Avoir une application qui fonctionne sur toutes les plateformes et sur tout type d'appareil.
Patchs de sécurité et bugs fixés en comparaison aux versions précédentes


