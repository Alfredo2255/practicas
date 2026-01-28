# Plantilla de Entregable – Trabajo Colaborativo con Git

## Información del equipo
- **Nombre del equipo**: [Nombre]
- **Repositorio**: [URL del repositorio]
- **Fecha de entrega**: [Fecha]

## Integrantes y roles

| Nombre | Rama asignada | Rol principal | Rol secundario |
|--------|---------------|----------------|-----------------|
| [Nombre 1] | `feat/nombre-feature1` | Driver | Tester |
| [Nombre 2] | `docs/nombre-readme` | Navigator | Documentador |
| [Nombre 3] | `fix/nombre-bug` | Tester | Driver |
| [Nombre 4] (opcional) | `refactor/nombre-code` | Documentador | Navigator |

**Nota**: Rotar los roles cada vez que se abre una nueva rama.

---

## Estructura de ramas

Cada integrante crea y trabaja en su rama siguiendo este patrón:

```
main (rama principal)
├── feat/alfredo-navbar        (Feature por Alfredo)
├── docs/helen-readme           (Documentación por Helen)
├── fix/nombre-bug              (Bugfix por integrante 3)
└── refactor/nombre-code        (Refactorización por integrante 4)
```

---

## Commits realizados

### Rama: `feat/alfredo-navbar`
**Integrante**: Alfredo Hernández

| Commit # | Mensaje | Descripción |
|-----------|---------|-------------|
| 1 | `feat: agregar estructura navbar` | Se crea el componente navbar con HTML/CSS básico |
| 2 | `feat: estilos responsive para navbar` | Se añaden media queries y animaciones |

**Hash de commits**: 
- Commit 1: `abc1234`
- Commit 2: `def5678`

---

### Rama: `docs/helen-readme`
**Integrante**: Helen Romero

| Commit # | Mensaje | Descripción |
|-----------|---------|-------------|
| 1 | `docs: crear README con instrucciones` | Se documenta el proyecto principal |
| 2 | `docs: agregar sección de contribuciones` | Se añaden guías para colaboradores |

**Hash de commits**:
- Commit 1: `ghi9012`
- Commit 2: `jkl3456`

---

## Pull Requests

### PR #1: Navbar Feature
- **Título**: `feat: agregar navbar responsivo`
- **Rama**: `feat/alfredo-navbar` → `main`
- **Autor**: Alfredo Hernández
- **Descripción**: Se añade componente navbar con estilos responsive
- **URL**: [Enlace al PR](https://github.com/usuario/repo/pull/1)
- **Revisiones**: 
  - Helen Romero: ✅ Aprobado (Comentario: "Excelente implementación, revisa el espaciado")
  - [Nombre]: ✅ Aprobado
- **Estado**: Merged ✅

---

### PR #2: README Documentation
- **Título**: `docs: documentación completa del proyecto`
- **Rama**: `docs/helen-readme` → `main`
- **Autor**: Helen Romero
- **Descripción**: Se documenta el proyecto, configuración y guía de contribución
- **URL**: [Enlace al PR](https://github.com/usuario/repo/pull/2)
- **Revisiones**:
  - Alfredo Hernández: ✅ Aprobado (Comentario: "Muy clara la documentación")
  - [Nombre]: ✅ Aprobado
- **Estado**: Merged ✅

---

## Evidencias

### Capturas de pantalla

1. **Ramas creadas**
   - ![Ramas del repositorio](./evidencia/ramas.png)

2. **Pull Request #1**
   - ![PR navbar](./evidencia/pr-navbar.png)

3. **Pull Request #2**
   - ![PR readme](./evidencia/pr-readme.png)

4. **Revisión de código**
   - ![Revisión](./evidencia/revision.png)

5. **Merge completado**
   - ![Merge](./evidencia/merge.png)

### Enlaces a recursos

- **Repositorio del equipo**: https://github.com/usuario/repo
- **PR #1**: https://github.com/usuario/repo/pull/1
- **PR #2**: https://github.com/usuario/repo/pull/2
- **Network graph**: https://github.com/usuario/repo/network

---

## Reflexión: Ramas y PRs como evidencia y herramienta educativa

### ¿Cómo usamos ramas/PR como evidencia de trabajo colaborativo?

1. **Trazabilidad del trabajo**
   - Cada rama muestra quién trabajó en qué
   - Los commits pequeños permiten ver el progreso paso a paso
   - Los PRs documentan el proceso de revisión y aprobación

2. **Calidad del código**
   - Las revisiones de código en los PRs demuestran que el equipo evalúa el trabajo
   - Los comentarios muestran comunicación y mejoras iterativas
   - El merge documenta que el código fue aprobado

3. **Responsabilidad individual**
   - Cada integrante tiene su rama asignada
   - Los commits llevan el autor registrado
   - Los PRs muestran quién trabajó en cada feature

### ¿Cómo enseñaríamos colaboración a otros?

1. **Workflow clara**: Mostrar que cada rama = una feature/tarea aislada
2. **Revisión de código**: Explicar por qué es importante revisar antes de merge
3. **Mensajes de commit**: Demostrar cómo los commits claros hacen historial legible
4. **Comunicación**: Los comentarios en PRs muestran cómo colaborar sin conflictos
5. **Resolución de conflictos**: Documentar cómo se manejan cuando ocurren

**Conclusión**: Las ramas y PRs son el "paper trail" del trabajo colaborativo moderno. Son evidencia digital de quién hizo qué, cuándo, por qué y cómo fue revisado.

---

## Checklist de entrega

- [ ] Todos los integrantes crearon su rama
- [ ] Cada rama tiene 1-2 commits pequeños
- [ ] Se abrieron al menos 2 Pull Requests
- [ ] Cada PR tiene al menos 1 comentario de revisión
- [ ] Los PRs están merged a main
- [ ] Se capturaron evidencias (pantallas)
- [ ] Se completó esta plantilla
- [ ] Se escribió la reflexión

---

**Última actualización**: [Fecha]  
**Estado**: ⏳ En progreso
