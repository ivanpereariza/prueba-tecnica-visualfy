# Prueba técnica Visualfy

## Backend
1. **Acceder al proyecto**: Acceder a la carpeta visualfy-backend.

2. **Instalación de dependencias**: Ejecuta el siguiente comando para instalar las dependencias necesarias: ``` npm i```

3. **Iniciar el entorno local**: Ejecuta este comando para levantar el servidor local: ``` npm run dev```

## Frontend
1. **Acceder al proyecto**: Acceder a la carpeta visualfy-frontend.

2. **Instalación de dependencias**: Ejecuta el siguiente comando para instalar las dependencias necesarias: ``` npm i ```

3. **Iniciar el entorno local**: Ejecuta este comando para levantar el servidor local: ``` npm run serve ```

4. **Acceder a la aplicación**: Abre tu navegador y ve a http://localhost:8080 para acceder a la aplicación. Recuerda iniciar backend antes para recibir los datos.

## Testing

1. **Ejecutar pruebas backend**:
Para ejecutar las pruebas en backend, usa el siguiente comando (no es necesario tener backend iniciado): ``` npm run test ```

2. **Ejecutar pruebas frontend**:
Para ejecutar las pruebas frontend puedes hacerlo mediante el entorno visual de cypress o mediante terminal, a continuación detallamos las dos formas (asegúrate de tener frontend y backend iniciados):
- Entorno visual: 
    
    1.**Iniciar el entorno**
    ``` npm run cy:open```

    2.**Seleccionar E2E Testing** 
    
    3.**Seleccionar navegador**
    
    4.**Seleccionar alerts.cy.js**
- Entorno de terminal: 

    1.**Ejecutar pruebas por terminal con**: ``` npm run cy:run```