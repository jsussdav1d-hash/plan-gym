# Plan Level Fit 60

App personal de entrenamiento (lunes a sábado, 7:00 AM) con 3 rutinas que rotan cada 2 semanas,
registro de pesos, descansos con cuenta regresiva, edición de ejercicios y fecha de pago.

- Funciona sin internet después de abrirla una vez.
- Todos los datos se guardan solo en el teléfono. Usa **Ajustes → Exportar copia** de vez en cuando.

## Publicar en GitHub Pages
1. En github.com: **New repository** → nombre `plan-gym` → **Public** → **Create repository**.
2. **uploading an existing file** → arrastra todos estos archivos (no la carpeta) → **Commit changes**.
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. En 1–2 minutos queda en `https://TU-USUARIO.github.io/plan-gym/`.

## Instalar en el iPhone
Abre esa dirección en **Safari** → **Compartir** → **Agregar a pantalla de inicio**.
Usa siempre el ícono: Safari y el ícono guardan datos por separado.

## Actualizar
Sube el `index.html` nuevo (reemplaza el anterior) y en `sw.js` cambia `VERSION = "v1"` por `"v2"`.
La app se actualiza la próxima vez que la abras con internet. Tus datos no se borran.
