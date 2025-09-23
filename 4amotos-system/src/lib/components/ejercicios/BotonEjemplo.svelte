<script lang="ts">
    interface Props {
        texto: string;
        tipo?: 'primario' | 'secundario' | 'peligro';
        onclick?: () => void;
    }

    let { texto, tipo = 'primario', onclick }: Props = $props();
</script>

<button class="boton-ejemplo {tipo}" {onclick}>
    <span class="texto">{texto}</span>
    <div class="efecto"></div>
</button>

<style>
    .boton-ejemplo {
        position: relative;
        padding: 0.75rem 1.5rem;
        border-radius: 0.75rem;
        border: none;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
        overflow: hidden;
        min-width: 120px;
    }

    .boton-ejemplo:hover {
        transform: translateY(-2px);
    }

    .boton-ejemplo:active {
        transform: translateY(0);
    }

    .boton-ejemplo.primario {
        background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        color: white;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }

    .boton-ejemplo.primario:hover {
        background: linear-gradient(135deg, #2563eb, #1e40af);
        box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    }

    .boton-ejemplo.secundario {
        background: linear-gradient(135deg, #6b7280, #4b5563);
        color: white;
        box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
    }

    .boton-ejemplo.secundario:hover {
        background: linear-gradient(135deg, #4b5563, #374151);
        box-shadow: 0 8px 20px rgba(107, 114, 128, 0.4);
    }

    .boton-ejemplo.peligro {
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: white;
        box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
    }

    .boton-ejemplo.peligro:hover {
        background: linear-gradient(135deg, #dc2626, #b91c1c);
        box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
    }

    .texto {
        position: relative;
        z-index: 2;
    }

    .efecto {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.6s ease;
    }

    .boton-ejemplo:active .efecto {
        width: 300px;
        height: 300px;
    }
</style>