# Evaluation module API REST

## PARTIE THEORIQUE (4pts)

### Question 1 : Que signifie SOA et de quoi s'agit-il ? (0,5pt)

### Question 2 : Quels types de données sont utilisés dans la communication avec une API SOAP et dans la communication avec une API REST ? (0,5pt)

### Question 3 : Qu'est-ce qu'un middleware et à quoi peut-il servir ? Donnez un exemple simple. (0,5pt)

### Question 4 : Dans le contexte d'un échange entre un client et un serveur, qu'est-ce qu'une route ? Donnez un exemple simple. (0,5pt)

### Question 5 : Qu'est-ce qu'un Web Service et quels sont les deux types de Web Service qui existent à l'heure actuelle ? Quelles sont les différences principales entre ces deux types de Web Service ? (1pt)

### Question 6 : Par quel biais s'adresse-t-on à un Web Service (peu importe quel type) ? (0,5pt)

### Question 7 : Qu'est-ce qu'un WSDL et à quoi sert ce document ? (0,5pt)



## PARTIE PRATIQUE (16pts)

### Question 8 : Installez dans le projet les paquets npm suivants : express, cors, body-parser. (0,5pt)

### Question 9 : Dans le fichier "index.js", ajoutez aux endroits prévus à cet effet (marqués "QUESTION 9") le code permettant de mettre sur pied le serveur express en utilisant les variables fournies (HOST, PORT). (0,5pt)

### Question 10 : Dans le fichier "index.js", ajoutez à l'endroit prévu à cet effet (marqué "QUESTION 10") les middlewares pour les paquets "cors" et "body-parser" (3 au total !) (0,5pt)

### Question 11 : Dans le fichier "index.js", ajoutez à l'endroit prévu à cet effet (marqué "QUESTION 11") les middlewares permettant de servir les différents fichiers statiques (CSS, HTML, Javascript) (0,5pt)

### Question 12 : Dans les fichiers HTML (situés dans public/html) vous prendrez soin de compléter le code HTML aux endroits prévus à cet effet (marqués "Ecrire le code pour la QUESTION 12") (2pts)

### Question 13 : Dans les fichiers Javascript front (situés dans public/js) vous prendrez soin de compléter le code JS aux endroits prévus à cet effet (marqués "QUESTION 13") (2pts)

### Question 14 : Dans le fichier "index.js", ajoutez à l'endroit prévu à cet effet (marqué "QUESTION 14") le code permettant de gérer une route sur "/", "/users", "/messages", "/contact" en GET pour servir RESPECTIVEMENT les fichiers "index.html", "users.html", "messages.html" et "contact.html". (2pts)

### Question 15 : Dans le fichier "index.js", ajoutez à l'endroit prévu à cet effet (marqué "QUESTION 15") le code permettant de gérer une route sur "/contact" en POST qui devra appliquer la logique suivante, dans cet ordre : (2pts)

Consigne à respecter :

1. Créer le dossier de la base de données au moyen de la fonction `createDirectory()`;
2. Mettre à jour la base de données au moyen de la fonction `updateCollection()`;
3. Retourne une réponse au format json (`response.json()`) contenant un objet ayant une propriété "message" contenant une chaîne de caractères (exemple : { message: 'Hello World'} ) ;

Afin de savoir comment utiliser les deux fonctions mentionnées ci-dessus, vous vous référerez à leurs définitions dans leurs fichiers respectifs dans le dossier "src".

### Question 16 : Dans le fichier "src/public/js/users.js", ajoutez à l'endroit prévu à cet effet (marqué "QUESTION 16") le code de la méthode `fetch()` ([documentation](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch#cr%C3%A9er_une_requ%C3%AAte_fetch)) qui devra : (3pts)

Consigne à respecter :

1. Récupérer les données des utilisateurs via un appel Http à l'adresse "http://localhost:5050/usersInfo" ;
2. Convertir le résultat obtenu au format JSON ;
3. Boucler sur l'objet reçu depuis le serveur afin d'obtenir la valeur correspondant au nom de chaque utilisateur enregistré ;
4. Pour chaque utilisateur trouvé, crée un élément HTML <li> ;
5. Ajoute le nom d'un utilisateur dans la propriété "innerText" de chaque élément <li> ;
6. Ajoute tous les éléments <li> à l'élément de liste désordonné <ul> stocké dans la variable `usersList`.

### Question 17 : Dans le fichier "index.js", ajoutez à l'endroit prévu à cet effet (marqué "QUESTION 17") le code permettant de gérer les erreurs 404 en renvoyant le cas échéant le fichier "public/html/error404.html" (1pt)

### Question 18 : Dans le fichier "index.js", ajoutez à l'endroit prévu à cet effet (marqué "QUESTION 18") le code permettant définir un middleware d'erreur. Ce middleware renverra le cas échéant un document JSON ayant le format suivant : { error: <message-recu-depuis-next()>} (1pt)