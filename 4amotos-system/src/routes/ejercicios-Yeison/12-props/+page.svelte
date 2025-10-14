<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                              📤 EJERCICIO #12: PROPS                               ║
║                             🟠 NIVEL 3: COMPONENTES                                ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Aprender a pasar datos entre componentes usando props                     ║
║ CONCEPTOS: $props(), props requeridas, props opcionales, tipos                     ║
║ TIEMPO ESTIMADO: 30 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Lee todas las instrucciones antes de empezar
    // 2. Completa cada tarea en orden
    // 3. Observa cómo los props permiten que los componentes sean más flexibles

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - Qué son los props y para qué sirven
    // - Cómo definir props requeridas y opcionales
    // - Tipos de datos que pueden pasarse como props
    // - Valores por defecto en props opcionales

    // ✏️ TAREA 1: Importar componentes de ejemplo
    import TarjetaPerfilEjemplo from "$lib/components/ejercicios/TarjetaPerfilEjemplo.svelte";
    import ProductoCardEjemplo from "$lib/components/ejercicios/ProductoCardEjemplo.svelte";

    // Componentes creados por el estudiante
    import MiTarjetaPerfil from '$lib/components/ejercicios/MiTarjetaPerfil.svelte';
    import MiNotificacion from '$lib/components/ejercicios/MiNotificacion.svelte';
    import MiProgreso from '$lib/components/ejercicios/MiProgreso.svelte';

    // ✅ DATOS DE EJEMPLO
    let usuarios = $state([
        {
            id: 1,
            nombre: "Ana García",
            email: "ana@correo.com",
            avatar: "👩‍💻",
            rol: "Desarrolladora",
            activo: true,
        },
        {
            id: 2,
            nombre: "Carlos López",
            email: "carlos@correo.com",
            avatar: "👨‍🎨",
            rol: "Diseñador",
            activo: false,
        },
        {
            id: 3,
            nombre: "María Rodríguez",
            email: "maria@correo.com",
            avatar: "👩‍💼",
            rol: "Product Manager",
            activo: true,
        },
    ]);

    let productos = $state([
        {
            id: 1,
            nombre: "Laptop Gaming",
            precio: 1299,
            imagen: "💻",
            enStock: true,
            descuento: 15,
        },
        {
            id: 2,
            nombre: "Mouse Inalámbrico",
            precio: 79,
            imagen: "🖱️",
            enStock: true,
            descuento: 0,
        },
        {
            id: 3,
            nombre: "Teclado Mecánico",
            precio: 159,
            imagen: "⌨️",
            enStock: false,
            descuento: 25,
        },
    ]);

    // 🧭 Navegación dinámica
    import { page } from "$app/state";
    import { obtenerNavegacionEjercicio } from "$lib/utils/navigation.js";

    const navegacion = $derived(
        obtenerNavegacionEjercicio(page.url.pathname, {
            id: "12",
            titulo: "props",
        }),
    );
</script>

<svelte:head>
    <title>Ejercicio 12: Props - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📤 Ejercicio #12: Props</h1>
        <div class="nivel">🟠 NIVEL 3: COMPONENTES</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Entender qué son los props y para qué sirven</li>
                <li>
                    Definir props requeridas y opcionales usando <code
                        >$props()</code
                    >
                </li>
                <li>Pasar diferentes tipos de datos como props</li>
                <li>Usar valores por defecto en props opcionales</li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Nuevos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>Props</strong>
                    <span>Datos que se pasan al componente</span>
                </div>
                <div class="concepto">
                    <strong>$props()</strong>
                    <span>Función de Svelte 5 para recibir props</span>
                </div>
                <div class="concepto">
                    <strong>Requeridas</strong>
                    <span>Props que son obligatorias</span>
                </div>
                <div class="concepto">
                    <strong>Opcionales</strong>
                    <span>Props con valores por defecto</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <div class="tarea">
            <h3>📤 Tarea 1: Props en Acción (Funcionando)</h3>
            <p>
                <strong>Instrucción:</strong> Observa cómo los mismos componentes
                muestran datos diferentes
            </p>

            <div class="ejemplos-props">
                <div class="ejemplo-seccion">
                    <h4>👥 Tarjetas de Perfil con Props:</h4>
                    <div class="grid-perfiles">
                        {#each usuarios as usuario}
                            <TarjetaPerfilEjemplo
                                nombre={usuario.nombre}
                                email={usuario.email}
                                avatar={usuario.avatar}
                                rol={usuario.rol}
                                activo={usuario.activo}
                            />
                        {/each}
                    </div>
                    <div class="explicacion">
                        💡 <strong>¡Mismo componente, datos diferentes!</strong>
                        El componente <code>TarjetaPerfilEjemplo</code>
                        se reutiliza 3 veces con props diferentes para cada usuario.
                    </div>
                </div>

                <div class="ejemplo-seccion">
                    <h4>🛍️ Productos con Props Opcionales:</h4>
                    <div class="grid-productos">
                        {#each productos as producto}
                            <ProductoCardEjemplo
                                nombre={producto.nombre}
                                precio={producto.precio}
                                imagen={producto.imagen}
                                enStock={producto.enStock}
                                descuento={producto.descuento}
                            />
                        {/each}
                    </div>
                    <div class="explicacion">
                        💡 <strong
                            >Props opcionales con valores por defecto!</strong
                        > Algunos productos tienen descuento, otros no. El componente
                        maneja ambos casos automáticamente.
                    </div>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Los props permiten que un componente
                sea flexible y reutilizable con diferentes datos
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Crear Componentes con Props</h3>
            <p>
                <strong>Instrucción:</strong> Crea tus propios componentes que reciban
                props
            </p>

            <div class="instrucciones-props">
                <div class="paso">
                    <h4>👤 Paso 1: Crear MiTarjetaPerfil.svelte</h4>
                    <div class="codigo-crear">
                        <p>
                            <strong>Crear archivo:</strong>
                            <code
                                >src/lib/components/ejercicios/MiTarjetaPerfil.svelte</code
                            >
                        </p>
                        <div class="codigo-ejemplo">
                            <pre><code
                                    >&lt;script lang="ts"&gt;
    // Definir la interfaz de props
    interface Props &#123;
        nombre: string;              // Prop requerida
        apellido: string;            // Prop requerida
        edad?: number;               // Prop opcional
        profesion?: string;          // Prop opcional
        foto?: string;               // Prop opcional
        favorito?: boolean;          // Prop opcional
    &#125;

    // Recibir props con valores por defecto
    let &#123;
        nombre,
        apellido,
        edad = 25,
        profesion = "Estudiante",
        foto = "👤",
        favorito = false
    &#125;: Props = $props();

    // Estado interno del componente
    let mostrarInfo = $state(false);

    function toggleInfo() &#123;
        mostrarInfo = !mostrarInfo;
    &#125;
&lt;/script&gt;

&lt;div class="mi-tarjeta-perfil" class:favorito&gt;
    &lt;div class="cabecera"&gt;
        &lt;div class="foto"&gt;&#123;foto&#125;&lt;/div&gt;
        &lt;div class="info-basica"&gt;
            &lt;h3 class="nombre"&gt;&#123;nombre&#125; &#123;apellido&#125;&lt;/h3&gt;
            &lt;p class="profesion"&gt;&#123;profesion&#125;&lt;/p&gt;
        &lt;/div&gt;
        &#123;#if favorito&#125;
            &lt;div class="estrella"&gt;⭐&lt;/div&gt;
        &#123;/if&#125;
    &lt;/div&gt;

    &lt;button class="btn-info" onclick=&#123;toggleInfo&#125;&gt;
        &#123;mostrarInfo ? 'Ocultar' : 'Ver'&#125; Info
    &lt;/button&gt;

    &#123;#if mostrarInfo&#125;
        &lt;div class="info-extra"&gt;
            &lt;p&gt;&lt;strong&gt;Edad:&lt;/strong&gt; &#123;edad&#125; años&lt;/p&gt;
            &lt;p&gt;&lt;strong&gt;Estado:&lt;/strong&gt; &#123;favorito ? 'Favorito ⭐' : 'Normal'&#125;&lt;/p&gt;
        &lt;/div&gt;
    &#123;/if&#125;
&lt;/div&gt;

&lt;style&gt;
    .mi-tarjeta-perfil &#123;
        background: white;
        border-radius: 1rem;
        padding: 1.5rem;
        border: 2px solid #e5e7eb;
        transition: all 0.3s ease;
        max-width: 300px;
    &#125;

    .mi-tarjeta-perfil:hover &#123;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    &#125;

    .mi-tarjeta-perfil.favorito &#123;
        border-color: #fbbf24;
        background: linear-gradient(135deg, #fff, #fef3c7);
    &#125;

    .cabecera &#123;
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1rem;
        position: relative;
    &#125;

    .foto &#123;
        font-size: 3rem;
        flex-shrink: 0;
    &#125;

    .info-basica &#123;
        flex: 1;
    &#125;

    .nombre &#123;
        margin: 0 0 0.25rem 0;
        color: #1f2937;
        font-size: 1.25rem;
    &#125;

    .profesion &#123;
        margin: 0;
        color: #6b7280;
        font-size: 0.9rem;
    &#125;

    .estrella &#123;
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        font-size: 1.5rem;
    &#125;

    .btn-info &#123;
        width: 100%;
        padding: 0.5rem;
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    &#125;

    .btn-info:hover &#123;
        background: #2563eb;
    &#125;

    .info-extra &#123;
        margin-top: 1rem;
        padding: 1rem;
        background: #f8fafc;
        border-radius: 0.5rem;
        border: 1px solid #e2e8f0;
    &#125;

    .info-extra p &#123;
        margin: 0 0 0.5rem 0;
        font-size: 0.9rem;
        color: #475569;
    &#125;

    .info-extra p:last-child &#123;
        margin-bottom: 0;
    &#125;
&lt;/style&gt;</code
                                ></pre>
                        </div>
                    </div>
                </div>

                <div class="paso">
                    <h4>🔔 Paso 2: Crear MiNotificacion.svelte</h4>
                    <div class="codigo-crear">
                        <p>
                            <strong>Crear archivo:</strong>
                            <code
                                >src/lib/components/ejercicios/MiNotificacion.svelte</code
                            >
                        </p>
                        <div class="codigo-ejemplo">
                            <pre><code
                                    >&lt;script lang="ts"&gt;
    interface Props &#123;
        titulo: string;
        mensaje: string;
        tipo?: 'info' | 'exito' | 'advertencia' | 'error';
        mostrarTiempo?: boolean;
    &#125;

    let &#123;
        titulo,
        mensaje,
        tipo = 'info',
        mostrarTiempo = true
    &#125;: Props = $props();

    const iconos = &#123;
        info: 'ℹ️',
        exito: '✅',
        advertencia: '⚠️',
        error: '❌'
    &#125;;

    const ahora = new Date().toLocaleTimeString();
&lt;/script&gt;

&lt;div class="mi-notificacion &#123;tipo&#125;"&gt;
    &lt;div class="icono"&gt;&#123;iconos[tipo]&#125;&lt;/div&gt;
    &lt;div class="contenido"&gt;
        &lt;h4 class="titulo"&gt;&#123;titulo&#125;&lt;/h4&gt;
        &lt;p class="mensaje"&gt;&#123;mensaje&#125;&lt;/p&gt;
        &#123;#if mostrarTiempo&#125;
            &lt;div class="tiempo"&gt;&#123;ahora&#125;&lt;/div&gt;
        &#123;/if&#125;
    &lt;/div&gt;
&lt;/div&gt;

&lt;style&gt;
    .mi-notificacion &#123;
        display: flex;
        gap: 0.75rem;
        padding: 1rem;
        border-radius: 0.75rem;
        border-left: 4px solid;
        margin-bottom: 0.5rem;
        transition: all 0.3s ease;
    &#125;

    .mi-notificacion:hover &#123;
        transform: translateX(4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    &#125;

    .mi-notificacion.info &#123;
        background: #eff6ff;
        border-color: #3b82f6;
    &#125;

    .mi-notificacion.exito &#123;
        background: #f0fdf4;
        border-color: #10b981;
    &#125;

    .mi-notificacion.advertencia &#123;
        background: #fffbeb;
        border-color: #f59e0b;
    &#125;

    .mi-notificacion.error &#123;
        background: #fef2f2;
        border-color: #ef4444;
    &#125;

    .icono &#123;
        font-size: 1.5rem;
        flex-shrink: 0;
    &#125;

    .contenido &#123;
        flex: 1;
    &#125;

    .titulo &#123;
        margin: 0 0 0.25rem 0;
        font-size: 1rem;
        font-weight: 600;
    &#125;

    .mensaje &#123;
        margin: 0 0 0.5rem 0;
        font-size: 0.9rem;
        line-height: 1.4;
    &#125;

    .tiempo &#123;
        font-size: 0.8rem;
        opacity: 0.7;
        font-weight: 500;
    &#125;

    .info .titulo &#123; color: #1e40af; &#125;
    .info .mensaje &#123; color: #3730a3; &#125;

    .exito .titulo &#123; color: #065f46; &#125;
    .exito .mensaje &#123; color: #047857; &#125;

    .advertencia .titulo &#123; color: #92400e; &#125;
    .advertencia .mensaje &#123; color: #a16207; &#125;

    .error .titulo &#123; color: #991b1b; &#125;
    .error .mensaje &#123; color: #b91c1c; &#125;
&lt;/style&gt;</code
                                ></pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mis-componentes-props">
                <h4>👤 Tus Tarjetas de Perfil:</h4>
                <div class="grid-mis-perfiles">
                    <MiTarjetaPerfil
                        nombre="Ana"
                        apellido="García"
                        edad={28}
                        profesion="Desarrolladora Frontend"
                        foto="👩‍💻"
                        favorito={true}
                    />
                    <MiTarjetaPerfil
                        nombre="Carlos"
                        apellido="López"
                        edad={35}
                        profesion="UX Designer"
                        foto="👨‍🎨"
                    />
                    <MiTarjetaPerfil
                        nombre="María"
                        apellido="Rodríguez"
                        profesion="Product Manager"
                        foto="👩‍💼"
                        favorito={true}
                    />
                </div>

                <h4>🔔 Tus Notificaciones:</h4>
                <div class="mis-notificaciones">
                    <MiNotificacion
                        titulo="¡Bienvenido!"
                        mensaje="Has creado tu primer componente con props exitosamente."
                        tipo="exito"
                    />
                    <MiNotificacion
                        titulo="Información"
                        mensaje="Los props te permiten hacer componentes más flexibles y reutilizables."
                        tipo="info"
                        mostrarTiempo={false}
                    />
                    <MiNotificacion
                        titulo="Atención"
                        mensaje="Recuerda definir tipos para tus props usando TypeScript."
                        tipo="advertencia"
                    />
                </div>

                <h4>📊 Tus Barras de Progreso:</h4>
                <div class="mis-progresos">
                    <MiProgreso
                        titulo="Progreso del Proyecto"
                        valor={75}
                        maximo={100}
                        color="blue"
                    />
                    <MiProgreso
                        titulo="Tareas Completadas"
                        valor={12}
                        maximo={20}
                        color="green"
                    />
                    <MiProgreso
                        titulo="Habilidades Aprendidas"
                        valor={8}
                        maximo={15}
                        color="orange"
                        mostrarPorcentaje={false}
                    />
                </div>
            </div>

            <div class="pista">
                💡 <strong>Pista:</strong> Los props opcionales se definen con
                <code>?</code> y pueden tener valores por defecto
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 3: Experimenta con Diferentes Tipos de Props</h3>
            <p>
                <strong>Instrucción:</strong> Observa cómo puedes pasar diferentes
                tipos de datos
            </p>

            <div class="tipos-props">
                <div class="tipo-ejemplo">
                    <h4>📊 Tipos de Datos que Puedes Pasar como Props:</h4>
                    <div class="grid-tipos">
                        <div class="tipo-card">
                            <h5>📝 String</h5>
                            <code>nombre="Ana García"</code>
                            <span>Texto simple</span>
                        </div>
                        <div class="tipo-card">
                            <h5>🔢 Number</h5>
                            <code>edad={25}</code>
                            <span>Números enteros o decimales</span>
                        </div>
                        <div class="tipo-card">
                            <h5>✅ Boolean</h5>
                            <code>activo={true}</code>
                            <span>Verdadero o falso</span>
                        </div>
                        <div class="tipo-card">
                            <h5>📦 Array</h5>
                            <code>items={[1, 2, 3]}</code>
                            <span>Listas de datos</span>
                        </div>
                        <div class="tipo-card">
                            <h5>🏗️ Object</h5>
                            <code>usuario=&#123;nombre: "Ana"&#125;}</code>
                            <span>Objetos complejos</span>
                        </div>
                        <div class="tipo-card">
                            <h5>⚡ Function</h5>
                            <code>onclick=miFuncion&gt</code>
                            <span>Funciones de callback</span>
                        </div>
                    </div>
                </div>

                <div class="ejemplo-completo">
                    <h4>🔧 Ejemplo Completo de Props:</h4>
                    <div class="codigo-ejemplo">
                        <pre><code
                                >&lt;!-- Pasando diferentes tipos de props --&gt;
&lt;MiComponente
    titulo="Mi Título"           // String
    cantidad=&#123;42&#125;                // Number
    visible=&#123;true&#125;               // Boolean
    tags=&#123;["svelte", "props"]&#125;   // Array
    config=&#123;&#123;theme: 'dark'&#125;&#125;     // Object
    onClic=&lthandleClick&gt         // Function
/&gt;</code
                            ></pre>
                    </div>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Recuerda:</strong> Para pasar valores que no sean
                strings, usa llaves: <code>{"{valor}"}</code>
            </div>
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Qué Acabas de Aprender?</h2>

        <div class="concepto-teoria">
            <h3>📤 ¿Qué son los Props?</h3>
            <p>
                Los props (propiedades) son la forma de pasar datos desde un
                componente padre hacia un componente hijo. Son como "parámetros"
                para tus componentes.
            </p>

            <div class="analogia">
                <h4>🏭 Analogía de Fábrica:</h4>
                <p>
                    Imagina que tu componente es una fábrica. Los props son las
                    materias primas que le das a la fábrica para que produzca
                    diferentes productos.
                </p>
                <ul>
                    <li>
                        <strong>Misma fábrica</strong> (componente) →
                        <strong>Diferentes materias primas</strong>
                        (props) → <strong>Diferentes productos</strong> (UI)
                    </li>
                </ul>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🎛️ Props en Svelte 5</h3>
            <div class="codigo-ejemplo">
                <pre><code
                        >&lt;!-- ✅ Definiendo props en Svelte 5 --&gt;
&lt;script lang=&quot;ts&quot;&gt;
    interface Props &#123;
        // Props requeridas (sin ?)
        nombre: string;
        edad: number;

        // Props opcionales (con ?)
        email?: string;
        activo?: boolean;
    &#125;

    // Recibiendo props con $props()
    let &#123;
        nombre,
        edad,
        email = "no-email",
        activo = false
    &#125;: Props = $props();
&lt;/script&gt;

&lt;!-- Usando los props en el HTML --&gt;
&lt;div&gt;
    &lt;h2&gt;nombre&lt;/h2&gt;
    &lt;p&gt;Edad: edad&lt;/p&gt;
    &gt#if activo&lt
        &lt;span&gt;Usuario activo&lt;/span&gt;
    &gt/if&lt
&lt;/div&gt;</code
                    ></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>📋 Buenas Prácticas para Props</h3>
            <div class="buenas-practicas">
                <div class="practica">
                    <h5>✅ Usar TypeScript</h5>
                    <p>
                        Define interfaces para tus props. Te ayudará a evitar
                        errores y tener mejor autocompletado.
                    </p>
                </div>
                <div class="practica">
                    <h5>✅ Valores por Defecto</h5>
                    <p>
                        Proporciona valores por defecto para props opcionales
                        para evitar comportamientos inesperados.
                    </p>
                </div>
                <div class="practica">
                    <h5>✅ Nombres Descriptivos</h5>
                    <p>
                        Usa nombres claros que indiquen qué tipo de dato
                        esperas: <code>isVisible</code> en lugar de
                        <code>show</code>.
                    </p>
                </div>
                <div class="practica">
                    <h5>✅ Validación de Tipos</h5>
                    <p>
                        Aprovecha TypeScript para validar automáticamente los
                        tipos de tus props.
                    </p>
                </div>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🔄 Flujo de Datos con Props</h3>
            <div class="flujo-datos">
                <div class="paso-flujo">
                    <span class="numero">1</span>
                    <div class="contenido">
                        <strong>Componente Padre</strong>
                        <p>Define los datos que quiere pasar</p>
                    </div>
                </div>
                <div class="flecha">⬇️</div>
                <div class="paso-flujo">
                    <span class="numero">2</span>
                    <div class="contenido">
                        <strong>Props</strong>
                        <p>Los datos se pasan como atributos del componente</p>
                    </div>
                </div>
                <div class="flecha">⬇️</div>
                <div class="paso-flujo">
                    <span class="numero">3</span>
                    <div class="contenido">
                        <strong>Componente Hijo</strong>
                        <p>Recibe los datos y los usa para renderizar</p>
                    </div>
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
                    <strong>Crear MiTarjetaPerfil.svelte</strong> con props requeridas
                    y opcionales
                </li>
                <li>
                    <strong>Crear MiNotificacion.svelte</strong> con diferentes tipos
                    de props
                </li>
                <li>
                    <strong>Importar los componentes</strong> en el script principal
                </li>
                <li>
                    <strong>Descomentar las secciones</strong> para ver los props
                    funcionando
                </li>
                <li>
                    <strong>Experimentar</strong> pasando diferentes tipos de datos
                    como props
                </li>
            </ol>
            <p>
                <strong>🎉 Resultado:</strong> Componentes flexibles que pueden mostrar
                diferentes datos según los props que reciban.
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

    /* Ejemplos de props */
    .ejemplos-props {
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

    .grid-perfiles,
    .grid-productos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
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

    /* Instrucciones para crear props */
    .instrucciones-props {
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

    /* Mis componentes con props */
    .mis-componentes-props {
        margin: 1.5rem 0;
        padding: 1rem;
        background: var(--color-codigo);
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .mis-progresos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    /* Tipos de props */
    .tipos-props {
        margin: 1.5rem 0;
    }

    .tipo-ejemplo {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: #f8fafc;
        border-radius: 0.75rem;
        border: 1px solid var(--color-borde);
    }

    .tipo-ejemplo h4 {
        margin: 0 0 1rem 0;
        color: var(--color-texto);
    }

    .grid-tipos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .tipo-card {
        background: white;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 2px solid #e5e7eb;
        text-align: center;
        transition: all 0.3s ease;
    }

    .tipo-card:hover {
        border-color: var(--color-primario);
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .tipo-card h5 {
        margin: 0 0 0.5rem 0;
        color: var(--color-texto);
        font-size: 1rem;
    }

    .tipo-card code {
        display: block;
        background: #1f2937;
        color: #e5e7eb;
        padding: 0.5rem;
        border-radius: 0.25rem;
        font-family: "Monaco", monospace;
        font-size: 0.8rem;
        margin: 0.5rem 0;
        overflow-x: auto;
    }

    .tipo-card span {
        font-size: 0.875rem;
        color: var(--color-secundario);
    }

    .ejemplo-completo {
        padding: 1rem;
        background: #f0fdf4;
        border-radius: 0.5rem;
        border: 1px solid #10b981;
    }

    .ejemplo-completo h4 {
        margin: 0 0 1rem 0;
        color: #065f46;
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

    .analogia ul {
        margin: 0.5rem 0 0 0;
        padding-left: 1.5rem;
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

    /* Flujo de datos */
    .flujo-datos {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin: 1rem 0;
        padding: 1.5rem;
        background: #f8fafc;
        border-radius: 0.75rem;
        border: 1px solid var(--color-borde);
    }

    .paso-flujo {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        background: white;
        border-radius: 0.5rem;
        border: 2px solid #e5e7eb;
        width: 100%;
        max-width: 400px;
    }

    .paso-flujo .numero {
        background: var(--color-primario);
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

    .paso-flujo .contenido {
        flex: 1;
    }

    .paso-flujo .contenido strong {
        display: block;
        color: var(--color-texto);
        margin-bottom: 0.25rem;
    }

    .paso-flujo .contenido p {
        margin: 0;
        color: var(--color-secundario);
        font-size: 0.9rem;
    }

    .flecha {
        font-size: 1.5rem;
        color: var(--color-primario);
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
        .grid-perfiles,
        .grid-productos,
        .grid-tipos,
        .buenas-practicas {
            grid-template-columns: 1fr;
        }

        .flujo-datos {
            padding: 1rem;
        }

        .paso-flujo {
            flex-direction: column;
            text-align: center;
        }

        .codigo-ejemplo pre {
            font-size: 0.8rem;
        }
    }
</style>
