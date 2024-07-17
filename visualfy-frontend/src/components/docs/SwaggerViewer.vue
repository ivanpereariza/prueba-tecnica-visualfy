<template>
    <div id="swagger-ui"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';


// Al tener problemas con el paquete de Swagger en vue opte por inyectar los scrips en el montaje del componente.
onMounted(() => {
  // Obtener referencia al elemento <head> del documento
  const head = document.head;

  // Creamos un elemento link para cargar el css de SwaggerUI y lo añadimos al head.
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css';
  head.appendChild(link);

  // Creamos los dos scrips necesarios para SwaggerUI.
  const script1 = document.createElement('script');
  script1.src = 'https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js';
  script1.crossOrigin = 'anonymous';
  script1.async = true;

  const script2 = document.createElement('script');
  script2.src = 'https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-standalone-preset.js';
  script2.crossOrigin = 'anonymous';
  script2.async = true;

  // Añadimos los scripts al final del body para su ejecución
  document.body.appendChild(script1);
  document.body.appendChild(script2);

  // Una vez hayan cargado los dos scrips añadidos, ejecutamos la funcion anonima.
  script1.onload = script2.onload = () => {
    // Verificamos que SwaggerUIBundle y SwaggerUIStandalonePreset están definidos
    if (typeof window.SwaggerUIBundle !== 'undefined' && typeof window.SwaggerUIStandalonePreset !== 'undefined') {
      // Inicializamos SwaggerUI con la configuración necesaria.
      window.ui = window.SwaggerUIBundle({
        url: './openapi.yaml',
        dom_id: '#swagger-ui',
        presets: [
          window.SwaggerUIBundle.presets.apis,
          window.SwaggerUIStandalonePreset
        ]
      });
    } else {
      // Mostramos error por consola si SwaggerUIBundle o SwaggerUIStandalonePreset no están definidos.
      console.error('SwaggerUIBundle or SwaggerUIStandalonePreset is not defined.');
    }
  };
});

// Destruimos los scrips añadidos en el momento de destrucción del componente
onBeforeUnmount(() => {
  const head = document.head;
  const body = document.body;

  const link = head.querySelector('link[href="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css"]');
  if (link) {
    head.removeChild(link);
  }

  const script1 = body.querySelector('script[src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js"]');
  if (script1) {
    body.removeChild(script1);
  }

  const script2 = body.querySelector('script[src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-standalone-preset.js"]');
  if (script2) {
    body.removeChild(script2);
  }
});
</script>

<style scoped>
</style>
