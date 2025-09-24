<!--
╔══════════════════════════════════════════════════════════════════════════════════════╗
║                             📝 EJERCICIO #10: EFECTOS                               ║
║                                🟡 NIVEL 2: INTERACCIÓN                              ║
╠══════════════════════════════════════════════════════════════════════════════════════╣
║ OBJETIVO: Aprender $effect() para reaccionar a cambios                              ║
║ CONCEPTOS: $effect(), efectos secundarios, cleanup, reactividad                     ║
║ TIEMPO ESTIMADO: 30 minutos                                                         ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
-->

<script lang="ts">
    // 🎯 INSTRUCCIONES PARA EL ESTUDIANTE:
    // 1. Lee todas las instrucciones antes de empezar
    // 2. Completa cada tarea en orden
    // 3. Observa cómo los efectos reaccionan automáticamente a cambios

    // 📚 CONCEPTOS QUE APRENDERÁS:
    // - $effect() para efectos secundarios
    // - Reaccionar a cambios en variables
    // - Cleanup functions para limpiar efectos
    // - Logging, notificaciones, y otros efectos

    // ✏️ VARIABLES DE EJEMPLO FUNCIONANDO
    let contador = $state(0);
    let tema = $state("claro");
    let usuario = $state("");
    let volumen = $state(50);
    let conectado = $state(false);

    // ✏️ TAREA 1: Crea variables adicionales usando $state():
    // TODO: Agrega las siguientes variables:
    // - temperaturaActual: number (ejemplo: 20)
    // - modoNocturno: boolean (ejemplo: false)
    // - mensaje: string (ejemplo: "")

    // ✏️ ESCRIBE AQUÍ TUS VARIABLES:
    // let temperaturaActual = $state(20);
    // let modoNocturno = $state(false);
    // let mensaje = $state("");

    // 📊 SISTEMA DE LOGS
    let logs = $state<string[]>([]);
    let contadorLogs = $state(0);

    function agregarLog(mensaje: string) {
        contadorLogs++;
        const timestamp = new Date().toLocaleTimeString();
        logs = [...logs, `${contadorLogs}. [${timestamp}] ${mensaje}`];
    }

    function limpiarLogs() {
        logs = [];
        contadorLogs = 0;
    }

    // ✅ EFECTOS DE EJEMPLO FUNCIONANDO

    // Variables para rastrear valores anteriores y evitar bucles
    let contadorAnterior = $state(0);
    let temaAnterior = $state("claro");
    let usuarioAnterior = $state("");
    let volumenAnterior = $state(50);
    let conectadoAnterior = $state(false);

    // Efecto 1: Registrar cambios del contador
    $effect(() => {
        if (contador !== contadorAnterior && contador > 0) {
            agregarLog(`✨ Contador incrementado a: ${contador}`);
        }
        contadorAnterior = contador;
    });

    // Efecto 2: Reaccionar a cambios de tema
    $effect(() => {
        if (tema !== temaAnterior) {
            agregarLog(`🎨 Tema cambiado a: ${tema}`);
        }
        temaAnterior = tema;
    });

    // Efecto 3: Registrar cambios de usuario
    $effect(() => {
        if (usuario !== usuarioAnterior && usuario.trim() !== "") {
            agregarLog(`👤 Usuario establecido: ${usuario}`);
        }
        usuarioAnterior = usuario;
    });

    // Efecto 4: Guardar volumen en localStorage
    $effect(() => {
        if (volumen !== volumenAnterior) {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('volumen', volumen.toString());
            }
            agregarLog(`💾 Volumen guardado: ${volumen}%`);
        }
        volumenAnterior = volumen;
    });

    // Efecto 5: Sistema de conexión
    $effect(() => {
        if (conectado !== conectadoAnterior) {
            if (conectado) {
                agregarLog(`🟢 Conectado al servidor`);
            } else {
                agregarLog(`🔴 Desconectado del servidor`);
            }
        }
        conectadoAnterior = conectado;
    });

    // ✅ EFECTO CON CLEANUP - TIMER AUTOMÁTICO
    let timerActivo = $state(false);
    let segundosTranscurridos = $state(0);
    let timerActivoAnterior = $state(false);

    // Efecto para manejar el timer
    $effect(() => {
        let intervalo: ReturnType<typeof setInterval> | undefined;

        if (timerActivo) {
            intervalo = setInterval(() => {
                segundosTranscurridos++;
            }, 1000);
        }

        // Función de cleanup
        return () => {
            if (intervalo) {
                clearInterval(intervalo);
            }
        };
    });

    // Efecto separado para logging del timer
    $effect(() => {
        if (timerActivo !== timerActivoAnterior) {
            if (timerActivo) {
                agregarLog(`⏰ Timer iniciado`);
            } else if (segundosTranscurridos > 0) {
                agregarLog(`⏹️ Timer pausado en ${segundosTranscurridos}s`);
            }
        }
        timerActivoAnterior = timerActivo;
    });

    // ✏️ TAREA 2: Crea tus propios efectos
    // TODO: Implementa estos efectos cuando hayas creado las variables:

    // $effect(() => {
    //     if (temperaturaActual > 25) {
    //         agregarLog(`🌡️ Temperatura alta: ${temperaturaActual}°C`);
    //     } else if (temperaturaActual < 10) {
    //         agregarLog(`❄️ Temperatura baja: ${temperaturaActual}°C`);
    //     }
    // });

    // $effect(() => {
    //     if (modoNocturno) {
    //         agregarLog(`🌙 Modo nocturno activado`);
    //         if (typeof document !== 'undefined') {
    //             document.body.classList.add('modo-nocturno');
    //         }
    //     } else {
    //         agregarLog(`☀️ Modo diurno activado`);
    //         if (typeof document !== 'undefined') {
    //             document.body.classList.remove('modo-nocturno');
    //         }
    //     }
    // });

    // Funciones auxiliares
    function resetearTimer() {
        timerActivo = false;
        segundosTranscurridos = 0;
        agregarLog(`🔄 Timer reseteado`);
    }

    // 🧭 Navegación dinámica
    import { page } from '$app/state';
    import { obtenerNavegacionEjercicio } from '$lib/utils/navigation.js';

    const navegacion = $derived(obtenerNavegacionEjercicio(page.url.pathname, { id: '10', titulo: 'efectos' }));
</script>

<svelte:head>
    <title>Ejercicio 10: Efectos - Svelte 5</title>
</svelte:head>

<main class="contenedor">
    <!-- 📋 INSTRUCCIONES -->
    <header class="instrucciones">
        <h1>📝 Ejercicio #10: Efectos</h1>
        <div class="nivel">🟡 NIVEL 2: INTERACCIÓN</div>

        <div class="objetivos">
            <h2>🎯 Objetivos</h2>
            <ul>
                <li>Usar <code>$effect()</code> para efectos secundarios</li>
                <li>Reaccionar automáticamente a cambios de estado</li>
                <li>Implementar cleanup functions para limpiar efectos</li>
                <li>Entender cuándo y cómo usar efectos</li>
            </ul>
        </div>

        <div class="conceptos">
            <h2>📚 Conceptos Nuevos</h2>
            <div class="concepto-grid">
                <div class="concepto">
                    <strong>$effect()</strong>
                    <span>Efectos secundarios reactivos</span>
                </div>
                <div class="concepto">
                    <strong>Cleanup</strong>
                    <span>Limpieza automática de efectos</span>
                </div>
                <div class="concepto">
                    <strong>Side Effects</strong>
                    <span>Acciones que afectan el entorno</span>
                </div>
                <div class="concepto">
                    <strong>Reactividad</strong>
                    <span>Respuesta automática a cambios</span>
                </div>
            </div>
        </div>
    </header>

    <!-- 🎯 ÁREA DE TRABAJO -->
    <section class="area-trabajo">
        <h2>💻 Tu Área de Trabajo</h2>

        <div class="tarea">
            <h3>📝 Tarea 1: Efectos Básicos (Funcionando)</h3>
            <p><strong>Instrucción:</strong> Interactúa con los controles y observa los efectos en el log</p>

            <div class="controles-grid">
                <div class="control-card">
                    <h4>🔢 Contador</h4>
                    <div class="control-content">
                        <div class="valor-display">{contador}</div>
                        <div class="botones">
                            <button onclick={() => contador++} class="btn-accion">+1</button>
                            <button onclick={() => contador--} disabled={contador <= 0} class="btn-accion">-1</button>
                            <button onclick={() => contador = 0} class="btn-reset">Reset</button>
                        </div>
                    </div>
                </div>

                <div class="control-card">
                    <h4>🎨 Tema</h4>
                    <div class="control-content">
                        <select bind:value={tema} class="select-tema">
                            <option value="claro">☀️ Claro</option>
                            <option value="oscuro">🌙 Oscuro</option>
                            <option value="azul">💙 Azul</option>
                            <option value="verde">💚 Verde</option>
                        </select>
                        <div class="tema-preview" class:claro={tema === 'claro'}
                             class:oscuro={tema === 'oscuro'}
                             class:azul={tema === 'azul'}
                             class:verde={tema === 'verde'}>
                            Tema: {tema}
                        </div>
                    </div>
                </div>

                <div class="control-card">
                    <h4>👤 Usuario</h4>
                    <div class="control-content">
                        <input type="text" bind:value={usuario} placeholder="Escribe tu nombre" class="input-usuario" />
                        <div class="usuario-info">
                            {usuario || 'Sin usuario'}
                        </div>
                    </div>
                </div>

                <div class="control-card">
                    <h4>🔊 Volumen</h4>
                    <div class="control-content">
                        <input type="range" bind:value={volumen} min="0" max="100" class="slider" />
                        <div class="volumen-display">{volumen}%</div>
                        <div class="volumen-visual">
                            <div class="volumen-barra" style="width: {volumen}%"></div>
                        </div>
                    </div>
                </div>

                <div class="control-card">
                    <h4>🌐 Conexión</h4>
                    <div class="control-content">
                        <button onclick={() => conectado = !conectado}
                                class="btn-conexion"
                                class:conectado
                                class:desconectado={!conectado}>
                            {conectado ? '🟢 Conectado' : '🔴 Desconectado'}
                        </button>
                        <div class="estado-conexion">
                            Estado: {conectado ? 'Online' : 'Offline'}
                        </div>
                    </div>
                </div>

                <div class="control-card">
                    <h4>⏱️ Timer con Cleanup</h4>
                    <div class="control-content">
                        <div class="timer-display">{segundosTranscurridos}s</div>
                        <div class="botones">
                            <button onclick={() => timerActivo = !timerActivo} class="btn-timer">
                                {timerActivo ? '⏸️ Pausar' : '▶️ Iniciar'}
                            </button>
                            <button onclick={resetearTimer} class="btn-reset">🔄 Reset</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pista">
                💡 <strong>Observa:</strong> Los efectos se ejecutan automáticamente cuando cambian las variables que observan
            </div>
        </div>

        <div class="tarea">
            <h3>📝 Tarea 2: Tu Área de Experimentos</h3>
            <p><strong>Instrucción:</strong> Crea las variables comentadas y descomenta los efectos</p>

            <div class="experimentos">
                <!-- ✏️ DESCOMENTA ESTA SECCIÓN CUANDO HAYAS CREADO LAS VARIABLES -->
                <!--
                <div class="experimento-card">
                    <h4>🌡️ Control de Temperatura</h4>
                    <div class="control-content">
                        <input type="range" bind:value={temperaturaActual} min="0" max="40" class="slider" />
                        <div class="temp-display">{temperaturaActual}°C</div>
                    </div>
                </div>

                <div class="experimento-card">
                    <h4>🌙 Modo Nocturno</h4>
                    <div class="control-content">
                        <label class="switch">
                            <input type="checkbox" bind:checked={modoNocturno} />
                            <span class="slider-switch"></span>
                        </label>
                        <div class="modo-info">{modoNocturno ? 'Modo Nocturno' : 'Modo Diurno'}</div>
                    </div>
                </div>

                <div class="experimento-card">
                    <h4>💬 Mensaje</h4>
                    <div class="control-content">
                        <textarea bind:value={mensaje} placeholder="Escribe un mensaje..." rows="3"></textarea>
                        <div class="mensaje-count">Caracteres: {mensaje.length}</div>
                    </div>
                </div>
                -->

                <div class="placeholder">
                    🔬 Crea las variables comentadas en el script para habilitar esta sección
                </div>
            </div>

            <div class="pista">
                💡 <strong>Recuerda:</strong> Descomenta también los efectos en el script para ver la magia de la reactividad
            </div>
        </div>
    </section>

    <!-- 📊 LOG DE EFECTOS -->
    <section class="log-section">
        <div class="log-header">
            <h3>📜 Log de Efectos en Tiempo Real</h3>
            <button onclick={limpiarLogs} class="btn-limpiar">🗑️ Limpiar</button>
        </div>

        <div class="log-container">
            {#each logs as log}
                <div class="log-item">
                    {log}
                </div>
            {:else}
                <div class="log-vacio">
                    No hay eventos registrados. ¡Interactúa con los controles para ver los efectos!
                </div>
            {/each}
        </div>
    </section>

    <!-- 📚 TEORÍA -->
    <section class="teoria">
        <h2>📚 ¿Qué Acabas de Aprender?</h2>

        <div class="concepto-teoria">
            <h3>⚡ $effect() en Svelte 5</h3>
            <p>
                Los efectos te permiten ejecutar código cuando cambian las variables que observan.
                Son perfectos para efectos secundarios como logging, guardado automático, o notificaciones.
            </p>

            <div class="codigo-ejemplo">
                <pre><code>{'// ✅ Efecto básico\n$effect(() => {\n    console.log(\'Contador:\', contador);\n});\n\n// ✅ Efecto con cleanup\n$effect(() => {\n    const timer = setInterval(() => {...}, 1000);\n    return () => clearInterval(timer);\n});\n\n// ✅ Efecto condicional\n$effect(() => {\n    if (usuario.activo) {\n        conectarWebSocket();\n    }\n});'}</code></pre>
            </div>
        </div>

        <div class="concepto-teoria">
            <h3>🎯 Casos de Uso Comunes</h3>
            <div class="casos-grid">
                <div class="caso">
                    <strong>📊 Logging</strong>
                    <span>Registrar cambios para debugging</span>
                </div>
                <div class="caso">
                    <strong>💾 Persistencia</strong>
                    <span>Guardar en localStorage/database</span>
                </div>
                <div class="caso">
                    <strong>🔔 Notificaciones</strong>
                    <span>Alertas y mensajes al usuario</span>
                </div>
                <div class="caso">
                    <strong>🌐 APIs</strong>
                    <span>Llamadas HTTP cuando cambia el estado</span>
                </div>
                <div class="caso">
                    <strong>⏲️ Timers</strong>
                    <span>Intervalos y timeouts reactivos</span>
                </div>
                <div class="caso">
                    <strong>🎨 DOM</strong>
                    <span>Manipulación directa del DOM</span>
                </div>
            </div>
        </div>
    </section>

    <!-- ✅ SOLUCIÓN -->
    <details class="solucion">
        <summary>🔍 Ver Solución (solo después de intentar)</summary>
        <div class="codigo-solucion">
            <h3>✅ Código Completo:</h3>
            <pre><code>{'// Variables adicionales\nlet temperaturaActual = $state(20);\nlet modoNocturno = $state(false);\nlet mensaje = $state(\'\');\n\n// Efectos adicionales\n$effect(() => {\n    if (temperaturaActual > 25) {\n        agregarLog(`🌡️ Temperatura alta: ${temperaturaActual}°C`);\n    } else if (temperaturaActual < 10) {\n        agregarLog(`❄️ Temperatura baja: ${temperaturaActual}°C`);\n    }\n});\n\n$effect(() => {\n    if (modoNocturno) {\n        agregarLog(`🌙 Modo nocturno activado`);\n    } else {\n        agregarLog(`☀️ Modo diurno activado`);\n    }\n});'}</code></pre>
        </div>
    </details>

    <!-- 🔄 NAVEGACIÓN -->
    <nav class="navegacion">
        {#if navegacion.anterior}
            <a href={navegacion.anterior.url} class="btn btn-secundario"
                >← Anterior: {navegacion.anterior.nombre}</a
            >
        {/if}
        
        {#if navegacion.volver}
            <a href={navegacion.volver} class="btn btn-warning">🎉 ¡Nivel 2 Completado!</a>
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
        --color-primario: #f59e0b;
        --color-secundario: #6b7280;
        --color-fondo: #fffbeb;
        --color-tarjeta: #ffffff;
        --color-texto: #1f2937;
        --color-borde: #e5e7eb;
        --color-exito: #10b981;
        --color-error: #ef4444;
        --color-warning: #f59e0b;
        --color-info: #3b82f6;
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

    /* Grid de controles */
    .controles-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
        margin: 1rem 0;
    }

    .control-card {
        background: white;
        border: 2px solid var(--color-borde);
        border-radius: 0.5rem;
        padding: 1rem;
        transition: all 0.2s ease;
    }

    .control-card:hover {
        border-color: var(--color-primario);
        box-shadow: var(--sombra);
    }

    .control-card h4 {
        margin: 0 0 1rem 0;
        color: var(--color-texto);
        font-size: 1rem;
        border-bottom: 1px solid var(--color-borde);
        padding-bottom: 0.5rem;
    }

    .control-content {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    /* Controles específicos */
    .valor-display, .timer-display {
        font-size: 2rem;
        font-weight: 700;
        color: var(--color-primario);
        text-align: center;
        background: #fef3c7;
        padding: 1rem;
        border-radius: 0.5rem;
        font-family: "Monaco", monospace;
    }

    .botones {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .btn-accion, .btn-reset, .btn-timer {
        flex: 1;
        padding: 0.5rem;
        border: none;
        border-radius: 0.25rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 0.875rem;
    }

    .btn-accion {
        background: var(--color-primario);
        color: white;
    }

    .btn-accion:hover:not(:disabled) {
        background: #d97706;
        transform: translateY(-1px);
    }

    .btn-accion:disabled {
        background: #d1d5db;
        cursor: not-allowed;
    }

    .btn-reset, .btn-timer {
        background: #f3f4f6;
        color: var(--color-texto);
        border: 1px solid var(--color-borde);
    }

    .btn-reset:hover, .btn-timer:hover {
        background: #e5e7eb;
    }

    .select-tema {
        padding: 0.5rem;
        border: 2px solid var(--color-borde);
        border-radius: 0.25rem;
        background: white;
        font-size: 1rem;
    }

    .tema-preview {
        padding: 0.75rem;
        border-radius: 0.25rem;
        text-align: center;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    .tema-preview.claro {
        background: #fef3c7;
        color: #92400e;
    }

    .tema-preview.oscuro {
        background: #1f2937;
        color: #e5e7eb;
    }

    .tema-preview.azul {
        background: #dbeafe;
        color: #1e40af;
    }

    .tema-preview.verde {
        background: #d1fae5;
        color: #065f46;
    }

    .input-usuario {
        padding: 0.5rem;
        border: 2px solid var(--color-borde);
        border-radius: 0.25rem;
        font-size: 1rem;
    }

    .input-usuario:focus {
        outline: none;
        border-color: var(--color-primario);
    }

    .usuario-info {
        padding: 0.5rem;
        background: #f3f4f6;
        border-radius: 0.25rem;
        text-align: center;
        font-weight: 600;
        color: var(--color-secundario);
    }

    .slider {
        width: 100%;
        height: 6px;
        border-radius: 3px;
        background: #e5e7eb;
        outline: none;
        cursor: pointer;
    }

    .volumen-display {
        text-align: center;
        font-weight: 600;
        color: var(--color-primario);
        font-family: "Monaco", monospace;
    }

    .volumen-visual {
        height: 20px;
        background: #e5e7eb;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
    }

    .volumen-barra {
        height: 100%;
        background: linear-gradient(90deg, var(--color-exito), var(--color-primario), var(--color-error));
        transition: width 0.2s ease;
        border-radius: 10px;
    }

    .btn-conexion {
        padding: 0.75rem;
        border: none;
        border-radius: 0.25rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 1rem;
    }

    .btn-conexion.conectado {
        background: var(--color-exito);
        color: white;
    }

    .btn-conexion.desconectado {
        background: var(--color-error);
        color: white;
    }

    .estado-conexion {
        text-align: center;
        font-weight: 600;
        color: var(--color-secundario);
    }

    /* Experimentos */
    .experimentos {
        margin: 1rem 0;
    }

    .experimento-card {
        background: white;
        border: 2px solid #e0f2fe;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .experimento-card h4 {
        margin: 0 0 1rem 0;
        color: #0ea5e9;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider-switch {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 34px;
    }

    .slider-switch:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
    }

    input:checked + .slider-switch {
        background-color: var(--color-primario);
    }

    input:checked + .slider-switch:before {
        transform: translateX(26px);
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

    /* Log de efectos */
    .log-section {
        background: var(--color-tarjeta);
        padding: 2rem;
        border-radius: var(--radio);
        box-shadow: var(--sombra);
        margin-bottom: 2rem;
        border-left: 5px solid #3b82f6;
    }

    .log-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    .log-header h3 {
        margin: 0;
        color: #3b82f6;
    }

    .btn-limpiar {
        background: #f59e0b;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .btn-limpiar:hover {
        background: #d97706;
        transform: translateY(-1px);
    }

    .log-container {
        max-height: 300px;
        overflow-y: auto;
        background: #f8fafc;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
    }

    .log-item {
        padding: 0.75rem;
        border-bottom: 1px solid #e5e7eb;
        font-family: "Monaco", monospace;
        font-size: 0.875rem;
        color: var(--color-texto);
    }

    .log-item:last-child {
        border-bottom: none;
    }

    .log-vacio {
        text-align: center;
        color: var(--color-secundario);
        font-style: italic;
        padding: 2rem;
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

    .casos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmin(200px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .caso {
        background: #f8fafc;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid var(--color-borde);
        text-align: center;
    }

    .caso strong {
        display: block;
        color: #3b82f6;
        margin-bottom: 0.5rem;
    }

    .caso span {
        font-size: 0.875rem;
        color: var(--color-secundario);
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

    .btn-warning {
        background: #059669;
        transform: translateY(-2px);
        color: white;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .contenedor {
            padding: 1rem;
        }

        .instrucciones,
        .area-trabajo,
        .teoria,
        .log-section {
            padding: 1.5rem;
        }

        .navegacion {
            flex-direction: column;
        }

        .concepto-grid,
        .casos-grid {
            grid-template-columns: 1fr;
        }

        .controles-grid {
            grid-template-columns: 1fr;
        }

        .log-header {
            flex-direction: column;
            gap: 1rem;
        }

        .botones {
            flex-direction: column;
        }
    }
</style>