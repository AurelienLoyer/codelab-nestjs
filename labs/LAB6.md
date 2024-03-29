## Tests

* Si vous êtes en retard, vous pouvez récupérer la correction de l'exercice précédent en utilisant

```
git checkout step5 -f
```

* Normalement pas besoin d'installer de librairie de test pour cette étape. 
Comme vue dans les slides, NestJs dispose déjà de `@nestjs/testing` pour vous aidez à tester aux mieux votre application.

* A ce stade du codelab nous avons la posibilite de tester plusieurs partie de notre application.

* Commencez par tester via des tests unitaire :
  * `ProductsService`

Afin de faciliter l'écriture des tests, nous allons tout d'abord externaliser notre tableau de produits dans un nouveau `provider`

```typescript
@Module({
  controllers: [ProductsController],
  providers: [
    ProductsService,
    { provide: 'ProductsJson', useValue: productsJson },
  ],
})
``` 

```typescript
@Injectable()
export class ProductsService {
  private products: Product[];

  constructor(
    @Inject('ProductsJson') private readonly productsJson: Product[],
  ) {
    this.products = productsJson;
  }
}
```

  * `ProductsController`
  

* Puis terminez par des tests e2e que nous placerons dans le dossier `test/products/products.e2e-spec.ts`
