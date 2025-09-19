<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                             📝 EJERCICIO #04: BOTONES                               ║
║                                 🟢 NIVEL 1: BÁSICO                                  ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Aprender a manejar eventos de click con botones en Svelte 5               ║
║ CONCEPTOS: onclick, funciones, interactividad                                       ║
║ TIEMPO ESTIMADO: 30 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Aprende a crear funciones que respondan a clics
    // 2. Entiende cómo conectar botones con acciones
    // 3. Experimenta con diferentes tipos de interacciones

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - onclick para manejar eventos de click
    // - Funciones básicas en JavaScript
    // - Interactividad usuario-aplicación

    // ✏️ VARIABLES DE ESTADO
    let mensaje = $state<string>('¡Haz click en un botón!');
    let vecesClickeado = $state<number>(0);
    let colorFondo = $state<string>('#ffffff');

    // ✏️ FUNCIONES PARA MANEJAR EVENTOS
    // Función básica para cambiar mensaje
    function cambiarMensaje() {
        mensaje = '¡Botón clickeado!';
    }

    // TODO: Crea esta función para cambiar el saludo
    function cambiarSaludo() {
        // ✏️ ESCRIBE AQUÍ: Cambia el mensaje a "¡Hola desde Svelte!"
        mensaje = '¡Hola desde Svelte!';
    }

    // TODO: Crea esta función para contar clicks
    function contarClick() {
        // ✏️ ESCRIBE AQUÍ: Incrementa vecesClickeado en 1
        vecesClickeado = vecesClickeado + 1;
        mensaje = `¡Has hecho ${vecesClickeado} clicks!`;
    }

    // TODO: Crea esta función para resetear todo
    function resetear() {
        // ✏️ ESCRIBE AQUÍ:
        // - Pon mensaje en "Todo reseteado"
        // - Pon vecesClickeado en 0
        // - Pon colorFondo en "#ffffff"
        mensaje = 'Todo reseteado';
        vecesClickeado = 0;
        colorFondo = '#ffffff';
    }

    // Función más avanzada para cambiar color de fondo
    function cambiarColor() {
        const colores = ['#ffcccb', '#add8e6', '#90ee90', '#fffacd', '#ffc0cb'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        colorFondo = colorAleatorio;
        mensaje = `Color cambiado a ${colorAleatorio}`;
    }

    // ✏️ AGREGA TUS PROPIAS FUNCIONES AQUÍ:
    // function miFuncionPersonalizada() {
    //     // Tu código aquí
    // }

    // 🧭 Navegación dinámica
    import { page } from '$app/state';
    import { obtenerNavegacionEjercicio } from '$lib/utils/navigation.js';

    const navegacion = $derived(obtenerNavegacionEjercicio(page.url.pathname, { id: '04', titulo: 'botones' }));
</script>

<svelte:head>
    <title>Ejercicio 04: Botones - Svelte 5</title>
</svelte:head>

<main class="contenedor" style="background-color: {colorFondo}">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📝 Ejercicio #04: Botones</h1>
        <div class="nivel">🟢 NIVEL 1: BÁSICO</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Conectar botones con funciones usando <code>onclick</code></li>
                <li>Crear funciones que modifiquen el estado</li>
                <li>Entender la interactividad en aplicaciones web</li>
                <li>Ver cambios inmediatos al hacer click</li>
            </ul>
        </div>

        <div class="sintaxis">
            <h2>📝 Sintaxis de Eventos</h2>
            <div class="sintaxis-ejemplos">
                <div class="ejemplo">
                    <code>&lt;button onclick={`{miFuncion}`}&gt;</code>
                    <span>Conecta botón con función</span>
                </div>
                <div class="ejemplo">
                    <code>function miFuncion() {`{ ... }`}</code>
                    <span>Define qué hacer al hacer click</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <!-- Área de resultado en tiempo real -->
        <div class="pantalla-resultado">
            <div class="mensaje-principal">{mensaje}</div>
            <div class="contador">Clicks totales: {vecesClickeado}</div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 1: Botones Básicos</h3>
            <p><strong>Instrucción:</strong> Observa cómo funcionan estos botones básicos</p>

            <div class="botones-grupo">
                <!-- ✅ BOTÓN YA FUNCIONAL -->
                <button onclick={cambiarMensaje} class="btn btn-primario">
                    🎯 Cambiar Mensaje
                </button>

                <!-- ✏️ CONECTA ESTOS BOTONES CON SUS FUNCIONES -->
                <button onclick={cambiarSaludo} class="btn btn-secundario">
                    👋 Saludar
                </button>

                <button onclick={contarClick} class="btn btn-success">
                    🔢 Contar Click
                </button>

                <button onclick={resetear} class="btn btn-warning">
                    🔄 Resetear
                </button>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Cada botón llama a una función diferente. ¡Observa cómo cambia la pantalla!
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Botón Avanzado</h3>
            <p><strong>Instrucción:</strong> Este botón usa matemáticas (random) para cambiar el color</p>

            <div class="botones-grupo">
                <button onclick={cambiarColor} class="btn btn-special">
                    🎨 Cambiar Color de Fondo
                </button>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Esta función usa <code>Math.random()</code> para elegir colores aleatorios
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Crea Tu Propio Botón</h3>
            <p><strong>Instrucción:</strong> Agrega tu propia función y botón</p>

            <div class="area-experimental">
                <!-- ✏️ AGREGA TU BOTÓN PERSONALIZADO AQUÍ -->
                <!-- Ejemplo:
                <button onclick={miFuncionPersonalizada} class="btn btn-custom">
                    🚀 Mi Botón Especial
                </button>
                -->

                <div class="placeholder">
                    👆 Agrega tu botón personalizado aquí
                </div>
            </div>

            <div class="ideas">
                <h4>💡 Ideas para tu botón:</h4>
                <ul>
                    <li>Cambiar el mensaje a tu frase favorita</li>
                    <li>Multiplicar el contador por 2</li>
                    <li>Poner un emoji aleatorio en el mensaje</li>
                    <li>Cambiar el color del texto</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Cómo Funcionan los Eventos?</h2>

        <div class="concepto-teoria">
            <h3>🖱️ Eventos de Click</h3>
            <p>Un evento es algo que pasa en la aplicación (como hacer click). En Svelte 5, conectamos eventos con funciones usando <code>onclick</code>.</p>

            <div class="flujo-evento">
                <div class="paso">
                    <div class="numero">1</div>
                    <div class="texto">Usuario hace click</div>
                </div>
                <div class="flecha">→</div>
                <div class="paso">
                    <div class="numero">2</div>
                    <div class="texto">Se ejecuta la función</div>
                </div>
                <div class="flecha">→</div>
                <div class="paso">
                    <div class="numero">3</div>
                    <div class="texto">La pantalla se actualiza</div>
                </div>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>⚡ Reactividad Instantánea</h3>
            <p>Cuando una función cambia una variable de estado, Svelte actualiza automáticamente todo lo que usa esa variable en la pantalla. ¡Es magia! ✨</p>

            <div class="codigo-ejemplo">
                <h4>Ejemplo de función:</h4>
                <pre><code>
                    function contarClick() {
    'vecesClickeado = vecesClickeado + 1;'
    // ↑ Esto actualiza automáticamente la pantalla
}
</code></pre>
            </div>
        </div>

        <div class="diferencias">
            <h3>🔄 Svelte 4 vs Svelte 5</h3>
            <div class="comparacion">
                <div class="svelte4">
                    <h4>❌ Svelte 4 (Antiguo)</h4>
                    <code>&lt;button on:click={`{miFuncion}`}&gt;</code>
                </div>
                <div class="svelte5">
                    <h4>✅ Svelte 5 (Nuevo)</h4>
                    <code>&lt;button onclick={`{miFuncion}`}&gt;</code>
                </div>
            </div>
        </div>
    </section>

    <!-- ✅ SOLUCIÓN -->
    <details class="solucion">
        <summary>🔍 Ver Solución (solo después de intentar)</summary>
        <div class="codigo-solucion">
            <h3>✅ Función de Ejemplo Personalizada:</h3>
            <pre><code>function miFuncionPersonalizada() &#123;
    const emojis = ['🎉', '🚀', '⭐', '🎯', '🔥'];
    const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
    mensaje = `¡Botón personalizado! &#36;&#123;emojiAleatorio&#125;`;
    vecesClickeado = vecesClickeado * 2; // Duplica el contador
&#125;</code></pre>

            <h3>✅ Botón Correspondiente:</h3>
            <pre><code>&lt;button onclick=&#123;miFuncionPersonalizada&#125; class="btn btn-custom"&gt;
    🚀 Mi Botón Especial
&lt;/button&gt;</code></pre>
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
    /* Variables CSS */
    .contenedor {
        --color-primario: #10b981;
        --color-secundario: #6b7280;
        --color-success: #059669;
        --color-warning: #f59e0b;
        --color-special: #8b5cf6;
        --color-custom: #ef4444;
        --color-fondo: #f0f9ff;
        --color-tarjeta: #ffffff;
        --color-texto: #1f2937;
        --color-borde: #e5e7eb;
        --sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        --radio: 0.75rem;
        --transicion: all 0.3s ease;
    }

    /* Layout base */
    .contenedor {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
        font-family: 'Inter', system-ui, sans-serif;
        line-height: 1.6;
        color: var(--color-texto);
        transition: var(--transicion);
        min-height: 100vh;
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

    .objetivos, .sintaxis {
        margin-bottom: 1.5rem;
    }

    .objetivos h2, .sintaxis h2 {
        color: var(--color-texto);
        margin-bottom: 0.75rem;
        font-size: 1.25rem;
    }

    .objetivos code, .sintaxis code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-family: 'Monaco', monospace;
        font-size: 0.875rem;
    }

    /* Sintaxis ejemplos */
    .sintaxis-ejemplos {
        display: grid;
        gap: 0.75rem;
    }

    .ejemplo {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem;
        background: #f8fafc;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .ejemplo code {
        background: #1f2937 !important;
        color: #e5e7eb !important;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-family: 'Monaco', monospace;
        min-width: 200px;
    }

    .ejemplo span {
        color: var(--color-secundario);
        font-size: 0.9rem;
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

    /* Pantalla de resultado */
    .pantalla-resultado {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 2rem;
        border-radius: var(--radio);
        text-align: center;
        margin-bottom: 2rem;
        box-shadow: var(--sombra);
    }

    .mensaje-principal {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
    }

    .contador {
        font-size: 1.1rem;
        opacity: 0.9;
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

    /* Botones */
    .botones-grupo {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin: 1rem 0;
    }

    .btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: var(--radio);
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
        transition: var(--transicion);
        color: white;
    }

    .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.2);
    }

    .btn-primario { background: var(--color-primario); }
    .btn-secundario { background: var(--color-secundario); }
    .btn-success { background: var(--color-success); }
    .btn-warning { background: var(--color-warning); }
    .btn-special { background: var(--color-special); }
    .btn-custom { background: var(--color-custom); }

    .btn-primario:hover { background: #059669; }
    .btn-secundario:hover { background: #374151; }
    .btn-success:hover { background: #047857; }
    .btn-warning:hover { background: #d97706; }
    .btn-special:hover { background: #7c3aed; }
    .btn-custom:hover { background: #dc2626; }

    /* Área experimental */
    .area-experimental {
        background: white;
        border: 2px dashed var(--color-primario);
        border-radius: var(--radio);
        padding: 2rem;
        margin: 1rem 0;
        text-align: center;
    }

    .placeholder {
        color: var(--color-secundario);
        font-style: italic;
        padding: 1rem;
    }

    /* Ideas */
    .ideas {
        background: #eff6ff;
        border: 1px solid #3b82f6;
        border-radius: 0.5rem;
        padding: 1rem;
        margin: 1rem 0;
    }

    .ideas h4 {
        margin: 0 0 0.75rem 0;
        color: #3b82f6;
    }

    .ideas ul {
        margin: 0;
        padding-left: 1.5rem;
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

    /* Flujo de evento */
    .flujo-evento {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 1.5rem 0;
        flex-wrap: wrap;
    }

    .paso {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .numero {
        width: 2rem;
        height: 2rem;
        background: #3b82f6;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    .texto {
        font-size: 0.875rem;
        color: var(--color-secundario);
        max-width: 100px;
    }

    .flecha {
        font-size: 1.5rem;
        color: #3b82f6;
        font-weight: 700;
    }

    /* Código ejemplo */
    .codigo-ejemplo {
        background: #1f2937;
        border-radius: 0.5rem;
        overflow: hidden;
        margin: 1rem 0;
    }

    .codigo-ejemplo h4 {
        background: #374151;
        color: #e5e7eb;
        margin: 0;
        padding: 0.75rem 1rem;
        font-size: 0.875rem;
    }

    .codigo-ejemplo pre {
        margin: 0;
        padding: 1rem;
        color: #e5e7eb;
        font-size: 0.875rem;
    }

    /* Comparación Svelte 4 vs 5 */
    .diferencias {
        margin-top: 1.5rem;
    }

    .comparacion {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 1rem 0;
    }

    .svelte4, .svelte5 {
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
    }

    .svelte4 {
        background: #fef2f2;
        border: 1px solid #ef4444;
    }

    .svelte5 {
        background: #f0fdf4;
        border: 1px solid #10b981;
    }

    .svelte4 h4 {
        color: #ef4444;
        margin: 0 0 0.5rem 0;
    }

    .svelte5 h4 {
        color: #10b981;
        margin: 0 0 0.5rem 0;
    }

    .svelte4 code, .svelte5 code {
        background: #1f2937 !important;
        color: #e5e7eb !important;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-family: 'Monaco', monospace;
        font-size: 0.875rem;
        display: block;
    }

    /* Pista */
    .pista {
        background: #fef3c7;
        border: 1px solid #f59e0b;
        border-radius: 0.5rem;
        padding: 0.75rem;
        font-size: 0.9rem;
        color: #92400e;
        margin-top: 1rem;
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
        margin: 0.5rem 0;
    }

    /* Navegación */
    .navegacion {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .btn-nav {
        padding: 0.75rem 1.5rem;
        border-radius: var(--radio);
        text-decoration: none;
        font-weight: 600;
        transition: var(--transicion);
        border: 2px solid transparent;
    }

    .btn-nav.btn-primario {
        background: var(--color-primario);
        color: white;
    }

    .btn-nav.btn-primario:hover {
        background: #059669;
        transform: translateY(-2px);
    }

    .btn-nav.btn-secundario {
        background: transparent;
        color: var(--color-secundario);
        border-color: var(--color-borde);
    }

    .btn-nav.btn-secundario:hover {
        border-color: var(--color-secundario);
        color: var(--color-texto);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .contenedor {
            padding: 1rem;
        }

        .instrucciones, .area-trabajo, .teoria {
            padding: 1.5rem;
        }

        .botones-grupo {
            flex-direction: column;
        }

        .btn {
            width: 100%;
        }

        .flujo-evento {
            flex-direction: column;
        }

        .flecha {
            transform: rotate(90deg);
        }

        .comparacion {
            grid-template-columns: 1fr;
        }

        .ejemplo {
            flex-direction: column;
            text-align: center;
        }

        .ejemplo code {
            min-width: auto;
        }

        .navegacion {
            flex-direction: column;
        }
    }
</style>