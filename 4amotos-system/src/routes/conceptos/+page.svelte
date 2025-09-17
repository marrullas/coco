<!--
╔═══════════════════════════════════════════════════════════════════════════════════════╗
║                      🎯 ANATOMÍA DE UNA PÁGINA SVELTE                                 ║
║                    Ejemplo Didáctico para Aprendices                                  ║
╠═══════════════════════════════════════════════════════════════════════════════════════╣
║ Este archivo demuestra las tres secciones principales de un componente Svelte:        ║
║ 1. <script> - Lógica de JavaScript/TypeScript                                        ║
║ 2. HTML - Estructura y contenido                                                     ║
║ 3. <style> - Estilos CSS                                                             ║
╚═══════════════════════════════════════════════════════════════════════════════════════╝
-->

<!-- ========================================================================== -->
<!--                            SECCIÓN 1: SCRIPT                              -->
<!-- ========================================================================== -->
<script lang="ts">
    // 🚀 ESTADO REACTIVO CON SVELTE 5 RUNES
    // $state() crea variables reactivas que se actualizan automáticamente en la UI
    let nombreUsuario = $state<string>('Aprendiz de Svelte 5');
    let edad = $state<number>(25);
    let esEstudiante = $state<boolean>(true);
    let contador = $state<number>(0);

    // 📊 ARRAYS Y OBJETOS REACTIVOS CON $state()
    let materias = $state<string[]>(['JavaScript', 'SvelteKit 2', 'TypeScript', 'Svelte 5 Runes']);
    let perfil = $state({
        universidad: 'ADSO',
        semestre: 4,
        promedio: 4.2
    });

    // 🧮 VALORES DERIVADOS CON $derived() - Reemplazan $:
    // Se recalculan automáticamente cuando cambian las dependencias
    let saludo = $derived(`¡Hola ${nombreUsuario}!`);
    let descripcionEdad = $derived(edad >= 18 ? 'Adulto' : 'Menor de edad');
    let totalMaterias = $derived(materias.length);

    // 🎯 EFECTOS REACTIVOS CON $effect() - Reemplazan reactive statements
    // Este efecto se ejecuta cada vez que 'contador' cambia
    $effect(() => {
        if (contador >= 10) {
            alert('¡Has llegado a 10 clics! 🎉');
        }
    });

    // 🔧 FUNCIONES
    function incrementarContador(): void {
        contador++;
    }

    function agregarMateria(): void {
        const nuevaMateria = prompt('¿Qué materia quieres agregar?');
        if (nuevaMateria && nuevaMateria.trim()) {
            materias = [...materias, nuevaMateria.trim()];
        }
    }

    function cambiarNombre(): void {
        const nuevoNombre = prompt('¿Cuál es tu nombre?');
        if (nuevoNombre && nuevoNombre.trim()) {
            nombreUsuario = nuevoNombre.trim();
        }
    }

    // ⏰ LIFECYCLE CON $effect() - Se ejecuta cuando el componente se monta
    // En Svelte 5, $effect() con una dependencia vacía reemplaza onMount
    $effect(() => {
        console.log('🎨 Componente montado con Svelte 5 - Página cargada');
        console.log('🔥 Usando Runes: $state, $derived, $effect');
    });

    // 📝 EJEMPLO DE $props() PARA COMPONENTES QUE RECIBEN DATOS
    // (En este caso no tenemos props, pero mostramos la sintaxis)
    // let { data, form } = $props<{ data?: any, form?: any }>();
</script>

<!-- ========================================================================== -->
<!--                            SECCIÓN 2: HTML                                -->
<!-- ========================================================================== -->

<!-- 🎨 BINDING DE HEAD - Modifica el <head> del documento -->
<svelte:head>
    <title>Anatomía Svelte 5 - {nombreUsuario}</title>
    <meta name="description" content="Ejemplo didáctico de anatomía de página Svelte 5 con Runes" />
</svelte:head>

<!-- 📦 CONTENEDOR PRINCIPAL -->
<main class="contenedor">
    <!-- 🎯 TÍTULO PRINCIPAL -->
    <header class="encabezado">
        <h1>🎯 Anatomía de una Página Svelte 5</h1>
        <p class="subtitulo">Ejemplo interactivo con Runes - La nueva era de SvelteKit</p>
    </header>

    <!-- 👤 SECCIÓN DE PERFIL -->
    <section class="seccion-perfil">
        <h2>👤 Información del Usuario</h2>

        <!-- 🔄 INTERPOLACIÓN DE VARIABLES -->
        <div class="tarjeta">
            <p><strong>Saludo:</strong> {saludo}</p>
            <p><strong>Edad:</strong> {edad} años ({descripcionEdad})</p>
            <p><strong>¿Es estudiante?:</strong> {esEstudiante ? 'Sí' : 'No'}</p>
            <p><strong>Universidad:</strong> {perfil.universidad}</p>
            <p><strong>Semestre:</strong> {perfil.semestre}</p>
            <p><strong>Promedio:</strong> {perfil.promedio}</p>
        </div>

        <!-- 🎮 BOTONES INTERACTIVOS -->
        <div class="botones">
            <button onclick={cambiarNombre} class="boton boton-primario">
                🔄 Cambiar Nombre
            </button>
        </div>
    </section>

    <!-- 🔢 SECCIÓN DE CONTADOR -->
    <section class="seccion-contador">
        <h2>🔢 Contador Interactivo</h2>

        <div class="tarjeta">
            <!-- 🎨 CLASES CONDICIONALES -->
            <p class="contador-display" class:contador-alto={contador >= 5}>
                Contador: {contador}
            </p>

            <button onclick={incrementarContador} class="boton boton-contador">
                ➕ Incrementar ({contador})
            </button>

            <!-- 🔍 RENDERIZADO CONDICIONAL -->
            {#if contador > 0}
                <p class="mensaje-contador">¡Has hecho {contador} clic{contador !== 1 ? 's' : ''}!</p>
            {:else}
                <p class="mensaje-contador">Aún no has hecho clic 🖱️</p>
            {/if}
        </div>
    </section>

    <!-- 📚 SECCIÓN DE MATERIAS -->
    <section class="seccion-materias">
        <h2>📚 Materias ({totalMaterias})</h2>

        <div class="tarjeta">
            <!-- 🔄 ITERACIÓN CON EACH -->
            {#each materias as materia, indice}
                <div class="materia-item">
                    <span class="materia-numero">{indice + 1}.</span>
                    <span class="materia-nombre">{materia}</span>
                </div>
            {:else}
                <p>No hay materias registradas</p>
            {/each}

            <button onclick={agregarMateria} class="boton boton-secundario">
                ➕ Agregar Materia
            </button>
        </div>
    </section>

    <!-- 📝 SECCIÓN DE FORMULARIO -->
    <section class="seccion-formulario">
        <h2>📝 Formulario con Binding</h2>

        <div class="tarjeta">
            <!-- 🔗 TWO-WAY DATA BINDING -->
            <div class="campo">
                <label for="nombre">Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    bind:value={nombreUsuario}
                    placeholder="Escribe tu nombre"
                    class="input"
                />
            </div>

            <div class="campo">
                <label for="edad">Edad:</label>
                <input
                    id="edad"
                    type="number"
                    bind:value={edad}
                    min="0"
                    max="120"
                    class="input"
                />
            </div>

            <div class="campo">
                <label class="checkbox-label">
                    <input
                        type="checkbox"
                        bind:checked={esEstudiante}
                        class="checkbox"
                    />
                    ¿Eres estudiante?
                </label>
            </div>
        </div>
    </section>

    <!-- 🎨 SECCIÓN DE CONCEPTOS CLAVE DE SVELTE 5 -->
    <section class="seccion-conceptos">
        <h2>🎨 Conceptos Clave de Svelte 5</h2>

        <div class="conceptos-grid">
            <div class="concepto-tarjeta svelte5">
                <h3>🔥 $state() - Estado Reactivo</h3>
                <p>Reemplaza <code>let variable</code>. Usa <code>$state(valor)</code> para variables reactivas</p>
            </div>

            <div class="concepto-tarjeta svelte5">
                <h3>🧮 $derived() - Valores Derivados</h3>
                <p>Reemplaza <code>$:</code>. Usa <code>$derived(expresión)</code> para cálculos automáticos</p>
            </div>

            <div class="concepto-tarjeta svelte5">
                <h3>🔄 $effect() - Efectos Reactivos</h3>
                <p>Reemplaza reactive statements. Ejecuta código cuando dependencias cambian</p>
            </div>

            <div class="concepto-tarjeta svelte5">
                <h3>📦 $props() - Propiedades</h3>
                <p>Reemplaza <code>export let</code>. Recibe datos de componentes padre</p>
            </div>

            <div class="concepto-tarjeta">
                <h3>🎭 Event Handlers</h3>
                <p><code>onclick</code>, <code>bind:value</code>, <code>class:</code> controlan el comportamiento</p>
            </div>

            <div class="concepto-tarjeta">
                <h3>🔍 Condicionales</h3>
                <p><code>&lbrace;#if&rbrace;</code>, <code>&lbrace;:else&rbrace;</code>, <code>&lbrace;/if&rbrace;</code> para renderizado condicional</p>
            </div>

            <div class="concepto-tarjeta">
                <h3>🔄 Bucles</h3>
                <p><code>&lbrace;#each&rbrace;</code> para iterar sobre arrays</p>
            </div>

            <div class="concepto-tarjeta">
                <h3>🔗 Binding</h3>
                <p><code>bind:value</code> para enlace bidireccional de datos</p>
            </div>

            <div class="concepto-tarjeta legacy">
                <h3>📚 Migración Svelte 4→5</h3>
                <p><code>let</code> → <code>$state()</code><br>
                <code>$:</code> → <code>$derived()</code><br>
                <code>export let</code> → <code>$props()</code></p>
            </div>
        </div>
    </section>
</main>

<!-- ========================================================================== -->
<!--                            SECCIÓN 3: STYLES                              -->
<!-- ========================================================================== -->
<style>
    /* 🎨 ESTILOS GLOBALES DEL COMPONENTE */

    /* Variables CSS para consistencia */
    .contenedor {
        --color-primario: #4f46e5;
        --color-secundario: #059669;
        --color-acento: #dc2626;
        --color-fondo: #f8fafc;
        --color-tarjeta: #ffffff;
        --color-texto: #1f2937;
        --color-texto-suave: #6b7280;
        --radio-borde: 0.5rem;
        --sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        --transicion: all 0.3s ease;
    }

    /* 📦 LAYOUT PRINCIPAL */
    .contenedor {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        background-color: var(--color-fondo);
        color: var(--color-texto);
        line-height: 1.6;
    }

    /* 🎯 ENCABEZADO */
    .encabezado {
        text-align: center;
        margin-bottom: 3rem;
    }

    .encabezado h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--color-primario);
        margin-bottom: 0.5rem;
    }

    .subtitulo {
        font-size: 1.125rem;
        color: var(--color-texto-suave);
        margin: 0;
    }

    /* 📋 SECCIONES */
    section {
        margin-bottom: 2.5rem;
    }

    section h2 {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--color-texto);
        margin-bottom: 1rem;
    }

    /* 🎴 TARJETAS */
    .tarjeta {
        background-color: var(--color-tarjeta);
        border-radius: var(--radio-borde);
        padding: 1.5rem;
        box-shadow: var(--sombra);
        border: 1px solid #e5e7eb;
    }

    /* 🎮 BOTONES */
    .boton {
        padding: 0.75rem 1.5rem;
        border-radius: var(--radio-borde);
        border: none;
        font-weight: 600;
        cursor: pointer;
        transition: var(--transicion);
        font-size: 0.875rem;
        margin: 0.25rem;
    }

    .boton-primario {
        background-color: var(--color-primario);
        color: white;
    }

    .boton-primario:hover {
        background-color: #3730a3;
        transform: translateY(-1px);
    }

    .boton-secundario {
        background-color: var(--color-secundario);
        color: white;
    }

    .boton-secundario:hover {
        background-color: #047857;
        transform: translateY(-1px);
    }

    .boton-contador {
        background-color: var(--color-acento);
        color: white;
        font-size: 1rem;
        padding: 1rem 2rem;
    }

    .boton-contador:hover {
        background-color: #b91c1c;
        transform: scale(1.05);
    }

    /* 🔢 CONTADOR */
    .contador-display {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;
        margin: 1rem 0;
        transition: var(--transicion);
    }

    .contador-alto {
        color: var(--color-acento);
        animation: pulso 1s infinite;
    }

    @keyframes pulso {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }

    .mensaje-contador {
        text-align: center;
        font-style: italic;
        color: var(--color-texto-suave);
        margin-top: 1rem;
    }

    /* 📚 MATERIAS */
    .materia-item {
        display: flex;
        align-items: center;
        padding: 0.75rem;
        margin: 0.5rem 0;
        background-color: #f3f4f6;
        border-radius: 0.375rem;
        transition: var(--transicion);
    }

    .materia-item:hover {
        background-color: #e5e7eb;
        transform: translateX(4px);
    }

    .materia-numero {
        font-weight: 600;
        color: var(--color-primario);
        margin-right: 0.75rem;
        min-width: 1.5rem;
    }

    .materia-nombre {
        flex: 1;
    }

    /* 📝 FORMULARIOS */
    .campo {
        margin-bottom: 1rem;
    }

    .campo label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--color-texto);
    }

    .input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #d1d5db;
        border-radius: var(--radio-borde);
        font-size: 1rem;
        transition: var(--transicion);
        box-sizing: border-box;
    }

    .input:focus {
        outline: none;
        border-color: var(--color-primario);
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }

    .checkbox-label {
        display: flex !important;
        align-items: center;
        cursor: pointer;
    }

    .checkbox {
        width: auto !important;
        margin-right: 0.5rem;
        transform: scale(1.2);
    }

    /* 🎨 CONCEPTOS GRID */
    .conceptos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-top: 1rem;
    }

    .concepto-tarjeta {
        background-color: var(--color-tarjeta);
        padding: 1.5rem;
        border-radius: var(--radio-borde);
        box-shadow: var(--sombra);
        border-left: 4px solid var(--color-primario);
        transition: var(--transicion);
    }

    .concepto-tarjeta:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.2);
    }

    .concepto-tarjeta h3 {
        margin: 0 0 0.75rem 0;
        color: var(--color-primario);
        font-size: 1.125rem;
    }

    .concepto-tarjeta p {
        margin: 0;
        color: var(--color-texto-suave);
        font-size: 0.875rem;
    }

    .concepto-tarjeta code {
        background-color: #f3f4f6;
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-family: 'Monaco', 'Menlo', monospace;
        color: var(--color-acento);
        font-size: 0.8rem;
    }

    /* 🔥 ESTILOS ESPECIALES PARA SVELTE 5 */
    .concepto-tarjeta.svelte5 {
        border-left-color: #ff4500;
        background: linear-gradient(135deg, #fff5f0 0%, #ffffff 100%);
    }

    .concepto-tarjeta.svelte5 h3 {
        color: #ff4500;
    }

    .concepto-tarjeta.legacy {
        border-left-color: #8b5cf6;
        background: linear-gradient(135deg, #f3f0ff 0%, #ffffff 100%);
    }

    .concepto-tarjeta.legacy h3 {
        color: #8b5cf6;
    }

    /* 📱 RESPONSIVE */
    @media (max-width: 768px) {
        .contenedor {
            padding: 1rem;
        }

        .encabezado h1 {
            font-size: 2rem;
        }

        .conceptos-grid {
            grid-template-columns: 1fr;
        }

        .botones {
            text-align: center;
        }

        .boton {
            display: block;
            width: 100%;
            margin: 0.5rem 0;
        }
    }
</style>