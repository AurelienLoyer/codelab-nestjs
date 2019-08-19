## Contrôleur

- Dans le contrôleur `AppController`, implementez un CRUD permettant de gérer des bières (en mémoire). Nous allons pouvoir :
  - lister les bières
  - retourner les détails d'un bière, grâce à son identifiant
  - supprimer une bière, grâce à son identifiant
  - En modifier, grâce à son identifiant
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
