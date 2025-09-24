<script lang="ts">
    interface Props {
        nombre: string;
        precio: number;
        imagen: string;
        enStock: boolean;
        descuento?: number;
    }

    let { nombre, precio, imagen, enStock, descuento = 0 }: Props = $props();

    const precioFinal = $derived(precio - (precio * descuento / 100));
    const tieneDescuento = $derived(descuento > 0);
</script>

<div class="producto-card-ejemplo" class:sin-stock={!enStock}>
    <div class="imagen-container">
        <div class="imagen">{imagen}</div>
        {#if tieneDescuento}
            <div class="badge-descuento">-{descuento}%</div>
        {/if}
        {#if !enStock}
            <div class="overlay-agotado">Agotado</div>
        {/if}
    </div>

    <div class="info">
        <h3 class="nombre">{nombre}</h3>

        <div class="precios">
            {#if tieneDescuento}
                <span class="precio-original">${precio}</span>
                <span class="precio-descuento">${precioFinal.toFixed(0)}</span>
            {:else}
                <span class="precio-normal">${precio}</span>
            {/if}
        </div>

        <div class="estado">
            {#if enStock}
                <span class="disponible">✅ Disponible</span>
            {:else}
                <span class="agotado">❌ Sin stock</span>
            {/if}
        </div>
    </div>
</div>

<style>
    .producto-card-ejemplo {
        background: white;
        border-radius: 1rem;
        padding: 1rem;
        border: 2px solid #e5e7eb;
        transition: all 0.3s ease;
        max-width: 250px;
        position: relative;
    }

    .producto-card-ejemplo:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
        border-color: #f97316;
    }

    .producto-card-ejemplo.sin-stock {
        opacity: 0.7;
        border-color: #ef4444;
    }

    .imagen-container {
        position: relative;
        text-align: center;
        margin-bottom: 1rem;
    }

    .imagen {
        font-size: 4rem;
        margin-bottom: 0.5rem;
    }

    .badge-descuento {
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        background: #ef4444;
        color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 700;
    }

    .overlay-agotado {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(239, 68, 68, 0.9);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        font-weight: 700;
        font-size: 0.9rem;
    }

    .info {
        text-align: center;
    }

    .nombre {
        margin: 0 0 0.75rem 0;
        color: #1f2937;
        font-size: 1.1rem;
        font-weight: 600;
        line-height: 1.3;
    }

    .precios {
        margin-bottom: 0.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .precio-normal {
        font-size: 1.25rem;
        font-weight: 700;
        color: #059669;
    }

    .precio-original {
        font-size: 1rem;
        color: #9ca3af;
        text-decoration: line-through;
    }

    .precio-descuento {
        font-size: 1.25rem;
        font-weight: 700;
        color: #ef4444;
    }

    .estado {
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        font-weight: 600;
    }

    .disponible {
        color: #065f46;
        background: #d1fae5;
        border: 1px solid #10b981;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
    }

    .agotado {
        color: #991b1b;
        background: #fee2e2;
        border: 1px solid #ef4444;
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
    }
</style>