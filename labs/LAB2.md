## Contrôleur

* Dans le contrôleur `AppController`, implementez un CRUD permettant de gérer des produits (en mémoire). Nous allons pouvoir :
  - lister les produits
  - retourner les détails d'un produit, grâce à son identifiant
  - supprimer un produit, grâce à son identifiant
  - modifier un produit grâce à son identifiant
  - Et enfin en ajouter un

Un produit sera représenté par la classe TypeScript suivante : 

```typescript
import { ApiModelProperty } from '@nestjs/swagger';

export class Product {
  @ApiModelProperty({ example: 12 })
  readonly id: number;

  @ApiModelProperty({ example: 'Super product' })
  readonly label?: string;

  @ApiModelProperty({
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...',
  })
  readonly description?: string;

  @ApiModelProperty({ example: '' })
  readonly image?: string;

  @ApiModelProperty({ example: 15.0 })
  readonly price?: number;

  @ApiModelProperty({ example: 5 })
  readonly stock?: number;
}
```

Un fichier [products.json](https://github.com/T3kstiil3/codelab-nestjs-corrections/blob/master/static/data/products.json) est à votre disposition. Il contient un jeu de données que vous pouvez utiliser pour cette API. 

Voici de plus quelques liens qui pourraient vous être utiles tout au long de ce codelab :

- [Les contrôleurs NestJS](https://docs.nestjs.com/controllers)

