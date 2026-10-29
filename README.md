# DevLab

Mini-estudio de sitios web para gastronomía (cafeterías, restaurantes, etc.) hechos con Leonardo.

## Estructura

```
DevLab/
├── el-mojon/                  Restaurante El Mojón (San Salvador de Jujuy)
│   ├── web/                   Sitio principal (marketing)
│   ├── menudigitalmojon/      Menú digital para QR (sitio aparte)
│   ├── INFO.md                Datos del local
│   ├── MENU.md                Carta transcrita de las fotos
│   └── referencias/           Fotos originales de la carta
└── .claude/launch.json        Config para levantar servidores locales
```

Cada negocio es su propia carpeta. El menú digital se separa del sitio principal para que el código QR apunte directo a la carta sin cargar el resto.

## Correr los sitios

Hace falta `python` en el PATH.

```bash
# Sitio principal El Mojón → http://localhost:5177/
python -m http.server 5177 --bind 127.0.0.1 --directory el-mojon/web

# Menú digital El Mojón   → http://localhost:5188/
python -m http.server 5188 --bind 127.0.0.1 --directory el-mojon/menudigitalmojon
```

En la terminal integrada de Claude Code se pueden lanzar los dos a la vez (el `launch.json` ya los deja listos).

## Stack

HTML + CSS + JS puro, sin build. Google Fonts (Fraunces, Caveat, Playfair Display, Inter, Nunito). En el sitio principal se carga Lenis desde CDN para scroll suave.

## El Mojón

- **Sitio principal** (`el-mojon/web/`): hero inmersivo con 3 fotos en cross-fade, historia, carta en formato "papel" con pestañas, galería bento, visitanos con mapa y botones circulares de Facebook e Instagram.
- **Menú digital** (`el-mojon/menudigitalmojon/`): mobile-first, hero con logo, buscador y pestañas sticky, 70+ platos con precios y espacio para fotos.

Pendientes:
- Logo real
- Fotos de los platos (`menudigitalmojon/assets/img/`)
- Imagen de hero para el menú (`.hero__bg` en `styles.css`)
- Link de Instagram (hoy `href="#instagram"`, marcado con `data-pending="instagram"`)
