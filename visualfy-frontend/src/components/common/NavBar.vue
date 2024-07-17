<template>
    <nav aria-label="Barra de navegación principal">
        <img src="@/assets/logo-visualfy.png" alt="Logo visualfy" class="logo">
        <div class="nav-links">
            <router-link to="/" title="Ir a alertas">Alertas</router-link>
            <router-link to="/docs" title="Ir a documentación">Documentación</router-link>
            <router-link to="/stats" title="Ir a estadísticas">Estadísticas</router-link>
        </div>
    </nav>
</template>


<script lang="ts" setup>
</script>

<style scoped>
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        flex-wrap: wrap;

        .logo {
            height: 40px;
            margin-bottom: 0.5rem;
        }
    
        .nav-links {
            display: flex;
            gap: 1rem;

            a {
                text-decoration: none;
                padding: 0.5rem 1rem;
            }
        
            a:hover {
                background-color: #2E4B73;
                color: white;
                border-radius: 5px;
            }
        }
    
    }


    @media (max-width: 768px) {
        nav {
            flex-direction: column;
            align-items: center;

            .nav-links {
                flex-direction: column;

                a {
                    text-align: center;
                }
            }
    
        }

    }
</style>
