<script lang="ts">
    interface Props {
        titulo: string;
        contenido: string;
        color?: 'azul' | 'verde' | 'naranja' | 'rosa';
    }

    let { titulo, contenido, color = 'azul' }: Props = $props();
</script>

<div class="tarjeta-ejemplo {color}">
    <h3 class="titulo">{titulo}</h3>
    <p class="contenido">{contenido}</p>
    <div class="decoracion"></div>
</div>

<style>
    .tarjeta-ejemplo {
        position: relative;
        padding: 1.5rem;
        border-radius: 1rem;
        background: white;
        border: 2px solid;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        overflow: hidden;
    }

    .tarjeta-ejemplo:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.2);
    }

    .tarjeta-ejemplo.azul {
        border-color: #3b82f6;
    }

    .tarjeta-ejemplo.verde {
        border-color: #10b981;
    }

    .tarjeta-ejemplo.naranja {
        border-color: #f59e0b;
    }

    .tarjeta-ejemplo.rosa {
        border-color: #ec4899;
    }

    .titulo {
        margin: 0 0 0.75rem 0;
        color: #1f2937;
        font-size: 1.25rem;
        font-weight: 600;
    }

    .contenido {
        margin: 0;
        color: #6b7280;
        line-height: 1.6;
        font-size: 0.95rem;
    }

    .decoracion {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        opacity: 0.1;
    }

    .azul .decoracion {
        background: #3b82f6;
    }

    .verde .decoracion {
        background: #10b981;
    }

    .naranja .decoracion {
        background: #f59e0b;
    }

    .rosa .decoracion {
        background: #ec4899;
    }
</style>