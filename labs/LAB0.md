author: Aurelien Loyer / Emmanuel Demey
summary: Pendant ce codelab, nous allons créer un backend pour une application d'e-commerce avec le framework NestJS.
id: docs/lab
ga: UA-137363732-2
feedback link: https://twitter.com/AurelienLoyer

# Codelab NestJS

## Prérequis

Pour faire ce codelab, vous avez besoin des outils suivants :

- GIT
- NodeJS 10.x ou >
- un IDE (WebStorm ou Visual Studio Code...)
- Le module `@nestjs/cli` installé globalement

```shell
npm install -g @nestjs/cli
yarn global add @nestjs/cli
```

- Récupérez la répertoire `step0` du repository GIT

```shell
git clone -b step0 https://github.com/T3kstiil3/codelab-nestjs-corrections
cd codelab-nestjs-corrections
npm install # yarn
# Ou
git clone https://github.com/T3kstiil3/codelab-nestjs
cd codelab-nestjs/corrections/step0
npm install # yarn
```

Si vous utilisez VSCode, nous vous proposons une selection d'extensions que vous pouvez utiliser pour un projet NestJS. Pour les lister, dans la page dédiée aux extensions, faites une recherche via le mot clé `@recommanded`. Normalement VSCode listera notre liste d'extensions.

Si vous exécutez la commande suivante, votre API sera disponible à l'URL `http://localhost:3000`

```shell
 npm run start
```
