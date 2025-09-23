<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        header?: Snippet;
        content?: Snippet;
        children?: Snippet;
    }

    let { header, content, children }: Props = $props();
</script>

<div class="card-ejemplo">
    {#if header}
        <div class="header">
            {@render header()}
        </div>
    {/if}

    <div class="body">
        {#if content}
            {@render content()}
        {:else if children}
            {@render children()}
        {:else}
            <p>Contenido por defecto de la card</p>
        {/if}
    </div>
</div>

<style>
    .card-ejemplo {
        background: white;
        border-radius: 0.75rem;
        border: 2px solid #e5e7eb;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        max-width: 400px;
    }

    .card-ejemplo:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.2);
        border-color: #f97316;
    }

    .header {
        background: #f8fafc;
        padding: 1.5rem;
        border-bottom: 1px solid #e5e7eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header h3 {
        margin: 0;
        color: #1f2937;
        font-size: 1.25rem;
    }

    .body {
        padding: 1.5rem;
    }

    .body p {
        margin: 0 0 1rem 0;
        color: #6b7280;
        line-height: 1.6;
    }

    .body p:last-child {
        margin-bottom: 0;
    }
</style>