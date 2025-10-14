<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                        📦 EJERCICIO #11: COMPONENTE SIMPLE                         ║
║                             🟠 NIVEL 3: COMPONENTES                                ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Crear tu primer componente reutilizable                                   ║
║ CONCEPTOS: componentes, reutilización, separación de responsabilidades             ║
║ TIEMPO ESTIMADO: 35 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Lee todas las instrucciones antes de empezar
    // 2. Completa cada tarea en orden
    // 3. Observa cómo los componentes hacen tu código más limpio y reutilizable

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - Qué es un componente y por qué usarlos
    // - Cómo crear archivos .svelte separados
    // - Importar y usar componentes en otros archivos
    // - Organizar tu código de manera modular

    // ✏️ TAREA 1: Importar componentes (algunos ya están creados)
    // Estos componentes están en la carpeta lib/components/ejercicios/
    import TarjetaEjemplo from "$lib/components/ejercicios/TarjetaEjemplo.svelte";
    import BotonEjemplo from "$lib/components/ejercicios/BotonEjemplo.svelte";

    // Componentes creados por el estudiante
    import MiTarjeta from '$lib/components/ejercicios/MiTarjeta.svelte';
    import MiBoton from '$lib/components/ejercicios/MiBoton.svelte';
    import EstadisticaCard from '$lib/components/ejercicios/EstadisticaCard.svelte';

    // ✅ VARIABLES DE EJEMPLO
    let contadorClics = $state<number>(0);
    let mensaje = $state<string>("¡Hola desde el componente principal!");

    function incrementarContador() {
        contadorClics++;
    }

    function resetearContador() {
        contadorClics = 0;
    }

    // 🧭 Navegación dinámica
    import { page } from "$app/state";
    import { obtenerNavegacionEjercicio } from "$lib/utils/navigation.js";

    const navegacion = $derived(
        obtenerNavegacionEjercicio(page.url.pathname, {
            id: "11",
            titulo: "componente-simple",
        }),
    );
</script>

<svelte:head>
    <title>Ejercicio 11: Componente Simple - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📦 Ejercicio #11: Componente Simple</h1>
        <div class="nivel">🟠 NIVEL 3: COMPONENTES</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Entender qué son los componentes y por qué son útiles</li>
                <li>
                    Crear archivos <code>.svelte</code> separados para componentes
                </li>
                <li>Importar y usar componentes en otros archivos</li>
                <li>Hacer tu código más modular y reutilizable</li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Nuevos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>Componente</strong>
                    <span>Pieza reutilizable de UI</span>
                </div>
                <div class="concepto">
                    <strong>Modularidad</strong>
                    <span>Dividir código en partes pequeñas</span>
                </div>
                <div class="concepto">
                    <strong>Reutilización</strong>
                    <span>Usar el mismo código varias veces</span>
                </div>
                <div class="concepto">
                    <strong>Import/Export</strong>
                    <span>Compartir componentes entre archivos</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <div class="tarea">
            <h3>📦 Tarea 1: Componentes de Ejemplo (Funcionando)</h3>
            <p>
                <strong>Instrucción:</strong> Observa cómo estos componentes funcionan
            </p>

            <div class="componentes-ejemplo">
                <div class="ejemplo-seccion">
                    <h4>🎨 Componente TarjetaEjemplo:</h4>
                    <div class="grid-ejemplos">
                        <TarjetaEjemplo
                            titulo="Mi primera tarjeta"
                            contenido="Este es un componente reutilizable que puedes usar muchas veces."
                            color="azul"
                        />
                        <TarjetaEjemplo
                            titulo="Segunda tarjeta"
                            contenido="El mismo componente, pero con contenido diferente."
                            color="verde"
                        />
                        <TarjetaEjemplo
                            titulo="Tercera tarjeta"
                            contenido="¡Y otra vez! Esto es la magia de la reutilización."
                            color="naranja"
                        />
                    </div>
                </div>

                <div class="ejemplo-seccion">
                    <h4>🔘 Componente BotonEjemplo:</h4>
                    <div class="botones-ejemplo">
                        <BotonEjemplo
                            texto="Incrementar"
                            tipo="primario"
                            onclick={incrementarContador}
                        />
                        <BotonEjemplo
                            texto="Resetear"
                            tipo="secundario"
                            onclick={resetearContador}
                        />
                        <div class="contador-display">
                            Clics: <span class="numero">{contadorClics}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Cada componente se usa varias veces
                con diferentes datos, pero el código se escribió solo una vez
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Crear Tus Propios Componentes</h3>
            <p>
                <strong>Instrucción:</strong> Crea los archivos de componentes
                en <code>src/lib/components/ejercicios/</code>
            </p>

            <div class="instrucciones-creacion">
                <div class="paso">
                    <h4>📁 Paso 1: Crear MiTarjeta.svelte</h4>
                    <div class="codigo-crear">
                        <p>
                            <strong>Crear archivo:</strong>
                            <code
                                >src/lib/components/ejercicios/MiTarjeta.svelte</code
                            >
                        </p>
                        <div class="codigo-ejemplo">
                            <pre><code
                                    >&lt;script lang="ts"&gt;
    // Acepta un título como parámetro
    interface Props &#123;
        titulo: string;
        descripcion: string;
        icono?: string;
    &#125;

    let &#123; titulo, descripcion, icono = "📄" &#125;: Props = $props();
&lt;/script&gt;

&lt;div class="mi-tarjeta"&gt;
    &lt;div class="tarjeta-icono"&gt;&#123;icono&#125;&lt;/div&gt;
    &lt;h3 class="tarjeta-titulo"&gt;&#123;titulo&#125;&lt;/h3&gt;
    &lt;p class="tarjeta-descripcion"&gt;&#123;descripcion&#125;&lt;/p&gt;
&lt;/div&gt;

&lt;style&gt;
    .mi-tarjeta &#123;
        padding: 1.5rem;
        border-radius: 0.75rem;
        background: white;
        border: 2px solid #e5e7eb;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        text-align: center;
    &#125;

    .mi-tarjeta:hover &#123;
        transform: translateY(-4px);
        box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.2);
        border-color: #f97316;
    &#125;

    .tarjeta-icono &#123;
        font-size: 2rem;
        margin-bottom: 0.75rem;
    &#125;

    .tarjeta-titulo &#123;
        margin: 0 0 0.75rem 0;
        color: #1f2937;
        font-size: 1.25rem;
    &#125;

    .tarjeta-descripcion &#123;
        margin: 0;
        color: #6b7280;
        line-height: 1.5;
    &#125;
&lt;/style&gt;</code
                                ></pre>
                        </div>
                    </div>
                </div>

                <div class="paso">
                    <h4>🔘 Paso 2: Crear MiBoton.svelte</h4>
                    <div class="codigo-crear">
                        <p>
                            <strong>Crear archivo:</strong>
                            <code
                                >src/lib/components/ejercicios/MiBoton.svelte</code
                            >
                        </p>
                        <div class="codigo-ejemplo">
                            <pre><code
                                    >&lt;script lang="ts"&gt;
    interface Props &#123;
        texto: string;
        variant?: 'primary' | 'secondary' | 'danger';
        onclick?: () =&gt; void;
    &#125;

    let &#123; texto, variant = 'primary', onclick &#125;: Props = $props();
&lt;/script&gt;

&lt;button class="mi-boton &#123;variant&#125;" &#123;onclick&#125;&gt;
    &#123;texto&#125;
&lt;/button&gt;

&lt;style&gt;
    .mi-boton &#123;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        border: none;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 1rem;
    &#125;

    .mi-boton:hover &#123;
        transform: translateY(-2px);
    &#125;

    .mi-boton.primary &#123;
        background: #f97316;
        color: white;
    &#125;

    .mi-boton.primary:hover &#123;
        background: #ea580c;
    &#125;

    .mi-boton.secondary &#123;
        background: #6b7280;
        color: white;
    &#125;

    .mi-boton.secondary:hover &#123;
        background: #4b5563;
    &#125;

    .mi-boton.danger &#123;
        background: #ef4444;
        color: white;
    &#125;

    .mi-boton.danger:hover &#123;
        background: #dc2626;
    &#125;
&lt;/style&gt;</code
                                ></pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mis-componentes">
                <h4>🎨 Tus Componentes en Acción:</h4>
                <div class="grid-mis-componentes">
                    <MiTarjeta
                        titulo="Mi Primera Tarjeta"
                        descripcion="¡Creé mi primer componente reutilizable!"
                        icono="🎉"
                    />
                    <MiTarjeta
                        titulo="Aprendiendo Svelte"
                        descripcion="Los componentes hacen el código más limpio y organizado."
                        icono="📚"
                    />
                    <MiTarjeta
                        titulo="Reutilización"
                        descripcion="El mismo componente, usado múltiples veces con datos diferentes."
                        icono="♻️"
                    />
                </div>

                <div class="mis-botones">
                    <MiBoton texto="Botón Principal" variant="primary" onclick={() => mensaje = "¡Botón principal clickeado!"} />
                    <MiBoton texto="Botón Secundario" variant="secondary" onclick={() => mensaje = "¡Botón secundario clickeado!"} />
                    <MiBoton texto="Botón de Peligro" variant="danger" onclick={() => mensaje = "¡Botón de peligro clickeado!"} />
                </div>

                <div class="mensaje-resultado">
                    Mensaje: <span class="mensaje-texto">{mensaje}</span>
                </div>

                <div class="placeholder">
                    📦 Crea los archivos de componentes y luego descomenta esta
                    sección para verlos en acción
                </div>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Los componentes usan
                <code>$props()</code> en Svelte 5 para recibir datos del componente
                padre
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Componente Avanzado (Opcional)</h3>
            <p>
                <strong>Instrucción:</strong> Crea un componente más complejo con
                estado interno
            </p>

            <div class="tarea-avanzada">
                <div class="paso">
                    <h4>📊 Crear EstadisticaCard.svelte</h4>
                    <div class="codigo-crear">
                        <p>
                            <strong>Crear archivo:</strong>
                            <code
                                >src/lib/components/ejercicios/EstadisticaCard.svelte</code
                            >
                        </p>
                        <div class="codigo-ejemplo">
                            <pre><code
                                    >&lt;script lang="ts"&gt;
    interface Props &#123;
        titulo: string;
        valorInicial?: number;
        icono?: string;
        color?: string;
    &#125;

    let &#123; titulo, valorInicial = 0, icono = "📊", color = "blue" &#125;: Props = $props();

    // Estado interno del componente
    let valor = $state(valorInicial);
    let animando = $state(false);

    function incrementar() &#123;
        animando = true;
        valor++;
        setTimeout(() =&gt; animando = false, 300);
    &#125;

    function decrementar() &#123;
        if (valor &gt; 0) &#123;
            animando = true;
            valor--;
            setTimeout(() =&gt; animando = false, 300);
        &#125;
    &#125;

    function resetear() &#123;
        valor = valorInicial;
    &#125;
&lt;/script&gt;

&lt;div class="estadistica-card &#123;color&#125;"&gt;
    &lt;div class="card-header"&gt;
        &lt;span class="icono"&gt;&#123;icono&#125;&lt;/span&gt;
        &lt;h3 class="titulo"&gt;&#123;titulo&#125;&lt;/h3&gt;
    &lt;/div&gt;

    &lt;div class="valor-container"&gt;
        &lt;div class="valor &#123;animando ? 'animando' : ''&#125;"&gt;&#123;valor&#125;&lt;/div&gt;
    &lt;/div&gt;

    &lt;div class="controles"&gt;
        &lt;button class="btn-control" onclick=&#123;decrementar&#125;&gt;-&lt;/button&gt;
        &lt;button class="btn-control" onclick=&#123;resetear&#125;&gt;Reset&lt;/button&gt;
        &lt;button class="btn-control" onclick=&#123;incrementar&#125;&gt;+&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
    .estadistica-card &#123;
        padding: 1.5rem;
        border-radius: 1rem;
        background: white;
        border: 2px solid;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        min-width: 200px;
    &#125;

    .estadistica-card.blue &#123; border-color: #3b82f6; &#125;
    .estadistica-card.green &#123; border-color: #10b981; &#125;
    .estadistica-card.orange &#123; border-color: #f59e0b; &#125;
    .estadistica-card.red &#123; border-color: #ef4444; &#125;

    .card-header &#123;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    &#125;

    .icono &#123;
        font-size: 1.5rem;
    &#125;

    .titulo &#123;
        margin: 0;
        font-size: 1rem;
        color: #1f2937;
    &#125;

    .valor-container &#123;
        text-align: center;
        margin-bottom: 1rem;
    &#125;

    .valor &#123;
        font-size: 3rem;
        font-weight: 700;
        color: #1f2937;
        transition: all 0.3s ease;
    &#125;

    .valor.animando &#123;
        transform: scale(1.2);
        color: #f59e0b;
    &#125;

    .controles &#123;
        display: flex;
        gap: 0.5rem;
        justify-content: center;
    &#125;

    .btn-control &#123;
        padding: 0.5rem 1rem;
        border: 1px solid #d1d5db;
        border-radius: 0.5rem;
        background: white;
        cursor: pointer;
        transition: all 0.2s ease;
        font-weight: 600;
    &#125;

    .btn-control:hover &#123;
        background: #f3f4f6;
        transform: translateY(-1px);
    &#125;
&lt;/style&gt;</code
                                ></pre>
                        </div>
                    </div>
                </div>

                <div class="estadisticas-demo">
                    <h4>📊 Componentes con Estado Interno:</h4>
                    <div class="grid-estadisticas">
                        <EstadisticaCard
                            titulo="Visitas"
                            valorInicial={100}
                            icono="👥"
                            color="blue"
                        />
                        <EstadisticaCard
                            titulo="Ventas"
                            valorInicial={25}
                            icono="💰"
                            color="green"
                        />
                        <EstadisticaCard
                            titulo="Tareas"
                            valorInicial={8}
                            icono="✅"
                            color="orange"
                        />
                        <EstadisticaCard
                            titulo="Errores"
                            valorInicial={0}
                            icono="🚨"
                            color="red"
                        />
                    </div>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Avanzado:</strong> Los componentes pueden tener su
                propio estado interno usando <code>$state()</code>
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Qué Acabas de Aprender?</h2>

        <div class="concepto-teoria">
            <h3>📦 ¿Qué son los Componentes?</h3>
            <p>
                Los componentes son como "bloques de construcción" reutilizables
                para tu aplicación. Cada componente es un archivo <code
                    >.svelte</code
                > que contiene HTML, CSS y JavaScript empaquetado en una unidad lógica.
            </p>

            <div class="ventajas">
                <h4>✅ Ventajas de los Componentes:</h4>
                <ul>
                    <li>
                        <strong>Reutilización:</strong> Escribe una vez, usa muchas
                        veces
                    </li>
                    <li>
                        <strong>Organización:</strong> Código más limpio y estructurado
                    </li>
                    <li>
                        <strong>Mantenimiento:</strong> Más fácil de debuggear y
                        actualizar
                    </li>
                    <li>
                        <strong>Colaboración:</strong> Diferentes personas pueden
                        trabajar en componentes separados
                    </li>
                </ul>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🔧 Anatomía de un Componente</h3>
            <div class="codigo-ejemplo">
                <pre><code
                        >&lt;!-- MiComponente.svelte --&gt;
&lt;script lang="ts"&gt;
    // 1. Definir props (datos que recibe)
    interface Props &#123;
        titulo: string;
        visible?: boolean;
    &#125;

    let &#123; titulo, visible = true &#125;: Props = $props();

    // 2. Estado interno del componente
    let contador = $state(0);

    // 3. Funciones del componente
    function incrementar() &#123;
        contador++;
    &#125;
&lt;/script&gt;

&lt;!-- 4. HTML del componente --&gt;
&#123;#if visible&#125;
    &lt;div class="mi-componente"&gt;
        &lt;h2&gt;&#123;titulo&#125;&lt;/h2&gt;
        &lt;p&gt;Contador: &#123;contador&#125;&lt;/p&gt;
        &lt;button onclick=&#123;incrementar&#125;&gt;+1&lt;/button&gt;
    &lt;/div&gt;
&#123;/if&#125;

&lt;!-- 5. Estilos del componente --&gt;
&lt;style&gt;
    .mi-componente &#123;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    &#125;
&lt;/style&gt;</code
                    ></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🔄 Usando Componentes</h3>
            <div class="codigo-ejemplo">
                <pre><code
                        >&lt;!-- En otro archivo .svelte --&gt;
&lt;script&gt;
    // 1. Importar el componente
    import MiComponente from './MiComponente.svelte';
&lt;/script&gt;

&lt;!-- 2. Usar el componente --&gt;
&lt;MiComponente titulo="Primer componente" /&gt;
&lt;MiComponente titulo="Segundo componente" visible=&#123;false&#125; /&gt;

&lt;!-- 3. Reutilizar con diferentes datos --&gt;
&#123;#each items as item&#125;
    &lt;MiComponente titulo=&#123;item.nombre&#125; /&gt;
&#123;/each&#125;</code
                    ></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>📁 Organización de Componentes</h3>
            <div class="estructura-archivos">
                <pre><code
                        >src/
├── lib/
│   └── components/
│       ├── ui/              # Componentes de UI básicos
│       │   ├── Button.svelte
│       │   ├── Card.svelte
│       │   └── Modal.svelte
│       ├── ejercicios/      # Componentes para ejercicios
│       │   ├── MiTarjeta.svelte
│       │   └── MiBoton.svelte
│       └── layout/          # Componentes de layout
│           ├── Header.svelte
│           └── Footer.svelte
└── routes/
    └── +page.svelte         # Páginas principales</code
                    ></pre>
            </div>
        </div>
    </section>

    <!-- ✅ SOLUCIÓN -->
    <details class="solucion">
        <summary>🔍 Ver Solución (solo después de intentar)</summary>
        <div class="codigo-solucion">
            <h3>✅ Pasos Completados:</h3>
            <ol>
                <li>
                    <strong>Crear MiTarjeta.svelte</strong> en
                    <code>src/lib/components/ejercicios/</code>
                </li>
                <li>
                    <strong>Crear MiBoton.svelte</strong> en
                    <code>src/lib/components/ejercicios/</code>
                </li>
                <li>
                    <strong>Importar los componentes</strong> en el script principal
                </li>
                <li>
                    <strong>Descomentar las secciones</strong> para ver los componentes
                    funcionando
                </li>
                <li>
                    <strong>(Opcional) Crear EstadisticaCard.svelte</strong> para
                    práctica avanzada
                </li>
            </ol>
            <p>
                <strong>🎉 Resultado:</strong> Tendrás componentes reutilizables
                que puedes usar en cualquier parte de tu aplicación.
            </p>
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
                >Nivel 3: {navegacion.siguiente.nombre} →</a
            >
        {/if}
    </nav>
</main>

<style>
    /* Variables CSS */
    .contenedor {
        --color-primario: #f97316;
        --color-secundario: #6b7280;
        --color-fondo: #fff7ed;
        --color-tarjeta: #ffffff;
        --color-texto: #1f2937;
        --color-borde: #e5e7eb;
        --color-codigo: #f8fafc;
        --sombra: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        --radio: 0.75rem;
    }

    /* Layout base */
    .contenedor {
        max-width: 1200px;
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
        background: #fed7aa;
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
        background: #ffedd5;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        border: 1px solid #fdba74;
    }

    .concepto strong {
        display: block;
        color: var(--color-primario);
        margin-bottom: 0.25rem;
        font-weight: 700;
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

    /* Ejemplos de componentes */
    .componentes-ejemplo {
        margin: 1rem 0;
    }

    .ejemplo-seccion {
        margin-bottom: 2rem;
        padding: 1rem;
        background: var(--color-codigo);
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .ejemplo-seccion h4 {
        margin: 0 0 1rem 0;
        color: var(--color-texto);
    }

    .grid-ejemplos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }

    .botones-ejemplo {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .contador-display {
        background: #e0f2fe;
        color: #0369a1;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        border: 2px solid #0ea5e9;
    }

    .contador-display .numero {
        font-size: 1.25rem;
        font-weight: 700;
        color: #0c4a6e;
    }

    /* Instrucciones para crear componentes */
    .instrucciones-creacion {
        margin: 1.5rem 0;
    }

    .paso {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: #f0f9ff;
        border-radius: 0.75rem;
        border: 1px solid #0ea5e9;
    }

    .paso h4 {
        margin: 0 0 1rem 0;
        color: #0369a1;
    }

    .codigo-crear p {
        margin: 0 0 1rem 0;
        font-weight: 600;
        color: var(--color-texto);
    }

    .codigo-crear code {
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
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
        line-height: 1.6;
    }

    /* Mis componentes */
    .mis-componentes {
        margin: 1.5rem 0;
        padding: 1rem;
        background: var(--color-codigo);
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
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

    .ventajas {
        background: #f0fdf4;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #10b981;
        margin: 1rem 0;
    }

    .ventajas h4 {
        margin: 0 0 0.75rem 0;
        color: #065f46;
    }

    .ventajas ul {
        margin: 0;
        padding-left: 1.5rem;
    }

    .ventajas li {
        margin-bottom: 0.5rem;
        color: #047857;
    }

    .ventajas strong {
        color: #065f46;
    }

    .estructura-archivos {
        background: #1f2937;
        border-radius: 0.5rem;
        padding: 1rem;
        overflow-x: auto;
        margin: 1rem 0;
    }

    .estructura-archivos pre {
        margin: 0;
        color: #e5e7eb;
        font-size: 0.875rem;
        line-height: 1.6;
    }

    /* Pista, solución y navegación */
    .pista {
        background: #fed7aa;
        border: 1px solid var(--color-primario);
        border-radius: 0.5rem;
        padding: 0.75rem;
        font-size: 0.9rem;
        color: #9a3412;
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

    .codigo-solucion ol {
        margin: 0 0 1rem 0;
        padding-left: 1.5rem;
    }

    .codigo-solucion li {
        margin-bottom: 0.5rem;
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
        background: #ea580c;
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
        .grid-ejemplos {
            grid-template-columns: 1fr;
        }

        .botones-ejemplo {
            flex-direction: column;
            align-items: stretch;
        }

        .codigo-ejemplo pre {
            font-size: 0.8rem;
        }
    }
</style>
