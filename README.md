# L'arbre de la Bible

Site statique interactif : la structure de la Bible présentée comme un arbre généalogique dépliable. Chaque nœud (testament, corpus, livre, section) porte une explication accessible à quelqu'un qui part de zéro.

## Fichiers

- `index.html` — l'application (D3.js v7, aucune étape de build)
- `data.js` — tout le contenu, un objet JS hiérarchique (`n` nom, `s` sous-titre, `r` référence, `d` description, `c` enfants)

Pour enrichir le site, on modifie seulement `data.js` : ajouter un tableau `c` à un livre suffit à lui donner des sections dépliables.

## Publier sur GitHub Pages

```bash
cd Arbre-Bible
git init && git add . && git commit -m "Arbre de la Bible — v1"
gh repo create arbre-bible --public --source=. --push
gh api repos/{owner}/arbre-bible/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```

Sans gh CLI : créer un dépôt vide sur github.com, puis `git remote add origin <url> && git push -u origin main`, et activer Pages dans Settings → Pages → branche `main`, racine.

Le site sera servi à `https://<utilisateur>.github.io/arbre-bible/`.

## Contenu — état

- Pentateuque : sections internes complètes (Genèse, Exode, Lévitique, Nombres, Deutéronome)
- Autres livres : notice d'introduction, sections à venir
- Canon large (Septante) ; les deutérocanoniques sont signalés dans leur notice
