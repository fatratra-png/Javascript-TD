        // Exercice — Gestionnaire de Stock High-Tech
        // Objectif
        // On souhaite développer un programme permettant de gérer l’inventaire des téléphones d’un magasin high-tech.
        // Le programme doit permettre d’ajouter des produits, de vendre des appareils, de réapprovisionner le stock et d’afficher l’état de l’inventaire.

        // Chaque produit est représenté par un objet contenant les informations suivantes :
        // id (Nombre) : identifiant unique du téléphone


        // modele : nom du téléphone


        // enStock (Booléen) :


        // true → produit disponible en magasin


        // false → produit vendu


        // Le stock du magasin est représenté par un tableau contenant tous les produits.

        // Travail demandé
        // Implémenter les fonctions suivantes :
        // ajouterAppareil(id, modele)
        // Créer un objet produit


        // Initialiser enStock à true


        // Ajouter le produit au stock



        // vendreAppareil(id)
        // Parcourir le stock pour trouver le produit correspondant à l’ID.
        // Si l’ID est trouvé et que le produit est disponible →
        //  ➜ mettre enStock à false


        // Si l’ID est trouvé mais déjà vendu →
        //  ➜ afficher : "Produit déjà vendu"


        // Si l’ID n’existe pas →
        //  ➜ afficher : "Produit introuvable"



        // reapprovisionner(id)
        // Remettre un produit en stock (enStock = true).
        // Si l’ID existe → remettre en stock


        // Sinon → afficher : "Produit introuvable"



        // afficherInventaireComplet()
        // Parcourir tout le stock et afficher pour chaque produit :
        // Modele — En stock
        // ou
        // Modele — Vendu

        // afficherEnStock()
        // Afficher uniquement les produits dont enStock = true.

        // Scénario de test à exécuter
        // On suppose qu’au départ le stock contient 10 téléphones. (à vous d’insérer les 10 produits)

        // Étape 1 — Affichage initial
        // Afficher tout l’inventaire.

        // Étape 2 — Vente normale
        // Vendre 2 ou 3 téléphones existants.

        // Étape 3 — Vente d’un produit déjà vendu
        // Tenter de revendre un téléphone déjà vendu.

        // Étape 4 — ID inexistant
        // Tenter de vendre un téléphone avec un ID qui n’existe pas.

        // Étape 5 — Produits en stock
        // Afficher uniquement les téléphones encore disponibles.

        // Étape 6 — Réapprovisionnement
        // Remettre en stock un téléphone vendu


        // Tenter de réapprovisionner un modèle inexistant



        // Étape 7 — Inventaire final
        // Afficher l’inventaire complet après toutes les opérations

// Initialisation du stock avec 10 téléphones
let stock = [
    { id: 1, modele: "iPhone 13", enStock: true },
    { id: 2, modele: "Samsung Galaxy S21", enStock: true },
    { id: 3, modele: "Google Pixel 6", enStock: true },
    { id: 4, modele: "OnePlus 9", enStock: true },
    { id: 5, modele: "Sony Xperia 5", enStock: true },
    { id: 6, modele: "Huawei P40", enStock: true },
    { id: 7, modele: "Xiaomi Mi 11", enStock: true },
    { id: 8, modele: "Oppo Find X3", enStock: true },
    { id: 9, modele: "Motorola Edge", enStock: true },
    { id: 10, modele: "Nokia 8.3", enStock: true }
];

// Fonction pour ajouter un appareil
function ajouterAppareil(id, modele) {
    const produit = { id: id, modele: modele, enStock: true };
    stock.push(produit);
}

// Fonction pour vendre un appareil
function vendreAppareil(id) {
    const produit = stock.find(p => p.id === id);
    if (produit) {
        if (produit.enStock) {
            produit.enStock = false;
        } else {
            console.log("Produit déjà vendu");
        }
    } else {
        console.log("Produit introuvable");
    }
}

// Fonction pour réapprovisionner un appareil
function reapprovisionner(id) {
    const produit = stock.find(p => p.id === id);
    if (produit) {
        produit.enStock = true;
    } else {
        console.log("Produit introuvable");
    }
}

// Fonction pour afficher l'inventaire complet
function afficherInventaireComplet() {
    stock.forEach(produit => {
        const statut = produit.enStock ? "En stock" : "Vendu";
        console.log(`${produit.modele} — ${statut}`);
    });
}

// Fonction pour afficher les produits en stock
function afficherEnStock() {
    stock.forEach(produit => {
        if (produit.enStock) {
            console.log(`${produit.modele} — En stock`);
        }
    });
}

// Scénario de test
console.log("Étape 1 — Affichage initial");
afficherInventaireComplet();

console.log("\nÉtape 2 — Vente normale");
vendreAppareil(2);
vendreAppareil(4);
vendreAppareil(6);

console.log("\nÉtape 3 — Vente d’un produit déjà vendu");
vendreAppareil(2);

console.log("\nÉtape 4 — ID inexistant");
vendreAppareil(11);

console.log("\nÉtape 5 — Produits en stock");
afficherEnStock();

console.log("\nÉtape 6 — Réapprovisionnement");
reapprovisionner(2);
reapprovisionner(11);

console.log("\nÉtape 7 — Inventaire final");
afficherInventaireComplet();    