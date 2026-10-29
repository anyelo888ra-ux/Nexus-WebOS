# 🚀 Nexus WebOS

**Nexus WebOS** es un sistema operativo web de próxima generación diseñado para funcionar de manera fluida en PC, dispositivos móviles y visores VR/AR (WebXR / VisionOS Mode).

## 🌟 Características
* **Detección Automática de Entorno (`index.html`):** Redirige a la interfaz óptima según el dispositivo.
* **Modo Escritorio (`pc.html`):** Ventanas flotantes, dock interactivo y multitarea.
* **Modo Móvil (`movil.html`):** Interfaz táctil adaptada para smartphones y tablets.
* **Modo Espacial / VR (`vr.html`):** Experiencia 3D inmersiva con soporte WebXR.
* **Servidor Local (`server.js`):** Sincronización e integración en red local.

---

## 🛠️ Cómo ejecutar en local

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/Nexus-WebOS.git](https://github.com/tu-usuario/Nexus-WebOS.git)
   cd Nexus-WebOS

```

2. Instala las dependencias del servidor:
```bash
npm install

```


3. Inicia el servidor de Nexus WebOS:
```bash
node server.js

```


4. Abre en tu navegador:
* En tu PC: `http://localhost:8080`
* En tu teléfono o visor VR (misma red WiFi): `http://TU_IP_LOCAL:8080`
