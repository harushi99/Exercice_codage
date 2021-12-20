# Exercice_codage

## Front Application
Realisé avec React.

[Voir ReadMe de React](https://github.com/harushi99/Exercice_codage/blob/main/ville-frontend/README.md)

## Backend Application 
Realisé avec NestJs.

[Voir ReadMe de NestJs](https://github.com/harushi99/Exercice_codage/blob/main/ville-backend/README.md)

## Database 
Realisé avec MongoDb.

[Données utilisées](https://www.data.gouv.fr/fr/datasets/codes-postaux/)

Commande pour importer les donnees a mongoDb
```
mongoimport --jsonArray --db nest-ville-project --collection villes --file filePath
```
Remplacer filePath avec le path du Json téléchargé
