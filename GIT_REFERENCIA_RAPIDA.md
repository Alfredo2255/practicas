# 🛠️ Referencia rápida: Comandos Git

## 🎯 Antes de empezar

```bash
# Configurar identidad (una sola vez)
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"

# Ver configuración
git config --list
```

---

## 📝 Crear y cambiar ramas

```bash
# Actualizar main
git checkout main
git pull origin main

# Crear nueva rama
git checkout -b feat/nombre-feature

# Crear rama y asignarla automáticamente (primera vez)
git push -u origin feat/nombre-feature

# Ver todas las ramas
git branch -a

# Cambiar a otra rama
git checkout docs/nombre-readme

# Borrar rama local
git branch -d feat/vieja-rama
```

---

## 💾 Hacer commits

```bash
# Ver cambios sin agregar
git status

# Ver diferencias
git diff

# Agregar un archivo
git add archivo.html

# Agregar todos los cambios
git add .

# Ver staging area
git diff --staged

# Hacer commit
git commit -m "feat: descripción clara"

# Enmendar último commit (¡cuidado!)
git commit --amend -m "feat: nueva descripción"

# Ver historial
git log --oneline
```

---

## 📤 Compartir cambios

```bash
# Hacer push a la rama
git push origin feat/nombre-feature

# Hacer push de rama nueva (primera vez)
git push -u origin feat/nombre-feature

# Ver ramas remotas
git branch -r

# Ver estado del tracking
git branch -vv

# Traer cambios del remoto (actualizar)
git pull origin feat/nombre-feature
```

---

## 🔀 Trabajar con ramas

```bash
# Mergear rama local a main
git checkout main
git pull origin main
git merge feat/nombre-feature

# Mergear rama remota
git merge origin/feat/nombre-feature

# Resolver conflictos
# 1. Edita el archivo
# 2. git add archivo
# 3. git commit -m "merge: resolver conflictos"

# Rebase (lineal, cuidado con ramas públicas!)
git rebase main
```

---

## 🔍 Inspeccionar historial

```bash
# Ver log con gráfico
git log --oneline --graph --all

# Ver log detallado
git log --pretty=fuller

# Ver cambios de un commit
git show abc1234

# Ver quién cambió cada línea
git blame archivo.html

# Ver cambios entre ramas
git diff main..feat/nombre
```

---

## 🚨 Deshacer cambios

```bash
# Deshacer cambios en archivo sin staged
git checkout -- archivo.html

# Deshacer staging (pero mantener cambios)
git reset archivo.html

# Deshacer último commit (mantener cambios)
git reset --soft HEAD~1

# Deshacer último commit (perder cambios)
git reset --hard HEAD~1

# Deshacer un commit específico
git revert abc1234

# Stash: guardar cambios temporalmente
git stash
git stash list
git stash pop
```

---

## 🤝 Trabajar en Pull Requests

```bash
# Ver PR desde línea de comandos (GitHub CLI)
gh pr list
gh pr view 1  # Ver detalles de PR #1
gh pr create  # Crear nuevo PR

# Traer cambios de una rama remota
git fetch origin feat/rama-otro-equipo
git checkout --track origin/feat/rama-otro-equipo
```

---

## 🐛 Troubleshooting

### "Your branch is ahead of 'origin/main'"
```bash
git push origin rama-actual
```

### "Conflict" en merge
```bash
# 1. Resuelve conflictos manualmente en editor
# 2. Marca como resuelto
git add archivo-resuelto

# 3. Completa el merge
git merge --continue
# o
git rebase --continue
```

### "Accidentally pushed to main"
```bash
git revert abc1234  # Crear nuevo commit que deshace
git push origin main
```

### "Want to change last commit message"
```bash
git commit --amend -m "Nuevo mensaje"
git push origin rama --force  # ⚠️ Cuidado!
```

### "Forgot which branch estoy"
```bash
git branch  # Muestra rama actual con *
git status  # Muestra también rama
```

---

## 📊 Git Graph / Network en GitHub

**Ver visualmente todas las ramas:**
1. Ve a tu repositorio en GitHub
2. Haz clic en **Insights** → **Network**
3. Verás todas las ramas y sus merges

---

## ⚡ Alias útiles (opcional)

```bash
# Agregar a ~/.gitconfig o terminal

git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.commit 'commit -m'
git config --global alias.log-graph 'log --oneline --graph --all'

# Uso:
git st          # git status
git co -b feat/nueva  # git checkout -b feat/nueva
git log-graph   # git log con visualización
```

---

## 🎓 Proceso típico (resumen)

```bash
# 1. Actualizar
git checkout main
git pull origin main

# 2. Crear rama
git checkout -b feat/nueva-feature

# 3. Hacer cambios
# ... editar archivos ...

# 4. Stage y commit
git add archivo.js
git commit -m "feat: descripción"

# 5. Push
git push -u origin feat/nueva-feature

# 6. Abrir PR en GitHub
# ... en GitHub UI ...

# 7. Revisión (otro integrante)
# ... comentarios en GitHub ...

# 8. Hacer cambios si es necesario
git add archivo.js
git commit -m "refactor: cambios sugeridos"
git push origin feat/nueva-feature

# 9. Mergear
# ... en GitHub UI: "Merge pull request" ...

# 10. Limpiar
git checkout main
git pull origin main
git branch -d feat/nueva-feature
```

---

**💡 Tip**: Si tienes dudas, siempre puedes hacer:
```bash
git help comando
# Ejemplo: git help merge
```

