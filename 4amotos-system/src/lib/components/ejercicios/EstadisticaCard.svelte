<script lang="ts">
    interface Props {
        titulo: string;
        valorInicial?: number;
        icono?: string;
        color?: string;
    }

    let { titulo, valorInicial = 0, icono = "📊", color = "blue" }: Props = $props();

    // Estado interno del componente
    let valor = $state(valorInicial);
    let animando = $state(false);

    function incrementar() {
        animando = true;
        valor++;
        setTimeout(() => animando = false, 300);
    }

    function decrementar() {
        if (valor > 0) {
            animando = true;
            valor--;
            setTimeout(() => animando = false, 300);
        }
    }

    function resetear() {
        valor = valorInicial;
    }
</script>

<div class="estadistica-card {color}">
    <div class="card-header">
        <span class="icono">{icono}</span>
        <h3 class="titulo">{titulo}</h3>
    </div>

    <div class="valor-container">
        <div class="valor {animando ? 'animando' : ''}">{valor}</div>
    </div>

    <div class="controles">
        <button class="btn-control" onclick={decrementar}>-</button>
        <button class="btn-control" onclick={resetear}>Reset</button>
        <button class="btn-control" onclick={incrementar}>+</button>
    </div>
</div>

<style>
    .estadistica-card {
        padding: 1.5rem;
        border-radius: 1rem;
        background: white;
        border: 2px solid;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        min-width: 200px;
    }

    .estadistica-card.blue { border-color: #3b82f6; }
    .estadistica-card.green { border-color: #10b981; }
    .estadistica-card.orange { border-color: #f59e0b; }
    .estadistica-card.red { border-color: #ef4444; }

    .card-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    .icono {
        font-size: 1.5rem;
    }

    .titulo {
        margin: 0;
        font-size: 1rem;
        color: #1f2937;
    }

    .valor-container {
        text-align: center;
        margin-bottom: 1rem;
    }

    .valor {
        font-size: 3rem;
        font-weight: 700;
        color: #1f2937;
        transition: all 0.3s ease;
    }

    .valor.animando {
        transform: scale(1.2);
        color: #f59e0b;
    }

    .controles {
        display: flex;
        gap: 0.5rem;
        justify-content: center;
    }

    .btn-control {
        padding: 0.5rem 1rem;
        border: 1px solid #d1d5db;
        border-radius: 0.5rem;
        background: white;
        cursor: pointer;
        transition: all 0.2s ease;
        font-weight: 600;
    }

    .btn-control:hover {
        background: #f3f4f6;
        transform: translateY(-1px);
    }
</style>