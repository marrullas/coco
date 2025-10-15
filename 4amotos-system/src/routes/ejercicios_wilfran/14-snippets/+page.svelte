<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                             ✂️ EJERCICIO #14: SNIPPETS                             ║
║                             🟠 NIVEL 3: COMPONENTES                                ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Aprender a usar snippets para contenido reutilizable y flexible          ║
║ CONCEPTOS: {#snippet}, {@render}, children prop, pasar snippets como props         ║
║ TIEMPO ESTIMADO: 40 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Lee todas las instrucciones antes de empezar
    // 2. Completa cada tarea en orden
    // 3. Observa cómo los snippets reemplazan a los slots en Svelte 5

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - Qué son los snippets y cómo reemplazan a los slots
    // - Crear snippets con {#snippet nombre()}
    // - Renderizar snippets con {@render}
    // - Pasar snippets como props
    // - El prop especial 'children'

    // ✏️ TAREA 1: Importar componentes de ejemplo
    import CardEjemplo from "$lib/components/ejercicios/CardEjemplo.svelte";
    import ListaEjemplo from "$lib/components/ejercicios/ListaEjemplo.svelte";

    // TODO: Importa estos componentes después de crearlos:
    // import MiCard from '$lib/components/ejercicios/MiCard.svelte';
    // import MiModal from '$lib/components/ejercicios/MiModal.svelte';
    // import MiTabla from '$lib/components/ejercicios/MiTabla.svelte';

    // ✅ DATOS DE EJEMPLO
    let productos = $state([
        { id: 1, nombre: "Laptop", precio: 999, categoria: "Tecnología" },
        { id: 2, nombre: "Libro", precio: 25, categoria: "Educación" },
        { id: 3, nombre: "Auriculares", precio: 150, categoria: "Tecnología" },
    ]);

    let usuarios = $state([
        { id: 1, nombre: "Ana García", rol: "Admin", activo: true },
        { id: 2, nombre: "Carlos López", rol: "Usuario", activo: false },
        { id: 3, nombre: "María Rodríguez", rol: "Editor", activo: true },
    ]);

    let modalAbierto = $state(false);

    // 🧭 Navegación dinámica
    import { page } from "$app/state";
    import { obtenerNavegacionEjercicio } from "$lib/utils/navigation.js";

    const navegacion = $derived(
        obtenerNavegacionEjercicio(page.url.pathname, {
            id: "14",
            titulo: "snippets",
        }),
    );
</script>

<svelte:head>
    <title>Ejercicio 14: Snippets - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>✂️ Ejercicio #14: Snippets</h1>
        <div class="nivel">🟠 NIVEL 3: COMPONENTES</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>
                    Entender qué son los snippets y cómo reemplazan a los slots
                </li>
                <li>
                    Crear snippets reutilizables con <code
                        >&lcub;#snippet&rcub;</code
                    >
                </li>
                <li>
                    Renderizar snippets usando <code>&lcub;@render&rcub;</code>
                </li>
                <li>Pasar snippets como props a componentes</li>
                <li>Usar el prop especial <code>children</code></li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Nuevos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>&lcub;#snippet&rcub;</strong>
                    <span>Define bloques de contenido reutilizable</span>
                </div>
                <div class="concepto">
                    <strong>&lcub;@render&rcub;</strong>
                    <span>Renderiza snippets definidos</span>
                </div>
                <div class="concepto">
                    <strong>children</strong>
                    <span>Prop especial para contenido por defecto</span>
                </div>
                <div class="concepto">
                    <strong>Snippet Props</strong>
                    <span>Pasar snippets como propiedades</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <div class="tarea">
            <h3>✂️ Tarea 1: Snippets Básicos en Acción</h3>
            <p>
                <strong>Instrucción:</strong> Observa cómo funcionan los snippets
                en estos ejemplos
            </p>

            <div class="ejemplos-snippets">
                <div class="ejemplo-basico">
                    <h4>📝 Snippets Básicos:</h4>

                    <!-- Definir snippets locales -->
                    {#snippet saludo(nombre: string)}
                        <div class="saludo">
                            👋 ¡Hola, <strong>{nombre}</strong>!
                        </div>
                    {/snippet}

                    {#snippet producto(item: {
                        nombre: string;
                        precio: number;
                        categoria: string;
                    })}
                        <div class="producto-snippet">
                            <h5>{item.nombre}</h5>
                            <p class="precio">${item.precio}</p>
                            <span class="categoria">{item.categoria}</span>
                        </div>
                    {/snippet}

                    {#snippet estadistica(
                        titulo: string,
                        valor: number,
                        icono: string,
                    )}
                        <div class="stat-card">
                            <div class="stat-icono">{icono}</div>
                            <div class="stat-info">
                                <div class="stat-titulo">{titulo}</div>
                                <div class="stat-valor">{valor}</div>
                            </div>
                        </div>
                    {/snippet}

                    <!-- Usar los snippets -->
                    <div class="snippets-demo">
                        {@render saludo("Ana")}
                        {@render saludo("Carlos")}

                        <div class="productos-snippets">
                            {#each productos as item}
                                {@render producto(item)}
                            {/each}
                        </div>

                        <div class="stats-snippets">
                            {@render estadistica(
                                "Productos",
                                productos.length,
                                "📦",
                            )}
                            {@render estadistica(
                                "Usuarios",
                                usuarios.length,
                                "👥",
                            )}
                            {@render estadistica("Categorías", 2, "🏷️")}
                        </div>
                    </div>
                </div>

                <div class="ejemplo-componente">
                    <h4>🧩 Snippets con Componentes:</h4>

                    <!-- Snippets para el componente Card -->
                    {#snippet cardHeader()}
                        <h3>🎮 Mi Tarjeta Personalizada</h3>
                        <span class="badge">Nuevo</span>
                    {/snippet}

                    {#snippet cardContent()}
                        <p>Este contenido viene de un snippet personalizado.</p>
                        <button class="btn-accion">Acción Principal</button>
                    {/snippet}

                    <!-- Usar el componente con snippets -->
                    <CardEjemplo header={cardHeader} content={cardContent}>
                        <p>Este es el contenido por defecto (children prop)</p>
                    </CardEjemplo>

                    <!-- Lista con snippets personalizados -->
                    {#snippet itemPersonalizado(
                        item: { nombre: string; activo: boolean },
                        index: number,
                    )}
                        <div class="item-custom">
                            <span class="numero">#{index + 1}</span>
                            <strong>{item.nombre}</strong>
                            <span
                                class="estado {item.activo
                                    ? 'activo'
                                    : 'inactivo'}"
                            >
                                {item.activo ? "✅ Activo" : "❌ Inactivo"}
                            </span>
                        </div>
                    {/snippet}

                    {#snippet itemVacio()}
                        <div class="vacio">🚫 No hay usuarios disponibles</div>
                    {/snippet}

                    <ListaEjemplo
                        items={usuarios}
                        itemTemplate={itemPersonalizado}
                        emptyTemplate={itemVacio}
                    />
                </div>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Los snippets permiten definir bloques
                de contenido reutilizable que puedes pasar a componentes
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Crear Componentes que Usan Snippets</h3>
            <p>
                <strong>Instrucción:</strong> Crea tus propios componentes que acepten
                snippets
            </p>

            <div class="instrucciones-snippets">
                <div class="paso">
                    <h4>🃏 Paso 1: Crear MiCard.svelte</h4>
                    <div class="codigo-crear">
                        <p>
                            <strong>Crear archivo:</strong>
                            <code
                                >src/lib/components/ejercicios/MiCard.svelte</code
                            >
                        </p>
                        <div class="codigo-ejemplo">
                            <pre><code
                                    >&lt;script lang="ts"&gt;
    import type &lcub; Snippet &rcub; from 'svelte';

    interface Props &lcub;
        titulo?: string;
        header?: Snippet;
        footer?: Snippet;
        children?: Snippet;
        variant?: 'default' | 'success' | 'warning' | 'error';
    &rcub;

    let &lcub;
        titulo = "Mi Card",
        header,
        footer,
        children,
        variant = 'default'
    &rcub;: Props = $props();
&lt;/script&gt;

&lt;div class="mi-card &lcub;variant&rcub;"&gt;
    &lcub;#if header&rcub;
        &lt;div class="card-header"&gt;
            &lcub;@render header()&rcub;
        &lt;/div&gt;
    &lcub;#else if titulo&rcub;
        &lt;div class="card-header"&gt;
            &lt;h3&gt;&lcub;titulo&rcub;&lt;/h3&gt;
        &lt;/div&gt;
    &lcub;/if&rcub;

    &lt;div class="card-body"&gt;
        &lcub;#if children&rcub;
            &lcub;@render children()&rcub;
        &lcub;:else&rcub;
            &lt;p&gt;Contenido por defecto&lt;/p&gt;
        &lcub;/if&rcub;
    &lt;/div&gt;

    &lcub;#if footer&rcub;
        &lt;div class="card-footer"&gt;
            &lcub;@render footer()&rcub;
        &lt;/div&gt;
    &lcub;/if&rcub;
&lt;/div&gt;

&lt;style&gt;
    .mi-card &lcub;
        background: white;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        border: 2px solid;
        transition: all 0.3s ease;
    &rcub;

    .mi-card &lcub;
        background: white;
        border-radius: 0.75rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        border: 2px solid;
        transition: all 0.3s ease;
    &rcub;
    .mi-card:hover &lcub;
        transform: translateY(-2px);
        box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.2);
    &rcub;

    .mi-card.default &lcub; border-color: #e5e7eb; &rcub;
    .mi-card.success &lcub; border-color: #10b981; &rcub;
    .mi-card.warning &lcub; border-color: #f59e0b; &rcub;
    .mi-card.error &lcub; border-color: #ef4444; &rcub;

    .card-header &lcub;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid #f3f4f6;
        background: #f8fafc;
    &rcub;

    .card-header h3 &lcub;
        margin: 0;
        color: #1f2937;
    &rcub;

    .card-body &lcub;
        padding: 1.5rem;
    &rcub;

    .card-footer &lcub;
        padding: 1rem 1.5rem;
        border-top: 1px solid #f3f4f6;
        background: #f8fafc;
    &rcub;

    .success .card-header,
    .success .card-footer &lcub; background: #ecfdf5; &rcub;

    .warning .card-header,
    .warning .card-footer &lcub; background: #fffbeb; &rcub;

    .error .card-header,
    .error .card-footer &lcub background: #fef2f2; &rcub;
&lt;/style&gt;</code
                                ></pre>
                        </div>
                    </div>
                </div>

                <div class="paso">
                    <h4>🪟 Paso 2: Crear MiModal.svelte</h4>
                    <div class="codigo-crear">
                        <p>
                            <strong>Crear archivo:</strong>
                            <code
                                >src/lib/components/ejercicios/MiModal.svelte</code
                            >
                        </p>
                        <div class="codigo-ejemplo">
                            <pre><code
                                    >&lt;script lang="ts"&gt;
    import type &lcub; Snippet &rcub; from 'svelte';
    import &lcub; createEventDispatcher &rcub; from 'svelte';

    interface Props &lcub;
        abierto: boolean;
        titulo?: string;
        header?: Snippet;
        footer?: Snippet;
        children?: Snippet;
    &rcub;

    let &lcub; abierto, titulo, header, footer, children &lcub;: Props = $props();

    const dispatch = createEventDispatcher&lt;&lcub;
        cerrar: &lcub;&rcub;
    &gt;();

    function cerrarModal() &lcub;
        dispatch('cerrar', &lcub;&rcub;);
    &rcub;

    function handleBackdropClick(event: MouseEvent) &lcub;
        if (event.target === event.currentTarget) &lcub;
            cerrarModal();
        &rcub;
    &rcub;
&lt;/script&gt;

&lcub;#if abierto&rcub;
    &lt;div class="modal-backdrop" onclick=&lcub;handleBackdropClick&rcub;
        &lt;div class="modal-content"&gt;
            &lcub;#if header&rcub;
                &lt;div class="modal-header"&gt;
                    &lcub;@render header()&rcub;
                    &lt;button class="btn-cerrar" onclick=&lcub;cerrarModal&rcub;✕&lt;/button&gt;
                &lt;/div&gt;
            &lcub;#else if titulo&rcub;
                &lt;div class="modal-header"&gt;
                    &lt;h2&gt;&lcub;titulo&rcub;&lt;/h2&gt;
                    &lt;button class="btn-cerrar" onclick=&lcub;cerrarModal&rcub;✕&lt;/button&gt;
                &lt;/div&gt;
            &lcub;#else&rcub;
                &lt;div class="modal-header-simple"&gt;
                    &lt;button class="btn-cerrar" onclick=&lcub;cerrarModal&rcub;✕&lt;/button&gt;
                &lt;/div&gt;
            &lcub;/if&rcub;

            &lt;div class="modal-body"&gt;
                &lcub;#if children&rcub;
                    &lcub;@render children()&rcub;
                &lcub;else
                    &lt;p&gt;Contenido del modal&lt;/p&gt;
                &lcub;/if&rcub;
            &lt;/div&gt;

            &lcub;#if footer&rcub;
                &lt;div class="modal-footer"&gt;
                    &lcub;@render footer()&rcub;
                &lt;/div&gt;
            &lcub;/if&rcub;
        &lt;/div&gt;
    &lt;/div&gt;
&lcub;/if&rcub;

&lt;style&gt;
    .modal-backdrop &lcub;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 1rem;
        box-sizing: border-box;
    &rcub;

    .modal-content &lcub;
        background: white;
        border-radius: 1rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        max-width: 500px;
        width: 100%;
        max-height: 90vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    &rcub;

    .modal-header &lcub;
        padding: 1.5rem;
        border-bottom: 1px solid #e5e7eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f8fafc;
    &rcub;

    .modal-header h2 &lcub;
        margin: 0;
        color: #1f2937;
    &rcub;

    .modal-header-simple &lcub;
        padding: 1rem;
        display: flex;
        justify-content: flex-end;
    &rcub;

    .btn-cerrar &lcub;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #6b7280;
        padding: 0.25rem;
        border-radius: 0.25rem;
        transition: all 0.2s ease;
    &rcub;

    .btn-cerrar:hover &lcub;
        background: #f3f4f6;
        color: #1f2937;
    &rcub;

    .modal-body &lcub;
        padding: 1.5rem;
        flex: 1;
        overflow-y: auto;
    &rcub;

    .modal-footer &lcub;    
        padding: 1rem 1.5rem;
        border-top: 1px solid #e5e7eb;
        background: #f8fafc;
        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;
    &rcub;
&lt;/style&gt;</code
                                ></pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mis-componentes-snippets">
                <!-- ✏️ DESCOMENTA ESTA SECCIÓN CUANDO HAYAS CREADO LOS COMPONENTES -->
                <!--
                <h4>🃏 Tus Cards con Snippets:</h4>
                <div class="grid-mis-cards">
                    {#snippet headerPersonalizado()}
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span style="font-size: 1.5rem;">🎨</span>
                            <div>
                                <h3 style="margin: 0;">Card Personalizada</h3>
                                <small style="color: #6b7280;">Con header snippet</small>
                            </div>
                        </div>
                    {/snippet}

                    {#snippet footerAcciones()}
                        <button style="background: #3b82f6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;">
                            💾 Guardar
                        </button>
                        <button style="background: #ef4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;">
                            🗑️ Eliminar
                        </button>
                    {/snippet}

                    <MiCard header={headerPersonalizado} footer={footerAcciones} variant="success">
                        <p>¡Esta card usa snippets personalizados para el header y footer!</p>
                        <p>El contenido del body viene del children prop.</p>
                    </MiCard>

                    <MiCard titulo="Card Simple" variant="warning">
                        <p>Esta card usa un título simple y contenido por defecto.</p>
                    </MiCard>

                    <MiCard variant="error">
                        <p>Card sin header, solo con contenido en el body.</p>
                    </MiCard>
                </div>

                <h4>🪟 Tu Modal con Snippets:</h4>
                <div class="modal-demo">
                    {#snippet modalHeader()}
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <span style="font-size: 2rem;">📋</span>
                            <div>
                                <h2 style="margin: 0;">Formulario de Contacto</h2>
                                <small style="color: #6b7280;">Completa la información</small>
                            </div>
                        </div>
                    {/snippet}

                    {#snippet modalContent()}
                        <div>
                            <div style="margin-bottom: 1rem;">
                                <label style="display: block; margin-bottom: 0.25rem; font-weight: 600;">Nombre:</label>
                                <input type="text" style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.25rem; box-sizing: border-box;" placeholder="Tu nombre">
                            </div>
                            <div style="margin-bottom: 1rem;">
                                <label style="display: block; margin-bottom: 0.25rem; font-weight: 600;">Email:</label>
                                <input type="email" style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.25rem; box-sizing: border-box;" placeholder="tu@email.com">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.25rem; font-weight: 600;">Mensaje:</label>
                                <textarea style="width: 100%; padding: 0.5rem; border: 1px solid #d1d5db; border-radius: 0.25rem; height: 80px; resize: vertical; box-sizing: border-box;" placeholder="Tu mensaje..."></textarea>
                            </div>
                        </div>
                    {/snippet}

                    {#snippet modalFooter()}
                        <button style="background: #6b7280; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;" onclick={() => modalAbierto = false}>
                            Cancelar
                        </button>
                        <button style="background: #10b981; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.25rem; cursor: pointer;" onclick={() => modalAbierto = false}>
                            ✅ Enviar
                        </button>
                    {/snippet}

                    <button class="btn-abrir-modal" onclick={() => modalAbierto = true}>
                        🪟 Abrir Modal con Snippets
                    </button>

                    <MiModal
                        abierto={modalAbierto}
                        header={modalHeader}
                        footer={modalFooter}
                        on:cerrar={() => modalAbierto = false}
                    >
                        {@render modalContent()}
                    </MiModal>
                </div>
                -->

                <div class="placeholder">
                    ✂️ Crea los componentes MiCard y MiModal para ver snippets
                    avanzados en acción
                </div>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Usa
                <code>type &lcub; Snippet &lcub; from 'svelte'</code> para tipear
                props que reciben snippets
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Snippets vs Slots - Comparación</h3>
            <p>
                <strong>Instrucción:</strong> Entiende la evolución de Svelte 4 a
                Svelte 5
            </p>

            <div class="comparacion">
                <div class="comparacion-grid">
                    <div class="comparacion-item">
                        <h4>🟨 Svelte 4 - Slots</h4>
                        <div class="codigo-ejemplo">
                            <pre><code
                                    >&lt;!-- Componente hijo --&gt;
&lt;div class="card"&gt;
    &lt;slot name="header" /&gt;
    &lt;slot /&gt;
    &lt;slot name="footer" /&gt;
&lt;/div&gt;

&lt;!-- Componente padre --&gt;
&lt;Card&gt;
    &lt;h3 slot="header"&gt;Título&lt;/h3&gt;
    &lt;p&gt;Contenido principal&lt;/p&gt;
    &lt;div slot="footer"&gt;
        &lt;button&gt;Acción&lt;/button&gt;
    &lt;/div&gt;
&lt;/Card&gt;</code
                                ></pre>
                        </div>
                    </div>

                    <div class="comparacion-item">
                        <h4>🟩 Svelte 5 - Snippets</h4>
                        <div class="codigo-ejemplo">
                            <pre><code
                                    >&lt;!-- Componente hijo --&gt;
&lt;script&gt;
    let &lcub; header, children, footer &rcub; = $props();
&lt;/script&gt;
&lt;div class="card"&gt;
    &lcub;@render header?.()&rcub;
    &lcub;@render children?.()&rcub;
    &lcub;@render footer?.()&rcub;
&lt;/div&gt;

&lt;!-- Componente padre --&gt;
{#snippet headerSnippet()}
                                        &lt;h3&gt;Título&lt;/h3&gt;
                                    {/snippet}

{#snippet footerSnippet()}
                                        &lt;button&gt;Acción&lt;/button&gt;
                                    {/snippet}

&lt;Card header={headerSnippet} footer={footerSnippet}&gt;
    &lt;p&gt;Contenido principal&lt;/p&gt;
&lt;/Card&gt;</code
                                ></pre>
                        </div>
                    </div>
                </div>

                <div class="ventajas">
                    <h4>✅ Ventajas de los Snippets:</h4>
                    <div class="ventajas-grid">
                        <div class="ventaja">
                            <strong>🔗 Más Explícito</strong>
                            <p>
                                Los snippets se pasan como props normales, más
                                claro que los slots mágicos
                            </p>
                        </div>
                        <div class="ventaja">
                            <strong>📊 Con Parámetros</strong>
                            <p>
                                Los snippets pueden recibir argumentos, como
                                funciones
                            </p>
                        </div>
                        <div class="ventaja">
                            <strong>🧩 Reutilizable</strong>
                            <p>
                                Puedes definir un snippet una vez y usarlo en
                                múltiples lugares
                            </p>
                        </div>
                        <div class="ventaja">
                            <strong>💡 Mejor TypeScript</strong>
                            <p>Mejor soporte de tipos y autocompletado</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Evolución:</strong> Los snippets son la evolución natural
                de los slots, más potentes y flexibles
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Qué Acabas de Aprender?</h2>

        <div class="concepto-teoria">
            <h3>✂️ ¿Qué son los Snippets?</h3>
            <p>
                Los snippets en Svelte 5 son bloques de contenido reutilizable
                que reemplazan a los slots. Son más flexibles porque pueden
                recibir parámetros y se pasan como props normales.
            </p>

            <div class="analogia">
                <h4>🧩 Analogía de Plantillas:</h4>
                <p>
                    Imagina que los snippets son como "plantillas" o "moldes"
                    que puedes crear una vez y usar múltiples veces, incluso con
                    datos diferentes cada vez.
                </p>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🛠️ Sintaxis de Snippets</h3>
            <div class="codigo-ejemplo">
                <pre><code
                        >// ✅ Definir un snippet
&lcub;#snippet nombreSnippet(parametro1, parametro2)&rcub;
    &lt;div&gt;&lcub;parametro1&lcub; - &lcub;parametro2&lcub;&lt;/div&gt;
&lcub;/snippet&rcub;

// ✅ Renderizar un snippet
&lcub;@render nombreSnippet('valor1', 'valor2')&rcub;

// ✅ Snippet condicional
&lcub;@render miSnippet?.()&rcub;

// ✅ En componentes
&lt;script&gt;
    import type &lcub; Snippet &rcub; from 'svelte';
    let &lcub; miSnippet &rcub;: &lcub; miSnippet?: Snippet &rcub; = $props();
&lt;/script&gt;</code
                    ></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>👶 El Prop Especial `children`</h3>
            <p>
                En Svelte 5, el contenido por defecto de un componente se pasa
                automáticamente como un prop especial llamado <code
                    >children</code
                >.
            </p>
            <div class="codigo-ejemplo">
                <pre><code
                        >// ✅ En el componente hijo
&lt;script&gt;
    let &lcub; children &rcub; = $props();
&lt;/script&gt;

&lt;div class="wrapper"&gt;
    &lcub;#if children&rcub;
        &lcub;@render children()&rcub;
    &lcub;:else&rcub;
        &lt;p&gt;Sin contenido&lt;/p&gt;
    &lcub;/if&rcub;
&lt;/div&gt;

// ✅ En el componente padre
&lt;MiComponente&gt;
    &lt;p&gt;Este contenido se pasa como children&lt;/p&gt;
&lt;/MiComponente&gt;</code
                    ></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>📋 Casos de Uso Comunes</h3>
            <div class="casos-uso">
                <div class="caso">
                    <h5>🃏 Layouts Flexibles</h5>
                    <p>Headers, sidebars, footers customizables</p>
                    <code
                        >header=&lcub;miHeader&lcub;
                        sidebar=&lcub;miSidebar&rcub;</code
                    >
                </div>
                <div class="caso">
                    <h5>📊 Renderizado de Items</h5>
                    <p>Templates personalizados para listas</p>
                    <code>itemTemplate=&lcub;miTemplate&rcub;</code>
                </div>
                <div class="caso">
                    <h5>🪟 Modals y Dialogs</h5>
                    <p>Contenido customizable para modals</p>
                    <code>content=&lcub;miContenido&rcub;</code>
                </div>
                <div class="caso">
                    <h5>📋 Formularios</h5>
                    <p>Campos y validaciones personalizadas</p>
                    <code>fieldTemplate=&lcub;miCampo&rcub;</code>
                </div>
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
                    <strong>Entender los snippets</strong> como reemplazo de slots
                    en Svelte 5
                </li>
                <li>
                    <strong>Crear MiCard.svelte</strong> que acepta snippets como
                    props
                </li>
                <li>
                    <strong>Crear MiModal.svelte</strong> con header, children y
                    footer snippets
                </li>
                <li>
                    <strong>Importar los componentes</strong> y descomentar las secciones
                </li>
                <li>
                    <strong>Experimentar</strong> con diferentes tipos de snippets
                    y parámetros
                </li>
            </ol>
            <p>
                <strong>🎉 Resultado:</strong> Dominio completo de snippets para
                crear componentes flexibles y reutilizables.
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

        <a href={navegacion.volver} class="btn btn-primario">
            🎉 ¡Completaste el Nivel 3! → Volver al Inicio
        </a>
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
        --color-snippet: #f0f9ff;
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

    /* Ejemplos de snippets */
    .ejemplos-snippets {
        margin: 1.5rem 0;
    }

    .ejemplo-basico,
    .ejemplo-componente {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: var(--color-snippet);
        border-radius: 0.75rem;
        border: 1px solid #0ea5e9;
    }

    .ejemplo-basico h4,
    .ejemplo-componente h4 {
        margin: 0 0 1rem 0;
        color: #0369a1;
    }

    .snippets-demo {
        margin-top: 1rem;
    }

    /* Elementos de snippets */
    .saludo {
        background: #dcfce7;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #10b981;
        margin: 0.5rem 0;
        text-align: center;
    }

    .producto-snippet {
        background: white;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
        margin: 0.5rem 0;
    }

    .producto-snippet h5 {
        margin: 0 0 0.5rem 0;
        color: var(--color-texto);
    }

    .producto-snippet .precio {
        font-weight: 700;
        color: #059669;
        margin: 0 0 0.25rem 0;
    }

    .producto-snippet .categoria {
        background: #e0f2fe;
        color: #0369a1;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .productos-snippets {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin: 1rem 0;
    }

    .stats-snippets {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin: 1rem 0;
    }

    .stat-card {
        background: white;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 2px solid #e5e7eb;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        transition: all 0.3s ease;
    }

    .stat-card:hover {
        border-color: var(--color-primario);
        transform: translateY(-2px);
    }

    .stat-icono {
        font-size: 2rem;
    }

    .stat-titulo {
        font-weight: 600;
        color: var(--color-texto);
        font-size: 0.9rem;
    }

    .stat-valor {
        font-weight: 700;
        color: var(--color-primario);
        font-size: 1.5rem;
    }

    .item-custom {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem;
        background: white;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
        margin: 0.5rem 0;
    }

    .item-custom .numero {
        background: var(--color-primario);
        color: white;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.875rem;
    }

    .item-custom .estado {
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .item-custom .estado.activo {
        background: #d1fae5;
        color: #065f46;
    }

    .item-custom .estado.inactivo {
        background: #fee2e2;
        color: #991b1b;
    }

    .vacio {
        text-align: center;
        color: var(--color-secundario);
        font-style: italic;
        padding: 2rem;
        background: #f8fafc;
        border-radius: 0.5rem;
        border: 2px dashed var(--color-borde);
    }

    .badge {
        background: #fbbf24;
        color: #92400e;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .btn-accion {
        background: #3b82f6;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .btn-accion:hover {
        background: #2563eb;
    }

    /* Instrucciones para crear snippets */
    .instrucciones-snippets {
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

    /* Mis componentes con snippets */
    .mis-componentes-snippets {
        margin: 1.5rem 0;
        padding: 1rem;
        background: var(--color-codigo);
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    /* Comparación */
    .comparacion {
        margin: 1.5rem 0;
        padding: 1.5rem;
        background: var(--color-codigo);
        border-radius: 0.75rem;
        border: 1px solid var(--color-borde);
    }

    .comparacion-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .comparacion-item {
        background: white;
        padding: 1.5rem;
        border-radius: 0.5rem;
        border: 2px solid var(--color-borde);
    }

    .comparacion-item h4 {
        margin: 0 0 1rem 0;
        text-align: center;
    }

    .ventajas h4 {
        margin: 0 0 1rem 0;
        color: #059669;
    }

    .ventajas-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
    }

    .ventaja {
        background: #ecfdf5;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #10b981;
    }

    .ventaja strong {
        display: block;
        color: #065f46;
        margin-bottom: 0.5rem;
    }

    .ventaja p {
        margin: 0;
        color: #047857;
        font-size: 0.9rem;
        line-height: 1.4;
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

    .analogia {
        background: #f0f9ff;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #3b82f6;
        margin: 1rem 0;
    }

    .analogia h4 {
        margin: 0 0 0.75rem 0;
        color: #1e40af;
    }

    /* Casos de uso */
    .casos-uso {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .caso {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .caso h5 {
        margin: 0 0 0.5rem 0;
        color: var(--color-texto);
        font-size: 1rem;
    }

    .caso p {
        margin: 0 0 0.5rem 0;
        color: var(--color-secundario);
        font-size: 0.9rem;
        line-height: 1.4;
    }

    .caso code {
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
        font-size: 0.8rem;
        display: block;
        margin-top: 0.5rem;
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
        .productos-snippets,
        .stats-snippets,
        .comparacion-grid,
        .ventajas-grid,
        .casos-uso {
            grid-template-columns: 1fr;
        }

        .codigo-ejemplo pre {
            font-size: 0.8rem;
        }
    }
</style>
