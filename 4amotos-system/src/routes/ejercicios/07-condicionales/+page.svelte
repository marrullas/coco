<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                          📝 EJERCICIO #07: CONDICIONALES                            ║
║                                🟡 NIVEL 2: INTERACCIÓN                              ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Aprender a usar &#123;#if&#125; para mostrar/ocultar contenido                      ║
║ CONCEPTOS: &#123;#if&#125;, &#123;:else if&#125;, &#123;:else&#125;, renderizado condicional                      ║
║ TIEMPO ESTIMADO: 25 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Lee todas las instrucciones antes de empezar
    // 2. Completa cada tarea en orden
    // 3. Observa cómo el contenido aparece y desaparece según las condiciones

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - &#123;#if&#125; para renderizado condicional
    // - &#123;:else if&#125; para múltiples condiciones
    // - &#123;:else&#125; para caso por defecto
    // - Controlar qué se muestra en la pantalla

    // ✏️ TAREA 1: Variables para controlar las condiciones
    // Ejemplo ya creado para ti:
    let mostrarSaludo = $state<boolean>(true);

    // TODO: Crea las siguientes variables usando $state():
    // - edad: número (ejemplo: 20)
    // - tieneLicencia: boolean (ejemplo: false)
    // - puntuacion: número (ejemplo: 85)
    // - estaLogueado: boolean (ejemplo: false)

    // ✏️ ESCRIBE AQUÍ TUS VARIABLES:
    // let edad = $state<number>(...);
    // let tieneLicencia = $state<boolean>(...);
    // let puntuacion = $state<number>(...);
    // let estaLogueado = $state<boolean>(...);

    // ✅ VARIABLES DE EJEMPLO (no las cambies hasta completar el ejercicio)
    let ejemploNumero = $state<number>(50);
    let ejemploBoolean = $state<boolean>(true);

    // 🧭 Navegación dinámica
    import { page } from '$app/state';
    import { obtenerNavegacionEjercicio } from '$lib/utils/navigation.js';

    const navegacion = $derived(obtenerNavegacionEjercicio(page.url.pathname, { id: '07', titulo: 'condicionales' }));
</script>

<svelte:head>
    <title>Ejercicio 07: Condicionales - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📝 Ejercicio #07: Condicionales</h1>
        <div class="nivel">🟡 NIVEL 2: INTERACCIÓN</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Usar <code>&#123;#if&#125;</code> para mostrar contenido condicionalmente</li>
                <li>Implementar <code>&#123;:else if&#125;</code> para múltiples condiciones</li>
                <li>Usar <code>&#123;:else&#125;</code> como caso por defecto</li>
                <li>Crear interfaces dinámicas que respondan a cambios</li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Nuevos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>&#123;#if&#125;</strong>
                    <span>Si la condición es verdadera</span>
                </div>
                <div class="concepto">
                    <strong>&#123;:else if&#125;</strong>
                    <span>Si otra condición es verdadera</span>
                </div>
                <div class="concepto">
                    <strong>&#123;:else&#125;</strong>
                    <span>Si ninguna condición es verdadera</span>
                </div>
                <div class="concepto">
                    <strong>Renderizado</strong>
                    <span>Controlar qué se muestra</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <div class="tarea">
            <h3>📝 Tarea 1: Condicionales Básicos (Funcionando)</h3>
            <p><strong>Instrucción:</strong> Experimenta cambiando los valores para ver cómo funciona</p>

            <div class="controles">
                <label>
                    <input type="checkbox" bind:checked={ejemploBoolean} />
                    Mostrar mensaje (ejemploBoolean: {ejemploBoolean})
                </label>
                <label>
                    <input type="range" bind:value={ejemploNumero} min="0" max="100" />
                    Número: {ejemploNumero}
                </label>
            </div>

            <div class="resultado-ejemplos">
                <h4>🔍 Resultado del Condicional Simple:</h4>
                {#if ejemploBoolean}
                    <div class="mensaje exito">
                        ✅ ¡El mensaje está visible porque ejemploBoolean es true!
                    </div>
                {:else}
                    <div class="mensaje info">
                        ❌ El mensaje está oculto porque ejemploBoolean es false
                    </div>
                {/if}

                <h4>🔍 Resultado del Condicional Múltiple:</h4>
                {#if ejemploNumero >= 80}
                    <div class="mensaje excelente">🏆 ¡Excelente! Puntuación: {ejemploNumero}</div>
                {:else if ejemploNumero >= 60}
                    <div class="mensaje bueno">👍 ¡Bien! Puntuación: {ejemploNumero}</div>
                {:else if ejemploNumero >= 40}
                    <div class="mensaje regular">👌 Regular. Puntuación: {ejemploNumero}</div>
                {:else}
                    <div class="mensaje malo">👎 Necesitas mejorar. Puntuación: {ejemploNumero}</div>
                {/if}
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Solo se muestra UN bloque de cada condicional, dependiendo de la condición
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Tu Sistema de Permisos</h3>
            <p><strong>Instrucción:</strong> Crea las variables y descomenta el sistema</p>

            <div class="controles-personales">
                <!-- ✏️ DESCOMENTA ESTOS CONTROLES CUANDO HAYAS CREADO LAS VARIABLES -->
                <!--
                <div class="control-group">
                    <label>
                        Edad:
                        <input type="number" bind:value={edad} min="0" max="100" />
                    </label>
                    <span class="valor-actual">Actual: {edad} años</span>
                </div>

                <div class="control-group">
                    <label>
                        <input type="checkbox" bind:checked={tieneLicencia} />
                        Tiene licencia de conducir
                    </label>
                </div>

                <div class="control-group">
                    <label>
                        Puntuación del examen:
                        <input type="range" bind:value={puntuacion} min="0" max="100" />
                    </label>
                    <span class="valor-actual">{puntuacion} puntos</span>
                </div>

                <div class="control-group">
                    <label>
                        <input type="checkbox" bind:checked={estaLogueado} />
                        Usuario logueado
                    </label>
                </div>
                -->

                <div class="placeholder">
                    🎛️ Aquí aparecerán los controles cuando crees las variables
                </div>
            </div>

            <div class="sistema-permisos">
                <!-- ✏️ DESCOMENTA ESTE SISTEMA CUANDO HAYAS CREADO LAS VARIABLES -->
                <!--
                <h4>🚗 Sistema de Permisos para Conducir:</h4>
                {#if edad >= 18 && tieneLicencia}
                    <div class="mensaje exito">
                        ✅ ¡Puedes conducir! Tienes {edad} años y licencia válida.
                    </div>
                {:else if edad >= 18}
                    <div class="mensaje advertencia">
                        ⚠️ Tienes la edad suficiente ({edad} años) pero necesitas sacar la licencia.
                    </div>
                {:else}
                    <div class="mensaje error">
                        ❌ No puedes conducir. Necesitas ser mayor de 18 años (tienes {edad}).
                    </div>
                {/if}

                <h4>📊 Sistema de Calificaciones:</h4>
                {#if puntuacion >= 90}
                    <div class="mensaje excelente">🏆 ¡SOBRESALIENTE! ({puntuacion} puntos)</div>
                {:else if puntuacion >= 80}
                    <div class="mensaje muy-bueno">🥇 ¡MUY BUENO! ({puntuacion} puntos)</div>
                {:else if puntuacion >= 70}
                    <div class="mensaje bueno">👍 ¡BUENO! ({puntuacion} puntos)</div>
                {:else if puntuacion >= 60}
                    <div class="mensaje suficiente">👌 SUFICIENTE ({puntuacion} puntos)</div>
                {:else}
                    <div class="mensaje insuficiente">👎 INSUFICIENTE ({puntuacion} puntos)</div>
                {/if}

                <h4>🔐 Sistema de Acceso:</h4>
                {#if estaLogueado}
                    <div class="mensaje exito">
                        🎉 ¡Bienvenido! Acceso concedido.
                        <button onclick={() => estaLogueado = false}>Cerrar Sesión</button>
                    </div>
                {:else}
                    <div class="mensaje info">
                        🔒 Debes iniciar sesión para acceder.
                        <button onclick={() => estaLogueado = true}>Iniciar Sesión</button>
                    </div>
                {/if}
                -->

                <div class="placeholder">
                    🛡️ Aquí aparecerá el sistema de permisos cuando descomentes el código
                </div>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Los condicionales usan <code>&#123;#if condicion&#125;</code>, <code>&#123;:else if otraCondicion&#125;</code>, <code>&#123;:else&#125;</code>, <code>&#123;/if&#125;</code>
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Experimenta con Lógica</h3>
            <p><strong>Instrucción:</strong> Cambia los valores y observa cómo cambian los mensajes</p>

            <div class="experimento">
                <p>🧪 <strong>Experimenta con:</strong></p>
                <ul>
                    <li>Cambiar la edad a diferentes valores (menor de 18, mayor de 18)</li>
                    <li>Activar/desactivar la licencia de conducir</li>
                    <li>Mover la puntuación para ver diferentes calificaciones</li>
                    <li>Hacer login/logout para ver el sistema de acceso</li>
                    <li>Combinar diferentes condiciones (edad + licencia)</li>
                </ul>
            </div>

            <div class="pista">
                💡 <strong>Magia:</strong> Los condicionales evalúan las expresiones en orden y muestran solo el primer caso verdadero
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Qué Acabas de Aprender?</h2>

        <div class="concepto-teoria">
            <h3>🔀 Bloques Condicionales en Svelte 5</h3>
            <p>
                Los bloques <code>&#123;#if&#125;</code> te permiten mostrar u ocultar contenido basado en condiciones.
                Es como tener un "interruptor inteligente" en tu HTML.
            </p>

            <div class="codigo-ejemplo">
                <pre><code>// ✅ Condicional básico
&#123;#if usuario.estaLogueado&#125;
    &lt;p&gt;¡Bienvenido &#123;usuario.nombre&#125;!&lt;/p&gt;
&#123;:else&#125;
    &lt;p&gt;Por favor, inicia sesión&lt;/p&gt;
&#123;/if&#125;</code></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🎯 Tipos de Condicionales</h3>
            <div class="tipos-grid">
                <div class="tipo">
                    <strong>&#123;#if&#125;</strong>
                    <code>&#123;#if condicion&#125;...&#123;/if&#125;</code>
                    <span>Solo una condición</span>
                </div>
                <div class="tipo">
                    <strong>if-else</strong>
                    <code>&#123;#if&#125;...&#123;:else&#125;...&#123;/if&#125;</code>
                    <span>Verdadero o falso</span>
                </div>
                <div class="tipo">
                    <strong>if-else if</strong>
                    <code>&#123;#if&#125;...&#123;:else if&#125;...&#123;/if&#125;</code>
                    <span>Múltiples condiciones</span>
                </div>
                <div class="tipo">
                    <strong>Completo</strong>
                    <code>&#123;#if&#125;...&#123;:else if&#125;...&#123;:else&#125;...&#123;/if&#125;</code>
                    <span>Todas las opciones</span>
                </div>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🧠 Operadores Lógicos</h3>
            <div class="operadores">
                <div class="operador">
                    <strong>&&</strong> (Y) - Ambas condiciones deben ser verdaderas
                    <code>edad >= 18 && tieneLicencia</code>
                </div>
                <div class="operador">
                    <strong>||</strong> (O) - Al menos una condición debe ser verdadera
                    <code>esAdmin || esProfesor</code>
                </div>
                <div class="operador">
                    <strong>!</strong> (NO) - Invierte el valor
                    <code>!estaLogueado</code>
                </div>
            </div>
        </div>
    </section>

    <!-- ✅ SOLUCIÓN -->
    <details class="solucion">
        <summary>🔍 Ver Solución (solo después de intentar)</summary>
        <div class="codigo-solucion">
            <h3>✅ Código Completo:</h3>
            <pre><code>// Variables para el sistema
let edad = $state&lt;number&gt;(20);
let tieneLicencia = $state&lt;boolean&gt;(false);
let puntuacion = $state&lt;number&gt;(85);
let estaLogueado = $state&lt;boolean&gt;(false);</code></pre>
            <p><strong>📝 Luego descomenta:</strong> Los controles y sistemas para ver todo funcionando.</p>
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
        --color-exito: #10b981;
        --color-advertencia: #f59e0b;
        --color-error: #ef4444;
        --color-info: #3b82f6;
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

    /* Reutilizar estilos base */
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
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
        font-size: 0.9rem;
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

    /* Controles específicos para condicionales */
    .controles, .controles-personales {
        margin: 1rem 0;
        padding: 1rem;
        background: #f8fafc;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .controles label {
        display: block;
        margin-bottom: 1rem;
        font-weight: 600;
        color: var(--color-texto);
    }

    .controles input[type="range"] {
        width: 100%;
        margin: 0.5rem 0;
    }

    .controles input[type="checkbox"] {
        margin-right: 0.5rem;
    }

    .control-group {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .control-group label {
        font-weight: 600;
        color: var(--color-texto);
        margin-bottom: 0;
    }

    .control-group input[type="number"] {
        padding: 0.5rem;
        border: 2px solid var(--color-borde);
        border-radius: 0.25rem;
        width: 80px;
    }

    .control-group input[type="range"] {
        flex: 1;
        min-width: 150px;
    }

    .valor-actual {
        font-size: 0.875rem;
        color: var(--color-primario);
        font-weight: 600;
        font-family: "Monaco", monospace;
        background: #fef3c7;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
    }

    /* Resultados y mensajes */
    .resultado-ejemplos, .sistema-permisos {
        margin: 1rem 0;
        padding: 1rem;
        background: #f0f9ff;
        border-radius: 0.5rem;
        border: 1px solid #0ea5e9;
    }

    .resultado-ejemplos h4, .sistema-permisos h4 {
        margin: 0 0 1rem 0;
        color: #0ea5e9;
        font-size: 1rem;
    }

    .mensaje {
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 0.5rem 0;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .mensaje.exito {
        background: #d1fae5;
        color: #065f46;
        border: 1px solid #10b981;
    }

    .mensaje.info {
        background: #dbeafe;
        color: #1e40af;
        border: 1px solid #3b82f6;
    }

    .mensaje.advertencia {
        background: #fef3c7;
        color: #92400e;
        border: 1px solid #f59e0b;
    }

    .mensaje.error {
        background: #fee2e2;
        color: #991b1b;
        border: 1px solid #ef4444;
    }

    .mensaje.excelente {
        background: #ecfdf5;
        color: #14532d;
        border: 1px solid #10b981;
    }

    .mensaje.muy-bueno {
        background: #f0fdf4;
        color: #166534;
        border: 1px solid #22c55e;
    }

    .mensaje.bueno {
        background: #f0f9ff;
        color: #1e40af;
        border: 1px solid #3b82f6;
    }

    .mensaje.suficiente {
        background: #fefce8;
        color: #a16207;
        border: 1px solid #eab308;
    }

    .mensaje.insuficiente {
        background: #fef2f2;
        color: #991b1b;
        border: 1px solid #ef4444;
    }

    .mensaje.regular {
        background: #fff7ed;
        color: #9a3412;
        border: 1px solid #f97316;
    }

    .mensaje.malo {
        background: #fef2f2;
        color: #991b1b;
        border: 1px solid #ef4444;
    }

    .mensaje button {
        background: var(--color-primario);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .mensaje button:hover {
        background: #d97706;
        transform: translateY(-1px);
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
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .tipo {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .tipo strong {
        display: block;
        color: #3b82f6;
        margin-bottom: 0.5rem;
        font-family: "Monaco", monospace;
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

    .operadores {
        margin-top: 1rem;
    }

    .operador {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 0.75rem;
        border-left: 4px solid #3b82f6;
    }

    .operador strong {
        color: #3b82f6;
        font-family: "Monaco", monospace;
    }

    .operador code {
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
        margin-left: 0.5rem;
    }

    /* Pista, solución y navegación */
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

        .control-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }

        .control-group input[type="range"] {
            width: 100%;
            min-width: auto;
        }

        .mensaje {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>