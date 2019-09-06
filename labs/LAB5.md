## Authentification

* Si vous êtes en retard, vous pouvez récupérer la correction de l'exercice précédent en utilisant le repertoire `corrections/step4`
* Installez les modules NPM nécessaires pour une Authentification JWT
* Via le service `JwtService`, implémentez la méthode `login` du service `UserService`
    * Elle doit retourner un objet `{ expiresIn: 3600, accessToken: `Bearer ${accessToken}`, }`, avec `accessToken` le résultat retourné par la méthode `sign` du service `JwtService`
* Sécurisez la route permettant de créer et mettre à jour des bières

Voici de plus quelques liens qui pourraient utiles tout au long de ce codelab :

- [Authentification avec NestJS](https://docs.nestjs.com/techniques/authentication)

