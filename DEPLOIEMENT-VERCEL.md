# 🚀 Déploiement Vercel - EnHarmonie

Guide complet pour déployer le site EnHarmonie sur Vercel.

---

## 🎯 Méthode 1 : Déploiement via Interface Web (Recommandé - 5 minutes)

### Étape 1 : Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com/)
2. Cliquez sur **"Sign Up"**
3. Connectez-vous avec GitHub, GitLab, ou Bitbucket (recommandé)

### Étape 2 : Importer le projet

**Option A : Drag & Drop (Plus rapide)**

1. Sur le dashboard Vercel, cliquez sur **"Add New Project"**
2. Cliquez sur **"Browse"** ou glissez-déposez le dossier `EnHarmonie-main`
3. Vercel détectera automatiquement que c'est un site statique
4. Cliquez sur **"Deploy"**
5. ✅ **C'est fait !** Votre site est en ligne en 30 secondes

**Option B : Via Git (Déploiement continu)**

1. D'abord, initialisez Git dans le projet :

```bash
cd "/Users/admin/DEV AGENCY/DEV/EnHarmonie/EnHarmonie-main"

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Premier commit
git commit -m "Initial commit - EnHarmonie v1.0"
```

2. Créez un repo sur GitHub :
   - Allez sur [github.com](https://github.com)
   - Cliquez sur "New repository"
   - Nommez-le "enharmonie"
   - Ne cochez rien (pas de README, pas de .gitignore)
   - Créez le repo

3. Poussez votre code :

```bash
# Remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE-USERNAME/enharmonie.git
git branch -M main
git push -u origin main
```

4. Sur Vercel :
   - Cliquez sur **"Add New Project"**
   - Sélectionnez **"Import Git Repository"**
   - Choisissez votre repo **"enharmonie"**
   - Cliquez sur **"Deploy"**

### Étape 3 : Configuration (automatique)

Vercel détecte automatiquement :
- ✅ Framework: Static Site
- ✅ Build Command: Aucune (site statique)
- ✅ Output Directory: . (racine)

**Pas besoin de configuration supplémentaire !**

### Étape 4 : Déploiement

- Vercel construit et déploie votre site
- Temps de déploiement : **~30 secondes**
- Vous obtenez une URL type : `https://enharmonie.vercel.app`

---

## 🎯 Méthode 2 : Déploiement via CLI

### Installation de Vercel CLI

```bash
# Avec npm (global)
sudo npm install -g vercel

# Ou avec npx (sans installation)
npx vercel
```

### Déploiement

```bash
cd "/Users/admin/DEV AGENCY/DEV/EnHarmonie/EnHarmonie-main"

# Premier déploiement
vercel

# Suivez les prompts :
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? enharmonie
# - In which directory is your code located? ./
# - Want to override settings? No

# Déploiement en production
vercel --prod
```

---

## ⚙️ Configuration Vercel (Déjà faite !)

J'ai créé un fichier `vercel.json` avec :

```json
{
  "version": 2,
  "name": "enharmonie",
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "headers": [...]
}
```

**Optimisations incluses :**
- ✅ Headers de sécurité (X-Frame-Options, etc.)
- ✅ Cache des assets (images, CSS, JS)
- ✅ Compression automatique
- ✅ CDN global

---

## 🌐 Domaine personnalisé

### Ajouter votre propre domaine

1. Sur le dashboard Vercel de votre projet
2. Allez dans **"Settings"** → **"Domains"**
3. Cliquez sur **"Add"**
4. Entrez votre domaine (ex: `enharmonie.fr`)

### Configuration DNS

Vercel vous donnera les enregistrements DNS à configurer :

**Pour domaine racine (enharmonie.fr) :**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Pour www (www.enharmonie.fr) :**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Certificat SSL

- ✅ HTTPS activé automatiquement
- ✅ Certificat SSL gratuit via Let's Encrypt
- ✅ Renouvellement automatique

---

## 🔄 Déploiements automatiques

### Avec Git connecté

Chaque fois que vous poussez du code :

```bash
git add .
git commit -m "Update: nouvelle fonctionnalité"
git push origin main
```

**→ Vercel déploie automatiquement !**

### Branches Preview

- `main` → Production (enharmonie.vercel.app)
- Autres branches → Preview (enharmonie-git-branch.vercel.app)

---

## 📊 Après le déploiement

### 1. Vérifier le site

Votre site est accessible à :
- URL Vercel : `https://enharmonie.vercel.app`
- URL personnalisée : `https://votre-domaine.fr`

### 2. Analytics (inclus gratuit)

Vercel fournit :
- ✅ Visites et pages vues
- ✅ Temps de chargement
- ✅ Core Web Vitals
- ✅ Géolocalisation des visiteurs

Accès : **Dashboard → Analytics**

### 3. Performance

**Scores typiques avec Vercel :**
- Lighthouse Performance : **95-100**
- First Contentful Paint : **< 1s**
- Time to Interactive : **< 2s**
- CDN : **Global (Edge Network)**

---

## 🛠️ Commandes utiles

```bash
# Voir les déploiements
vercel ls

# Voir les logs
vercel logs URL

# Promouvoir un déploiement en production
vercel promote URL

# Supprimer un déploiement
vercel rm URL

# Voir les infos du projet
vercel inspect URL

# Variables d'environnement
vercel env add VARIABLE_NAME
vercel env ls
```

---

## 🔒 Variables d'environnement (si besoin)

### Via Dashboard

1. Settings → Environment Variables
2. Ajoutez vos variables :
   - `EMAILJS_USER_ID`
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`

### Via CLI

```bash
vercel env add EMAILJS_USER_ID production
# Entrez la valeur
```

---

## 📈 Optimisations Vercel

### Edge Network

Votre site est automatiquement distribué sur :
- ✅ **40+ régions** dans le monde
- ✅ **CDN ultra-rapide**
- ✅ **Edge Caching**

### Compression

- ✅ Gzip automatique
- ✅ Brotli pour navigateurs compatibles
- ✅ Optimisation des images

### Headers de sécurité

Déjà configurés dans `vercel.json` :
- ✅ Content Security Policy
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ X-XSS-Protection

---

## 🚨 Résolution de problèmes

### Le déploiement échoue

**Problème : "Build failed"**
```bash
# Vérifiez les logs
vercel logs URL

# Redéployez
vercel --prod
```

**Problème : "Domain already in use"**
- Le domaine est déjà lié à un autre projet
- Supprimez-le de l'autre projet d'abord

### Les images ne s'affichent pas

**Vérifiez les chemins :**
- ✅ Relatifs : `images/piano-sheet.jpg` ✓
- ❌ Absolus : `/images/...` peuvent causer des problèmes

**Dans index.html :**
```html
<!-- Bon -->
<img src="images/piano-sheet.jpg">

<!-- À éviter -->
<img src="/images/piano-sheet.jpg">
```

### Le CSS ne se charge pas

1. Vérifiez la console du navigateur (F12)
2. Vérifiez le chemin dans index.html :
```html
<link rel="stylesheet" href="css/styles.css">
```

### Erreur 404

- Vérifiez que `index.html` est à la racine
- Vérifiez le fichier `vercel.json`

---

## 💰 Pricing

### Plan Hobby (Gratuit - Parfait pour EnHarmonie)

✅ **Inclus :**
- Sites illimités
- Déploiements illimités
- 100 GB de bande passante/mois
- HTTPS automatique
- CDN global
- Analytics de base
- Domaines personnalisés

### Plan Pro (20$/mois)

Si besoin de :
- Plus de bande passante
- Analytics avancés
- Support prioritaire
- Collaboration équipe

**Pour EnHarmonie : Le plan gratuit est largement suffisant !**

---

## 📞 Support

### Documentation

- [Docs Vercel](https://vercel.com/docs)
- [Guides de déploiement](https://vercel.com/guides)
- [Community](https://github.com/vercel/vercel/discussions)

### Status

- [Status Vercel](https://www.vercel-status.com/)

---

## ✅ Checklist de déploiement

Avant de déployer :

- [ ] Images remplacées (piano-keys.jpg, piano-sheet.jpg)
- [ ] Coordonnées mises à jour
- [ ] Formulaire configuré (EmailJS/Formspree)
- [ ] Testé en local
- [ ] Code validé (pas d'erreurs)

Déploiement :

- [ ] Compte Vercel créé
- [ ] Projet importé/déployé
- [ ] URL de production testée
- [ ] Domaine personnalisé configuré (optionnel)
- [ ] HTTPS activé (automatique)

Post-déploiement :

- [ ] Test sur mobile réel
- [ ] Test sur plusieurs navigateurs
- [ ] Formulaire de contact testé
- [ ] Analytics configuré
- [ ] Google Search Console ajouté

---

## 🎉 Résultat

Après déploiement, vous aurez :

- ✅ Site en ligne avec HTTPS
- ✅ URL : `https://enharmonie.vercel.app`
- ✅ Performance optimale (CDN global)
- ✅ Déploiements automatiques (si Git)
- ✅ Analytics inclus
- ✅ 99.99% d'uptime garanti

**Temps total : 5-10 minutes** ⚡

---

**Félicitations ! EnHarmonie est maintenant accessible au monde entier ! 🎹🌍✨**



