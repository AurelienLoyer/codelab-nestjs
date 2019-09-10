## Contrôleur

* Dans le contrôleur `AppController`, implementez un CRUD permettant de gérer des bières (en mémoire). Nous allons pouvoir :
  - lister les bières
  - retourner les détails d'une bière, grâce à son identifiant
  - supprimer une bière, grâce à son identifiant
  - modifier une bière grâce à son identifiant
  - Et enfin en ajouter une

Une bière sera représentée par la classe TypeScript suivante : 

```typescript
import { ApiModelProperty } from '@nestjs/swagger';

export class Beer {
  @ApiModelProperty({ example: 12 })
  readonly id: number;

  @ApiModelProperty({ example: 'Souper beer' })
  readonly label?: string;

  @ApiModelProperty({
    example:
      'India pale ale is a hoppy beer style within the broader category of pale ale',
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

Un fichier [beers.json](https://github.com/T3kstiil3/BaaS/blob/master/static/data/beers.json) est à votre disposition. Il contient un jeu de données que vous pouvez utiliser pour cette API. 

Voici de plus quelques liens qui pourraient vous être utiles tout au long de ce codelab :

- [Les contrôleurs NestJS](https://docs.nestjs.com/controllers)

