## Contrôleur

- Dans le contrôleur `AppController`, implementez un CRUD permettant de gérer des bières (en mémoire). Nous allons pouvoir :
  - lister les bières
  - retourner les détails d'un bière, grâce à son identifiant
  - supprimer une bière, grâce à son identifiant
  - modifier une bière grâce à son identifiant
  - Et enfin en ajouter

Une biére sera représentée par la classe TypeScript suivante : 

```typescript
export interface Beer {
  id: number;
  label?: string;
  description?: string;
  image?: string;
  price?: number;
  stock?: number;
}
```

Un fichier `static/data/beers.json` est à votre disposition. Il contient un jeu de données que vous pouvez utiliser pour cette API. 


Voici de plus quelques liens qui pourraient utiles tout au long de ce codelab :

- [Les contrôleurs NestJS](https://docs.nestjs.com/controllers)

