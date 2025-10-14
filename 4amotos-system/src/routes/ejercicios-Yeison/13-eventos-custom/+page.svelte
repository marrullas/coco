<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                           📡 EJERCICIO #13: EVENTOS CUSTOM                         ║
║                             🟠 NIVEL 3: COMPONENTES                                ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Aprender comunicación entre componentes usando eventos                    ║
║ CONCEPTOS: createEventDispatcher, eventos custom, comunicación hijo→padre          ║
║ TIEMPO ESTIMADO: 35 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Lee todas las instrucciones antes de empezar
    // 2. Completa cada tarea en orden
    // 3. Observa cómo los componentes pueden comunicarse entre sí

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - Cómo enviar datos desde un componente hijo al padre
    // - Crear y disparar eventos personalizados
    // - Escuchar eventos en el componente padre
    // - Pasar funciones como props para callbacks

    // ✏️ TAREA 1: Importar componentes de ejemplo
    import ContadorEventoEjemplo from "$lib/components/ejercicios/ContadorEventoEjemplo.svelte";
    import FormularioEventoEjemplo from "$lib/components/ejercicios/FormularioEventoEjemplo.svelte";

    // TODO: Importa estos componentes después de crearlos:
    import MiBotonEvento from '$lib/components/ejercicios/MiBotonEvento.svelte';
    import MiFormularioEvento from '$lib/components/ejercicios/MiFormularioEvento.svelte';
    import MiTodoItem from '$lib/components/ejercicios/MiTodoItem.svelte';

    // ✅ ESTADO DEL COMPONENTE PADRE
    let mensajeRecibido = $state<string>("Esperando eventos...");
    let contadorTotal = $state<number>(0);
    let listaEventos = $state<string[]>([]);

    // Lista de tareas de ejemplo
    let tareas = $state([
        { id: 1, texto: "Aprender Svelte 5", completada: false },
        { id: 2, texto: "Crear componentes", completada: true },
        { id: 3, texto: "Usar eventos custom", completada: false },
    ]);

    // ✅ FUNCIONES PARA MANEJAR EVENTOS
    function handleContadorCambio(
        evento: CustomEvent<{ valor: number; accion: string }>,
    ) {
        const { valor, accion } = evento.detail;
        contadorTotal = valor;
        agregarEvento(`Contador ${accion}: ${valor}`);
    }

    function handleFormularioEnviado(
        evento: CustomEvent<{ nombre: string; email: string }>,
    ) {
        const { nombre, email } = evento.detail;
        mensajeRecibido = `Formulario enviado: ${nombre} (${email})`;
        agregarEvento(`Formulario enviado por ${nombre}`);
    }

    function handleMensajePersonalizado(
        evento: CustomEvent<{ mensaje: string; tipo: string }>,
    ) {
        const { mensaje, tipo } = evento.detail;
        mensajeRecibido = `${tipo}: ${mensaje}`;
        agregarEvento(`Mensaje ${tipo}: ${mensaje}`);
    }

    function agregarEvento(evento: string) {
        const tiempo = new Date().toLocaleTimeString();
        listaEventos.unshift(`[${tiempo}] ${evento}`);
        // Mantener solo los últimos 10 eventos
        if (listaEventos.length > 10) {
            listaEventos = listaEventos.slice(0, 10);
        }
    }

    function handleTodoToggle(evento: CustomEvent<{ id: number; completada: boolean }>) {
        const { id, completada } = evento.detail;
        tareas = tareas.map(tarea =>
            tarea.id === id ? { ...tarea, completada } : tarea
        );
        agregarEvento(`Tarea ${id} ${completada ? 'completada' : 'desmarcada'}`);
    }

    function handleTodoDelete(evento: CustomEvent<{ id: number }>) {
        const { id } = evento.detail;
        const tareaEliminada = tareas.find(t => t.id === id);
        tareas = tareas.filter(tarea => tarea.id !== id);
        agregarEvento(`Tarea "${tareaEliminada?.texto}" eliminada`);
    }

    function handleTodoEdit(evento: CustomEvent<{ id: number; nuevoTexto: string }>) {
        const { id, nuevoTexto } = evento.detail;
        tareas = tareas.map(tarea =>
            tarea.id === id ? { ...tarea, texto: nuevoTexto } : tarea
        );
        agregarEvento(`Tarea ${id} editada: "${nuevoTexto}"`);
    }

    function limpiarEventos() {
        listaEventos = [];
        mensajeRecibido = "Eventos limpiados";
    }

    // 🧭 Navegación dinámica
    import { page } from "$app/state";
    import { obtenerNavegacionEjercicio } from "$lib/utils/navigation.js";

    const navegacion = $derived(
        obtenerNavegacionEjercicio(page.url.pathname, {
            id: "13",
            titulo: "eventos-custom",
        }),
    );
</script>

<svelte:head>
    <title>Ejercicio 13: Eventos Custom - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📡 Ejercicio #13: Eventos Custom</h1>
        <div class="nivel">🟠 NIVEL 3: COMPONENTES</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Entender la comunicación entre componentes hijo → padre</li>
                <li>
                    Crear eventos personalizados usando <code
                        >createEventDispatcher</code
                    >
                </li>
                <li>Escuchar eventos custom en componentes padre</li>
                <li>Pasar datos através de eventos con <code>detail</code></li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Nuevos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>Event Dispatcher</strong>
                    <span>Crea eventos personalizados</span>
                </div>
                <div class="concepto">
                    <strong>CustomEvent</strong>
                    <span>Evento con datos custom</span>
                </div>
                <div class="concepto">
                    <strong>on:evento</strong>
                    <span>Escucha eventos en el padre</span>
                </div>
                <div class="concepto">
                    <strong>event.detail</strong>
                    <span>Datos del evento custom</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <!-- Panel de estado global -->
        <div class="panel-estado">
            <h3>📊 Estado Global del Componente Padre</h3>
            <div class="estado-grid">
                <div class="estado-item">
                    <span class="etiqueta">Último mensaje:</span>
                    <span class="valor">{mensajeRecibido}</span>
                </div>
                <div class="estado-item">
                    <span class="etiqueta">Contador total:</span>
                    <span class="valor contador">{contadorTotal}</span>
                </div>
                <div class="estado-item">
                    <span class="etiqueta">Eventos registrados:</span>
                    <span class="valor">{listaEventos.length}</span>
                </div>
            </div>
        </div>

        <div class="tarea">
            <h3>📡 Tarea 1: Eventos en Acción (Funcionando)</h3>
            <p>
                <strong>Instrucción:</strong> Interactúa con estos componentes y
                observa cómo se comunican
            </p>

            <div class="ejemplos-eventos">
                <div class="ejemplo-seccion">
                    <h4>🔢 Contador con Eventos:</h4>
                    <div class="contador-wrapper">
                        <ContadorEventoEjemplo
                            valorInicial={5}
                            on:cambio={handleContadorCambio}
                            on:maximo={(e) =>
                                handleMensajePersonalizado(
                                    new CustomEvent("mensaje", {
                                        detail: {
                                            mensaje: `Valor máximo alcanzado: ${e.detail.valor}`,
                                            tipo: "Alerta",
                                        },
                                    }),
                                )}
                            on:minimo={(e) =>
                                handleMensajePersonalizado(
                                    new CustomEvent("mensaje", {
                                        detail: {
                                            mensaje: `Valor mínimo alcanzado: ${e.detail.valor}`,
                                            tipo: "Info",
                                        },
                                    }),
                                )}
                        />
                    </div>
                    <div class="explicacion">
                        💡 <strong>Eventos múltiples:</strong> Este contador
                        emite eventos <code>cambio</code>,
                        <code>maximo</code> y <code>minimo</code> según las acciones
                        del usuario.
                    </div>
                </div>

                <div class="ejemplo-seccion">
                    <h4>📝 Formulario con Eventos:</h4>
                    <div class="formulario-wrapper">
                        <FormularioEventoEjemplo
                            on:enviado={handleFormularioEnviado}
                            on:cancelado={(e) =>
                                handleMensajePersonalizado(
                                    new CustomEvent("mensaje", {
                                        detail: {
                                            mensaje: "Formulario cancelado",
                                            tipo: "Warning",
                                        },
                                    }),
                                )}
                            on:cambio={(e) =>
                                handleMensajePersonalizado(
                                    new CustomEvent("mensaje", {
                                        detail: {
                                            mensaje: `Campo modificado: ${e.detail.campo}`,
                                            tipo: "Info",
                                        },
                                    }),
                                )}
                        />
                    </div>
                    <div class="explicacion">
                        💡 <strong>Comunicación bidireccional:</strong> El formulario
                        envía datos al padre y notifica cambios en tiempo real.
                    </div>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Los componentes hijos envían eventos
                al padre con datos específicos
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Crear Componentes con Eventos</h3>
            <p>
                <strong>Instrucción:</strong> Crea tus propios componentes que emitan
                eventos
            </p>

            <div class="instrucciones-eventos">
                <div class="paso">
                    <h4>🔘 Paso 1: Crear MiBotonEvento.svelte</h4>
                    <div class="codigo-crear">
                        <p>
                            <strong>Crear archivo:</strong>
                            <code
                                >src/lib/components/ejercicios/MiBotonEvento.svelte</code
                            >
                        </p>
                        <div class="codigo-ejemplo">
                            <pre><code
                                    >&lt;script lang="ts"&gt;
    import &lcub; createEventDispatcher &rcub; from 'svelte';

    interface Props &lcub;
        texto: string;
        tipo?: 'primary' | 'success' | 'warning' | 'danger';
        datos?: any;
    &rcub;

    let &lcub; texto, tipo = 'primary', datos &rcub;: Props = $props();

    // Crear el dispatcher de eventos
    const dispatch = createEventDispatcher&lt;&lcub;
        click: &lcub; texto: string; tipo: string; timestamp: number; datos?: any &rcub;;&lt;/lcub;
        hover: &lcub; accion: string &rcub;;&lt;/lcub;
    &gt;();

    let clicCount = $state(0);

    function handleClick() &lcub;
        clicCount++;

        // Disparar evento personalizado con datos
        dispatch('click', &lcub;
            texto,
            tipo,
            timestamp: Date.now(),
            datos: &lcub; ...datos, clicCount &rcub;
        &rcub;);
    &rcub;

    function handleMouseEnter() &lcub;
        dispatch('hover', &lcub; accion: 'enter' &rcub;);
    &rcub;

    function handleMouseLeave() &lcub;
        dispatch('hover', &lcub; accion: 'leave' &rcub;);
    &rcub;
&lt;/script&gt;

&lt;button
    class="mi-boton-evento &lcub;tipo&rcub;"
    onclick=&lcub;handleClick&rcub;
    onmouseenter=&lcub;handleMouseEnter&rcub;
    onmouseleave=&lcub;handleMouseLeave&rcub;
&gt;
    &lcub;texto&rcub; (&lcub;clicCount&rcub;)
&lt;/button&gt;

&lt;style&gt;
    .mi-boton-evento &lcub;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
        min-width: 140px;
    &rcub;

    .mi-boton-evento:hover &lcub;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    &rcub;

    .primary &lcub;
        background: #3b82f6;
        color: white;
    &rcub;

    .success &lcub;
        background: #10b981;
        color: white;
    &rcub;

    .warning &lcub;
        background: #f59e0b;
        color: white;
    &rcub;

    .danger &lcub;
        background: #ef4444;
        color: white;
    &rcub;

    .primary:hover &lcub; background: #2563eb; &rcub;
    .success:hover &lcub; background: #059669; &rcub;
    .warning:hover &lcub; background: #d97706; &rcub;
    .danger:hover &lcub; background: #dc2626; &rcub;
&lt;/style&gt;</code
                                ></pre>
                        </div>
                    </div>
                </div>

                <div class="paso">
                    <h4>📝 Paso 2: Crear MiFormularioEvento.svelte</h4>
                    <div class="codigo-crear">
                        <p>
                            <strong>Crear archivo:</strong>
                            <code
                                >src/lib/components/ejercicios/MiFormularioEvento.svelte</code
                            >
                        </p>
                        <div class="codigo-ejemplo">
                            <pre><code
                                    >Como solicitaste, aquí está el bloque de código que me proporcionaste, pero formateado como texto plano para evitar su interpretación por un compilador o navegador. Se han reemplazado los caracteres especiales de HTML y las llaves de Svelte por sus respectivas entidades HTML.

&lt;script lang="ts"&gt;
    import &lcub; createEventDispatcher &rcub; from 'svelte';

    interface Props &lcub;
        titulo?: string;
    &rcub;

    let &lcub; titulo = "Mi Formulario" &rcub;: Props = $props();

    const dispatch = createEventDispatcher&lt;&lcub;
        enviado: &lcub; nombre: string; email: string; mensaje: string &rcub;;&lt;/lcub;
        validacion: &lcub; campo: string; valido: boolean; error?: string &rcub;;&lt;/lcub;
        focus: &lcub; campo: string &rcub;;&lt;/lcub;
    &gt;();

    let nombre = $state('');
    let email = $state('');
    let mensaje = $state('');

    function validarEmail(email: string): boolean &lcub;
        return /&circ;[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    &rcub;

    function handleSubmit() &lcub;
        // Validar antes de enviar
        if (!nombre.trim()) &lcub;
            dispatch('validacion', &lcub;
                campo: 'nombre',
                valido: false,
                error: 'El nombre es requerido'
            &rcub;);
            return;
        &rcub;

        if (!validarEmail(email)) &lcub;
            dispatch('validacion', &lcub;
                campo: 'email',
                valido: false,
                error: 'Email inv&aacute;lido'
            &rcub;);
            return;
        &rcub;

        // Enviar datos
        dispatch('enviado', &lcub; nombre, email, mensaje &rcub;);

        // Limpiar formulario
        nombre = '';
        email = '';
        mensaje = '';
    &rcub;

    function handleFocus(campo: string) &lcub;
        dispatch('focus', &lcub; campo &rcub;);
    &rcub;
&lt;/script&gt;

&lt;div class="mi-formulario-evento"&gt;
    &lt;h3&gt;&lcub;titulo&rcub;&lt;/h3&gt;

    &lt;form on:submit|preventDefault=&lcub;handleSubmit&rcub;&gt;
        &lt;div class="campo"&gt;
            &lt;label for="nombre"&gt;Nombre:&lt;/label&gt;
            &lt;input
                id="nombre"
                type="text"
                bind:value=&lcub;nombre&rcub;
                on:focus=&lcub;() =&gt; handleFocus('nombre')&rcub;
                placeholder="Tu nombre"
            /&gt;
        &lt;/div&gt;

        &lt;div class="campo"&gt;
            &lt;label for="email"&gt;Email:&lt;/label&gt;
            &lt;input
                id="email"
                type="email"
                bind:value=&lcub;email&rcub;
                on:focus=&lcub;() =&gt; handleFocus('email')&rcub;
                placeholder="tu@email.com"
            /&gt;
        &lt;/div&gt;

        &lt;div class="campo"&gt;
            &lt;label for="mensaje"&gt;Mensaje:&lt;/label&gt;
            &lt;textarea
                id="mensaje"
                bind:value=&lcub;mensaje&rcub;
                on:focus=&lcub;() =&gt; handleFocus('mensaje')&rcub;
                placeholder="Tu mensaje..."
                rows="3"
            &gt;&lt;/textarea&gt;
        &lt;/div&gt;

        &lt;button type="submit" class="btn-enviar"&gt;
            Enviar Evento
        &lt;/button&gt;
    &lt;/form&gt;
&lt;/div&gt;

&lt;style&gt;
    .mi-formulario-evento &lcub;
        background: white;
        padding: 1.5rem;
        border-radius: 0.75rem;
        border: 2px solid #e5e7eb;
        max-width: 400px;
    &rcub;

    .mi-formulario-evento h3 &lcub;
        margin: 0 0 1rem 0;
        color: #1f2937;
        text-align: center;
    &rcub;

    .campo &lcub;
        margin-bottom: 1rem;
    &rcub;

    .campo label &lcub;
        display: block;
        margin-bottom: 0.25rem;
        font-weight: 600;
        color: #374151;
    &rcub;

    .campo input,
    .campo textarea &lcub;
        width: 100%;
        padding: 0.5rem;
        border: 2px solid #d1d5db;
        border-radius: 0.5rem;
        font-size: 1rem;
        transition: border-color 0.2s ease;
        box-sizing: border-box;
    &rcub;

    .campo input:focus,
    .campo textarea:focus &lcub;
        outline: none;
        border-color: #3b82f6;
    &rcub;

    .btn-enviar &lcub;
        width: 100%;
        padding: 0.75rem;
        background: #10b981;
        color: white;
        border: none;
        border-radius: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
    &rcub;

    .btn-enviar:hover &lcub;
        background: #059669;
        transform: translateY(-1px);
    &rcub;
&lt;/style&gt;</code
                                ></pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mis-componentes-eventos">
                <h4>🔘 Tus Botones con Eventos:</h4>
                <div class="grid-mis-botones">
                    <MiBotonEvento
                        texto="Acción Principal"
                        tipo="primary"
                        datos={{ categoria: 'principal' }}
                        on:click={(e) => handleMensajePersonalizado(new CustomEvent('mensaje', { detail: { mensaje: `Botón clickeado: ${e.detail.texto}`, tipo: 'Click' } }))}
                        on:hover={(e) => handleMensajePersonalizado(new CustomEvent('mensaje', { detail: { mensaje: `Hover ${e.detail.accion} en botón`, tipo: 'Hover' } }))}
                    />
                    <MiBotonEvento
                        texto="Guardar"
                        tipo="success"
                        datos={{ categoria: 'guardar' }}
                        on:click={(e) => handleMensajePersonalizado(new CustomEvent('mensaje', { detail: { mensaje: `Guardado exitoso`, tipo: 'Éxito' } }))}
                    />
                    <MiBotonEvento
                        texto="Advertencia"
                        tipo="warning"
                        on:click={(e) => handleMensajePersonalizado(new CustomEvent('mensaje', { detail: { mensaje: `Acción de advertencia`, tipo: 'Alerta' } }))}
                    />
                    <MiBotonEvento
                        texto="Eliminar"
                        tipo="danger"
                        on:click={(e) => handleMensajePersonalizado(new CustomEvent('mensaje', { detail: { mensaje: `¡Elemento eliminado!`, tipo: 'Eliminado' } }))}
                    />
                </div>

                <h4>📝 Tu Formulario con Eventos:</h4>
                <div class="mi-formulario-wrapper">
                    <MiFormularioEvento
                        titulo="Formulario de Contacto"
                        on:enviado={(e) => handleMensajePersonalizado(new CustomEvent('mensaje', { detail: { mensaje: `Contacto de ${e.detail.nombre} recibido`, tipo: 'Enviado' } }))}
                        on:validacion={(e) => handleMensajePersonalizado(new CustomEvent('mensaje', { detail: { mensaje: `Error en ${e.detail.campo}: ${e.detail.error}`, tipo: 'Error' } }))}
                        on:focus={(e) => handleMensajePersonalizado(new CustomEvent('mensaje', { detail: { mensaje: `Editando campo: ${e.detail.campo}`, tipo: 'Focus' } }))}
                    />
                </div>

                <h4>📋 Tu Lista de Tareas con Eventos:</h4>
                <div class="mi-todo-wrapper">
                    {#each tareas as tarea (tarea.id)}
                        <MiTodoItem
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            on:toggle={handleTodoToggle}
                            on:delete={handleTodoDelete}
                            on:edit={handleTodoEdit}
                        />
                    {/each}
                    {#if tareas.length === 0}
                        <div class="sin-tareas">No hay tareas pendientes</div>
                    {/if}
                </div>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Usa
                <code>createEventDispatcher()</code>
                para crear eventos y <code>dispatch('nombre', datos)</code> para
                enviarlos
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Registro de Eventos en Tiempo Real</h3>
            <p>
                <strong>Instrucción:</strong> Observa todos los eventos que se disparan
            </p>

            <div class="registro-eventos">
                <div class="header-registro">
                    <h4>📋 Registro de Eventos</h4>
                    <button class="btn-limpiar" onclick={limpiarEventos}
                        >🗑️ Limpiar</button
                    >
                </div>

                <div class="lista-eventos">
                    {#each listaEventos as evento, index}
                        <div class="evento-item" class:nuevo={index === 0}>
                            {evento}
                        </div>
                    {:else}
                        <div class="sin-eventos">
                            No hay eventos registrados. ¡Interactúa con los
                            componentes!
                        </div>
                    {/each}
                </div>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Cada interacción con los componentes
                genera eventos que puedes capturar y procesar
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Qué Acabas de Aprender?</h2>

        <div class="concepto-teoria">
            <h3>📡 Eventos Custom en Svelte</h3>
            <p>
                Los eventos custom permiten que los componentes hijos se
                comuniquen con sus padres. Es la forma principal de enviar datos
                "hacia arriba" en la jerarquía de componentes.
            </p>

            <div class="flujo-comunicacion">
                <h4>🔄 Flujo de Comunicación:</h4>
                <div class="flujo-pasos">
                    <div class="paso">
                        <span class="numero">1</span>
                        <div class="contenido">
                            <strong>Props ↓</strong>
                            <p>Padre envía datos al hijo</p>
                        </div>
                    </div>
                    <div class="paso">
                        <span class="numero">2</span>
                        <div class="contenido">
                            <strong>Eventos ↑</strong>
                            <p>Hijo envía eventos al padre</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🛠️ Creando Eventos Custom</h3>
            <div class="codigo-ejemplo">
                <pre><code
                        >// ✅ En el componente hijo
&lt;script&gt;
    import &lcub; createEventDispatcher &rcub; from 'svelte';

    // Definir tipos de eventos (TypeScript)
    const dispatch = createEventDispatcher&lt;&lcub;
        click: &lcub; value: number &rcub;;&lt;/lcub;
        change: &lcub; oldValue: number; newValue: number &rcub;;&lt;/lcub;
    &gt;();

    function handleClick() &lcub;
        // Disparar evento con datos
        dispatch('click', &lcub; value: 42 &rcub;);
    &lcub;
&lt;/script&gt;

&lt;!-- En el componente padre --&gt;
&lt;MiComponente
    on:click=&lcub;(event) =&gt; console.log(event.detail.value)&rcub;
    on:change=&lcub;handleChange&rcub;
/&gt;</code
                    ></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>📋 Buenas Prácticas para Eventos</h3>
            <div class="buenas-practicas">
                <div class="practica">
                    <h5>✅ Nombres Descriptivos</h5>
                    <p>
                        Usa nombres claros: <code>usuarioRegistrado</code> en
                        lugar de <code>click</code>.
                    </p>
                </div>
                <div class="practica">
                    <h5>✅ Datos Útiles</h5>
                    <p>
                        Incluye toda la información que el padre necesite en <code
                            >event.detail</code
                        >.
                    </p>
                </div>
                <div class="practica">
                    <h5>✅ Tipos TypeScript</h5>
                    <p>Define interfaces para los datos de tus eventos.</p>
                </div>
                <div class="practica">
                    <h5>✅ Eventos Específicos</h5>
                    <p>
                        Crea eventos para acciones específicas en lugar de
                        eventos genéricos.
                    </p>
                </div>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>⚡ Casos de Uso Comunes</h3>
            <div class="casos-uso">
                <div class="caso">
                    <h5>📝 Formularios</h5>
                    <p>Enviar datos cuando se valida o envía el formulario</p>
                    <code>on:submitted=&lcub;handleSubmit&rcub;</code>
                </div>
                <div class="caso">
                    <h5>🛒 Lista de Items</h5>
                    <p>
                        Notificar cuando se selecciona, edita o elimina un item
                    </p>
                    <code>on:itemSelected=&lcub;handleSelect&rcub;</code>
                </div>
                <div class="caso">
                    <h5>🎮 Componentes UI</h5>
                    <p>Comunicar cambios de estado (modals, tabs, etc.)</p>
                    <code>on:modalClosed=&lcub;handleClose&rcub;</code>
                </div>
                <div class="caso">
                    <h5>📊 Datos</h5>
                    <p>Notificar cambios en datos o estado interno</p>
                    <code>on:dataChanged=&lcub;handleDataChange&rcub;</code>
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
                    <strong>Crear MiBotonEvento.svelte</strong> con eventos
                    <code>click</code>
                    y <code>hover</code>
                </li>
                <li>
                    <strong>Crear MiFormularioEvento.svelte</strong> con eventos
                    <code>enviado</code>, <code>validacion</code> y
                    <code>focus</code>
                </li>
                <li>
                    <strong>Importar los componentes</strong> en el script principal
                </li>
                <li>
                    <strong>Descomentar las secciones</strong> para ver los eventos
                    funcionando
                </li>
                <li>
                    <strong>Observar el registro</strong> de eventos en tiempo real
                </li>
            </ol>
            <p>
                <strong>🎉 Resultado:</strong> Comunicación fluida entre componentes
                usando eventos personalizados.
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
        --color-evento: #dbeafe;
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

    /* Panel de estado global */
    .panel-estado {
        background: var(--color-evento);
        padding: 1.5rem;
        border-radius: 0.75rem;
        border: 2px solid #3b82f6;
        margin-bottom: 2rem;
    }

    .panel-estado h3 {
        margin: 0 0 1rem 0;
        color: #1e40af;
    }

    .estado-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }

    .estado-item {
        background: white;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #93c5fd;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .estado-item .etiqueta {
        font-weight: 600;
        color: var(--color-texto);
    }

    .estado-item .valor {
        font-weight: 700;
        color: #1e40af;
        font-family: "Monaco", monospace;
    }

    .estado-item .valor.contador {
        font-size: 1.25rem;
        color: var(--color-primario);
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

    /* Ejemplos de eventos */
    .ejemplos-eventos {
        margin: 1.5rem 0;
    }

    .ejemplo-seccion {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: var(--color-codigo);
        border-radius: 0.75rem;
        border: 1px solid var(--color-borde);
    }

    .ejemplo-seccion h4 {
        margin: 0 0 1rem 0;
        color: var(--color-texto);
    }

    .contador-wrapper,
    .formulario-wrapper {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .explicacion {
        background: #e0f2fe;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #0ea5e9;
        color: #0c4a6e;
        font-size: 0.9rem;
    }

    /* Instrucciones para crear eventos */
    .instrucciones-eventos {
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

    /* Mis componentes con eventos */
    .mis-componentes-eventos {
        margin: 1.5rem 0;
        padding: 1rem;
        background: var(--color-codigo);
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    /* Registro de eventos */
    .registro-eventos {
        margin: 1.5rem 0;
        padding: 1rem;
        background: var(--color-codigo);
        border-radius: 0.75rem;
        border: 1px solid var(--color-borde);
    }

    .header-registro {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .header-registro h4 {
        margin: 0;
        color: var(--color-texto);
    }

    .btn-limpiar {
        padding: 0.5rem 1rem;
        background: #ef4444;
        color: white;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .btn-limpiar:hover {
        background: #dc2626;
    }

    .lista-eventos {
        max-height: 300px;
        overflow-y: auto;
        background: white;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .evento-item {
        padding: 0.75rem;
        border-bottom: 1px solid #f3f4f6;
        font-family: "Monaco", monospace;
        font-size: 0.875rem;
        color: var(--color-texto);
        transition: all 0.3s ease;
    }

    .evento-item:last-child {
        border-bottom: none;
    }

    .evento-item.nuevo {
        background: #fef3c7;
        border-color: #f59e0b;
        font-weight: 600;
    }

    .sin-eventos {
        padding: 2rem;
        text-align: center;
        color: var(--color-secundario);
        font-style: italic;
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

    .flujo-comunicacion {
        background: #f0f9ff;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #3b82f6;
        margin: 1rem 0;
    }

    .flujo-comunicacion h4 {
        margin: 0 0 1rem 0;
        color: #1e40af;
    }

    .flujo-pasos {
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }

    .flujo-pasos .paso {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        background: white;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 2px solid #93c5fd;
    }

    .flujo-pasos .paso .numero {
        background: #3b82f6;
        color: white;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        flex-shrink: 0;
    }

    .flujo-pasos .paso .contenido strong {
        display: block;
        color: var(--color-texto);
        margin-bottom: 0.25rem;
    }

    .flujo-pasos .paso .contenido p {
        margin: 0;
        color: var(--color-secundario);
        font-size: 0.9rem;
    }

    .buenas-practicas {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .practica {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        border-left: 4px solid #10b981;
    }

    .practica h5 {
        margin: 0 0 0.5rem 0;
        color: #065f46;
        font-size: 1rem;
    }

    .practica p {
        margin: 0;
        color: var(--color-secundario);
        font-size: 0.9rem;
        line-height: 1.4;
    }

    .practica code {
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.2rem 0.4rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
        font-size: 0.8rem;
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
        .estado-grid,
        .buenas-practicas,
        .casos-uso {
            grid-template-columns: 1fr;
        }

        .flujo-pasos {
            flex-direction: column;
            gap: 1rem;
        }

        .codigo-ejemplo pre {
            font-size: 0.8rem;
        }

        .lista-eventos {
            max-height: 200px;
        }
    }
</style>
