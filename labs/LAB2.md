## Contrôleur

* Si vous êtes en retard, vous pouvez récupérer la correction de l'exercice précédent en utilisant

```
git checkout step1 -f
```

* Dans le contrôleur `AppController`, implementez un CRUD permettant de gérer des produits (en mémoire). Nous allons pouvoir :
  - lister les produits
  - retourner les détails d'un produit, grâce à son identifiant
  - supprimer un produit, grâce à son identifiant
  - modifier un produit grâce à son identifiant
  - Et enfin en ajouter un

Un produit sera représenté par la classe TypeScript suivante : 

```typescript
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ example: 12 } as ApiPropertyOptions)
  readonly id: number;

  @ApiProperty({ example: 'Super product' } as ApiPropertyOptions)
  readonly label?: string;

  @ApiProperty({
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...',
  } as ApiPropertyOptions)
  readonly description?: string;

  @ApiProperty({ example: '' } as ApiPropertyOptions)
  readonly image?: string;

  @ApiProperty({ example: 15.0 } as ApiPropertyOptions)
  readonly price?: number;

  @ApiProperty({ example: 5 } as ApiPropertyOptions)
  readonly stock?: number;
}
```

Un fichier [products.json](https://github.com/T3kstiil3/codelab-nestjs-corrections/blob/master/static/data/products.json) est à votre disposition. Il contient un jeu de données que vous pouvez utiliser pour cette API. 

Voici de plus quelques liens qui pourraient vous être utiles tout au long de ce codelab :

- [Les contrôleurs NestJS](https://docs.nestjs.com/controllers)

