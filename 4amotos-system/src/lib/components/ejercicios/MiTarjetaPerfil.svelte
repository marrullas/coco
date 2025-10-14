<script lang="ts">
    // Definir la interfaz de props
    interface Props {
        nombre: string;              // Prop requerida
        apellido: string;            // Prop requerida
        edad?: number;               // Prop opcional
        profesion?: string;          // Prop opcional
        foto?: string;               // Prop opcional
        favorito?: boolean;          // Prop opcional
    }

    // Recibir props con valores por defecto
    let {
        nombre,
        apellido,
        edad = 21,
        profesion = "Estudiante",
        foto = "👤",
        favorito = false
    }: Props = $props();

    // Estado interno del componente
    let mostrarInfo = $state(false);

    function toggleInfo() {
        mostrarInfo = !mostrarInfo;
    }
</script>

<div class="mi-tarjeta-perfil" class:favorito>
    <div class="cabecera">
        <div class="foto">{foto}</div>
        <div class="info-basica">
            <h3 class="nombre">{nombre} {apellido}</h3>
            <p class="profesion">{profesion}</p>
        </div>
        {#if favorito}
            <div class="estrella">⭐</div>
        {/if}
    </div>

    <button class="btn-info" onclick={toggleInfo}>
        {mostrarInfo ? 'Ocultar' : 'Ver'} Info
    </button>

    {#if mostrarInfo}
        <div class="info-extra">
            <p><strong>Edad:</strong> {edad} años</p>
            <p><strong>Estado:</strong> {favorito ? 'Favorito ⭐' : 'Normal'}</p>
        </div>
    {/if}
</div>

<style>
    .mi-tarjeta-perfil {
        background: white;
        border-radius: 1rem;
        padding: 1.5rem;
        border: 2px solid #e5e7eb;
        transition: all 0.3s ease;
        max-width: 300px;
    }

    .mi-tarjeta-perfil:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px);
    }

    .mi-tarjeta-perfil.favorito {
        border-color: #fbbf24;
        background: linear-gradient(135deg, #fff, #fef3c7);
    }

    .cabecera {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1rem;
        position: relative;
    }

    .foto {
        font-size: 3rem;
        flex-shrink: 0;
    }

    .info-basica {
        flex: 1;
    }

    .nombre {
        margin: 0 0 0.25rem 0;
        color: #1f2937;
        font-size: 1.25rem;
    }

    .profesion {
        margin: 0;
        color: #6b7280;
        font-size: 0.9rem;
    }

    .estrella {
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        font-size: 1.5rem;
    }

    .btn-info {
        width: 100%;
        padding: 0.5rem;
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .btn-info:hover {
        background: #2563eb;
    }

    .info-extra {
        margin-top: 1rem;
        padding: 1rem;
        background: #f8fafc;
        border-radius: 0.5rem;
        border: 1px solid #e2e8f0;
    }

    .info-extra p {
        margin: 0 0 0.5rem 0;
        font-size: 0.9rem;
        color: #475569;
    }

    .info-extra p:last-child {
        margin-bottom: 0;
    }
</style>