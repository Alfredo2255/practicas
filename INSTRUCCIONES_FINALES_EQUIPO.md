# 🎯 INSTRUCCIONES FINALES PARA EL EQUIPO

**Alfredo y Helen**, la plantilla está lista. Aquí es cómo proceder:

---

## 📌 Estado actual

✅ **Repositorio**: https://github.com/Alfredo2255/practicas  
✅ **Rama**: main  
✅ **Archivos**: 11 documentos + 3 ejemplos  
✅ **Líneas**: 1,973 líneas de documentación  

---

## 🚀 PASOS INMEDIATOS

### 1. **Reunión del equipo** (15 minutos)

```
Agenda:
✅ Presentación: ¿Quiénes son todos?
✅ Asignar roles para primera tarea:
   - Alfredo: Driver
   - Helen: Navigator
   - [Nombre 3]: Tester
   - [Nombre 4]: Documentador
✅ Decidir qué crea cada uno:
   - Alfredo: feat/alfredo-navbar
   - Helen: docs/helen-readme
   - Otros: fix/... o refactor/...
✅ Confirmar que todos clonarán el mismo repo
```

### 2. **Clonar repositorio** (una sola vez, UNO del equipo)

```bash
# Solo UNO lo hace primero (ej: Alfredo)
git clone https://github.com/Alfredo2255/practicas.git
cd practicas

# Los OTROS lo clonan después
git clone https://github.com/Alfredo2255/practicas.git
cd practicas
```

### 3. **Leer documentación** (30 minutos)

**Orden de lectura:**

```
1️⃣  COMIENZA_AQUI.md         (5 min)   - Instrucciones rápidas
2️⃣  README.md                (10 min)  - Visión general
3️⃣  GUIA_PASO_A_PASO.md      (15 min)  - Pasos detallados
```

Opcional pero recomendado:
- GIT_REFERENCIA_RAPIDA.md - Tener abierto en otra ventana
- Ejemplos - Mirar cuando se necesite claridad

---

## 📋 DISTRIBUCIÓN DE TAREAS

### Todos los integrantes

| Día | Tarea | Tiempo | Archivo |
|-----|-------|--------|---------|
| Lunes | Leer guías | 30 min | `COMIENZA_AQUI.md` |
| Martes | Crear rama + commits | 1.5 h | `GUIA_PASO_A_PASO.md` - Fase 2 |
| Miércoles | Hacer push + abrir PR | 1 h | `GUIA_PASO_A_PASO.md` - Fase 3 |
| Jueves | Revisar + hacer cambios | 1 h | `GUIA_PASO_A_PASO.md` - Fase 4 |
| Viernes | Mergear + completar entrega | 1 h | `PLANTILLA_ENTREGABLE.md` |

**Total**: ~5.5 horas repartidas en la semana

---

## 🔄 ROTACIÓN DE ROLES

### Primera rama (Alfredo)
- **Driver**: Alfredo (escribe código)
- **Navigator**: Helen (revisa)
- **Tester**: [Nombre 3] (prueba)
- **Documentador**: [Nombre 4] (registra)

### Segunda rama (Helen)
- **Driver**: Helen
- **Navigator**: [Nombre 3]
- **Tester**: [Nombre 4]
- **Documentador**: Alfredo

### Tercera rama ([Nombre 3])
- **Driver**: [Nombre 3]
- **Navigator**: [Nombre 4]
- **Tester**: Alfredo
- **Documentador**: Helen

### Cuarta rama ([Nombre 4])
- **Driver**: [Nombre 4]
- **Navigator**: Alfredo
- **Tester**: Helen
- **Documentador**: [Nombre 3]

---

## 📝 COMANDOS QUE NECESITARÁN

### Crear rama
```bash
git checkout main
git pull origin main
git checkout -b feat/tu-nombre
```

### Hacer cambios y commits
```bash
# Ver cambios
git status

# Agregar archivos
git add archivo.html

# Hacer commit
git commit -m "feat: descripción clara"

# Ver historial
git log --oneline
```

### Subir a GitHub
```bash
git push -u origin feat/tu-nombre
```

Todos estos comandos están en: **GIT_REFERENCIA_RAPIDA.md**

---

## 🎯 REQUISITOS PARA APROBAR

**MÍNIMO requerido:**

✅ **4 ramas** (una por integrante)  
✅ **1-2 commits por rama** (claros y pequeños)  
✅ **2+ PRs abiertos** (en GitHub)  
✅ **1+ comentarios de revisión por PR** (feedback constructivo)  
✅ **Todos los PRs mergeados** a main  
✅ **PLANTILLA_ENTREGABLE.md completada** con:
  - Tabla de integrantes
  - Links a PRs
  - Capturas de pantalla (5+)
  - Reflexión (2-3 párrafos)

---

## 📸 EVIDENCIA QUE DEBEN CAPTURAR

Tomen pantalla de:

1. ✅ Ramas creadas (`git branch -a`)
2. ✅ Primer commit en su rama
3. ✅ PR abierto en GitHub (titulo + descripción)
4. ✅ Comentario de revisión (feedback)
5. ✅ Merge completado (verde ✅)
6. ✅ Network graph (todas las ramas)

Registren en: **PLANTILLA_ENTREGABLE.md**

---

## 💭 REFLEXIÓN (IMPORTANTE)

En la PLANTILLA_ENTREGABLE.md, al final escriban 2-3 párrafos respondiendo:

> **¿Cómo usarías ramas/PR como evidencia de trabajo colaborativo?**
>
> Preguntas guía:
> - ¿Qué fue lo más fácil y lo más difícil?
> - ¿Por qué son importantes las revisiones de código?
> - ¿Cómo documentan los commits y PRs el trabajo?
> - ¿Qué aprendiste de colaborar así?

---

## ✅ CHECKLIST ANTES DE ENTREGAR

**Todo el equipo:**

- [ ] Todos tienen el repo clonado
- [ ] Cada integrante tiene su rama
- [ ] Cada rama tiene 1-2 commits claros
- [ ] Se abrieron mínimo 2 PRs en GitHub
- [ ] Cada PR tiene comentarios de revisión
- [ ] Todos los PRs están mergeados a main
- [ ] Se capturaron 5+ pantallas
- [ ] PLANTILLA_ENTREGABLE.md está 100% completa
- [ ] Se escribió reflexión (2-3 párrafos)
- [ ] README.md tiene los nombres de integrantes

---

## 📞 SI TIENEN DUDAS

**Consulten en este orden:**

1. **`COMIENZA_AQUI.md`** - Inicio rápido
2. **`INDICE.md`** - Índice y búsqueda
3. **`GIT_REFERENCIA_RAPIDA.md`** - Comandos
4. **Ejemplos** - Carpeta `ejemplos/`
5. **Profesor** - Última opción

---

## 🎉 ENTREGAS FINALES

Cuando terminen, entreguen al profesor:

### Opción 1: Por email
```
Asunto: Trabajo Colaborativo Git - [Nombre equipo]

Adjuntar:
1. Link al repositorio
   https://github.com/Alfredo2255/practicas

2. Link a los PRs
   PR #1: https://github.com/...
   PR #2: https://github.com/...

3. Archivo PLANTILLA_ENTREGABLE.md
   (Copiar contenido o adjuntar archivo)
```

### Opción 2: En GitHub
```
1. PR hacia una rama de entrega
2. Incluir PLANTILLA_ENTREGABLE.md completa
3. Mencionar al profesor
```

---

## 🚀 ORDEN RECOMENDADO

```
SEMANA 1:

Lunes:
  ✅ Reunión (15 min)
  ✅ Leer COMIENZA_AQUI.md
  ✅ Leer README.md

Martes-Miércoles:
  ✅ Crear ramas
  ✅ Hacer cambios pequeños
  ✅ Commits claros (1-2 por rama)
  ✅ Push a GitHub

Jueves:
  ✅ Abrir PRs
  ✅ Revisar PRs de otros (comentarios)
  ✅ Responder comentarios

Viernes:
  ✅ Mergear PRs aprobados
  ✅ Completar PLANTILLA_ENTREGABLE.md
  ✅ Capturar pantallas
  ✅ Escribir reflexión
  ✅ ¡ENTREGAR!
```

---

## 💡 CONSEJOS DE ORO

✅ **Commits pequeños > un gran commit**  
✅ **Mensajes claros > genéricos**  
✅ **Comentarios constructivos > crítica**  
✅ **Prueba todo localmente antes de PR**  
✅ **Comunicación en los PRs, no por Whatsapp**  
✅ **Actualiza seguido**: `git pull origin main`  

---

## 🎓 LO QUE APRENDERÁN

Después de este ejercicio, su equipo sabrá:

✅ Crear ramas en Git  
✅ Hacer commits atómicos  
✅ Abrir y revisar Pull Requests  
✅ Colaborar sin conflictos  
✅ Documentar trabajo  
✅ Evidenciar contribuciones  
✅ Evaluar código de pares  

---

## 📊 RÚBRICA

**Se califica en 100 puntos:**

- Ramas: 25 puntos
- Commits: 25 puntos
- PRs: 25 puntos
- Colaboración: 15 puntos
- Reflexión: 10 puntos

Ver: **RUBRICA_EVALUACION.md**

---

## ⏱️ TIMELINE TOTAL

| Actividad | Tiempo |
|-----------|--------|
| Leer guías | 30 min |
| Crear ramas + commits | 2 horas |
| PRs + revisiones | 1.5 h |
| Plantilla + entrega | 1 h |
| **TOTAL** | **~5 horas** |

Distribuidas en una semana = muy manejable

---

## 🎯 OBJETIVO FINAL

Al terminar:

✅ Un repositorio con 4+ ramas  
✅ 2+ PRs mergeados  
✅ Evidencia clara de trabajo colaborativo  
✅ Documentación completa  
✅ Reflexión sobre el proceso  

---

## 🚀 ¡A EMPEZAR!

**Próximo paso:**

1. Reúnanse (15 min)
2. Lean **COMIENZA_AQUI.md**
3. Creen sus ramas
4. ¡Que comience la magia! ✨

---

**Repositorio**: https://github.com/Alfredo2255/practicas  
**Estado**: ✅ Listo para usar  
**Soporte**: Ver archivos de documentación  

¡**Éxito equipo!** 💪🚀

---

*Creado por: Equipo Alfredo Hernández + Helen Romero*  
*Fecha: Enero 2026*  
*Versión: 1.0 - Completa*
