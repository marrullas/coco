<script lang="ts">
    interface Props {
        titulo: string;
        mensaje: string;
        tipo?: 'info' | 'exito' | 'advertencia' | 'error';
        mostrarTiempo?: boolean;
    }

    let {
        titulo,
        mensaje,
        tipo = 'info',
        mostrarTiempo = true
    }: Props = $props();

    const iconos = {
        info: 'ℹ️',
        exito: '✅',
        advertencia: '⚠️',
        error: '❌'
    };

    const ahora = new Date().toLocaleTimeString();
</script>

<div class="mi-notificacion {tipo}">
    <div class="icono">{iconos[tipo]}</div>
    <div class="contenido">
        <h4 class="titulo">{titulo}</h4>
        <p class="mensaje">{mensaje}</p>
        {#if mostrarTiempo}
            <div class="tiempo">{ahora}</div>
        {/if}
    </div>
</div>

<style>
    .mi-notificacion {
        display: flex;
        gap: 0.75rem;
        padding: 1rem;
        border-radius: 0.75rem;
        border-left: 4px solid;
        margin-bottom: 0.5rem;
        transition: all 0.3s ease;
    }

    .mi-notificacion:hover {
        transform: translateX(4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .mi-notificacion.info {
        background: #eff6ff;
        border-color: #3b82f6;
    }

    .mi-notificacion.exito {
        background: #f0fdf4;
        border-color: #10b981;
    }

    .mi-notificacion.advertencia {
        background: #fffbeb;
        border-color: #f59e0b;
    }

    .mi-notificacion.error {
        background: #fef2f2;
        border-color: #ef4444;
    }

    .icono {
        font-size: 1.5rem;
        flex-shrink: 0;
    }

    .contenido {
        flex: 1;
    }

    .titulo {
        margin: 0 0 0.25rem 0;
        font-size: 1rem;
        font-weight: 600;
    }

    .mensaje {
        margin: 0 0 0.5rem 0;
        font-size: 0.9rem;
        line-height: 1.4;
    }

    .tiempo {
        font-size: 0.8rem;
        opacity: 0.7;
        font-weight: 500;
    }

    .info .titulo { color: #1e40af; }
    .info .mensaje { color: #3730a3; }

    .exito .titulo { color: #065f46; }
    .exito .mensaje { color: #047857; }

    .advertencia .titulo { color: #92400e; }
    .advertencia .mensaje { color: #a16207; }

    .error .titulo { color: #991b1b; }
    .error .mensaje { color: #b91c1c; }
</style>