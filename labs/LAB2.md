## Modules

Nous allons à présent créer un module NestJS afin de définir la fonctionnalité de gestion des bières.

* Si vous êtes en retard, vous pouvez récupérer la correction de l'exercice précédent en utilisant le repertoire `solutions/step1`
- Via la CLI, générez un nouveau module NestJS `BeersModule`.

```shell
nest generate module beers
```

- Externalisez le CRUD (créé précédemment) permettant de gérer les bière dans un contrôleur spécifique : `BeersController`

```shell
nest generate controller beers/beers
```

- Vérifiez que ce nouveau contrôleur  est bien associé au module `BeersModule` créé au début de cet exercice.

- Ajoutez au module principal de votre application le module `BeersModule`.

