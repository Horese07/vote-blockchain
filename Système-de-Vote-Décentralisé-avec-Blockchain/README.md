# Système de Vote Décentralisé avec Blockchain

## Description
Ce projet est une application de vote décentralisée utilisant la technologie blockchain. Il permet aux utilisateurs de créer des élections, de voter pour des candidats et de consulter les résultats de manière sécurisée et transparente.

## Technologies Utilisées
- **Solidity**: Pour le développement de contrats intelligents sur la blockchain Ethereum.
- **Ethereum**: La plateforme blockchain sur laquelle le système de vote est déployé.
- **React.js**: Pour le développement de l'interface utilisateur.
- **Web3.js**: Pour interagir avec la blockchain Ethereum depuis l'application frontend.
- **Docker**: Pour containeriser les applications backend et frontend.
- **Azure DevOps**: Pour la mise en place de CI/CD afin d'automatiser le déploiement et les tests.

## Structure du Projet
```
Système-de-Vote-Décentralisé-avec-Blockchain
├── backend
│   ├── contracts
│   ├── migrations
│   ├── test
│   ├── truffle-config.js
│   └── package.json
├── frontend
│   ├── public
│   ├── src
│   └── package.json
├── docker
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   └── docker-compose.yml
├── azure-pipelines
│   └── azure-pipelines.yml
└── README.md
```

## Installation

### Prérequis
- Node.js et npm
- Truffle
- Docker
- Azure DevOps

### Instructions
1. **Clone le dépôt**:
   ```
   git clone <URL_DU_DEPOT>
   cd Système-de-Vote-Décentralisé-avec-Blockchain
   ```

2. **Configurer le backend**:
   - Naviguez dans le dossier `backend` et installez les dépendances:
     ```
     cd backend
     npm install
     ```

3. **Déployer les contrats**:
   - Utilisez Truffle pour déployer les contrats sur la blockchain Ethereum:
     ```
     truffle migrate
     ```

4. **Configurer le frontend**:
   - Naviguez dans le dossier `frontend` et installez les dépendances:
     ```
     cd frontend
     npm install
     ```

5. **Démarrer l'application**:
   - Pour le backend:
     ```
     cd backend
     npm start
     ```
   - Pour le frontend:
     ```
     cd frontend
     npm start
     ```

6. **Utiliser Docker**:
   - Pour construire et exécuter les conteneurs Docker:
     ```
     cd docker
     docker-compose up --build
     ```

## Contribuer
Les contributions sont les bienvenues! Veuillez soumettre une demande de tirage pour toute amélioration ou correction.

## License
Ce projet est sous licence MIT. Veuillez consulter le fichier LICENSE pour plus de détails.