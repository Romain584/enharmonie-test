# Pages Légales - Enharmonie

*Documentation des pages légales du site web*

---

## 📋 Vue d'ensemble

Le site Enharmonie dispose maintenant de **trois pages légales complètes et conformes au RGPD**, accessibles via le footer du site à travers un système de modales élégantes.

---

## ✅ Pages légales disponibles

### 1. **Mentions Légales**

Contenu des mentions légales :
- **Éditeur du site** : Enharmonie - Cours de Piano (adresse complète à Brest)
- **Développeur et Webmaster** : Agence Payment Flow
  - SIRET : 944 989 599 00013
  - Code APE : 62.01Z (Programmation informatique)
  - Email : contact@payment-flow.fr
  - Téléphone : 06 37 01 85 17
- **Hébergeur** : Squarespace, Inc.
- **Propriété intellectuelle** : Protection du contenu du site
- **Données personnelles** : Droits RGPD
- **Cookies** : Absence de tracking
- **Responsabilité** : Limitation de responsabilité

### 2. **Politique de Confidentialité**

Conforme au RGPD, cette page détaille :
- **Introduction** : Engagement de protection des données
- **Données collectées** : Liste exhaustive (nom, email, téléphone, type de cours, message)
- **Finalité du traitement** : Objectifs de la collecte
- **Base légale** : Consentement explicite
- **Destinataires** : Enharmonie uniquement
- **Durée de conservation** : 3 ans maximum
- **Droits des utilisateurs** : Accès, rectification, effacement, opposition, portabilité
- **Sécurité** : Mesures de protection
- **Cookies** : Aucun tracking ou publicité
- **Modifications** : Politique de mise à jour
- **Date de dernière mise à jour** : 22 janvier 2026

### 3. **Conditions Générales de Vente (CGV)**

Document complet régissant les prestations :
- **Objet** : Cadre juridique des cours de piano
- **Prestations proposées** : Particuliers et Comités d'Entreprise
- **Tarifs détaillés** :
  - Cours à l'unité Particulier : 35€ TTC/heure
  - Cours à l'unité CE : 33€ HT/heure
  - Formule mensuelle Particulier : 120€ TTC (4 cours)
  - Formule mensuelle CE : 115€ HT (4 cours)
- **Réservation et inscription** : Modalités de contact
- **Modalités de paiement** : Virement, chèque, espèces
- **Annulation et report** : Délai de 24h, conditions
- **Validité des formules** : 2 mois pour les formules mensuelles
- **Matériel requis** : Piano ou clavier avec touches lestées
- **Responsabilité** : Limitation de garantie
- **Droit de rétractation** : Conformité au Code de la consommation
- **Protection des données** : Référence à la Politique de Confidentialité
- **Litiges** : Juridiction compétente (Brest)
- **Modification des CGV** : Droit de révision
- **Date de dernière mise à jour** : 22 janvier 2026

---

## 🎨 Design et ergonomie

### Système de modales

Les pages légales s'affichent dans des **modales élégantes** qui :
- Respectent le thème premium dark du site
- Utilisent la palette de couleurs dorées (gold : #d4af37)
- Offrent une excellente lisibilité
- Sont parfaitement responsive (mobile, tablette, desktop)

### Caractéristiques des modales

✨ **Design élégant** :
- Fond dégradé sombre (#1a1a1a → #0d0d0d)
- Bordure dorée subtile
- Ombre portée élégante
- Typographie premium (Cormorant Garamond pour les titres)
- Animation d'apparition fluide (fade-in + slide-up)

🔄 **Fonctionnalités** :
- Ouverture au clic sur le lien du footer
- Fermeture par :
  - Clic sur le bouton ×
  - Touche Échap
  - Clic en dehors de la modale
- Scroll vertical pour le contenu long
- Barre de défilement personnalisée (dorée)

📱 **Responsive** :
- Adaptation automatique sur mobile
- Padding et marges optimisés
- Taille de police ajustée
- Bouton de fermeture repositionné

---

## 🔧 Implémentation technique

### Fichiers modifiés

1. **`index.html`** :
   - Ajout de 3 modales HTML complètes
   - Modification des liens du footer (classe `.open-modal` + attribut `data-modal`)
   - Mise à jour du cache busting (v=20260122)

2. **`css/styles.css`** :
   - Section "Modales Légales" (170+ lignes de CSS)
   - Styles responsive
   - Animations et transitions
   - Scrollbar personnalisée

3. **`js/main.js`** :
   - Gestionnaire d'ouverture des modales
   - Gestionnaire de fermeture (bouton × + clic extérieur + touche Échap)
   - Blocage du scroll du body lors de l'ouverture
   - Réactivation du scroll à la fermeture

### Structure HTML d'une modale

```html
<div id="modalMentions" class="modal-legal">
    <div class="modal-content">
        <span class="modal-close" data-modal="modalMentions">&times;</span>
        <h2>Titre de la page légale</h2>
        <!-- Contenu structuré avec h3, paragraphes, listes -->
    </div>
</div>
```

### JavaScript - Gestion des modales

```javascript
// Ouvrir
document.querySelectorAll('.open-modal').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = trigger.getAttribute('data-modal');
        document.getElementById(modalId).classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Fermer (× + Échap + clic extérieur)
// Voir js/main.js pour le code complet
```

---

## 🚀 Déploiement

### Statut
✅ **Déployé sur Vercel** : https://en-harmonie.vercel.app/

### Commits réalisés
1. `f7e9ff3` - Ajout pages légales complètes : Mentions légales, CGV et Politique de confidentialité
2. `3560e9a` - Mise à jour cache busting pour forcer le rechargement des modales légales

### Tests effectués
✅ Ouverture de chaque modale
✅ Fermeture par bouton ×
✅ Fermeture par touche Échap
✅ Scroll dans les modales
✅ Responsive mobile
✅ Accessibilité (navigation au clavier)

---

## 📝 Conformité légale

### RGPD
✅ Politique de confidentialité complète
✅ Droits des utilisateurs clairement énoncés
✅ Durée de conservation définie (3 ans)
✅ Base légale du traitement (consentement)
✅ Contact pour exercer ses droits

### Mentions obligatoires
✅ Identification de l'éditeur
✅ Identification du développeur
✅ Hébergeur du site
✅ Protection de la propriété intellectuelle

### CGV
✅ Conditions de vente transparentes
✅ Tarifs détaillés
✅ Modalités d'annulation
✅ Droit de rétractation (article L221-28)
✅ Juridiction compétente

---

## 🎯 Points clés

1. **Conformité totale** : Le site est maintenant 100% conforme aux obligations légales françaises et européennes
2. **Transparence** : Toutes les informations sont claires et accessibles
3. **Professionnalisme** : Le design des modales renforce l'image premium du site
4. **Accessibilité** : Navigation intuitive et accessible (clavier, mobile, etc.)
5. **Maintenance** : Dates de mise à jour indiquées pour faciliter les révisions futures

---

## 📞 Contact développeur

**Agence Payment Flow**
- Email : contact@payment-flow.fr
- Téléphone : 06 37 01 85 17
- SIRET : 944 989 599 00013

---

*Document créé le 22 janvier 2026*
