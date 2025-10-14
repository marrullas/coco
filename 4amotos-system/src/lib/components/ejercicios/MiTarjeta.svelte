<script lang="ts">
    // Acepta un título como parámetro
    interface Props {
        titulo: string;
        descripcion: string;
        icono?: string;
    }

    let { titulo, descripcion, icono = "📄" }: Props = $props();
</script>

<div class="mi-tarjeta">
    <div class="tarjeta-icono">{icono}</div>
    <h3 class="tarjeta-titulo">{titulo}</h3>
    <p class="tarjeta-descripcion">{descripcion}</p>
</div>

<style>
    .mi-tarjeta {
        padding: 1.5rem;
        border-radius: 0.75rem;
        background: white;
        border: 2px solid #e5e7eb;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        text-align: center;
    }

    .mi-tarjeta:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.2);
        border-color: #f97316;
    }

    .tarjeta-icono {
        font-size: 2rem;
        margin-bottom: 0.75rem;
    }

    .tarjeta-titulo {
        margin: 0 0 0.75rem 0;
        color: #1f2937;
        font-size: 1.25rem;
    }

    .tarjeta-descripcion {
        margin: 0;
        color: #6b7280;
        line-height: 1.5;
    }
</style>