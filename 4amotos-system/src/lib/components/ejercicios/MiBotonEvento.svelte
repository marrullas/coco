<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    interface Props {
        texto: string;
        tipo?: 'primary' | 'success' | 'warning' | 'danger';
        datos?: any;
    }

    let { texto, tipo = 'primary', datos }: Props = $props();

    // Crear el dispatcher de eventos
    const dispatch = createEventDispatcher<{
        click: { texto: string; tipo: string; timestamp: number; datos?: any };
        hover: { accion: string };
    }>();

    let clicCount = $state(0);

    function handleClick() {
        clicCount++;

        // Disparar evento personalizado con datos
        dispatch('click', {
            texto,
            tipo,
            timestamp: Date.now(),
            datos: { ...datos, clicCount }
        });
    }

    function handleMouseEnter() {
        dispatch('hover', { accion: 'enter' });
    }

    function handleMouseLeave() {
        dispatch('hover', { accion: 'leave' });
    }
</script>

<button
    class="mi-boton-evento {tipo}"
    onclick={handleClick}
    onmouseenter={handleMouseEnter}
    onmouseleave={handleMouseLeave}
>
    {texto} ({clicCount})
</button>

<style>
    .mi-boton-evento {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
        min-width: 140px;
    }

    .mi-boton-evento:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .primary {
        background: #3b82f6;
        color: white;
    }

    .success {
        background: #10b981;
        color: white;
    }

    .warning {
        background: #f59e0b;
        color: white;
    }

    .danger {
        background: #ef4444;
        color: white;
    }

    .primary:hover { background: #2563eb; }
    .success:hover { background: #059669; }
    .warning:hover { background: #d97706; }
    .danger:hover { background: #dc2626; }
</style>