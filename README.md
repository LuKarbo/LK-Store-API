# 🚀 LK-Store-API  

**LK-Store-API** es una API desarrollada para integrarse con **LK-Store**, facilitando la comunicación entre la aplicación móvil y la base de datos.  

Este proyecto permite gestionar las consultas y la conexión con la base de datos de forma separada del código principal, garantizando una arquitectura más limpia y mantenible.  
Se utiliza **Firebase** como servicio de almacenamiento de datos.  

## ⚙️ Funcionalidades Principales  

### 🔹 Usuarios (`/user`)  
✅ Registro de usuario (`POST /user/register`).  
✅ Obtener todos los usuarios (`GET /user`).  
✅ Obtener información de un usuario (`GET /user/:ID`).  
✅ Edición de perfil (`PUT /user/edit/:id`).  
✅ Cambio de rol (`PUT /user/edit/rol/:id`).  

### 🔹 Soporte (`/support`)  
✅ Crear solicitud de soporte (`POST /support`).  
✅ Obtener todas las solicitudes de soporte (`GET /support`).  
✅ Obtener una solicitud de soporte (`GET /support/:id`).  
✅ Responder a una solicitud de soporte (`PUT /support/:id/reply`).  

### 🔹 Pedidos (`/order`)  
✅ Crear pedido (`POST /order`).  
✅ Obtener todos los pedidos (`GET /orders`).  
✅ Obtener un pedido específico (`GET /order/:id`).  

### 🔹 Menú (`/menu`)  
✅ Crear un elemento del menú (`POST /menu`).  
✅ Obtener todos los elementos del menú (`GET /menu`).  
✅ Obtener un elemento del menú específico (`GET /menu/:id`).  

### 🔹 Hamburguesas (`/hamburger`)  
✅ Crear una hamburguesa (`POST /hamburger`).  
✅ Obtener todas las hamburguesas (`GET /hamburger`).  
✅ Obtener una hamburguesa específica (`GET /hamburger/:id`).  

### 🔹 Papas Fritas (`/fries`)  
✅ Crear una porción de papas fritas (`POST /fries`).  
✅ Obtener todas las porciones de papas fritas (`GET /fries`).  
✅ Obtener una porción de papas fritas específica (`GET /fries/:id`).  

### 🔹 Bebidas (`/drink`)  
✅ Crear una bebida (`POST /drink`).  
✅ Obtener todas las bebidas (`GET /drink`).  
✅ Obtener una bebida específica (`GET /drink/:id`).  

### 🔹 Descuentos (`/discount`)  
✅ Crear un descuento (`POST /discount`).  
✅ Obtener todos los descuentos (`GET /discount`).  
✅ Obtener un descuento específico (`GET /discount/:id`).  

## 🛠️ Tecnologías Utilizadas  
- **Node.js**  
- **Express**  
- **SQL**  
- **Firebase**  

## 👨‍💻 Autor  
🔹 **Lucas Karbo**
