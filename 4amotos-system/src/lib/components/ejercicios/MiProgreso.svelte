<script lang="ts">
    interface Props {
        titulo?: string;
        valor: number;
        maximo?: number;
        color?: 'blue' | 'green' | 'orange' | 'red' | 'purple';
        mostrarPorcentaje?: boolean;
        animado?: boolean;
    }

    let {
        titulo,
        valor,
        maximo = 100,
        color = 'blue',
        mostrarPorcentaje = true,
        animado = true
    }: Props = $props();

    const colores = {
        blue: '#3b82f6',
        green: '#10b981',
        orange: '#f59e0b',
        red: '#ef4444',
        purple: '#8b5cf6'
    };

    const colorSeleccionado = colores[color] || colores.blue;

    const porcentaje = Math.min((valor / maximo) * 100, 100);
</script>

<div class="mi-progreso">
    {#if titulo}
        <div class="titulo">{titulo}</div>
    {/if}

    <div class="barra-progreso">
        <div
            class="barra-llenado {animado ? 'animado' : ''}"
            style="width: {porcentaje}%; background-color: {colorSeleccionado}"
        ></div>
    </div>

    {#if mostrarPorcentaje}
        <div class="porcentaje">{Math.round(porcentaje)}%</div>
    {/if}
</div>

<style>
    .mi-progreso {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
    }

    .titulo {
        font-weight: 600;
        color: #374151;
        font-size: 0.875rem;
    }

    .barra-progreso {
        width: 100%;
        height: 0.75rem;
        background-color: #e5e7eb;
        border-radius: 0.375rem;
        overflow: hidden;
        position: relative;
    }

    .barra-llenado {
        height: 100%;
        border-radius: 0.375rem;
        transition: width 0.3s ease;
    }

    .barra-llenado.animado {
        transition: width 0.6s ease-out;
    }

    .porcentaje {
        font-size: 0.75rem;
        color: #6b7280;
        text-align: right;
        font-weight: 500;
    }
</style>