<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                           📝 EJERCICIO #03: INTERPOLACIÓN                           ║
║                                 🟢 NIVEL 1: BÁSICO                                  ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Aprender a mostrar variables en HTML usando interpolación {}              ║
║ CONCEPTOS: Interpolación, expresiones, concatenación                                ║
║ TIEMPO ESTIMADO: 25 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Completa las variables que faltan
    // 2. Aprende a usar {} para mostrar variables en HTML
    // 3. Experimenta con diferentes tipos de expresiones

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - Interpolación con {} para mostrar variables
    // - Expresiones simples dentro de {}
    // - Concatenación de texto y variables

    // ✏️ VARIABLES PARA EL EJERCICIO
    let nombre = $state<string>("Ana");
    let apellido = $state<string>("García");
    let edad = $state<number>(20);
    let esEstudiante = $state<boolean>(true);

    // TODO: Crea estas variables adicionales:
    let universidad = $state<string>("SENA");
    let semestre = $state<number>(4);
    let promedio = $state<number>(4.2);

    // ✏️ ESCRIBE AQUÍ MÁS VARIABLES PARA EXPERIMENTAR:
    // let ciudad = $state<string>('...');
    // let telefono = $state<string>('...');
    
    // 🧭 Navegación dinámica
    import { page } from '$app/state';
    import { obtenerNavegacionEjercicio } from '$lib/utils/navigation.js';

    const navegacion = $derived(obtenerNavegacionEjercicio(page.url.pathname, { id: '03', titulo: 'interpolacion' }));
</script>

<svelte:head>
    <title>Ejercicio 03: Interpolación - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📝 Ejercicio #03: Interpolación</h1>
        <div class="nivel">🟢 NIVEL 1: BÁSICO</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>
                    Usar <code>&lbrace;&rbrace;</code> para mostrar variables en
                    HTML
                </li>
                <li>Combinar texto y variables</li>
                <li>
                    Hacer operaciones simples dentro de <code
                        >&lbrace;&rbrace;</code
                    >
                </li>
                <li>Entender qué se puede y no se puede interpolar</li>
            </ul>
        </div>

        <div class="sintaxis">
            <h2>📝 Sintaxis Básica</h2>
            <div class="sintaxis-ejemplos">
                <div class="ejemplo">
                    <code>{`{variable}`}</code>
                    <span>Muestra el valor de la variable</span>
                </div>
                <div class="ejemplo">
                    <code>{`{variable + 10}`}</code>
                    <span>Hace operaciones matemáticas</span>
                </div>
                <div class="ejemplo">
                    <code>{`{variable ? 'Sí' : 'No'}`}</code>
                    <span>Operador ternario</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <div class="tarea">
            <h3>📝 Tarea 1: Interpolación Básica</h3>
            <p>
                <strong>Instrucción:</strong> Observa cómo se muestran las variables
            </p>

            <div class="resultado">
                <h3>👤 Información Personal</h3>
                <div class="info-card">
                    <!-- ✅ EJEMPLOS QUE YA FUNCIONAN -->
                    <p><strong>Nombre:</strong> {nombre}</p>
                    <p><strong>Apellido:</strong> {apellido}</p>
                    <p><strong>Edad:</strong> {edad} años</p>
                    <p><strong>¿Es estudiante?:</strong> {esEstudiante}</p>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Cada variable se muestra usando
                <code>{`{nombreVariable}`}</code>
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Expresiones y Operaciones</h3>
            <p>
                <strong>Instrucción:</strong> Observa cómo hacer operaciones
                dentro de <code>&lbrace;&rbrace;</code>
            </p>

            <div class="resultado">
                <h3>🧮 Expresiones Calculadas</h3>
                <div class="info-card">
                    <p><strong>Nombre completo:</strong> {nombre} {apellido}</p>
                    <p><strong>Edad el próximo año:</strong> {edad + 1} años</p>
                    <p>
                        <strong>¿Es mayor de edad?:</strong>
                        {edad >= 18 ? "Sí" : "No"}
                    </p>
                    <p>
                        <strong>Estado:</strong>
                        {esEstudiante
                            ? "Estudiante Activo"
                            : "No es estudiante"}
                    </p>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Nota:</strong> Puedes hacer operaciones matemáticas y
                usar operadores ternarios
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Agrega Más Información</h3>
            <p>
                <strong>Instrucción:</strong> Completa la información universitaria
            </p>

            <div class="resultado">
                <h3>🎓 Información Académica</h3>
                <div class="info-card">
                    <!-- ✏️ COMPLETA ESTAS LÍNEAS -->
                    <p><strong>Universidad:</strong> {universidad}</p>
                    <p><strong>Semestre:</strong> {semestre}</p>
                    <p><strong>Promedio:</strong> {promedio}</p>

                    <!-- ✏️ AGREGA MÁS LÍNEAS AQUÍ -->
                    <!-- Ejemplo: <p><strong>Ciudad:</strong> {ciudad}</p> -->
                </div>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Agrega más variables en el script y úsalas
                aquí
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 4: Experimenta con Expresiones</h3>
            <p>
                <strong>Instrucción:</strong> Crea tus propias expresiones creativas
            </p>

            <div class="resultado">
                <h3>🎨 Tus Expresiones Creativas</h3>
                <div class="info-card experimental">
                    <!-- ✏️ EJEMPLOS PARA INSPIRARTE -->
                    <p>
                        📊 <strong>Porcentaje del semestre:</strong>
                        {(semestre / 6) * 100}%
                    </p>
                    <p>
                        🎯 <strong>Nota en letras:</strong>
                        {promedio >= 4.0
                            ? "Excelente"
                            : promedio >= 3.0
                              ? "Bueno"
                              : "Necesita mejorar"}
                    </p>

                    <!-- ✏️ AGREGA TUS PROPIAS EXPRESIONES AQUÍ -->
                    <!-- Ejemplos de lo que puedes hacer:
                    <p>🕐 <strong>Años hasta graduarse:</strong> {(6 - semestre) * 0.5} años</p>
                    <p>🌟 <strong>Mensaje motivacional:</strong> {promedio > 4.0 ? '¡Vas excelente!' : '¡Sigue así!'}</p>
                    -->
                </div>
            </div>

            <div class="experimento">
                <h4>🧪 Ideas para Experimentar:</h4>
                <ul>
                    <li>
                        Calcular años hasta graduarse: <code
                            >{`{(6 - semestre) * 0.5}`}</code
                        >
                    </li>
                    <li>Crear mensajes condicionales con el promedio</li>
                    <li>
                        Mostrar la inicial del nombre: <code
                            >{`{nombre[0]}`}</code
                        >
                    </li>
                    <li>Combinar múltiples variables en un solo mensaje</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Qué es la Interpolación?</h2>

        <div class="concepto-teoria">
            <h3>🔤 Interpolación de Texto</h3>
            <p>
                La interpolación es la forma de insertar valores de variables
                dentro del HTML. En Svelte, usamos las llaves <code
                    >&lbrace;&rbrace;</code
                > para esto.
            </p>

            <div class="comparacion">
                <div class="antes">
                    <h4>❌ Sin interpolación</h4>
                    <code>&lt;p&gt;Hola nombre, tienes edad años&lt;/p&gt;</code
                    >
                </div>
                <div class="despues">
                    <h4>✅ Con interpolación</h4>
                    <code
                        >&lt;p&gt;Hola {`{nombre}`}, tienes {`{edad}`} años&lt;/p&gt;</code
                    >
                </div>
            </div>
        </div>

        <div class="que-puedes-hacer">
            <h3>🎯 ¿Qué puedes poner dentro de {`{}`}?</h3>
            <div class="ejemplos-grid">
                <div class="ejemplo-teoria">
                    <strong>✅ Variables</strong>
                    <code>{`{nombre}`}</code>
                </div>
                <div class="ejemplo-teoria">
                    <strong>✅ Operaciones</strong>
                    <code>{`{edad + 1}`}</code>
                </div>
                <div class="ejemplo-teoria">
                    <strong>✅ Ternarios</strong>
                    <code>{`{edad >= 18 ? 'Adulto' : 'Menor'}`}</code>
                </div>
                <div class="ejemplo-teoria">
                    <strong>✅ Métodos</strong>
                    <code>{`{nombre.toUpperCase()}`}</code>
                </div>
                <div class="ejemplo-teoria">
                    <strong>❌ Estructuras de control</strong>
                    <code>{`{if (condición) ...}`}</code>
                </div>
                <div class="ejemplo-teoria">
                    <strong>❌ Declaraciones</strong>
                    <code>{`{let x = 5}`}</code>
                </div>
            </div>
        </div>
    </section>

    <!-- ✅ SOLUCIÓN -->
    <details class="solucion">
        <summary>🔍 Ver Solución (solo después de intentar)</summary>
        <div class="codigo-solucion">
            <h3>✅ Ejemplos de Expresiones Creativas:</h3>
            <pre><code
                    >&lt;p&gt;🎯 &lt;strong&gt;Progreso:&lt;/strong&gt; {(semestre /
                        6) *
                        100}% completado&lt;/p&gt;
&lt;p&gt;🌟 &lt;strong&gt;Estado académico:&lt;/strong&gt; {promedio >= 4.0
                        ? "¡Excelente!"
                        : "Continúa así"}&lt;/p&gt;
&lt;p&gt;📅 &lt;strong&gt;Tiempo restante:&lt;/strong&gt; {6 -
                        semestre} semestres&lt;/p&gt;
&lt;p&gt;👤 &lt;strong&gt;Inicial:&lt;/strong&gt; {nombre[0]}.{apellido[0]}.&lt;/p&gt;</code
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
    /* Variables CSS reutilizadas */
    .contenedor {
        --color-primario: #10b981;
        --color-secundario: #6b7280;
        --color-fondo: #f0f9ff;
        --color-tarjeta: #ffffff;
        --color-texto: #1f2937;
        --color-borde: #e5e7eb;
        --sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        --radio: 0.75rem;
        --color-accent: #3b82f6;
    }

    /* Layout base */
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
    .sintaxis {
        margin-bottom: 1.5rem;
    }

    .objetivos h2,
    .sintaxis h2 {
        color: var(--color-texto);
        margin-bottom: 0.75rem;
        font-size: 1.25rem;
    }

    .objetivos code,
    .sintaxis code {
        background: #f1f5f9;
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
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
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
        min-width: 150px;
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

    /* Cards de información */
    .info-card {
        background: white;
        border: 1px solid var(--color-borde);
        border-radius: 0.5rem;
        padding: 1.5rem;
        margin: 1rem 0;
    }

    .info-card p {
        margin: 0.5rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .info-card strong {
        color: var(--color-texto);
        min-width: 150px;
    }

    .experimental {
        border-left: 4px solid var(--color-accent);
        background: linear-gradient(135deg, #eff6ff 0%, #ffffff 100%);
    }

    /* Experimento */
    .experimento {
        background: #eff6ff;
        border: 1px solid var(--color-accent);
        border-radius: 0.5rem;
        padding: 1rem;
        margin: 1rem 0;
    }

    .experimento h4 {
        margin: 0 0 0.75rem 0;
        color: var(--color-accent);
    }

    .experimento ul {
        margin: 0;
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
        border-left: 5px solid var(--color-accent);
    }

    .teoria h2 {
        color: var(--color-accent);
        margin-bottom: 1.5rem;
    }

    .concepto-teoria {
        margin-bottom: 1.5rem;
    }

    .concepto-teoria h3 {
        color: var(--color-texto);
        margin-bottom: 0.75rem;
    }

    /* Comparación */
    .comparacion {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 1rem 0;
    }

    .antes,
    .despues {
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
    }

    .antes {
        background: #fef2f2;
        border: 1px solid #ef4444;
    }

    .despues {
        background: #f0fdf4;
        border: 1px solid #10b981;
    }

    .antes h4 {
        color: #ef4444;
        margin: 0 0 0.5rem 0;
    }

    .despues h4 {
        color: #10b981;
        margin: 0 0 0.5rem 0;
    }

    .antes code,
    .despues code {
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
        font-size: 0.875rem;
        display: block;
    }

    /* Qué puedes hacer */
    .ejemplos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .ejemplo-teoria {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        border: 1px solid var(--color-borde);
    }

    .ejemplo-teoria strong {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
    }

    .ejemplo-teoria code {
        display: block;
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
        font-size: 0.8rem;
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

        .comparacion {
            grid-template-columns: 1fr;
        }

        .ejemplos-grid {
            grid-template-columns: 1fr;
        }

        .ejemplo {
            flex-direction: column;
            text-align: center;
        }

        .ejemplo code {
            min-width: auto;
        }

        .info-card p {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
        }

        .info-card strong {
            min-width: auto;
        }

        .navegacion {
            flex-direction: column;
        }
    }
</style>
