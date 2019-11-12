## Modules

Nous allons à présent créer un module NestJS afin d'y ajouter la fonctionnalité de gestion des produits.

* Si vous êtes en retard, vous pouvez récupérer la correction de l'exercice précédent en utilisant

```
git checkout step2 -f
```

* Via la CLI, générez un nouveau module NestJS `ProductsModule`.

```shell
nest generate module products
```

* Externalisez le CRUD (créé précédemment) permettant de gérer les produits dans un contrôleur spécifique : `ProductsController`

```shell
nest generate controller products
```

* Vérifiez que ce nouveau contrôleur est bien associé au module `ProductsModule` créé au début de cet exercice.

* Ajoutez au module principal de votre application le module `ProductsModule`.

Voici de plus quelques liens qui pourraient vous êtres utiles tout au long de ce codelab :

- [Les contrôleurs NestJS](https://docs.nestjs.com/controllers)
- [Les modules NestJS](https://docs.nestjs.com/modules)

