# 📋 Guía paso a paso: Trabajo colaborativo con Git

## Fase 1: Preparación del equipo

### 1.1 Definir roles
Roten los roles en cada tarea. Ejemplo:

| Tarea | Driver | Navigator | Tester | Documentador |
|-------|--------|-----------|--------|--------------|
| Crear navbar | Alfredo | Helen | [Nombre] | [Nombre] |
| Escribir README | Helen | [Nombre] | Alfredo | [Nombre] |
| Bugfix | [Nombre] | [Nombre] | Helen | Alfredo |

**¿Qué hace cada rol?**
- **Driver**: Escribe el código, hace commits
- **Navigator**: Guía el code, verifica lógica, sugiere cambios
- **Tester**: Prueba el código, reporta bugs, valida funcionalidad
- **Documentador**: Registra cambios, escribe mensajes, crea evidencia

### 1.2 Crear ramas locales
Cada integrante crea su rama desde `main`:

```bash
git checkout main
git pull origin main
git checkout -b feat/alfredo-navbar
# o: docs/helen-readme, fix/nombre-bug, etc.
git branch -a  # Ver todas las ramas
```

---

## Fase 2: Desarrollo en ramas

### 2.1 Hacer cambios pequeños y focalizados

**✅ BIEN**: Cada rama = 1 feature/fix pequeño
```
feat/navbar → solo navbar (no cambies CSS global)
docs/readme → solo documentación (no toques código)
```

**❌ MAL**: Demasiados cambios en una rama
```
feat/todo → navbar + footer + login (mucho!)
```

### 2.2 Hacer commits pequeños y claros

```bash
# Agregar cambios en el archivo
git add archivo.html
git commit -m "feat: estructura básica navbar"

# Más cambios
git add estilos.css
git commit -m "feat: estilos responsive navbar"

# Ver el historial
git log --oneline
```

**Formato de mensaje**:
```
tipo: descripción corta

Ejemplo:
✅ feat: agregar navbar responsivo
✅ docs: actualizar README con instrucciones
✅ fix: corregir espaciado en footer
✅ refactor: simplificar código CSS

❌ cambios
❌ actualizacion
❌ wip
```

### 2.3 Hacer push de la rama

```bash
git push origin feat/alfredo-navbar
# O: git push -u origin feat/alfredo-navbar (primera vez)
```

---

## Fase 3: Pull Request

### 3.1 Abrir el PR en GitHub

1. Ir al repositorio en GitHub
2. Verás un botón "Compare & pull request"
3. O ve a "Pull requests" → "New pull request"
4. Selecciona:
   - **Base**: `main`
   - **Compare**: `feat/alfredo-navbar`

### 3.2 Escribir descripción clara

```markdown
## Descripción
Se agrega componente navbar responsivo con navegación principal.

## Cambios
- Estructura HTML5 semántica
- Estilos CSS con media queries
- Animaciones smooth hover

## Cómo probarlo
1. Abre index.html en el navegador
2. Redimensiona la ventana (responsive)
3. Prueba los enlaces del navbar

## Checklists
- [x] Código probado
- [x] Sin errores en consola
- [x] Mensajes de commit claros
- [x] Listo para review
```

### 3.3 Asignar revisores

- Asigna a otro integrante del equipo
- Ej: Alfredo abre PR → Helen revisa

---

## Fase 4: Revisión de código

### 4.1 Como revisor

```
Pasos:
1. Lee la descripción del PR
2. Revisa los commits (pestaña "Commits")
3. Revisa los cambios (pestaña "Files changed")
4. Haz comentarios específicos (línea por línea)
5. Aprueba o pide cambios
```

**Ejemplo de comentario de revisión:**

```
💬 Comentario en línea:
"El espaciado aquí podría ser margin: 10px 20px en lugar de margin: 10px 10px 10px 20px. 
Más conciso. ¿Qué piensas?"

✅ Aprobación:
"¡Excelente! El navbar se ve responsivo en mobile y desktop. Aprobado."
```

### 4.2 Como autor del PR

Responde a los comentarios:
```
👤 Respuesta a comentario:
"Buena observación, cambié a margin: 10px 20px. Gracias!"
```

Si hay cambios solicitados:
```bash
# Haz los cambios locales
git add archivo.html
git commit -m "refactor: optimizar espaciado navbar"
git push origin feat/alfredo-navbar
# El PR se actualiza automáticamente ✨
```

---

## Fase 5: Merge

### 5.1 Mergear el PR

Una vez aprobado:
1. Ve a la pestaña "Conversation" del PR
2. Haz clic en "Merge pull request"
3. Elige opción de merge (recomendado: "Create a merge commit")
4. Confirma

### 5.2 Actualizar rama local

```bash
git checkout main
git pull origin main
# ¡Ya ves los cambios de la rama merged!
```

---

## Fase 6: Evidencia

### 6.1 Capturas de pantalla

Toma pantallas de:
1. ✅ Ramas creadas (`git branch -a`)
2. ✅ PR abierto en GitHub
3. ✅ Comentarios de revisión
4. ✅ Merge completado
5. ✅ Red de ramas (`Network` en GitHub)

### 6.2 Registra en la plantilla

```markdown
| Elemento | URL/Pantalla |
|----------|-------------|
| PR #1 | https://github.com/... |
| PR #2 | https://github.com/... |
| Ramas | [pantalla] |
| Revisión | [pantalla] |
```

---

## Fase 7: Reflexión

Escribe 2-3 párrafos reflexionando:

**Preguntas guía:**
- ¿Cómo ayudaron las ramas a evitar conflictos?
- ¿Por qué es importante revisar código?
- ¿Cómo documentan los commits y PRs el trabajo?
- ¿Qué aprendiste de colaborar así?

---

## Checklist rápido

```bash
# Driver hace esto:
git checkout main && git pull
git checkout -b feat/algo-nuevo
# ... hace cambios ...
git add archivo
git commit -m "feat: descripción clara"
git push origin feat/algo-nuevo

# Abre PR en GitHub, asigna Navigator como revisor

# Navigator revisa:
# - Lee descripción
# - Revisa código
# - Haz 1-2 comentarios
# - Aprueba

# Driver hace merge
# - GitHub → "Merge pull request"
# - Merge!

# Team celebra 🎉
```

---

## Troubleshooting

### Error: "Your branch is ahead of 'origin/main'"
```bash
git push origin feat/alfredo-navbar
```

### Error: "Conflict" en PR
```bash
git checkout feat/alfredo-navbar
git merge main
# Resuelve conflictos manualmente
git add archivo
git commit -m "merge: resolver conflictos con main"
git push origin feat/alfredo-navbar
```

### Quiero borrar la rama local
```bash
git branch -d feat/alfredo-navbar
```

---

**¡Éxito con su trabajo colaborativo!** 🚀

