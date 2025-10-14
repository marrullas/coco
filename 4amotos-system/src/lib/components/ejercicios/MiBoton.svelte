<script lang="ts">
    interface Props {
        texto: string;
        variant?: 'primary' | 'secondary' | 'danger';
        onclick?: () => void;
    }

    let { texto, variant = 'primary', onclick }: Props = $props();
</script>

<button class="mi-boton {variant}" {onclick}>
    {texto}
</button>

<style>
    .mi-boton {
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        border: none;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 1rem;
    }

    .mi-boton:hover {
        transform: translateY(-2px);
    }

    .mi-boton.primary {
        background: #f97316;
        color: white;
    }

    .mi-boton.primary:hover {
        background: #ea580c;
    }

    .mi-boton.secondary {
        background: #6b7280;
        color: white;
    }

    .mi-boton.secondary:hover {
        background: #4b5563;
    }

    .mi-boton.danger {
        background: #ef4444;
        color: white;
    }

    .mi-boton.danger:hover {
        background: #dc2626;
    }
</style>