<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                             📝 EJERCICIO #06: FORMULARIOS                           ║
║                                🟡 NIVEL 2: INTERACCIÓN                              ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Aprender a usar bind:value para crear formularios interactivos            ║
║ CONCEPTOS: bind:value, inputs, reactividad bidireccional                            ║
║ TIEMPO ESTIMADO: 25 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Lee todas las instrucciones antes de empezar
    // 2. Completa cada tarea en orden
    // 3. Observa cómo los inputs se sincronizan automáticamente con las variables

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - bind:value para sincronizar inputs con variables
    // - Diferentes tipos de inputs (text, number, email, etc.)
    // - Reactividad bidireccional: variable ↔ input

    // ✏️ TAREA 1: Variables para el formulario
    // Ejemplo ya creado para ti:
    let nombre = $state<string>("Juan Pérez");

    // TODO: Crea las siguientes variables usando $state():
    // - edad: número (ejemplo: 25)
    // - email: string (ejemplo: "usuario@correo.com")
    // - telefono: string (ejemplo: "555-1234")
    // - mensaje: string (ejemplo: "Escribe tu mensaje aquí...")

    // ✏️ ESCRIBE AQUÍ TUS VARIABLES:
    // let edad = $state<number>(...);
    // let email = $state<string>(...);
    // let telefono = $state<string>(...);
    // let mensaje = $state<string>(...);

    // ✅ VARIABLES DE EJEMPLO (no las cambies hasta completar el ejercicio)
    let ejemploTexto = $state<string>("Texto sincronizado");
    let ejemploNumero = $state<number>(42);

    // 🧭 Navegación dinámica
    import { page } from '$app/state';
    import { obtenerNavegacionEjercicio } from '$lib/utils/navigation.js';

    const navegacion = $derived(obtenerNavegacionEjercicio(page.url.pathname, { id: '06', titulo: 'formularios' }));
</script>

<svelte:head>
    <title>Ejercicio 06: Formularios - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📝 Ejercicio #06: Formularios</h1>
        <div class="nivel">🟡 NIVEL 2: INTERACCIÓN</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Usar <code>bind:value</code> para sincronizar inputs con variables</li>
                <li>Crear formularios interactivos y reactivos</li>
                <li>Entender la reactividad bidireccional en Svelte 5</li>
                <li>Trabajar con diferentes tipos de inputs</li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Nuevos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>bind:value</strong>
                    <span>Sincroniza input ↔ variable</span>
                </div>
                <div class="concepto">
                    <strong>Reactividad</strong>
                    <span>Cambios automáticos en ambas direcciones</span>
                </div>
                <div class="concepto">
                    <strong>Input Types</strong>
                    <span>text, number, email, tel, textarea</span>
                </div>
                <div class="concepto">
                    <strong>Formularios</strong>
                    <span>Interfaz para capturar datos</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <div class="tarea">
            <h3>📝 Tarea 1: Inputs de Ejemplo (Funcionando)</h3>
            <p><strong>Instrucción:</strong> Experimenta con estos inputs para ver cómo funciona bind:value</p>

            <div class="formulario-ejemplo">
                <div class="input-group">
                    <label for="ejemplo-texto">Texto:</label>
                    <input
                        id="ejemplo-texto"
                        type="text"
                        bind:value={ejemploTexto}
                        placeholder="Escribe algo..."
                    />
                    <span class="valor-actual">Valor: "{ejemploTexto}"</span>
                </div>

                <div class="input-group">
                    <label for="ejemplo-numero">Número:</label>
                    <input
                        id="ejemplo-numero"
                        type="number"
                        bind:value={ejemploNumero}
                        min="0"
                        max="100"
                    />
                    <span class="valor-actual">Valor: {ejemploNumero}</span>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Al escribir en los inputs, las variables se actualizan automáticamente
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Tu Formulario Personal</h3>
            <p><strong>Instrucción:</strong> Crea las variables y descomenta el formulario</p>

            <div class="formulario-personal">
                <!-- ✏️ DESCOMENTA ESTE FORMULARIO CUANDO HAYAS CREADO LAS VARIABLES -->
                <!--
                <div class="input-group">
                    <label for="nombre">Nombre Completo:</label>
                    <input
                        id="nombre"
                        type="text"
                        bind:value={nombre}
                        placeholder="Tu nombre completo"
                    />
                </div>

                <div class="input-group">
                    <label for="edad">Edad:</label>
                    <input
                        id="edad"
                        type="number"
                        bind:value={edad}
                        min="15"
                        max="100"
                        placeholder="Tu edad"
                    />
                </div>

                <div class="input-group">
                    <label for="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        bind:value={email}
                        placeholder="tu@correo.com"
                    />
                </div>

                <div class="input-group">
                    <label for="telefono">Teléfono:</label>
                    <input
                        id="telefono"
                        type="tel"
                        bind:value={telefono}
                        placeholder="555-1234"
                    />
                </div>

                <div class="input-group">
                    <label for="mensaje">Mensaje:</label>
                    <textarea
                        id="mensaje"
                        bind:value={mensaje}
                        placeholder="Escribe tu mensaje aquí..."
                        rows="4"
                    ></textarea>
                </div>
                -->

                <div class="placeholder">
                    👆 Crea las variables en el script y luego descomenta el formulario de arriba
                </div>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> El patrón es: <code>&lt;input bind:value=&#123;nombreVariable&#125; /&gt;</code>
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Ver los Datos en Tiempo Real</h3>
            <p><strong>Instrucción:</strong> Descomenta la sección de vista previa</p>

            <div class="vista-previa">
                <!-- ✏️ DESCOMENTA ESTA SECCIÓN CUANDO TENGAS EL FORMULARIO FUNCIONANDO -->
                <!--
                <h4>📊 Vista Previa de tus Datos:</h4>
                <div class="datos-grid">
                    <div class="dato">
                        <span class="etiqueta">Nombre:</span>
                        <span class="valor">{nombre}</span>
                    </div>
                    <div class="dato">
                        <span class="etiqueta">Edad:</span>
                        <span class="valor">{edad} años</span>
                    </div>
                    <div class="dato">
                        <span class="etiqueta">Email:</span>
                        <span class="valor">{email}</span>
                    </div>
                    <div class="dato">
                        <span class="etiqueta">Teléfono:</span>
                        <span class="valor">{telefono}</span>
                    </div>
                    <div class="dato mensaje-completo">
                        <span class="etiqueta">Mensaje:</span>
                        <span class="valor">{mensaje}</span>
                    </div>
                </div>
                -->

                <div class="placeholder">
                    📊 Aquí verás tus datos cuando descomentes la vista previa
                </div>
            </div>

            <div class="pista">
                💡 <strong>Magia:</strong> Los datos se actualizan automáticamente mientras escribes
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Qué Acabas de Aprender?</h2>

        <div class="concepto-teoria">
            <h3>🔗 bind:value en Svelte 5</h3>
            <p>
                <code>bind:value</code> crea una conexión bidireccional entre un input y una variable.
                Cuando cambias el input, la variable se actualiza. Cuando cambias la variable, el input se actualiza.
            </p>

            <div class="codigo-ejemplo">
                <pre><code>// ✅ Forma correcta en Svelte 5
let mensaje = $state('Hola');

// En el HTML:
&lt;input bind:value=&#123;mensaje&#125; /&gt;
&lt;p&gt;&#123;mensaje&#125;&lt;/p&gt; // Se actualiza automáticamente</code></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>📊 Tipos de Inputs</h3>
            <div class="tipos-grid">
                <div class="tipo">
                    <strong>text</strong>
                    <code>&lt;input type="text"&gt;</code>
                    <span>Texto general</span>
                </div>
                <div class="tipo">
                    <strong>number</strong>
                    <code>&lt;input type="number"&gt;</code>
                    <span>Solo números</span>
                </div>
                <div class="tipo">
                    <strong>email</strong>
                    <code>&lt;input type="email"&gt;</code>
                    <span>Correos electrónicos</span>
                </div>
                <div class="tipo">
                    <strong>textarea</strong>
                    <code>&lt;textarea&gt;</code>
                    <span>Texto multilínea</span>
                </div>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>⚡ Reactividad Bidireccional</h3>
            <p>
                La magia de Svelte 5 es que todo se mantiene sincronizado automáticamente:
            </p>
            <ul>
                <li>Escribes en el input → La variable se actualiza</li>
                <li>Cambias la variable → El input se actualiza</li>
                <li>La variable cambia → Toda la UI que la usa se actualiza</li>
            </ul>
        </div>
    </section>

    <!-- ✅ SOLUCIÓN -->
    <details class="solucion">
        <summary>🔍 Ver Solución (solo después de intentar)</summary>
        <div class="codigo-solucion">
            <h3>✅ Código Completo:</h3>
            <pre><code>// Variables para el formulario
let nombre = $state&lt;string&gt;('Juan Pérez');
let edad = $state&lt;number&gt;(25);
let email = $state&lt;string&gt;('usuario@correo.com');
let telefono = $state&lt;string&gt;('555-1234');
let mensaje = $state&lt;string&gt;('Escribe tu mensaje aquí...');</code></pre>
            <p><strong>📝 Luego descomenta:</strong> Los formularios y la vista previa para ver todo funcionando.</p>
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
                >Nivel 2: {navegacion.siguiente.nombre} →</a
            >
        {/if}
    </nav>

</main>

<style>
    /* Variables CSS */
    .contenedor {
        --color-primario: #f59e0b;
        --color-secundario: #6b7280;
        --color-fondo: #fffbeb;
        --color-tarjeta: #ffffff;
        --color-texto: #1f2937;
        --color-borde: #e5e7eb;
        --color-input: #f9fafb;
        --color-input-focus: #fef3c7;
        --sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        --radio: 0.75rem;
    }

    /* Layout base */
    .contenedor {
        max-width: 1000px;
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

    .objetivos, .conceptos {
        margin-bottom: 1.5rem;
    }

    .objetivos h2, .conceptos h2 {
        color: var(--color-texto);
        margin-bottom: 0.75rem;
        font-size: 1.25rem;
    }

    .objetivos ul {
        margin: 0;
        padding-left: 1.5rem;
    }

    .objetivos code {
        background: #fef3c7;
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
        font-size: 0.875rem;
    }

    .concepto-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1rem;
    }

    .concepto {
        background: #fefce8;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        border: 1px solid #fde047;
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

    /* Estilos específicos para formularios */
    .formulario-ejemplo, .formulario-personal {
        margin: 1rem 0;
    }

    .input-group {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .input-group label {
        font-weight: 600;
        color: var(--color-texto);
        font-size: 0.9rem;
    }

    .input-group input,
    .input-group textarea {
        padding: 0.75rem;
        border: 2px solid var(--color-borde);
        border-radius: 0.5rem;
        background: var(--color-input);
        font-size: 1rem;
        transition: all 0.3s ease;
        font-family: inherit;
    }

    .input-group input:focus,
    .input-group textarea:focus {
        outline: none;
        border-color: var(--color-primario);
        background: var(--color-input-focus);
        box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
    }

    .input-group textarea {
        resize: vertical;
        min-height: 100px;
    }

    .valor-actual {
        font-size: 0.875rem;
        color: var(--color-primario);
        font-weight: 600;
        font-family: "Monaco", monospace;
        background: #fef3c7;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        align-self: flex-start;
    }

    /* Vista previa de datos */
    .vista-previa {
        margin: 1rem 0;
        padding: 1rem;
        background: #f0f9ff;
        border-radius: 0.5rem;
        border: 1px solid #0ea5e9;
    }

    .vista-previa h4 {
        margin: 0 0 1rem 0;
        color: #0ea5e9;
    }

    .datos-grid {
        display: grid;
        gap: 0.75rem;
    }

    .dato {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
        background: white;
        border-radius: 0.5rem;
        border: 1px solid #e0f2fe;
    }

    .dato.mensaje-completo {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .etiqueta {
        font-weight: 600;
        color: var(--color-texto);
        min-width: 80px;
        font-size: 0.9rem;
    }

    .valor {
        color: #0ea5e9;
        font-weight: 600;
        font-family: "Monaco", monospace;
        background: #f0f9ff;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        flex: 1;
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
        overflow-x: auto;
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
        font-size: 0.8rem;
        overflow-x: auto;
    }

    .tipo span {
        font-size: 0.875rem;
        color: var(--color-secundario);
    }

    /* Reutilizar estilos de pista, solución y navegación */
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
        background: #d97706;
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

        .concepto-grid,
        .tipos-grid {
            grid-template-columns: 1fr;
        }

        .dato {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }

        .etiqueta {
            min-width: auto;
        }
    }
</style>