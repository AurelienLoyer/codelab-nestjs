## Provider

* Si vous êtes en retard, vous pouvez récupérer la correction de l'exercice précédent en utilisant le repertoire `solutions/step2`

Nous allons à présent externaliser le code métier dans un service dédié que nous nommerons `BeersService`.

* Veuillez créer un service `beers`

```shell
nest generate service beers
```

* Migrez tout le code métier écrit jusqu'à présent dans le contrôleur `BeersController` dans ce service.

* Injectez et utilisez ce service dans le contrôleur `BeersController`.

Voici de plus quelques liens qui pourraient utiles tout au long de ce codelab :

- [Les providers NestJS](https://docs.nestjs.com/providers)

