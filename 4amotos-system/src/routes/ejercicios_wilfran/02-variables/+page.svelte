<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                             📝 EJERCICIO #02: VARIABLES                             ║
║                                 🟢 NIVEL 1: BÁSICO                                  ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Aprender a crear variables reactivas con $state() en Svelte 5             ║
║ CONCEPTOS: $state(), tipos de datos, reactividad                                    ║
║ TIEMPO ESTIMADO: 20 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Lee todas las instrucciones antes de empezar
    // 2. Completa cada tarea en orden
    // 3. Observa cómo las variables cambian automáticamente en la pantalla

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - $state() para crear variables reactivas
    // - Diferentes tipos de datos (string, number, boolean)
    // - Cómo la reactividad actualiza automáticamente la UI

    // ✏️ TAREA 1: Crea tus primeras variables reactivas
    // Ejemplo ya creado para ti:
    let nombre = $state<string>("Wilfran camilo castellanos");

    // TODO: Crea las siguientes variables usando $state():
    // - edad: un número con tu edad
    // - esEstudiante: un booleano (true/false)
    // - materiaFavorita: un string con tu materia favorita

    // ✏️ ESCRIBE AQUÍ TUS VARIABLES:

     let edad = $state<number>(25);
     let esEstudiante = $state<boolean>(true);
     let materiaFavorita = $state<string>("Analisis de Datos");

    // ✅ VARIABLES DE EJEMPLO (no las cambies hasta completar el ejercicio)
    let ejemploTexto = $state<string>("¡Hola Svelte 5!");
    let ejemploNumero = $state<number>(42);
    let ejemploBooleano = $state<boolean>(true);

    // 🧭 Navegación dinámica
    import { page } from '$app/state';
    import { obtenerNavegacionEjercicio } from '$lib/utils/navigation.js';

    const navegacion = $derived(obtenerNavegacionEjercicio(page.url.pathname, { id: '02', titulo: 'variables' }));
</script>

<svelte:head>
    <title>Ejercicio 02: Variables - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📝 Ejercicio #02: Variables</h1>
        <div class="nivel">🟢 NIVEL 1: BÁSICO</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Crear variables reactivas con <code>$state()</code></li>
                <li>Entender los tipos de datos básicos</li>
                <li>Ver cómo funciona la reactividad en Svelte 5</li>
                <li>Mostrar variables en HTML usando interpolación</li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Nuevos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>$state()</strong>
                    <span>Crea variables reactivas</span>
                </div>
                <div class="concepto">
                    <strong>string</strong>
                    <span>Texto entre comillas</span>
                </div>
                <div class="concepto">
                    <strong>number</strong>
                    <span>Números enteros o decimales</span>
                </div>
                <div class="concepto">
                    <strong>boolean</strong>
                    <span>true o false</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <div class="tarea">
            <h3>📝 Tarea 1: Declarar Variables</h3>
            <p>
                <strong>Instrucción:</strong> Ve al script y crea las variables que
                faltan
            </p>

            <div class="resultado">
                <h3>🔍 Variables de Ejemplo (funcionando):</h3>
                <div class="variable-display">
                    <span class="label">ejemploTexto:</span>
                    <span class="value string">{ejemploTexto}</span>
                </div>
                <div class="variable-display">
                    <span class="label">ejemploNumero:</span>
                    <span class="value number">{ejemploNumero}</span>
                </div>
                <div class="variable-display">
                    <span class="label">ejemploBooleano:</span>
                    <span class="value boolean">{ejemploBooleano}</span>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Usa el mismo patrón:
                <code>let miVariable = $state&lt;tipo&gt;(valor);</code>
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Mostrar Tus Variables</h3>
            <p>
                <strong>Instrucción:</strong> Descomenta las líneas de abajo para
                ver tus variables
            </p>

            <div class="resultado">
                <h3>🎯 Tus Variables:</h3>

                
                <div class="variable-display">
                    <span class="label">nombre:</span>
                    <span class="value string">{nombre}</span>
                </div>

                <div class="variable-display">
                    <span class="label">edad:</span>
                    <span class="value number">{edad}</span>
                </div>

                <div class="variable-display">
                    <span class="label">esEstudiante:</span>
                    <span class="value boolean">{esEstudiante}</span>
                </div>

                <div class="variable-display">
                    <span class="label">materiaFavorita:</span>
                    <span class="value string">{materiaFavorita}</span>
                </div>
                

                <div class="placeholder">
                    👆 Descomenta las líneas de arriba cuando hayas creado tus
                    variables
                </div>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Para descomentar, elimina los
                <code>&lt;!--</code>
                y <code>--&gt;</code>
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Experimenta</h3>
            <p>
                <strong>Instrucción:</strong> Cambia los valores de tus variables
                y observa cómo se actualiza la pantalla automáticamente
            </p>

            <div class="experimento">
                <p>🧪 <strong>Experimenta cambiando:</strong></p>
                <ul>
                    <li>El valor de <code>nombre</code> por tu nombre real</li>
                    <li>El valor de <code>edad</code> por tu edad real</li>
                    <li>
                        El valor de <code>esEstudiante</code> entre true y false
                    </li>
                    <li>
                        El valor de <code>materiaFavorita</code> por otra materia
                    </li>
                </ul>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Guarda el archivo y la página se actualizará
                automáticamente
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Qué Acabas de Aprender?</h2>

        <div class="concepto-teoria">
            <h3>🔥 $state() en Svelte 5</h3>
            <p>
                En Svelte 5, usamos <code>$state()</code> para crear variables reactivas.
                Esto significa que cuando cambias el valor de la variable, la pantalla
                se actualiza automáticamente.
            </p>

            <div class="codigo-ejemplo">
                <pre><code
                        >// ✅ Forma correcta en Svelte 5
let nombre = $state&lt;string&gt;('María');

// ❌ Forma antigua (Svelte 4)
let nombre = 'María';</code
                    ></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>📊 Tipos de Datos</h3>
            <div class="tipos-grid">
                <div class="tipo">
                    <strong>string</strong>
                    <code>'Hola Mundo'</code>
                    <span>Texto entre comillas</span>
                </div>
                <div class="tipo">
                    <strong>number</strong>
                    <code>25</code>
                    <span>Números</span>
                </div>
                <div class="tipo">
                    <strong>boolean</strong>
                    <code>true</code>
                    <span>Verdadero o Falso</span>
                </div>
            </div>
        </div>
    </section>

    <!-- ✅ SOLUCIÓN -->
    <details class="solucion">
        <summary>🔍 Ver Solución (solo después de intentar)</summary>
        <div class="codigo-solucion">
            <h3>✅ Código Completo:</h3>
            <pre><code
                    >// Variables reactivas con $state()
let nombre = $state&lt;string&gt;('Ana García');
let edad = $state&lt;number&gt;(20);
let esEstudiante = $state&lt;boolean&gt;(true);
let materiaFavorita = $state&lt;string&gt;('Programación');</code
                ></pre>
        </div>
    </details>

    <!-- 🔄 NAVEGACIÓN -->
    <nav class="navegacion">
        {#if navegacion.anterior}
            <a href={navegacion.anterior.url} class="btn btn-secundario"
                >← Anterior: {navegacion.anterior.nombre}</a
            >
        {/if}
        {#if navegacion.siguiente}
            <a href={navegacion.siguiente.url} class="btn btn-primario"
                >Siguiente: {navegacion.siguiente.nombre} →</a
            >
        {/if}
    </nav>
</main>

<style>
    /* Usar las mismas variables CSS que el ejercicio anterior */
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

    /* Layout base (igual que ejercicio anterior) */
    .contenedor {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
        background: var(--color-fondo);
        font-family: "Inter", system-ui, sans-serif;
        line-height: 1.6;
        color: var(--color-texto);
    }

    /* Reutilizar estilos base del ejercicio anterior */
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

    .objetivos code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
        font-size: 0.875rem;
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

    /* Nuevos estilos específicos para variables */
    .variable-display {
        display: flex;
        align-items: center;
        padding: 0.75rem;
        margin: 0.5rem 0;
        background: white;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .label {
        font-weight: 600;
        color: var(--color-texto);
        min-width: 120px;
        font-family: "Monaco", monospace;
    }

    .value {
        padding: 0.25rem 0.75rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
        font-weight: 600;
    }

    .value.string {
        background: #dbeafe;
        color: #1e40af;
    }

    .value.number {
        background: #dcfce7;
        color: #166534;
    }

    .value.boolean {
        background: #fef3c7;
        color: #92400e;
    }

    .placeholder {
        text-align: center;
        color: var(--color-secundario);
        font-style: italic;
        padding: 2rem;
        background: #f8fafc;
        border-radius: 0.5rem;
        border: 2px dashed var(--color-borde);
    }

    .experimento {
        background: #eff6ff;
        border: 1px solid #3b82f6;
        border-radius: 0.5rem;
        padding: 1rem;
        margin: 1rem 0;
    }

    .experimento ul {
        margin: 0.5rem 0 0 0;
        padding-left: 1.5rem;
    }

    .experimento code {
        background: #dbeafe;
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
    }

    /* Teoría */
    .teoria {
        background: var(--color-tarjeta);
        padding: 2rem;
        border-radius: var(--radio);
        box-shadow: var(--sombra);
        margin-bottom: 2rem;
        border-left: 5px solid #3b82f6;
    }

    .teoria h2 {
        color: #3b82f6;
        margin-bottom: 1.5rem;
    }

    .concepto-teoria {
        margin-bottom: 1.5rem;
    }

    .concepto-teoria h3 {
        color: var(--color-texto);
        margin-bottom: 0.75rem;
    }

    .codigo-ejemplo {
        background: #1f2937;
        border-radius: 0.5rem;
        overflow: hidden;
        margin: 1rem 0;
    }

    .codigo-ejemplo pre {
        margin: 0;
        padding: 1rem;
        color: #e5e7eb;
        font-size: 0.875rem;
    }

    .tipos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .tipo {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        border: 1px solid var(--color-borde);
    }

    .tipo strong {
        display: block;
        color: #3b82f6;
        margin-bottom: 0.5rem;
    }

    .tipo code {
        display: block;
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.5rem;
        border-radius: 0.25rem;
        margin: 0.5rem 0;
        font-family: "Monaco", monospace;
    }

    .tipo span {
        font-size: 0.875rem;
        color: var(--color-secundario);
    }

    /* Reutilizar estilos de pista, solución y navegación del ejercicio anterior */
    .pista {
        background: #fef3c7;
        border: 1px solid #f59e0b;
        border-radius: 0.5rem;
        padding: 0.75rem;
        font-size: 0.9rem;
        color: #92400e;
        margin-top: 1rem;
    }

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
        .area-trabajo,
        .teoria {
            padding: 1.5rem;
        }

        .navegacion {
            flex-direction: column;
        }

        .variable-display {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }

        .label {
            min-width: auto;
        }
    }
</style>
