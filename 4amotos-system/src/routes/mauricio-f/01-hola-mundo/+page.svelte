<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                            📝 EJERCICIO #01: HOLA MUNDO                             ║
║                                 🟢 NIVEL 1: BÁSICO                                  ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Crear tu primer componente Svelte y entender la estructura básica         ║
║ CONCEPTOS: Estructura de componente, HTML básico, estilos                           ║
║ TIEMPO ESTIMADO: 15 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->
<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Lee todas las instrucciones antes de empezar
    // 2. Modifica SOLO las secciones marcadas con "✏️ ESCRIBE AQUÍ"
    // 3. NO toques el resto del código hasta completar el ejercicio

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - Estructura básica de un componente Svelte
    // - Sección <script> para lógica
    // - Sección HTML para contenido
    // - Sección <style> para estilos

    // ✅ META: Al final de este ejercicio sabrás crear un componente básico

    // 🧭 Navegación dinámica
    import { page } from "$app/state";
    import { obtenerNavegacionEjercicio } from "$lib/utils/navigation.js";

    const navegacion = $derived(
        obtenerNavegacionEjercicio(page.url.pathname, {
            id: "01",
            titulo: "hola-mundo",
        }),
    );
</script>

<svelte:head>
    <title>Ejercicio 01: Hola Mundo - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📝 Ejercicio #01: Hola Mundo</h1>
        <div class="nivel">🟢 NIVEL 1: BÁSICO</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Entender la estructura de un componente Svelte</li>
                <li>Escribir tu primer HTML en Svelte</li>
                <li>Aplicar estilos básicos</li>
                <li>Ver tu primer "Hola Mundo" funcionando</li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Nuevos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>&lt;script&gt;</strong>
                    <span>Lógica de JavaScript</span>
                </div>
                <div class="concepto">
                    <strong>HTML</strong>
                    <span>Estructura del contenido</span>
                </div>
                <div class="concepto">
                    <strong>&lt;style&gt;</strong>
                    <span>Estilos CSS</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <div class="tarea">
            <h3>📝 Tarea 1: Mensaje de Bienvenida</h3>
            <p>
                <strong>Instrucción:</strong> Cambia el texto del h1 para que diga
                "¡Hola, soy [tu nombre]!"
            </p>

            <!-- ✏️ ESCRIBE AQUÍ - Cambia solo el texto dentro del h1 -->
            <div class="resultado">
                <h1>¡Hola soy Magola!</h1>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Edita el texto que está entre &lt;h1&gt;
                y &lt;/h1&gt;
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Agregar Información Personal</h3>
            <p>
                <strong>Instrucción:</strong> Agrega un párrafo con tu edad y carrera
            </p>

            <!-- ✏️ ESCRIBE AQUÍ - Agrega un párrafo <p> debajo del h1 -->
            <div class="resultado">
                <!-- Aquí debes agregar tu párrafo -->
                <p>Hola soy Magola, y tengo 20 años, y soy programadora</p>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Usa &lt;p&gt;Tengo X años y estudio Y&lt;/p&gt;
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Lista de Hobbies</h3>
            <p>
                <strong>Instrucción:</strong> Crea una lista con 3 cosas que te gustan
            </p>

            <!-- ✏️ ESCRIBE AQUÍ - Agrega una lista <ul> con 3 elementos <li> -->
            <div class="resultado">
                <!-- Aquí debes agregar tu lista -->
                <ul>
                    <li>Leer</li>
                    <li>Jugar ajedrez</li>
                    <li>Dormir</li>
                    <li>Viajar</li>
                </ul>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Usa &lt;ul&gt;&lt;li&gt;Item 1&lt;/li&gt;&lt;li&gt;Item
                2&lt;/li&gt;&lt;/ul&gt;
            </div>
        </div>
    </section>

    <!-- ✅ SOLUCIÓN (mantén esto oculto hasta completar) -->
    <details class="solucion">
        <summary>🔍 Ver Solución (solo después de intentar)</summary>
        <div class="codigo-solucion">
            <h3>✅ Código de Ejemplo:</h3>
            <pre><code
                    >&lt;div class="resultado"&gt;
    &lt;h1&gt;¡Hola, soy María!&lt;/h1&gt;
    &lt;p&gt;Tengo 20 años y estudio ADSO&lt;/p&gt;
    &lt;ul&gt;
        &lt;li&gt;Programar&lt;/li&gt;
        &lt;li&gt;Jugar videojuegos&lt;/li&gt;
        &lt;li&gt;Escuchar música&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code
                ></pre>
        </div>
    </details>

    <!-- 🔄 NAVEGACIÓN -->
    <nav class="navegacion">
        <a href={navegacion.volver} class="btn btn-secundario"
            >← Anterior: Volver a Ejercicios</a
        >
        {#if navegacion.siguiente}
            <a href={navegacion.siguiente.url} class="btn btn-primario"
                >Siguiente: {navegacion.siguiente.nombre} →</a
            >
        {/if}
    </nav>
</main>

<style>
    /* Variables CSS */
    .contenedor {
        --color-primario: #10b981;
        --color-secundario: #6b7280;
        --color-fondo: #f0f9ff;
        --color-tarjeta: #ffffff;
        --color-texto: #1f2937;
        --color-borde: #e5e7eb;
        --sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        --radio: 0.75rem;
    }

    /* Layout */
    .contenedor {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
        background: var(--color-fondo);
        font-family: "Inter", system-ui, sans-serif;
        line-height: 1.6;
        color: var(--color-texto);
    }

    /* Instrucciones */
    .instrucciones {
        background: var(--color-tarjeta);
        padding: 2rem;
        border-radius: var(--radio);
        box-shadow: var(--sombra);
        margin-bottom: 2rem;
        border-left: 5px solid var(--color-primario);
    }

    .instrucciones h1 {
        margin: 0 0 1rem 0;
        color: var(--color-primario);
        font-size: 2rem;
    }

    .nivel {
        display: inline-block;
        background: var(--color-primario);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        font-weight: 600;
        font-size: 0.875rem;
        margin-bottom: 1.5rem;
    }

    .objetivos,
    .conceptos {
        margin-bottom: 1.5rem;
    }

    .objetivos h2,
    .conceptos h2 {
        color: var(--color-texto);
        margin-bottom: 0.75rem;
        font-size: 1.25rem;
    }

    .objetivos ul {
        margin: 0;
        padding-left: 1.5rem;
    }

    .objetivos li {
        margin-bottom: 0.5rem;
    }

    .concepto-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
    }

    .concepto {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        border: 1px solid var(--color-borde);
    }

    .concepto strong {
        display: block;
        color: var(--color-primario);
        margin-bottom: 0.25rem;
        font-family: "Monaco", monospace;
    }

    .concepto span {
        font-size: 0.875rem;
        color: var(--color-secundario);
    }

    /* Área de trabajo */
    .area-trabajo {
        background: var(--color-tarjeta);
        padding: 2rem;
        border-radius: var(--radio);
        box-shadow: var(--sombra);
        margin-bottom: 2rem;
    }

    .area-trabajo h2 {
        color: var(--color-primario);
        margin-bottom: 1.5rem;
    }

    /* Tareas */
    .tarea {
        border: 2px solid var(--color-borde);
        border-radius: var(--radio);
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        background: #fafafa;
    }

    .tarea h3 {
        color: var(--color-texto);
        margin: 0 0 0.75rem 0;
    }

    .tarea p {
        margin: 0 0 1rem 0;
        color: var(--color-secundario);
    }

    .resultado {
        background: white;
        border: 2px dashed var(--color-primario);
        border-radius: 0.5rem;
        padding: 1.5rem;
        margin: 1rem 0;
        min-height: 80px;
    }

    .pista {
        background: #fef3c7;
        border: 1px solid #f59e0b;
        border-radius: 0.5rem;
        padding: 0.75rem;
        font-size: 0.9rem;
        color: #92400e;
    }

    /* Solución */
    .solucion {
        background: var(--color-tarjeta);
        border: 2px solid #ef4444;
        border-radius: var(--radio);
        padding: 1rem;
        margin-bottom: 2rem;
    }

    .solucion summary {
        font-weight: 600;
        color: #ef4444;
        cursor: pointer;
        padding: 0.5rem;
    }

    .codigo-solucion {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--color-borde);
    }

    .codigo-solucion pre {
        background: #1f2937;
        color: #e5e7eb;
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        font-size: 0.875rem;
    }

    /* Navegación */
    .navegacion {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .btn {
        padding: 0.75rem 1.5rem;
        border-radius: var(--radio);
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        border: 2px solid transparent;
    }

    .btn-primario {
        background: var(--color-primario);
        color: white;
    }

    .btn-primario:hover {
        background: #059669;
        transform: translateY(-2px);
    }

    .btn-secundario {
        background: transparent;
        color: var(--color-secundario);
        border-color: var(--color-borde);
    }

    .btn-secundario:hover {
        border-color: var(--color-secundario);
        color: var(--color-texto);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .contenedor {
            padding: 1rem;
        }

        .instrucciones,
        .area-trabajo {
            padding: 1.5rem;
        }

        .navegacion {
            flex-direction: column;
        }

        .btn {
            text-align: center;
        }
    }
</style>
