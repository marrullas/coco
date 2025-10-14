<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    interface Props {
        id: number;
        texto: string;
        completada: boolean;
    }

    let { id, texto, completada }: Props = $props();

    const dispatch = createEventDispatcher<{
        toggle: { id: number; completada: boolean };
        delete: { id: number };
        edit: { id: number; nuevoTexto: string };
    }>();

    let editando = $state(false);
    let textoEditado = $state(texto);

    function handleToggle() {
        dispatch('toggle', { id, completada: !completada });
    }

    function handleDelete() {
        dispatch('delete', { id });
    }

    function handleEdit() {
        editando = true;
        textoEditado = texto;
    }

    function handleSave() {
        if (textoEditado.trim() && textoEditado !== texto) {
            dispatch('edit', { id, nuevoTexto: textoEditado.trim() });
        }
        editando = false;
    }

    function handleCancel() {
        textoEditado = texto;
        editando = false;
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            handleSave();
        } else if (event.key === 'Escape') {
            handleCancel();
        }
    }

    function focusInput(node: HTMLInputElement) {
        node.focus();
        node.select();
    }
</script>

<div class="mi-todo-item {completada ? 'completada' : ''}">
    {#if editando}
        <input
            type="text"
            bind:value={textoEditado}
            onkeydown={handleKeydown}
            onblur={handleSave}
            class="input-editar"
            use:focusInput
        />
        <div class="acciones">
            <button onclick={handleSave} class="btn-guardar">💾</button>
            <button onclick={handleCancel} class="btn-cancelar">❌</button>
        </div>
    {:else}
        <input
            type="checkbox"
            checked={completada}
            onclick={handleToggle}
            class="checkbox"
        />
        <span class="texto {completada ? 'tachado' : ''}">{texto}</span>
        <div class="acciones">
            <button onclick={handleEdit} class="btn-editar" title="Editar">✏️</button>
            <button onclick={handleDelete} class="btn-eliminar" title="Eliminar">🗑️</button>
        </div>
    {/if}
</div>



<style>
    .mi-todo-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem;
        background: white;
        border-radius: 0.5rem;
        border: 1px solid #e5e7eb;
        transition: all 0.2s ease;
        margin-bottom: 0.5rem;
    }

    .mi-todo-item:hover {
        border-color: #3b82f6;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .mi-todo-item.completada {
        background: #f8fafc;
        opacity: 0.7;
    }

    .checkbox {
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
    }

    .texto {
        flex: 1;
        font-size: 1rem;
        color: #1f2937;
        transition: all 0.2s ease;
    }

    .texto.tachado {
        text-decoration: line-through;
        color: #6b7280;
    }

    .input-editar {
        flex: 1;
        padding: 0.5rem;
        border: 2px solid #3b82f6;
        border-radius: 0.25rem;
        font-size: 1rem;
        outline: none;
    }

    .acciones {
        display: flex;
        gap: 0.25rem;
    }

    .acciones button {
        padding: 0.25rem 0.5rem;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        font-size: 0.875rem;
        transition: all 0.2s ease;
        background: transparent;
    }

    .btn-editar:hover {
        background: #dbeafe;
        color: #1e40af;
    }

    .btn-eliminar:hover {
        background: #fee2e2;
        color: #dc2626;
    }

    .btn-guardar:hover {
        background: #d1fae5;
        color: #065f46;
    }

    .btn-cancelar:hover {
        background: #fef3c7;
        color: #92400e;
    }
</style>