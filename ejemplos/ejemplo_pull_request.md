# 📋 Ejemplo de Pull Request completo

## PR #1: feat/navbar

### Descripción del PR (en GitHub)

```markdown
## 📝 Descripción
Se agrega un navbar responsivo al proyecto. El componente incluye:
- Navegación principal con enlaces
- Menú hamburguesa para mobile
- Estilos responsive con media queries
- Animaciones smooth

## 🎯 Tipo de cambio
- [x] Nueva feature
- [ ] Bugfix
- [ ] Documentación
- [ ] Refactor

## ✅ Cambios realizados
- Estructura HTML semántica para navbar
- Estilos CSS responsive (mobile-first)
- Animaciones en hover
- Menú hamburguesa funcional

## 🔗 Issues relacionadas
Cierra #[número] (si aplica)

## 🧪 Cómo probar
1. Abre index.html en el navegador
2. Redimensiona la ventana para ver responsive
3. En mobile (< 768px), verifica el menú hamburguesa
4. Prueba todos los enlaces del navbar

## 📱 Capturas de pantalla
[Agregar capturas desktop y mobile]

## ✓ Checklist
- [x] Código probado localmente
- [x] Sin errores en consola
- [x] Mensajes de commit claros
- [x] Listo para revisión
```

---

## Comentarios de revisión (en GitHub)

### Comentario 1: General
```
✅ ¡Muy buena implementación! 

Algunas observaciones:

1. La estructura HTML está correcta y es semántica
2. Los estilos responsive funcionan bien
3. La animación del menú es suave

Pequeñas sugerencias:
- Considerar agregar aria-labels para accesibilidad
- El breakpoint de 768px es estándar, perfecto

Aprobado para merge! 👍
```

### Comentario 2: En línea (sobre código)
```
En styles.css, línea 25:

.navbar-link {
    transition: color 0.3s ease;
}

💡 Sugerencia: Considerar agregar también transition 
en el background-color para mayor consistencia visual.
```

### Respuesta del autor
```
Buena observación! Hice el cambio:

.navbar-link {
    transition: color 0.3s ease, background-color 0.3s ease;
}

Gracias por el feedback! ✨
```

---

## Historial de commits en el PR

```
Commits en esta rama:

1. abc1234 - feat: estructura HTML navbar
   - Archivo: index.html
   - +45 líneas

2. def5678 - feat: estilos responsive navbar
   - Archivo: styles.css
   - +120 líneas

3. ghi9012 - feat: agregar animaciones navbar
   - Archivo: styles.css
   - +30 líneas
```

---

## Información del merge

**Antes del merge:**
- 👥 Revisores: Helen Romero ✅
- 🔀 Cambios: 3 commits, +195 líneas
- ⚠️ Conflictos: Ninguno

**Merge completado:**
- ✅ Merged por: Alfredo Hernández
- 🕐 Fecha: 2024-01-28
- 📝 Tipo: Create a merge commit
- 🗑️ Rama: Deleted `feat/alfredo-navbar`

---

## Pantalla esperada en GitHub

```
[Merge pull request #1 from usuario/feat/alfredo-navbar]
[feat: agregar navbar responsivo]

✅ All checks have passed
✅ Reviewed by helen-romero

[Merge pull request button - verde]
```

---

## Tips para PRs efectivos

✅ **Haz esto:**
- [ ] Descripción clara y concisa
- [ ] Cambios focalizados (una feature por PR)
- [ ] Commits pequeños y atómicos
- [ ] Abierto a feedback

❌ **Evita esto:**
- [ ] PRs con 20+ commits
- [ ] Cambios en múltiples features
- [ ] Descripción vacía o genérica
- [ ] Ignorar comentarios de revisión

