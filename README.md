# Forza Simulator

Forza Simulator es un proyecto de comercio electrónico para la venta de simuladores de carreras, diseñado para ofrecer una experiencia completa y fluida, con integración de pagos mediante Stripe.

---

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instaladas las siguientes herramientas:

1. **Node.js**: Descárgalo e instálalo desde [nodejs.org](https://nodejs.org/).  
2. **Live Server** (opcional): Una extensión de Visual Studio Code para servir archivos estáticos localmente.  
3. **Cuenta de Stripe**: Crea una cuenta en [Stripe](https://stripe.com) y obtén tus claves de API (clave pública y clave secreta).

---

## Instalación y configuración

Sigue estos pasos para configurar y ejecutar el proyecto en tu terminal:

### 1. Clonar el repositorio
Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio:  
```bash
git clone https://github.com/tu_usuario/forza-simulator.git
cd forza-simulator
2. Instalar dependencias
Asegúrate de estar en la carpeta raíz del proyecto y ejecuta:

bash
Copiar código
npm install
Esto instalará las dependencias necesarias para el backend, incluyendo Express y Stripe.

3. Configurar las variables de entorno
Crea un archivo .env en la raíz del proyecto con tus claves de Stripe:

env
Copiar código
STRIPE_SECRET_KEY=tu_clave_secreta
STRIPE_PUBLIC_KEY=tu_clave_publica
Nota: Asegúrate de mantener tus claves secretas seguras y no compartirlas públicamente.

4. Servir el frontend con Live Server
Si usas Visual Studio Code, instala la extensión Live Server.
Abre el proyecto en VS Code, haz clic derecho en index.html y selecciona "Open with Live Server".
Esto servirá los archivos estáticos en tu navegador, generalmente en http://127.0.0.1:5500.
5. Iniciar el servidor
En otra terminal, ejecuta el siguiente comando para iniciar el servidor backend:

bash
Copiar código
node server.js
Si todo está configurado correctamente, el servidor estará escuchando en el puerto 4242. Verás un mensaje como este:

arduino
Copiar código
Server running on port 4242
Flujo de trabajo del proyecto
Abre tu navegador en el puerto del Live Server (por ejemplo, http://127.0.0.1:5500).
Navega por el catálogo de productos y selecciona uno para comprar.
Haz clic en el botón "Comprar" para iniciar el flujo de pago.
El frontend enviará el priceId al servidor.
El servidor se comunica con la API de Stripe para crear una sesión de pago.
Serás redirigido a Stripe para completar el pago.
Una vez finalizado, serás redirigido a una página de éxito o cancelación según corresponda.
Solución de problemas
Error al iniciar el servidor:
Asegúrate de tener configuradas correctamente las variables de entorno (.env) y que Node.js esté instalado.

No se abre el Live Server:
Revisa que la extensión esté instalada correctamente en Visual Studio Code. Alternativamente, puedes usar cualquier servidor local para servir los archivos HTML.

Stripe no funciona:

Revisa que las claves de Stripe en el archivo .env sean correctas.
Asegúrate de que los priceId en tu código correspondan a los productos configurados en tu cuenta de Stripe.
