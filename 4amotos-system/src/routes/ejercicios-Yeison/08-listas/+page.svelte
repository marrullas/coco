<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                             📝 EJERCICIO #08: LISTAS                                ║
║                                🟡 NIVEL 2: INTERACCIÓN                              ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Aprender a usar &#123;#each&#125; para mostrar listas de datos                      ║
║ CONCEPTOS: &#123;#each&#125;, arrays, iteración, índices, keys                                ║
║ TIEMPO ESTIMADO: 30 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Lee todas las instrucciones antes de empezar
    // 2. Completa cada tarea en orden
    // 3. Observa cómo &#123;#each&#125; convierte arrays en elementos HTML

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - &#123;#each&#125; para iterar sobre arrays
    // - Mostrar propiedades de objetos en listas
    // - Usar índices en las iteraciones
    // - Keys para optimizar las actualizaciones
    // - Listas vacías con {:else}

    // ✏️ TAREA 1: Arrays de datos
    // Ejemplo ya creado para ti:
    let colores = $state<string[]>(["rojo", "azul", "verde", "amarillo"]);

    // TODO: Crea los siguientes arrays usando $state():
    // - estudiantes: array de strings con nombres ["Ana", "Carlos", "María"]
    // - numeros: array de números [10, 20, 30, 40, 50]
    // - productos: array de objetos con {id, nombre, precio}
    // - tareas: array de objetos con {id, texto, completada}

    // ✏️ ESCRIBE AQUÍ TUS ARRAYS:
    let estudiantes = $state<string[]>(["Ana", "Carlos", "María"]);
    let numeros = $state<number[]>([10, 20, 30, 40, 50]);
    let productos = $state<{id: number, nombre: string, precio: number}[]>([
        { id: 1, nombre: "Producto 1", precio: 100 },
        { id: 2, nombre: "Producto 2", precio: 200 },
        { id: 3, nombre: "Producto 3", precio: 300 }
    ]);
    let tareas = $state<{id: number, texto: string, completada: boolean}[]>([
        { id: 1, texto: "Tarea 1", completada: false },
        { id: 2, texto: "Tarea 2", completada: true },
        { id: 3, texto: "Tarea 3", completada: false }
    ]);

    // ✅ ARRAYS DE EJEMPLO (no los cambies hasta completar el ejercicio)
    let ejemploFrutas = $state<string[]>(["🍎 Manzana", "🍌 Banana", "🍊 Naranja"]);
    let ejemploPersonas = $state<{id: number, nombre: string, edad: number}[]>([
        { id: 1, nombre: "Juan", edad: 25 },
        { id: 2, nombre: "María", edad: 30 },
        { id: 3, nombre: "Pedro", edad: 22 }
    ]);

    // Funciones para manipular listas
    function agregarFruta() {
        const nuevasFrutas = ["🍓 Fresa", "🥝 Kiwi", "🍇 Uvas", "🍑 Cereza"];
        const frutaAleatoria = nuevasFrutas[Math.floor(Math.random() * nuevasFrutas.length)];
        ejemploFrutas.push(frutaAleatoria);
    }

    function eliminarFruta(index: number) {
        ejemploFrutas.splice(index, 1);
    }

    // 🧭 Navegación dinámica
    import { page } from '$app/state';
    import { obtenerNavegacionEjercicio } from '$lib/utils/navigation.js';

    const navegacion = $derived(obtenerNavegacionEjercicio(page.url.pathname, { id: '08', titulo: 'listas' }));
</script>

<svelte:head>
    <title>Ejercicio 08: Listas - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📝 Ejercicio #08: Listas</h1>
        <div class="nivel">🟡 NIVEL 2: INTERACCIÓN</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Usar <code>&#123;#each&#125;</code> para iterar sobre arrays</li>
                <li>Mostrar listas de strings, números y objetos</li>
                <li>Trabajar con índices en las iteraciones</li>
                <li>Entender las keys para optimización</li>
                <li>Manejar listas vacías con <code>&#123;:else&#125;</code></li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Nuevos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>&#123;#each&#125;</strong>
                    <span>Itera sobre arrays</span>
                </div>
                <div class="concepto">
                    <strong>índices</strong>
                    <span>Posición en el array</span>
                </div>
                <div class="concepto">
                    <strong>keys</strong>
                    <span>Identificadores únicos</span>
                </div>
                <div class="concepto">
                    <strong>&#123;:else&#125;</strong>
                    <span>Para listas vacías</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <div class="tarea">
            <h3>📝 Tarea 1: Listas de Ejemplo (Funcionando)</h3>
            <p><strong>Instrucción:</strong> Observa cómo funcionan estos ejemplos</p>

            <div class="ejemplo-listas">
                <div class="lista-ejemplo">
                    <h4>🍎 Lista Simple (frutas):</h4>
                    <div class="controles">
                        <button onclick={agregarFruta}>➕ Agregar Fruta</button>
                        <span class="contador">Total: {ejemploFrutas.length}</span>
                    </div>
                    <ul class="lista-frutas">
                        {#each ejemploFrutas as fruta, index}
                            <li class="item-fruta">
                                <span class="numero">#{index + 1}</span>
                                <span class="contenido">{fruta}</span>
                                <button class="btn-eliminar" onclick={() => eliminarFruta(index)}>🗑️</button>
                            </li>
                        {:else}
                            <li class="lista-vacia">No hay frutas en la lista</li>
                        {/each}
                    </ul>
                </div>

                <div class="lista-ejemplo">
                    <h4>👥 Lista de Objetos (personas):</h4>
                    <div class="tabla-personas">
                        {#each ejemploPersonas as persona, index (persona.id)}
                            <div class="fila-persona">
                                <span class="id">ID: {persona.id}</span>
                                <span class="nombre">{persona.nombre}</span>
                                <span class="edad">{persona.edad} años</span>
                                <span class="posicion">Posición: {index + 1}</span>
                            </div>
                        {:else}
                            <div class="tabla-vacia">No hay personas registradas</div>
                        {/each}
                    </div>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> &#123;#each&#125; recorre cada elemento del array y crea HTML para cada uno
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Crea Tus Propias Listas</h3>
            <p><strong>Instrucción:</strong> Crea los arrays y descomenta las listas</p>

            <div class="mis-listas">
                <!-- ✏️ DESCOMENTA ESTAS LISTAS CUANDO HAYAS CREADO LOS ARRAYS -->
                <div class="mi-lista">
                    <h4>🎓 Mis Estudiantes:</h4>
                    <ol class="lista-estudiantes">
                        {#each estudiantes as estudiante, index}
                            <li class="item-estudiante">
                                <span class="numero">{index + 1}.</span>
                                <span class="nombre">{estudiante}</span>
                            </li>
                        {:else}
                            <li class="lista-vacia">No hay estudiantes registrados</li>
                        {/each}
                    </ol>
                </div>

                <div class="mi-lista">
                    <h4>🔢 Mis Números:</h4>
                    <div class="grid-numeros">
                        {#each numeros as numero, index}
                            <div class="numero-card">
                                <div class="numero-valor">{numero}</div>
                                <div class="numero-info">Posición: {index}</div>
                            </div>
                        {:else}
                            <div class="grid-vacio">No hay números</div>
                        {/each}
                    </div>
                </div>

                <div class="mi-lista">
                    <h4>🛍️ Mis Productos:</h4>
                    <div class="productos-grid">
                        {#each productos as producto (producto.id)}
                            <div class="producto-card">
                                <div class="producto-nombre">{producto.nombre}</div>
                                <div class="producto-precio">${producto.precio}</div>
                                <div class="producto-id">ID: {producto.id}</div>
                            </div>
                        {:else}
                            <div class="productos-vacio">No hay productos disponibles</div>
                        {/each}
                    </div>
                </div>

                <div class="mi-lista">
                    <h4>📋 Mis Tareas:</h4>
                    <div class="tareas-lista">
                        {#each tareas as tarea, index (tarea.id)}
                            <div class="tarea-item" class:completada={tarea.completada}>
                                <span class="tarea-numero">{index + 1}</span>
                                <span class="tarea-texto">{tarea.texto}</span>
                                <span class="tarea-estado">
                                    {tarea.completada ? '✅ Completada' : '⏳ Pendiente'}
                                </span>
                            </div>
                        {:else}
                            <div class="tareas-vacio">No tienes tareas</div>
                        {/each}
                    </div>
                </div>

                <div class="placeholder">
                    📝 Crea tus arrays en el script y luego descomenta las listas de arriba
                </div>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Sintaxis: <code>&#123;#each array as item, index&#125;...&#123;/each&#125;</code>
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Experimenta con las Listas</h3>
            <p><strong>Instrucción:</strong> Modifica tus arrays y observa los cambios</p>

            <div class="experimento">
                <p>🧪 <strong>Experimenta con:</strong></p>
                <ul>
                    <li>Agregar elementos: <code>miArray.push(nuevoElemento)</code></li>
                    <li>Eliminar elementos: <code>miArray.splice(indice, 1)</code></li>
                    <li>Cambiar arrays completos: <code>miArray = [nuevosElementos]</code></li>
                    <li>Observar cómo el HTML se actualiza automáticamente</li>
                    <li>Ver qué pasa cuando las listas están vacías</li>
                </ul>
            </div>

            <div class="codigo-referencia">
                <h4>📖 Código de Referencia:</h4>
                <pre><code>// Arrays básicos
let frutas = $state(['manzana', 'banana']);
let numeros = $state([1, 2, 3]);

// Arrays de objetos
let personas = $state([
  &#123; id: 1, nombre: 'Ana', edad: 25 &#125;,
  &#123; id: 2, nombre: 'Carlos', edad: 30 &#125;
]);

// En el HTML
&#123;#each frutas as fruta, index&#125;
  &lt;p&gt;&#123;index + 1&#125;: &#123;fruta&#125;&lt;/p&gt;
&#123;:else&#125;
  &lt;p&gt;Lista vacía&lt;/p&gt;
&#123;/each&#125;</code></pre>
            </div>

            <div class="pista">
                💡 <strong>Magia:</strong> Svelte detecta automáticamente cambios en arrays y actualiza solo lo necesario
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Qué Acabas de Aprender?</h2>

        <div class="concepto-teoria">
            <h3>🔄 Bloques &#123;#each&#125; en Svelte 5</h3>
            <p>
                Los bloques <code>&#123;#each&#125;</code> te permiten convertir arrays de datos en elementos HTML.
                Es como tener un "molde" que se repite para cada elemento de tu lista.
            </p>

            <div class="codigo-ejemplo">
                <pre><code>// ✅ Sintaxis básica
&#123;#each miArray as item&#125;
    &lt;p&gt;&#123;item&#125;&lt;/p&gt;
&#123;/each&#125;

// ✅ Con índice
&#123;#each miArray as item, index&#125;
    &lt;p&gt;&#123;index + 1&#125;: &#123;item&#125;&lt;/p&gt;
&#123;/each&#125;

// ✅ Con key (recomendado para objetos)
&#123;#each personas as persona (persona.id)&#125;
    &lt;p&gt;&#123;persona.nombre&#125;&lt;/p&gt;
&#123;/each&#125;</code></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🎯 Tipos de Iteración</h3>
            <div class="tipos-grid">
                <div class="tipo">
                    <strong>Array Simple</strong>
                    <code>['a', 'b', 'c']</code>
                    <span>Lista de valores básicos</span>
                </div>
                <div class="tipo">
                    <strong>Array de Números</strong>
                    <code>[1, 2, 3, 4]</code>
                    <span>Valores numéricos</span>
                </div>
                <div class="tipo">
                    <strong>Array de Objetos</strong>
                    <code>[&#123;id: 1, name: 'Ana'&#125;]</code>
                    <span>Datos estructurados</span>
                </div>
                <div class="tipo">
                    <strong>Con Índice</strong>
                    <code>as item, index</code>
                    <span>Posición en el array</span>
                </div>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🔑 Keys para Optimización</h3>
            <p>
                Las keys ayudan a Svelte a identificar elementos únicos cuando la lista cambia,
                mejorando el rendimiento y evitando errores visuales.
            </p>
            <div class="keys-ejemplos">
                <div class="key-ejemplo">
                    <strong>Sin key:</strong> <code>&#123;#each items as item&#125;</code>
                    <span>Svelte recrea todos los elementos</span>
                </div>
                <div class="key-ejemplo">
                    <strong>Con key:</strong> <code>&#123;#each items as item (item.id)&#125;</code>
                    <span>Svelte reutiliza elementos existentes</span>
                </div>
            </div>
        </div>
    </section>

    <!-- ✅ SOLUCIÓN -->
    <details class="solucion">
        <summary>🔍 Ver Solución (solo después de intentar)</summary>
        <div class="codigo-solucion">
            <h3>✅ Código Completo:</h3>
            <pre><code>// Arrays para las listas
let estudiantes = $state&lt;string[]&gt;(['Ana', 'Carlos', 'María']);
let numeros = $state&lt;number[]&gt;([10, 20, 30, 40, 50]);
let productos = $state&lt;&#123;id: number, nombre: string, precio: number&#125;[]&gt;([
    &#123; id: 1, nombre: 'Laptop', precio: 999 &#125;,
    &#123; id: 2, nombre: 'Mouse', precio: 25 &#125;,
    &#123; id: 3, nombre: 'Teclado', precio: 75 &#125;
]);
let tareas = $state&lt;&#123;id: number, texto: string, completada: boolean&#125;[]&gt;([
    &#123; id: 1, texto: 'Estudiar Svelte', completada: true &#125;,
    &#123; id: 2, texto: 'Hacer ejercicios', completada: false &#125;,
    &#123; id: 3, texto: 'Crear proyecto', completada: false &#125;
]);</code></pre>
            <p><strong>📝 Luego descomenta:</strong> Todas las listas para ver todo funcionando.</p>
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
        --color-lista: #f8fafc;
        --color-item: #ffffff;
        --color-completada: #d1fae5;
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

    /* Estilos específicos para listas */
    .ejemplo-listas, .mis-listas {
        margin: 1rem 0;
    }

    .lista-ejemplo, .mi-lista {
        margin-bottom: 2rem;
        padding: 1rem;
        background: var(--color-lista);
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .lista-ejemplo h4, .mi-lista h4 {
        margin: 0 0 1rem 0;
        color: var(--color-texto);
        font-size: 1.1rem;
    }

    .controles {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        flex-wrap: wrap;
    }

    .controles button {
        background: var(--color-primario);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
        font-size: 0.9rem;
    }

    .controles button:hover {
        background: #d97706;
        transform: translateY(-1px);
    }

    .contador {
        background: #e0f2fe;
        color: #0369a1;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-weight: 600;
        font-size: 0.875rem;
    }

    /* Listas de frutas */
    .lista-frutas {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .item-fruta {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem;
        margin-bottom: 0.5rem;
        background: var(--color-item);
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
        transition: all 0.2s ease;
    }

    .item-fruta:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transform: translateY(-1px);
    }

    .item-fruta .numero {
        background: var(--color-primario);
        color: white;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.875rem;
    }

    .item-fruta .contenido {
        flex: 1;
        font-weight: 600;
    }

    .btn-eliminar {
        background: #fecaca;
        border: 1px solid #ef4444;
        color: #dc2626;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .btn-eliminar:hover {
        background: #ef4444;
        color: white;
    }

    /* Tabla de personas */
    .tabla-personas {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .fila-persona {
        display: grid;
        grid-template-columns: auto 1fr auto auto;
        gap: 1rem;
        align-items: center;
        padding: 0.75rem;
        background: var(--color-item);
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .fila-persona .id {
        background: #dbeafe;
        color: #1e40af;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-weight: 600;
        font-size: 0.875rem;
        font-family: "Monaco", monospace;
    }

    .fila-persona .nombre {
        font-weight: 600;
        color: var(--color-texto);
    }

    .fila-persona .edad {
        color: var(--color-secundario);
        font-size: 0.9rem;
    }

    .fila-persona .posicion {
        color: var(--color-primario);
        font-weight: 600;
        font-size: 0.875rem;
    }

    /* Mis listas personalizadas */
    .lista-estudiantes {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .item-estudiante {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem;
        margin-bottom: 0.5rem;
        background: var(--color-item);
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .item-estudiante .numero {
        color: var(--color-primario);
        font-weight: 700;
        min-width: 2rem;
    }

    .item-estudiante .nombre {
        font-weight: 600;
        color: var(--color-texto);
    }

    /* Grid de números */
    .grid-numeros {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1rem;
    }

    .numero-card {
        background: var(--color-item);
        padding: 1rem;
        border-radius: 0.5rem;
        border: 2px solid var(--color-borde);
        text-align: center;
        transition: all 0.2s ease;
    }

    .numero-card:hover {
        border-color: var(--color-primario);
        transform: translateY(-2px);
    }

    .numero-valor {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-primario);
        margin-bottom: 0.25rem;
    }

    .numero-info {
        font-size: 0.875rem;
        color: var(--color-secundario);
    }

    /* Grid de productos */
    .productos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }

    .producto-card {
        background: var(--color-item);
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
        transition: all 0.2s ease;
    }

    .producto-card:hover {
        box-shadow: var(--sombra);
        transform: translateY(-2px);
    }

    .producto-nombre {
        font-weight: 600;
        color: var(--color-texto);
        margin-bottom: 0.5rem;
    }

    .producto-precio {
        font-size: 1.25rem;
        font-weight: 700;
        color: #10b981;
        margin-bottom: 0.25rem;
    }

    .producto-id {
        font-size: 0.875rem;
        color: var(--color-secundario);
        font-family: "Monaco", monospace;
    }

    /* Lista de tareas */
    .tareas-lista {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .tarea-item {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 1rem;
        align-items: center;
        padding: 0.75rem;
        background: var(--color-item);
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
        transition: all 0.2s ease;
    }

    .tarea-item.completada {
        background: var(--color-completada);
        border-color: #10b981;
    }

    .tarea-numero {
        background: var(--color-primario);
        color: white;
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.875rem;
    }

    .tarea-item.completada .tarea-numero {
        background: #10b981;
    }

    .tarea-texto {
        font-weight: 600;
        color: var(--color-texto);
    }

    .tarea-item.completada .tarea-texto {
        text-decoration: line-through;
        color: var(--color-secundario);
    }

    .tarea-estado {
        font-size: 0.875rem;
        font-weight: 600;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
    }

    /* Estados vacíos */
    .lista-vacia,
    .tabla-vacia,
    .grid-vacio,
    .productos-vacio,
    .tareas-vacio {
        text-align: center;
        color: var(--color-secundario);
        font-style: italic;
        padding: 2rem;
        background: #f8fafc;
        border: 2px dashed var(--color-borde);
        border-radius: 0.5rem;
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

    .keys-ejemplos {
        margin-top: 1rem;
    }

    .key-ejemplo {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        margin-bottom: 0.75rem;
        border-left: 4px solid #3b82f6;
    }

    .key-ejemplo strong {
        color: #3b82f6;
        margin-right: 0.5rem;
    }

    .key-ejemplo code {
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
        margin: 0 0.5rem;
    }

    .key-ejemplo span {
        color: var(--color-secundario);
        font-size: 0.9rem;
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

        .fila-persona {
            grid-template-columns: 1fr;
            gap: 0.5rem;
        }

        .grid-numeros,
        .productos-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }

        .tarea-item {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            text-align: center;
        }

        .controles {
            flex-direction: column;
            align-items: stretch;
        }
    }
</style>