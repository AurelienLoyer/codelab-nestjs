## Authentification

* Si vous êtes en retard, vous pouvez récupérer la correction de l'exercice précédent en utilisant le repertoire `corrections/step5`

* Installez les modules NPM nécessaires pour une Authentification JWT

```shell
npm install @nestjs/jwt @nestjs/passport @nestjs/platform-express passport passport-jwt
```

* Créez un nouveau module `users` dans lequel nous allons implémenter la gestions des utilisateurs.

```shell
➜  nest generate module users 
```

* Dans ce module, importez et configurez les modules `PassportModule` et `JwtModule` de la manière suivante : 


```typescript
[
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretBeer',
      signOptions: {
        expiresIn: 3600,
      },
    }),
]
```

Nous allons à présent créer deux service : 
* `UsersService` pour la gestion des utilisateurs
* `JwtStrategy` pour configurer la stratégie d'authentification de notre application 

```shell
nest generate service users/JwtStrategy
nest generate service users/users
```

* Le service `JwtStrategyService` aura la structure suivante :


```typescript
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretBeer',
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.usersService.validateUser(payload);
    if (!user) {
      throw new UnauthorizedException('The user is unauthorized');
    }
    return user;
  }
}
```

* Dans la méthode `validate`, nous allons appeler une méthode `validateUser` du service `UsersService` que nous allons implémenter dans le point suivant. 
Si l'objet `User` retourné par cet méthode n'est pas défini, vous devez émettre une exception `UnauthorizedException`. Sinon vous pouvez retourner l'objet lui-même.  
  
* Dans le service `UsersService`, nous allons implémenter deux méthodes : 
    * `validateUser` : cette méthode prendra en paramètre l'objet `JwtPayload` et retournera une `Promise<boolean>`. Le `boolean` sera à `true` si le duo `email` et `password` sont corrects. Pour cela, vous pouvez utiliser un tableau d'utilisateurs défini en mémoire (bien evidemment nous ne faisons jamais cela dans la vrai vie :p ).

  ```
    [
        {
            "id": 1,
            "username": "Aurel",
            "email": "aurelien@loyer.fr",
            "password": "beer",
            "cart": {}
        },
        {
            "id": 2,
            "username": "Manu",
            "email": "emmanuel@demey.fr",
            "password": "beer",
            "cart": {}
        }
    ]
  ```  
  
    * une méthode `login` qui prendra en paramètre l'email et le password d'un utilisateur. Après avoir vérifié que la combinaison email/password correspond bien à un utilisateur, cette méthode retournera le token JWT nécessaire pour s'authentifier. Pour cela, on utilisera le service `JwtService` du module `@nestjs/jwt`

```typescript
const accessToken = this.jwtService.sign(payload);
return {
    expiresIn: 3600,
    accessToken: `Bearer ${accessToken}`,
};
```

* Créez un controller `users` proposant une endpoint permettant d'appeler la méthode `login` du service `UsersService`.

* Sécurisez la route permettant de créer et mettre à jour des bières

Voici de plus quelques liens qui pourraient vous êtres utiles tout au long de ce codelab :

- [Authentification avec NestJS](https://docs.nestjs.com/techniques/authentication)

