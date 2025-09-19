<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                             🎯 EJERCICIOS DE SVELTE 5                                ║
║                          Programación desde Cero - ADSO                             ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ Página principal con todos los ejercicios organizados por niveles de dificultad     ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    import { page } from '$app/state';
    import { detectarRutaBase, generarRutasEjercicios } from '$lib/utils/navigation.js';
    import { ejerciciosData } from '$lib/data/ejercicios.js';
    
    // Detectar automáticamente la ruta base del directorio actual
    const rutaBase = $derived(detectarRutaBase(page.url.pathname));
    
    // Generar ejercicios con rutas dinámicas
    const ejercicios = $derived(generarRutasEjercicios(ejerciciosData, rutaBase));
    
    let totalEjercicios = $derived(ejercicios.reduce((total, nivel) => total + nivel.ejercicios.length, 0));
</script>

<svelte:head>
    <title>Ejercicios Svelte 5 - ADSO</title>
    <meta name="description" content="Ejercicios progresivos de Svelte 5 para aprender programación desde cero" />
</svelte:head>

<main class="contenedor">
    <!-- Encabezado -->
    <header class="encabezado">
        <h1>🎯 Ejercicios de Svelte 5</h1>
        <p class="subtitulo">Aprende programación desde cero con {totalEjercicios} ejercicios progresivos</p>
        <div class="stats">
            <span class="stat">📚 {ejercicios.length} Niveles</span>
            <span class="stat">⚡ Svelte 5 Runes</span>
            <span class="stat">🎓 ADSO</span>
        </div>
    </header>

    <!-- Instrucciones -->
    <section class="instrucciones">
        <h2>📋 Instrucciones</h2>
        <div class="tarjeta">
            <ul>
                <li><strong>🎯 Sigue el orden:</strong> Cada ejercicio construye sobre el anterior</li>
                <li><strong>💻 Práctica:</strong> Escribe el código tú mismo, no copies y pegues</li>
                <li><strong>🤔 Experimenta:</strong> Cambia valores y observa qué pasa</li>
                <li><strong>❓ Pregunta:</strong> Si te atascas, revisa el ejercicio anterior o pide ayuda</li>
                <li><strong>🎉 Celebra:</strong> ¡Cada ejercicio completado es un logro!</li>
            </ul>
        </div>
    </section>

    <!-- Lista de ejercicios por nivel -->
    {#each ejercicios as nivelData}
        <section class="nivel-seccion">
            <h2 class="nivel-titulo">{nivelData.nivel}</h2>
            <p class="nivel-descripcion">{nivelData.descripcion}</p>

            <div class="ejercicios-grid">
                {#each nivelData.ejercicios as ejercicio}
                    <a href={ejercicio.ruta} class="ejercicio-card">
                        <div class="ejercicio-numero">#{ejercicio.id}</div>
                        <h3 class="ejercicio-titulo">{ejercicio.titulo}</h3>
                        <p class="ejercicio-descripcion">{ejercicio.descripcion}</p>
                        <div class="ejercicio-accion">
                            <span>Comenzar →</span>
                        </div>
                    </a>
                {/each}
            </div>
        </section>
    {/each}

    <!-- Footer -->
    <footer class="footer">
        <p>🚀 Desarrollado para el programa ADSO - Aprendiendo Svelte 5 paso a paso</p>
    </footer>
</main>

<style>
    /* Variables CSS */
    .contenedor {
        --color-verde: #10b981;
        --color-amarillo: #f59e0b;
        --color-naranja: #f97316;
        --color-rojo: #ef4444;
        --color-primario: #4f46e5;
        --color-fondo: #f8fafc;
        --color-tarjeta: #ffffff;
        --color-texto: #1f2937;
        --color-texto-suave: #6b7280;
        --sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        --radio: 0.75rem;
        --transicion: all 0.3s ease;
    }

    /* Layout principal */
    .contenedor {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        background-color: var(--color-fondo);
        font-family: 'Inter', system-ui, sans-serif;
        line-height: 1.6;
        color: var(--color-texto);
    }

    /* Encabezado */
    .encabezado {
        text-align: center;
        margin-bottom: 3rem;
    }

    .encabezado h1 {
        font-size: 3rem;
        font-weight: 800;
        background: linear-gradient(135deg, var(--color-primario), var(--color-verde));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 1rem;
    }

    .subtitulo {
        font-size: 1.25rem;
        color: var(--color-texto-suave);
        margin-bottom: 1.5rem;
    }

    .stats {
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
    }

    .stat {
        background: white;
        padding: 0.5rem 1rem;
        border-radius: var(--radio);
        box-shadow: var(--sombra);
        font-weight: 600;
        color: var(--color-primario);
    }

    /* Instrucciones */
    .instrucciones {
        margin-bottom: 3rem;
    }

    .instrucciones h2 {
        color: var(--color-primario);
        margin-bottom: 1rem;
    }

    .tarjeta {
        background: var(--color-tarjeta);
        padding: 2rem;
        border-radius: var(--radio);
        box-shadow: var(--sombra);
    }

    .tarjeta ul {
        margin: 0;
        padding-left: 1.5rem;
    }

    .tarjeta li {
        margin-bottom: 0.75rem;
    }

    /* Secciones de nivel */
    .nivel-seccion {
        margin-bottom: 3rem;
    }

    .nivel-titulo {
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .nivel-descripcion {
        color: var(--color-texto-suave);
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
    }

    /* Grid de ejercicios */
    .ejercicios-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    /* Cards de ejercicios */
    .ejercicio-card {
        background: var(--color-tarjeta);
        border-radius: var(--radio);
        padding: 1.5rem;
        box-shadow: var(--sombra);
        border: 2px solid transparent;
        text-decoration: none;
        color: inherit;
        transition: var(--transicion);
        position: relative;
        overflow: hidden;
    }

    .ejercicio-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.2);
        border-color: var(--color-primario);
    }

    .ejercicio-numero {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: var(--color-primario);
        color: white;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.875rem;
    }

    .ejercicio-titulo {
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 0.75rem 0;
        color: var(--color-texto);
        padding-right: 3rem;
    }

    .ejercicio-descripcion {
        color: var(--color-texto-suave);
        margin: 0 0 1rem 0;
        font-size: 0.95rem;
    }

    .ejercicio-accion {
        color: var(--color-primario);
        font-weight: 600;
        font-size: 0.9rem;
    }

    /* Colores por nivel */
    .ejercicios-grid:nth-of-type(1) .ejercicio-numero { background: var(--color-verde); }
    .ejercicios-grid:nth-of-type(2) .ejercicio-numero { background: var(--color-amarillo); }
    .ejercicios-grid:nth-of-type(3) .ejercicio-numero { background: var(--color-naranja); }
    .ejercicios-grid:nth-of-type(4) .ejercicio-numero { background: var(--color-rojo); }

    /* Footer */
    .footer {
        text-align: center;
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid #e5e7eb;
        color: var(--color-texto-suave);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .contenedor {
            padding: 1rem;
        }

        .encabezado h1 {
            font-size: 2rem;
        }

        .stats {
            gap: 1rem;
        }

        .stat {
            font-size: 0.875rem;
        }

        .ejercicios-grid {
            grid-template-columns: 1fr;
        }
    }
</style>