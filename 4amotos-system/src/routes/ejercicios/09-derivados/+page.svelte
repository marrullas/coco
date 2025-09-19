<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                           📝 EJERCICIO #09: VALORES DERIVADOS                       ║
║                                🟡 NIVEL 2: INTERACCIÓN                              ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Aprender $derived() para cálculos automáticos                             ║
║ CONCEPTOS: $derived(), cálculos reactivos, dependencias                             ║
║ TIEMPO ESTIMADO: 25 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Lee todas las instrucciones antes de empezar
    // 2. Completa cada tarea en orden
    // 3. Observa cómo los valores derivados se actualizan automáticamente

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - $derived() para cálculos automáticos
    // - Valores que se actualizan cuando cambian sus dependencias
    // - $derived.by() para lógica más compleja
    // - Optimización automática de recálculos

    // ✏️ TAREA 1: Variables base para los cálculos
    // Ejemplo ya creado para ti:
    let precio = $state<number>(100);
    let cantidad = $state<number>(2);

    // TODO: Crea las siguientes variables usando $state():
    // - radio: número (ejemplo: 5)
    // - nombre: string (ejemplo: "Juan")
    // - apellido: string (ejemplo: "Pérez")
    // - nota1: número (ejemplo: 85)
    // - nota2: número (ejemplo: 92)
    // - nota3: número (ejemplo: 78)

    // ✏️ ESCRIBE AQUÍ TUS VARIABLES BASE:
    // let radio = $state<number>(...);
    // let nombre = $state<string>(...);
    // let apellido = $state<string>(...);
    // let nota1 = $state<number>(...);
    // let nota2 = $state<number>(...);
    // let nota3 = $state<number>(...);

    // ✏️ TAREA 2: Valores derivados simples
    // TODO: Crea los siguientes valores derivados:
    // - area: $derived(Math.PI * radio * radio)
    // - nombreCompleto: $derived(nombre + " " + apellido)
    // - promedio: $derived((nota1 + nota2 + nota3) / 3)

    // ✏️ ESCRIBE AQUÍ TUS VALORES DERIVADOS:
    // let area = $derived(...);
    // let nombreCompleto = $derived(...);
    // let promedio = $derived(...);

    // ✅ EJEMPLOS FUNCIONANDO (no los cambies hasta completar el ejercicio)
    let ejemploBase1 = $state<number>(10);
    let ejemploBase2 = $state<number>(5);

    // Valores derivados de ejemplo
    let ejemploTotal = $derived(precio * cantidad);
    let ejemploDescuento = $derived(ejemploTotal > 500 ? ejemploTotal * 0.1 : 0);
    let ejemploFinal = $derived(ejemploTotal - ejemploDescuento);
    let ejemploSuma = $derived(ejemploBase1 + ejemploBase2);
    let ejemploProducto = $derived(ejemploBase1 * ejemploBase2);

    // ✏️ TAREA 3: Valor derivado complejo con $derived.by()
    // TODO: Crea un valor derivado complejo para calcular la calificación
    // let calificacion = $derived.by(() => {
    //     if (promedio >= 90) return "A - Excelente";
    //     if (promedio >= 80) return "B - Muy Bueno";
    //     if (promedio >= 70) return "C - Bueno";
    //     if (promedio >= 60) return "D - Suficiente";
    //     return "F - Insuficiente";
    // });

    // ✅ EJEMPLO DE $derived.by() FUNCIONANDO
    let ejemploEstadisticas = $derived.by(() => {
        const total = ejemploBase1 + ejemploBase2;
        const promedio = total / 2;
        const diferencia = Math.abs(ejemploBase1 - ejemploBase2);

        return {
            total,
            promedio,
            diferencia,
            mayor: ejemploBase1 > ejemploBase2 ? ejemploBase1 : ejemploBase2,
            menor: ejemploBase1 < ejemploBase2 ? ejemploBase1 : ejemploBase2
        };
    });
</script>

<svelte:head>
    <title>Ejercicio 09: Valores Derivados - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📝 Ejercicio #09: Valores Derivados</h1>
        <div class="nivel">🟡 NIVEL 2: INTERACCIÓN</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Usar <code>$derived()</code> para cálculos automáticos</li>
                <li>Crear valores que se actualizan automáticamente</li>
                <li>Implementar <code>$derived.by()</code> para lógica compleja</li>
                <li>Entender las dependencias entre valores</li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Nuevos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>$derived()</strong>
                    <span>Cálculos automáticos</span>
                </div>
                <div class="concepto">
                    <strong>Dependencias</strong>
                    <span>Variables que afectan el cálculo</span>
                </div>
                <div class="concepto">
                    <strong>$derived.by()</strong>
                    <span>Lógica compleja con funciones</span>
                </div>
                <div class="concepto">
                    <strong>Reactividad</strong>
                    <span>Actualizaciones automáticas</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <div class="tarea">
            <h3>📝 Tarea 1: Derivados Simples (Funcionando)</h3>
            <p><strong>Instrucción:</strong> Cambia los valores base y observa cómo se actualizan los derivados</p>

            <div class="controles-ejemplo">
                <div class="control-group">
                    <label>
                        Precio ($):
                        <input type="number" bind:value={precio} min="0" step="10" />
                    </label>
                    <span class="valor-actual">${precio}</span>
                </div>

                <div class="control-group">
                    <label>
                        Cantidad:
                        <input type="range" bind:value={cantidad} min="1" max="10" />
                    </label>
                    <span class="valor-actual">{cantidad} unidades</span>
                </div>

                <div class="control-group">
                    <label>
                        Número 1:
                        <input type="number" bind:value={ejemploBase1} min="0" max="100" />
                    </label>
                    <span class="valor-actual">{ejemploBase1}</span>
                </div>

                <div class="control-group">
                    <label>
                        Número 2:
                        <input type="number" bind:value={ejemploBase2} min="0" max="100" />
                    </label>
                    <span class="valor-actual">{ejemploBase2}</span>
                </div>
            </div>

            <div class="resultados-ejemplo">
                <h4>🧮 Cálculos Automáticos:</h4>

                <div class="calculo-card">
                    <div class="calculo-titulo">💰 Sistema de Facturación</div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Subtotal:</span>
                        <span class="valor dinero">${ejemploTotal}</span>
                    </div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Descuento (10% si > $500):</span>
                        <span class="valor dinero">-${ejemploDescuento.toFixed(2)}</span>
                    </div>
                    <div class="calculo-detalle total">
                        <span class="etiqueta">Total Final:</span>
                        <span class="valor dinero">${ejemploFinal.toFixed(2)}</span>
                    </div>
                </div>

                <div class="calculo-card">
                    <div class="calculo-titulo">🔢 Operaciones Matemáticas</div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Suma:</span>
                        <span class="valor numero">{ejemploSuma}</span>
                    </div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Producto:</span>
                        <span class="valor numero">{ejemploProducto}</span>
                    </div>
                </div>

                <div class="calculo-card">
                    <div class="calculo-titulo">📊 Estadísticas Complejas</div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Total:</span>
                        <span class="valor numero">{ejemploEstadisticas.total}</span>
                    </div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Promedio:</span>
                        <span class="valor numero">{ejemploEstadisticas.promedio}</span>
                    </div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Diferencia:</span>
                        <span class="valor numero">{ejemploEstadisticas.diferencia}</span>
                    </div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Mayor:</span>
                        <span class="valor numero">{ejemploEstadisticas.mayor}</span>
                    </div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Menor:</span>
                        <span class="valor numero">{ejemploEstadisticas.menor}</span>
                    </div>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Los valores derivados se recalculan automáticamente cuando cambias las variables base
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Crea Tus Propios Derivados</h3>
            <p><strong>Instrucción:</strong> Crea las variables base y valores derivados</p>

            <div class="mis-controles">
                <!-- ✏️ DESCOMENTA ESTOS CONTROLES CUANDO HAYAS CREADO LAS VARIABLES -->
                <!--
                <div class="control-group">
                    <label>
                        Radio del círculo:
                        <input type="number" bind:value={radio} min="1" max="20" step="0.5" />
                    </label>
                    <span class="valor-actual">{radio}</span>
                </div>

                <div class="control-group">
                    <label>
                        Nombre:
                        <input type="text" bind:value={nombre} placeholder="Tu nombre" />
                    </label>
                </div>

                <div class="control-group">
                    <label>
                        Apellido:
                        <input type="text" bind:value={apellido} placeholder="Tu apellido" />
                    </label>
                </div>

                <div class="control-group">
                    <label>
                        Nota 1:
                        <input type="range" bind:value={nota1} min="0" max="100" />
                    </label>
                    <span class="valor-actual">{nota1} puntos</span>
                </div>

                <div class="control-group">
                    <label>
                        Nota 2:
                        <input type="range" bind:value={nota2} min="0" max="100" />
                    </label>
                    <span class="valor-actual">{nota2} puntos</span>
                </div>

                <div class="control-group">
                    <label>
                        Nota 3:
                        <input type="range" bind:value={nota3} min="0" max="100" />
                    </label>
                    <span class="valor-actual">{nota3} puntos</span>
                </div>
                -->

                <div class="placeholder">
                    🎛️ Aquí aparecerán los controles cuando crees las variables base
                </div>
            </div>

            <div class="mis-resultados">
                <!-- ✏️ DESCOMENTA ESTOS RESULTADOS CUANDO HAYAS CREADO LOS VALORES DERIVADOS -->
                <!--
                <h4>🎯 Tus Cálculos Derivados:</h4>

                <div class="calculo-card">
                    <div class="calculo-titulo">⭕ Geometría del Círculo</div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Radio:</span>
                        <span class="valor numero">{radio}</span>
                    </div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Área:</span>
                        <span class="valor numero">{area.toFixed(2)} unidades²</span>
                    </div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Fórmula:</span>
                        <span class="valor formula">π × {radio}² = {area.toFixed(2)}</span>
                    </div>
                </div>

                <div class="calculo-card">
                    <div class="calculo-titulo">👤 Información Personal</div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Nombre:</span>
                        <span class="valor texto">{nombre}</span>
                    </div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Apellido:</span>
                        <span class="valor texto">{apellido}</span>
                    </div>
                    <div class="calculo-detalle total">
                        <span class="etiqueta">Nombre Completo:</span>
                        <span class="valor texto">{nombreCompleto}</span>
                    </div>
                </div>

                <div class="calculo-card">
                    <div class="calculo-titulo">📚 Sistema de Calificaciones</div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Nota 1:</span>
                        <span class="valor numero">{nota1}</span>
                    </div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Nota 2:</span>
                        <span class="valor numero">{nota2}</span>
                    </div>
                    <div class="calculo-detalle">
                        <span class="etiqueta">Nota 3:</span>
                        <span class="valor numero">{nota3}</span>
                    </div>
                    <div class="calculo-detalle total">
                        <span class="etiqueta">Promedio:</span>
                        <span class="valor numero">{promedio.toFixed(1)}</span>
                    </div>
                    <div class="calculo-detalle calificacion">
                        <span class="etiqueta">Calificación:</span>
                        <span class="valor texto">{calificacion}</span>
                    </div>
                </div>
                -->

                <div class="placeholder">
                    📊 Aquí aparecerán tus cálculos cuando crees los valores derivados
                </div>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Sintaxis: <code>let calculado = $derived(variable1 + variable2)</code>
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Experimenta con los Cálculos</h3>
            <p><strong>Instrucción:</strong> Cambia los valores y observa cómo se propagan los cambios</p>

            <div class="experimento">
                <p>🧪 <strong>Experimenta con:</strong></p>
                <ul>
                    <li>Cambiar el radio y ver cómo se actualiza el área automáticamente</li>
                    <li>Modificar el nombre/apellido y ver el nombre completo</li>
                    <li>Ajustar las notas y observar el promedio y calificación</li>
                    <li>Ver cómo un cambio en una variable base afecta múltiples derivados</li>
                    <li>Observar que nunca necesitas recalcular manualmente</li>
                </ul>
            </div>

            <div class="codigo-referencia">
                <h4>📖 Código de Referencia:</h4>
                <pre><code>// Variables base con $state()
let base1 = $state(10);
let base2 = $state(5);

// Valores derivados simples con $derived()
let suma = $derived(base1 + base2);
let producto = $derived(base1 * base2);

// Valores derivados complejos con $derived.by()
let estadisticas = $derived.by(() => &#123;
    const total = base1 + base2;
    const promedio = total / 2;
    return &#123; total, promedio &#125;;
&#125;);</code></pre>
            </div>

            <div class="pista">
                💡 <strong>Magia:</strong> $derived() optimiza automáticamente - solo recalcula cuando es necesario
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Qué Acabas de Aprender?</h2>

        <div class="concepto-teoria">
            <h3>🧮 $derived() en Svelte 5</h3>
            <p>
                Los valores derivados son como "fórmulas de Excel" en tu código. Se calculan automáticamente
                cuando cambian las variables de las que dependen, y Svelte optimiza cuándo recalcularlos.
            </p>

            <div class="codigo-ejemplo">
                <pre><code>// ✅ Derivado simple
let base = $state(10);
let doble = $derived(base * 2);

// ✅ Derivado con múltiples dependencias
let precio = $state(100);
let cantidad = $state(2);
let total = $derived(precio * cantidad);

// ✅ Derivado condicional
let descuento = $derived(total > 500 ? total * 0.1 : 0);</code></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🎯 Tipos de Derivados</h3>
            <div class="tipos-grid">
                <div class="tipo">
                    <strong>$derived()</strong>
                    <code>$derived(expresion)</code>
                    <span>Para cálculos simples</span>
                </div>
                <div class="tipo">
                    <strong>$derived.by()</strong>
                    <code>$derived.by(() => &#123;...&#125;)</code>
                    <span>Para lógica compleja</span>
                </div>
                <div class="tipo">
                    <strong>Dependencias</strong>
                    <code>Usa variables $state</code>
                    <span>Se actualiza cuando cambian</span>
                </div>
                <div class="tipo">
                    <strong>Optimización</strong>
                    <code>Recálculo inteligente</code>
                    <span>Solo cuando es necesario</span>
                </div>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>⚡ Ventajas de $derived()</h3>
            <div class="ventajas">
                <div class="ventaja">
                    <strong>🔄 Automático:</strong> No necesitas recalcular manualmente
                </div>
                <div class="ventaja">
                    <strong>🚀 Optimizado:</strong> Svelte decide cuándo recalcular
                </div>
                <div class="ventaja">
                    <strong>🎯 Reactivo:</strong> Se actualiza cuando cambian las dependencias
                </div>
                <div class="ventaja">
                    <strong>🧹 Limpio:</strong> Código más legible y mantenible
                </div>
            </div>
        </div>
    </section>

    <!-- ✅ SOLUCIÓN -->
    <details class="solucion">
        <summary>🔍 Ver Solución (solo después de intentar)</summary>
        <div class="codigo-solucion">
            <h3>✅ Código Completo:</h3>
            <pre><code>// Variables base
let radio = $state&lt;number&gt;(5);
let nombre = $state&lt;string&gt;('Juan');
let apellido = $state&lt;string&gt;('Pérez');
let nota1 = $state&lt;number&gt;(85);
let nota2 = $state&lt;number&gt;(92);
let nota3 = $state&lt;number&gt;(78);

// Valores derivados simples
let area = $derived(Math.PI * radio * radio);
let nombreCompleto = $derived(nombre + ' ' + apellido);
let promedio = $derived((nota1 + nota2 + nota3) / 3);

// Valor derivado complejo
let calificacion = $derived.by(() => &#123;
    if (promedio >= 90) return 'A - Excelente';
    if (promedio >= 80) return 'B - Muy Bueno';
    if (promedio >= 70) return 'C - Bueno';
    if (promedio >= 60) return 'D - Suficiente';
    return 'F - Insuficiente';
&#125;);</code></pre>
            <p><strong>📝 Luego descomenta:</strong> Los controles y resultados para ver todo funcionando.</p>
        </div>
    </details>

    <!-- 🔄 NAVEGACIÓN -->
    <nav class="navegacion">
        <a href="/ejercicios/08-listas" class="btn btn-secundario">← Anterior: Listas</a>
        <a href="/ejercicios/10-efectos" class="btn btn-primario">Siguiente: Efectos →</a>
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
        --color-calculo: #f0f9ff;
        --color-dinero: #10b981;
        --color-numero: #3b82f6;
        --color-texto-card: #6b7280;
        --sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        --radio: 0.75rem;
    }

    /* Layout base */
    .contenedor {
        max-width: 1100px;
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

    /* Controles específicos para valores derivados */
    .controles-ejemplo, .mis-controles {
        margin: 1rem 0;
        padding: 1rem;
        background: #f8fafc;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
        display: grid;
        gap: 1rem;
    }

    .control-group {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .control-group label {
        font-weight: 600;
        color: var(--color-texto);
        min-width: 120px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .control-group input[type="number"],
    .control-group input[type="text"] {
        padding: 0.5rem;
        border: 2px solid var(--color-borde);
        border-radius: 0.25rem;
        width: 100px;
        font-size: 1rem;
    }

    .control-group input[type="text"] {
        width: 150px;
    }

    .control-group input[type="range"] {
        flex: 1;
        min-width: 150px;
    }

    .control-group input:focus {
        outline: none;
        border-color: var(--color-primario);
        box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
    }

    .valor-actual {
        font-size: 0.875rem;
        color: var(--color-primario);
        font-weight: 600;
        font-family: "Monaco", monospace;
        background: #fef3c7;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        white-space: nowrap;
    }

    /* Resultados y cálculos */
    .resultados-ejemplo, .mis-resultados {
        margin: 1.5rem 0;
    }

    .resultados-ejemplo h4, .mis-resultados h4 {
        margin: 0 0 1rem 0;
        color: var(--color-texto);
        font-size: 1.1rem;
    }

    .calculo-card {
        background: var(--color-calculo);
        border: 1px solid #bfdbfe;
        border-radius: 0.5rem;
        padding: 1.5rem;
        margin-bottom: 1rem;
        transition: all 0.2s ease;
    }

    .calculo-card:hover {
        box-shadow: var(--sombra);
        transform: translateY(-1px);
    }

    .calculo-titulo {
        font-weight: 700;
        color: #1e40af;
        margin-bottom: 1rem;
        font-size: 1rem;
        border-bottom: 2px solid #dbeafe;
        padding-bottom: 0.5rem;
    }

    .calculo-detalle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        border-bottom: 1px solid #e0f2fe;
    }

    .calculo-detalle:last-child {
        border-bottom: none;
    }

    .calculo-detalle.total {
        border-top: 2px solid #1e40af;
        margin-top: 0.5rem;
        padding-top: 1rem;
        font-weight: 700;
    }

    .calculo-detalle.calificacion {
        background: #fef3c7;
        margin: 0.5rem -0.5rem -0.5rem -0.5rem;
        padding: 1rem;
        border-radius: 0 0 0.5rem 0.5rem;
    }

    .etiqueta {
        color: var(--color-texto-card);
        font-weight: 600;
        font-size: 0.9rem;
    }

    .valor {
        font-weight: 700;
        font-family: "Monaco", monospace;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.9rem;
    }

    .valor.dinero {
        background: #d1fae5;
        color: #065f46;
    }

    .valor.numero {
        background: #dbeafe;
        color: #1e40af;
    }

    .valor.texto {
        background: #f3e8ff;
        color: #6b21a8;
        font-family: inherit;
    }

    .valor.formula {
        background: #fff7ed;
        color: #9a3412;
        font-size: 0.8rem;
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

    .codigo-referencia {
        background: #f8fafc;
        border: 1px solid var(--color-borde);
        border-radius: 0.5rem;
        padding: 1rem;
        margin: 1rem 0;
    }

    .codigo-referencia h4 {
        margin: 0 0 1rem 0;
        color: var(--color-texto);
    }

    .codigo-referencia pre {
        background: #1f2937;
        color: #e5e7eb;
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        font-size: 0.875rem;
        margin: 0;
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

    .ventajas {
        display: grid;
        gap: 0.75rem;
        margin-top: 1rem;
    }

    .ventaja {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        border-left: 4px solid #3b82f6;
    }

    .ventaja strong {
        color: #3b82f6;
        margin-right: 0.5rem;
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

        .controles-ejemplo,
        .mis-controles {
            grid-template-columns: 1fr;
        }

        .control-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }

        .control-group label {
            min-width: auto;
            width: 100%;
        }

        .control-group input[type="range"] {
            width: 100%;
            min-width: auto;
        }

        .calculo-detalle {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }

        .valor {
            align-self: flex-end;
        }
    }
</style>