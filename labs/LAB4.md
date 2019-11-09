## Provider

* Si vous êtes en retard, vous pouvez récupérer la correction de l'exercice précédent en utilisant le repertoire `corrections/step3`

Nous allons à présent externaliser le code métier dans un service dédié que nous nommerons `ProductsService`.

* Veuillez créer un service `products`

```shell
nest generate service products
```

* Migrez tout le code métier écrit jusqu'à présent dans le contrôleur `ProductsController` dans ce service.

* Injectez et utilisez ce service dans le contrôleur `ProductsController`.

Voici de plus quelques liens qui pourraient vous êtres utiles tout au long de ce codelab :

- [Les providers NestJS](https://docs.nestjs.com/providers)

