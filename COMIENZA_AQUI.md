# 🎯 COMIENZA AQUÍ: Instrucciones para tu equipo

Hola equipo! 👋 Este repositorio contiene TODO lo que necesitan para completar el ejercicio de trabajo colaborativo con Git. Aquí está el plan:

---

## ⏰ Plan rápido (5 minutos)

1. **Uno solo del equipo**: Ve a este repositorio en GitHub
2. **Todos clonan el repositorio**:
   ```bash
   git clone https://github.com/Alfredo2255/practicas.git
   cd practicas
   ```
3. **Lee** el archivo [INDICE.md](./INDICE.md) - te guiará todo

---

## 📚 Recursos disponibles

| Archivo | Propósito | Lee cuando... |
|---------|----------|--|
| [INDICE.md](./INDICE.md) | Navegación central | Primero, siempre |
| [README.md](./README.md) | Visión general | Necesitas contexto |
| [PLANTILLA_ENTREGABLE.md](./PLANTILLA_ENTREGABLE.md) | Documento a entregar | Sabes qué documentar |
| [GUIA_PASO_A_PASO.md](./GUIA_PASO_A_PASO.md) | Pasos detallados | Necesitas instrucciones |
| [GIT_REFERENCIA_RAPIDA.md](./GIT_REFERENCIA_RAPIDA.md) | Comandos útiles | Buscas un comando |
| [RUBRICA_EVALUACION.md](./RUBRICA_EVALUACION.md) | Criterios de calificación | Quieres saber cómo se califica |
| carpeta `ejemplos/` | Casos de uso reales | Necesitas ver un ejemplo |

---

## 🚀 Primer paso: Reunión del equipo (15 min)

```
Agenda:
1. ¿Quiénes somos? (todos presente)
2. Asignar roles:
   - Driver: escribe código
   - Navigator: revisa y guía
   - Tester: prueba
   - Documentador: registra
   (Rotan rápido para cada tarea)
3. Definir qué crea cada uno:
   - Integrante 1: navbar feature
   - Integrante 2: README docs
   - Integrante 3: pequeño fix o refactor
   - Integrante 4 (si hay): otra feature
4. ✅ Listo para empezar
```

---

## 🎬 Ejecutar el ejercicio (5-6 horas en la semana)

### Día 1: Preparación (1 hora)
```bash
# Todos hacen esto:
git clone https://github.com/Alfredo2255/practicas.git
cd practicas

# Cada uno crea su rama:
git checkout main
git pull origin main
git checkout -b feat/nombre-tuya   # O docs/, fix/, refactor/

# Ver ramas
git branch -a
```

### Día 2-3: Desarrollo (2-3 horas)
Siguiendo [GUIA_PASO_A_PASO.md](./GUIA_PASO_A_PASO.md):
- Haz cambios pequeños
- Commit 1: "feat: primer cambio"
- Commit 2: "feat: segundo cambio"
- Push a GitHub

### Día 4: PRs y revisión (1.5 horas)
- Abre PR en GitHub
- Otro integrante revisa + comenta
- Responde comentarios si es necesario
- Mergea en main

### Día 5: Entrega (30 min)
- Completa [PLANTILLA_ENTREGABLE.md](./PLANTILLA_ENTREGABLE.md)
- Captura pantallas
- Agrega links a PRs
- Escribe reflexión
- ¡Entrégalo!

---

## 🎯 Requisitos (no olvides nada)

**Ramas:**
- ✅ Mínimo 1 rama por integrante
- ✅ Nombres claros: `feat/nombre`, `docs/nombre`, etc.

**Commits:**
- ✅ 1-2 commits pequeños por rama
- ✅ Mensaje claro: `feat: descripción`

**Pull Requests:**
- ✅ Mínimo 2 PRs abiertos
- ✅ Descripción completa
- ✅ Mínimo 1 comentario de revisión por PR

**Evidencia:**
- ✅ Capturas de pantalla (5+)
- ✅ Links a PRs
- ✅ Plantilla completada
- ✅ Reflexión escrita

---

## 🤔 ¿Qué hacemos después del merge?

```bash
# Cada integrante, después de mergear:
git checkout main
git pull origin main

# Ver que los cambios están en main ✅
git log --oneline
```

---

## 🚨 Si algo falla

**"No veo mi rama en GitHub"**
```bash
git push -u origin tu-rama
```

**"Tengo un conflicto"**
→ Ver [GIT_REFERENCIA_RAPIDA.md](./GIT_REFERENCIA_RAPIDA.md) - Troubleshooting

**"¿Qué hago después de los comentarios?"**
→ Consulta [GUIA_PASO_A_PASO.md](./GUIA_PASO_A_PASO.md) - Fase 4

**"No entiendo los commits"**
→ Mira [ejemplo_feat_navbar.md](./ejemplos/ejemplo_feat_navbar.md)

---

## ✅ Checklist final antes de entregar

Todos en el equipo verifiquen:

- [ ] Cada integrante tiene su rama
- [ ] Cada rama tiene 1-2 commits claros
- [ ] Se abrieron 2+ PRs en GitHub
- [ ] Cada PR tiene comentarios de revisión
- [ ] Todos los PRs están merged a main
- [ ] Se capturaron 5+ pantallas
- [ ] PLANTILLA_ENTREGABLE.md está completa
- [ ] Se escribió reflexión (2-3 párrafos)
- [ ] README.md fue actualizado con sus nombres

---

## 📞 Si necesitan ayuda

1. **Primero**: Consulta [INDICE.md](./INDICE.md) - tiene índice de búsqueda
2. **Segundo**: Lee [GIT_REFERENCIA_RAPIDA.md](./GIT_REFERENCIA_RAPIDA.md)
3. **Tercero**: Busca en los ejemplos de la carpeta `ejemplos/`
4. **Cuarto**: Pregunta al profesor

---

## 🎉 Una vez todo listo

Envía esto al profesor:
1. Link a tu repositorio
2. Links a los 2+ PRs
3. Archivo PLANTILLA_ENTREGABLE.md completo
4. Pantalla del "Network" (ramas visualizadas)

---

## 💡 Tips para éxito

✅ **Comunicación**: Comenten en los PRs, no por Whatsapp  
✅ **Pequeño es mejor**: 2 commits de 10 líneas > 1 commit de 20  
✅ **Feedback constructivo**: "Considera agregar..." en lugar de "Está mal"  
✅ **Prueba todo**: Antes de hacer PR, prueba tu código localmente  
✅ **Actualiza seguido**: `git pull origin main` regularmente  

---

## 📊 Esto es lo que aprenderás

```
Semana 1:
├─ Ramas: Trabajo independiente sin conflictos
├─ Commits: Documentar el trabajo paso a paso
├─ PRs: Revisar código antes de mergear
├─ Colaboración: Trabajar en equipo en un repo
├─ Evidencia: Demostrar tu contribución
└─ Reflexión: Entender el valor de esto
```

---

**¿Listos?** 🚀

1. Abre [INDICE.md](./INDICE.md)
2. Lee [README.md](./README.md)
3. ¡Comienza tu primera rama!

```bash
git checkout -b feat/tu-nombre
```

---

**¡Éxito equipo!** 💪

*Si necesitan aclaración de algo, pregunten. Este ejercicio es para aprender, no para sufrir.*
