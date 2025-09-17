<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                             📝 EJERCICIO #05: CONTADOR                              ║
║                                 🟢 NIVEL 1: BÁSICO                                  ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Crear un contador interactivo completo con múltiples funciones            ║
║ CONCEPTOS: Operaciones matemáticas, validaciones, lógica condicional                ║
║ TIEMPO ESTIMADO: 35 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Construye un contador completo con múltiples funciones
    // 2. Aprende operaciones matemáticas básicas
    // 3. Implementa validaciones y límites
    // 4. Experimenta con lógica condicional

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - Operaciones matemáticas (+, -, *, /)
    // - Validaciones y límites
    // - Lógica condicional (if/else)
    // - Estados múltiples trabajando juntos

    // ✏️ ESTADO DEL CONTADOR
    let contador = $state<number>(0);
    let paso = $state<number>(1);
    let limite = $state<number>(100);

    // 📊 ESTADÍSTICAS (automáticas con $derived)
    let totalOperaciones = $state<number>(0);
    let esPositivo = $derived(contador > 0);
    let esNegativo = $derived(contador < 0);
    let esCero = $derived(contador === 0);
    let cercaDelLimite = $derived(Math.abs(contador) >= limite * 0.8);

    // 🎯 FUNCIONES BÁSICAS
    function incrementar() {
        if (contador + paso <= limite) {
            contador = contador + paso;
            totalOperaciones++;
        }
    }

    function decrementar() {
        if (contador - paso >= -limite) {
            contador = contador - paso;
            totalOperaciones++;
        }
    }

    // TODO: Completa estas funciones
    function resetear() {
        // ✏️ ESCRIBE AQUÍ:
        // - Pon contador en 0
        // - Pon totalOperaciones en 0
        contador = 0;
        totalOperaciones = 0;
    }

    function duplicar() {
        // ✏️ ESCRIBE AQUÍ:
        // - Multiplica contador por 2 (solo si no excede el límite)
        if (contador * 2 <= limite && contador * 2 >= -limite) {
            contador = contador * 2;
            totalOperaciones++;
        }
    }

    function dividirPorDos() {
        // ✏️ ESCRIBE AQUÍ:
        // - Divide contador por 2 (redondea hacia abajo con Math.floor)
        contador = Math.floor(contador / 2);
        totalOperaciones++;
    }

    // 🎲 FUNCIONES AVANZADAS
    function valorAleatorio() {
        contador = Math.floor(Math.random() * (limite * 2 + 1)) - limite;
        totalOperaciones++;
    }

    function cambiarPaso(nuevoPaso: number) {
        if (nuevoPaso > 0 && nuevoPaso <= 20) {
            paso = nuevoPaso;
        }
    }

    function cambiarLimite(nuevoLimite: number) {
        if (nuevoLimite >= 10 && nuevoLimite <= 1000) {
            limite = nuevoLimite;
            // Ajustar contador si excede el nuevo límite
            if (contador > limite) contador = limite;
            if (contador < -limite) contador = -limite;
        }
    }

    // ✏️ AGREGA TUS FUNCIONES PERSONALIZADAS:
    // function elevarAlCuadrado() {
    //     // Tu código aquí
    // }
</script>

<svelte:head>
    <title>Ejercicio 05: Contador - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📝 Ejercicio #05: Contador</h1>
        <div class="nivel">🟢 NIVEL 1: BÁSICO</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Crear un contador con múltiples operaciones</li>
                <li>Implementar validaciones y límites</li>
                <li>Usar operaciones matemáticas básicas</li>
                <li>Practicar lógica condicional</li>
                <li>Ver valores derivados en acción</li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Matemáticos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>Suma</strong>
                    <code>a + b</code>
                </div>
                <div class="concepto">
                    <strong>Resta</strong>
                    <code>a - b</code>
                </div>
                <div class="concepto">
                    <strong>Multiplicación</strong>
                    <code>a * b</code>
                </div>
                <div class="concepto">
                    <strong>División</strong>
                    <code>a / b</code>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Contador Inteligente</h2>

        <!-- Pantalla principal del contador -->
        <div class="pantalla-contador">
            <div class="valor-principal" class:positivo={esPositivo} class:negativo={esNegativo} class:cero={esCero}>
                {contador}
            </div>

            <div class="estadisticas">
                <div class="stat">
                    <span class="label">Estado:</span>
                    <span class="value">
                        {#if esCero}
                            🟡 Cero
                        {:else if esPositivo}
                            🟢 Positivo
                        {:else}
                            🔴 Negativo
                        {/if}
                    </span>
                </div>

                <div class="stat">
                    <span class="label">Operaciones:</span>
                    <span class="value">{totalOperaciones}</span>
                </div>

                <div class="stat">
                    <span class="label">Límite:</span>
                    <span class="value">±{limite}</span>
                </div>

                {#if cercaDelLimite}
                    <div class="advertencia">
                        ⚠️ Cerca del límite
                    </div>
                {/if}
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 1: Operaciones Básicas</h3>
            <p><strong>Instrucción:</strong> Controla el contador con estos botones básicos</p>

            <div class="controles-basicos">
                <button onclick={decrementar} class="btn btn-danger">
                    ➖ Decrementar ({paso})
                </button>

                <button onclick={resetear} class="btn btn-warning">
                    🔄 Resetear
                </button>

                <button onclick={incrementar} class="btn btn-success">
                    ➕ Incrementar ({paso})
                </button>
            </div>

            <div class="config-paso">
                <label>Tamaño del paso:</label>
                <div class="paso-botones">
                    <button onclick={() => cambiarPaso(1)} class="btn-paso" class:activo={paso === 1}>1</button>
                    <button onclick={() => cambiarPaso(5)} class="btn-paso" class:activo={paso === 5}>5</button>
                    <button onclick={() => cambiarPaso(10)} class="btn-paso" class:activo={paso === 10}>10</button>
                </div>
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Operaciones Matemáticas</h3>
            <p><strong>Instrucción:</strong> Experimenta con operaciones más complejas</p>

            <div class="controles-matematicos">
                <button onclick={duplicar} class="btn btn-primary">
                    ✖️2 Duplicar
                </button>

                <button onclick={dividirPorDos} class="btn btn-secondary">
                    ➗2 Dividir por 2
                </button>

                <button onclick={valorAleatorio} class="btn btn-special">
                    🎲 Valor Aleatorio
                </button>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Las operaciones respetan los límites establecidos
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Configuración Avanzada</h3>
            <p><strong>Instrucción:</strong> Personaliza el comportamiento del contador</p>

            <div class="configuracion">
                <div class="config-grupo">
                    <label>Límite máximo:</label>
                    <div class="limite-botones">
                        <button onclick={() => cambiarLimite(50)} class="btn-config" class:activo={limite === 50}>50</button>
                        <button onclick={() => cambiarLimite(100)} class="btn-config" class:activo={limite === 100}>100</button>
                        <button onclick={() => cambiarLimite(500)} class="btn-config" class:activo={limite === 500}>500</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 4: Agrega Tu Función</h3>
            <p><strong>Instrucción:</strong> Crea tu propia operación matemática</p>

            <div class="area-experimental">
                <!-- ✏️ AGREGA TUS BOTONES PERSONALIZADOS AQUÍ -->
                <!-- Ejemplos:
                <button onclick={elevarAlCuadrado} class="btn btn-custom">
                    x² Elevar al Cuadrado
                </button>
                -->

                <div class="placeholder">
                    👆 Agrega tus operaciones personalizadas aquí
                </div>
            </div>

            <div class="ideas">
                <h4>💡 Ideas para nuevas funciones:</h4>
                <ul>
                    <li><strong>Elevar al cuadrado:</strong> <code>contador * contador</code></li>
                    <li><strong>Valor absoluto:</strong> <code>Math.abs(contador)</code></li>
                    <li><strong>Cambiar signo:</strong> <code>contador * -1</code></li>
                    <li><strong>Sumar 100:</strong> <code>contador + 100</code></li>
                    <li><strong>Ir al límite:</strong> <code>contador = limite</code></li>
                </ul>
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 Matemáticas en Programación</h2>

        <div class="concepto-teoria">
            <h3>🧮 Operadores Matemáticos</h3>
            <div class="operadores-tabla">
                <div class="operador">
                    <code>+</code>
                    <span>Suma</span>
                    <span>5 + 3 = 8</span>
                </div>
                <div class="operador">
                    <code>-</code>
                    <span>Resta</span>
                    <span>5 - 3 = 2</span>
                </div>
                <div class="operador">
                    <code>*</code>
                    <span>Multiplicación</span>
                    <span>5 * 3 = 15</span>
                </div>
                <div class="operador">
                    <code>/</code>
                    <span>División</span>
                    <span>6 / 3 = 2</span>
                </div>
                <div class="operador">
                    <code>%</code>
                    <span>Módulo (resto)</span>
                    <span>7 % 3 = 1</span>
                </div>
                <div class="operador">
                    <code>**</code>
                    <span>Potencia</span>
                    <span>2 ** 3 = 8</span>
                </div>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>✅ Validaciones y Límites</h3>
            <p>Es importante validar los datos antes de hacer operaciones:</p>

            <div class="codigo-ejemplo">
                <pre><code>function incrementar() &#123;
    if (contador + paso &lt;= limite) &#123;
        contador = contador + paso;
        // ✅ Solo incrementa si no excede el límite
    &#125;
&#125;</code></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🔄 Valores Derivados</h3>
            <p>Los valores derivados se calculan automáticamente cuando cambian sus dependencias:</p>

            <div class="codigo-ejemplo">
                <pre><code>let esPositivo = &#36;derived(contador &gt; 0);
let cercaDelLimite = &#36;derived(Math.abs(contador) &gt;= limite * 0.8);
// &#x2191; Se actualizan automáticamente cuando cambia 'contador' o 'limite'</code></pre>
            </div>
        </div>
    </section>

    <!-- ✅ SOLUCIÓN -->
    <details class="solucion">
        <summary>🔍 Ver Solución (solo después de intentar)</summary>
        <div class="codigo-solucion">
            <h3>✅ Función de Ejemplo: Elevar al Cuadrado</h3>
            <pre><code>function elevarAlCuadrado() &#123;
    const resultado = contador * contador;
    if (resultado &lt;= limite) &#123;
        contador = resultado;
        totalOperaciones++;
    &#125;
&#125;</code></pre>

            <h3>✅ Función de Ejemplo: Cambiar Signo</h3>
            <pre><code>function cambiarSigno() &#123;
    contador = contador * -1;
    totalOperaciones++;
&#125;</code></pre>
        </div>
    </details>

    <!-- 🔄 NAVEGACIÓN -->
    <nav class="navegacion">
        <a href="/ejercicios/04-botones" class="btn-nav btn-secundario">← Anterior: Botones</a>
        <a href="/ejercicios" class="btn-nav btn-warning">🎉 ¡Nivel 1 Completado!</a>
        <a href="/ejercicios/06-formularios" class="btn-nav btn-primario">Nivel 2: Formularios →</a>
    </nav>
</main>

<style>
    /* Variables CSS */
    .contenedor {
        --color-primario: #10b981;
        --color-secundario: #6b7280;
        --color-success: #059669;
        --color-danger: #ef4444;
        --color-warning: #f59e0b;
        --color-special: #8b5cf6;
        --color-custom: #ec4899;
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
        background: var(--color-fondo);
        font-family: 'Inter', system-ui, sans-serif;
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

    .objetivos, .conceptos {
        margin-bottom: 1.5rem;
    }

    .objetivos h2, .conceptos h2 {
        color: var(--color-texto);
        margin-bottom: 0.75rem;
        font-size: 1.25rem;
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
        margin-bottom: 0.5rem;
    }

    .concepto code {
        display: block;
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-family: 'Monaco', monospace;
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

    /* Pantalla del contador */
    .pantalla-contador {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 2rem;
        border-radius: var(--radio);
        text-align: center;
        margin-bottom: 2rem;
        box-shadow: var(--sombra);
    }

    .valor-principal {
        font-size: 4rem;
        font-weight: 800;
        margin-bottom: 1rem;
        font-family: 'Monaco', monospace;
        transition: var(--transicion);
    }

    .valor-principal.positivo {
        color: #10b981;
        text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
    }

    .valor-principal.negativo {
        color: #ef4444;
        text-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
    }

    .valor-principal.cero {
        color: #f59e0b;
        text-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
    }

    .estadisticas {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .stat {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.75rem;
        border-radius: 0.5rem;
        backdrop-filter: blur(10px);
    }

    .stat .label {
        display: block;
        font-size: 0.875rem;
        opacity: 0.8;
        margin-bottom: 0.25rem;
    }

    .stat .value {
        display: block;
        font-weight: 700;
        font-size: 1.1rem;
    }

    .advertencia {
        grid-column: 1 / -1;
        background: rgba(239, 68, 68, 0.2);
        border: 1px solid rgba(239, 68, 68, 0.5);
        padding: 0.75rem;
        border-radius: 0.5rem;
        text-align: center;
        font-weight: 600;
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

    /* Controles */
    .controles-basicos, .controles-matematicos {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        margin: 1rem 0;
        justify-content: center;
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
        min-width: 150px;
    }

    .btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.2);
    }

    .btn-success { background: var(--color-success); }
    .btn-danger { background: var(--color-danger); }
    .btn-warning { background: var(--color-warning); }
    .btn-primary { background: var(--color-primario); }
    .btn-secondary { background: var(--color-secundario); }
    .btn-special { background: var(--color-special); }
    .btn-custom { background: var(--color-custom); }

    /* Configuración */
    .config-paso, .configuracion {
        margin: 1.5rem 0;
        text-align: center;
    }

    .config-paso label, .config-grupo label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: var(--color-texto);
    }

    .paso-botones, .limite-botones {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .btn-paso, .btn-config {
        padding: 0.5rem 1rem;
        border: 2px solid var(--color-borde);
        background: white;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: var(--transicion);
        font-weight: 600;
        color: var(--color-secundario);
    }

    .btn-paso.activo, .btn-config.activo {
        border-color: var(--color-primario);
        background: var(--color-primario);
        color: white;
    }

    .btn-paso:hover, .btn-config:hover {
        border-color: var(--color-primario);
        color: var(--color-primario);
    }

    .btn-paso.activo:hover, .btn-config.activo:hover {
        color: white;
    }

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

    .ideas code {
        background: #dbeafe;
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-family: 'Monaco', monospace;
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

    /* Tabla de operadores */
    .operadores-tabla {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 0.75rem;
        margin: 1rem 0;
    }

    .operador {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
        text-align: center;
    }

    .operador code {
        display: block;
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-family: 'Monaco', monospace;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .operador span:first-of-type {
        display: block;
        font-weight: 600;
        color: var(--color-texto);
        margin-bottom: 0.25rem;
    }

    .operador span:last-of-type {
        display: block;
        font-size: 0.875rem;
        color: var(--color-secundario);
        font-family: 'Monaco', monospace;
    }

    /* Código ejemplo */
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
        text-align: center;
        flex: 1;
        min-width: 200px;
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

    .btn-nav.btn-warning {
        background: var(--color-warning);
        color: white;
        font-size: 1.1rem;
    }

    .btn-nav.btn-warning:hover {
        background: #d97706;
        transform: scale(1.05);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .contenedor {
            padding: 1rem;
        }

        .instrucciones, .area-trabajo, .teoria {
            padding: 1.5rem;
        }

        .valor-principal {
            font-size: 3rem;
        }

        .controles-basicos, .controles-matematicos {
            flex-direction: column;
        }

        .btn {
            width: 100%;
            min-width: auto;
        }

        .estadisticas {
            grid-template-columns: 1fr;
        }

        .operadores-tabla {
            grid-template-columns: 1fr;
        }

        .navegacion {
            flex-direction: column;
        }

        .btn-nav {
            min-width: auto;
        }
    }
</style>