## Modules

Nous allons à présent créer un module NestJS afin d'y ajouter la fonctionnalité de gestion des bières.

* Si vous êtes en retard, vous pouvez récupérer la correction de l'exercice précédent en utilisant le repertoire `corrections/step2`

- Via la CLI, générez un nouveau module NestJS `BeersModule`.

```shell
nest generate module beers
```

- Externalisez le CRUD (créé précédemment) permettant de gérer les bières dans un contrôleur spécifique : `BeersController`

```shell
nest generate controller beers/beers
```

- Vérifiez que ce nouveau contrôleur est bien associé au module `BeersModule` créé au début de cet exercice.

- Ajoutez au module principal de votre application le module `BeersModule`.

Voici de plus quelques liens qui pourraient utiles tout au long de ce codelab :

- [Les contrôleurs NestJS](https://docs.nestjs.com/controllers)
- [Les modules NestJS](https://docs.nestjs.com/modules)

