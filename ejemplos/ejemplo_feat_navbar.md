# Ejemplo: Rama feat/navbar

## Estructura de cambios

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto Colaborativo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-logo">
                <a href="#home">MiProyecto</a>
            </div>
            <ul class="navbar-menu">
                <li class="navbar-item">
                    <a href="#home" class="navbar-link">Inicio</a>
                </li>
                <li class="navbar-item">
                    <a href="#about" class="navbar-link">Acerca de</a>
                </li>
                <li class="navbar-item">
                    <a href="#services" class="navbar-link">Servicios</a>
                </li>
                <li class="navbar-item">
                    <a href="#contact" class="navbar-link">Contacto</a>
                </li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <main>
        <h1>Bienvenido</h1>
    </main>
</body>
</html>
```

## Commits esperados

### Commit 1: Estructura básica
```bash
git commit -m "feat: estructura HTML navbar"
```
**Cambios**: Se agrega HTML semántico del navbar

### Commit 2: Estilos responsive
```bash
git commit -m "feat: estilos responsive y animaciones navbar"
```
**Cambios**: Se agregan estilos CSS con media queries

---

## Comentario de revisión esperado

```
✅ Excelente navbar! 

Observaciones:
- La semántica HTML está correcta (nav, ul, li)
- Los estilos responsive funcionan bien en mobile
- Sugerencia: agregar transición smooth al menu hamburguesa

Aprobado para merge! 👍
```

---

## Testing

```bash
# Pruebas manuales
1. Abre index.html en Chrome/Firefox
2. Redimensiona la ventana
3. Verifica que sea responsive (mobile: 320px, tablet: 768px, desktop: 1024px)
4. Prueba los enlaces del navbar
5. En mobile, prueba el menú hamburguesa
```

