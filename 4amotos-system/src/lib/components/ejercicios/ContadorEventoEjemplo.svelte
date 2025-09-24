<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    interface Props {
        valorInicial?: number;
        maximo?: number;
        minimo?: number;
    }

    let { valorInicial = 0, maximo = 10, minimo = 0 }: Props = $props();

    const dispatch = createEventDispatcher<{
        cambio: { valor: number; accion: string };
        maximo: { valor: number };
        minimo: { valor: number };
    }>();

    let valor = $state(valorInicial);

    function incrementar() {
        if (valor < maximo) {
            valor++;
            dispatch('cambio', { valor, accion: 'incremento' });
        } else {
            dispatch('maximo', { valor });
        }
    }

    function decrementar() {
        if (valor > minimo) {
            valor--;
            dispatch('cambio', { valor, accion: 'decremento' });
        } else {
            dispatch('minimo', { valor });
        }
    }

    function resetear() {
        valor = valorInicial;
        dispatch('cambio', { valor, accion: 'reset' });
    }
</script>

<div class="contador-evento-ejemplo">
    <div class="display">
        <div class="titulo">Contador con Eventos</div>
        <div class="valor" class:maximo={valor === maximo} class:minimo={valor === minimo}>
            {valor}
        </div>
        <div class="limites">
            Min: {minimo} | Max: {maximo}
        </div>
    </div>

    <div class="controles">
        <button
            class="btn-control"
            onclick={decrementar}
            disabled={valor <= minimo}
        >
            ➖
        </button>
        <button class="btn-reset" onclick={resetear}>
            🔄
        </button>
        <button
            class="btn-control"
            onclick={incrementar}
            disabled={valor >= maximo}
        >
            ➕
        </button>
    </div>

    <div class="estado">
        {#if valor === maximo}
            <span class="badge error">🚨 Máximo alcanzado</span>
        {:else if valor === minimo}
            <span class="badge info">ℹ️ Mínimo alcanzado</span>
        {:else}
            <span class="badge normal">✅ Normal</span>
        {/if}
    </div>
</div>

<style>
    .contador-evento-ejemplo {
        background: white;
        border-radius: 1rem;
        padding: 1.5rem;
        border: 2px solid #e5e7eb;
        max-width: 300px;
        text-align: center;
        transition: all 0.3s ease;
    }

    .contador-evento-ejemplo:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    }

    .display {
        margin-bottom: 1.5rem;
    }

    .titulo {
        font-size: 1rem;
        font-weight: 600;
        color: #6b7280;
        margin-bottom: 1rem;
    }

    .valor {
        font-size: 3rem;
        font-weight: 700;
        color: #3b82f6;
        margin-bottom: 0.5rem;
        transition: all 0.3s ease;
    }

    .valor.maximo {
        color: #ef4444;
        animation: pulse 1s infinite;
    }

    .valor.minimo {
        color: #6b7280;
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }

    .limites {
        font-size: 0.8rem;
        color: #9ca3af;
        font-family: "Monaco", monospace;
    }

    .controles {
        display: flex;
        justify-content: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
    }

    .btn-control,
    .btn-reset {
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 0.75rem;
        font-size: 1.25rem;
        cursor: pointer;
        transition: all 0.2s ease;
        font-weight: 600;
    }

    .btn-control {
        background: #3b82f6;
        color: white;
    }

    .btn-control:hover:not(:disabled) {
        background: #2563eb;
        transform: translateY(-2px);
    }

    .btn-control:disabled {
        background: #d1d5db;
        color: #9ca3af;
        cursor: not-allowed;
        transform: none;
    }

    .btn-reset {
        background: #f59e0b;
        color: white;
    }

    .btn-reset:hover {
        background: #d97706;
        transform: translateY(-2px);
    }

    .estado {
        display: flex;
        justify-content: center;
    }

    .badge {
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-size: 0.875rem;
        font-weight: 600;
    }

    .badge.normal {
        background: #d1fae5;
        color: #065f46;
        border: 1px solid #10b981;
    }

    .badge.error {
        background: #fee2e2;
        color: #991b1b;
        border: 1px solid #ef4444;
    }

    .badge.info {
        background: #dbeafe;
        color: #1e40af;
        border: 1px solid #3b82f6;
    }
</style>