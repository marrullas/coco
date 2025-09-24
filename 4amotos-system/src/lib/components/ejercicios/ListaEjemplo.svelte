<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        items: any[];
        itemTemplate?: Snippet<[any, number]>;
        emptyTemplate?: Snippet;
    }

    let { items, itemTemplate, emptyTemplate }: Props = $props();
</script>

<div class="lista-ejemplo">
    <h4>👥 Lista de {items.length} elementos</h4>

    <div class="items-container">
        {#if items.length > 0}
            {#each items as item, index}
                {#if itemTemplate}
                    {@render itemTemplate(item, index)}
                {:else}
                    <div class="item-default">
                        <span class="numero">#{index + 1}</span>
                        <span class="contenido">{JSON.stringify(item)}</span>
                    </div>
                {/if}
            {/each}
        {:else}
            {#if emptyTemplate}
                {@render emptyTemplate()}
            {:else}
                <div class="vacio-default">
                    📭 No hay elementos en la lista
                </div>
            {/if}
        {/if}
    </div>
</div>

<style>
    .lista-ejemplo {
        background: white;
        border-radius: 0.75rem;
        border: 2px solid #e5e7eb;
        padding: 1.5rem;
        transition: all 0.3s ease;
        max-width: 500px;
    }

    .lista-ejemplo:hover {
        border-color: #3b82f6;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .lista-ejemplo h4 {
        margin: 0 0 1rem 0;
        color: #1f2937;
        text-align: center;
    }

    .items-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .item-default {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem;
        background: #f8fafc;
        border-radius: 0.5rem;
        border: 1px solid #e5e7eb;
    }

    .item-default .numero {
        background: #3b82f6;
        color: white;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.875rem;
        flex-shrink: 0;
    }

    .item-default .contenido {
        flex: 1;
        font-family: "Monaco", monospace;
        font-size: 0.875rem;
        color: #6b7280;
    }

    .vacio-default {
        text-align: center;
        color: #9ca3af;
        font-style: italic;
        padding: 2rem;
        background: #f8fafc;
        border-radius: 0.5rem;
        border: 2px dashed #d1d5db;
    }
</style>