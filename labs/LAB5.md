## Validation

* Si vous êtes en retard, vous pouvez récupérer la correction de l'exercice précédent en utilisant

```
git checkout step4 -f
```

* Activez la validation de manière globale pour toute l'application 

* Installez les modules `class-validator` et `class-transformer`. 

* Ajoutez les contraintes suivantes sur votre classe `Product`
    * `id` doit être un `number`
    * `label` doit être une `string`
    * `description` doit être une `string`, avec un taille entre 10 et 80 caractères
    * `image` doit être une `string`, et se terminer par `/\.(jpe?g|png|gif|bmp)$/` (via un custom validateur)
    * `price` doit être une `number`, compris entre 0 et 100
    * `stock` doit être une `entier`

Pour cela, nous allons utiliser des décorateurs définis dans le module `class-validator`.

Voici de plus quelques liens qui pourraient vous êtres utiles tout au long de ce codelab :

- [Documentation de Class-Validator](https://github.com/typestack/class-validator)

