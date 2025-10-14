<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    interface Props {
        titulo?: string;
    }

    let { titulo = "Mi Formulario" }: Props = $props();

    const dispatch = createEventDispatcher<{
        enviado: { nombre: string; email: string; mensaje: string };
        validacion: { campo: string; valido: boolean; error?: string };
        focus: { campo: string };
    }>();

    let nombre = $state('');
    let email = $state('');
    let mensaje = $state('');

    function validarEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function handleSubmit() {
        // Validar antes de enviar
        if (!nombre.trim()) {
            dispatch('validacion', {
                campo: 'nombre',
                valido: false,
                error: 'El nombre es requerido'
            });
            return;
        }

        if (!validarEmail(email)) {
            dispatch('validacion', {
                campo: 'email',
                valido: false,
                error: 'Email inválido'
            });
            return;
        }

        // Enviar datos
        dispatch('enviado', { nombre, email, mensaje });

        // Limpiar formulario
        nombre = '';
        email = '';
        mensaje = '';
    }

    function handleFocus(campo: string) {
        dispatch('focus', { campo });
    }
</script>

<div class="mi-formulario-evento">
    <h3>{titulo}</h3>

    <form on:submit|preventDefault={handleSubmit}>
        <div class="campo">
            <label for="nombre">Nombre:</label>
            <input
                id="nombre"
                type="text"
                bind:value={nombre}
                on:focus={() => handleFocus('nombre')}
                placeholder="Tu nombre"
            />
        </div>

        <div class="campo">
            <label for="email">Email:</label>
            <input
                id="email"
                type="email"
                bind:value={email}
                on:focus={() => handleFocus('email')}
                placeholder="tu@email.com"
            />
        </div>

        <div class="campo">
            <label for="mensaje">Mensaje:</label>
            <textarea
                id="mensaje"
                bind:value={mensaje}
                on:focus={() => handleFocus('mensaje')}
                placeholder="Tu mensaje..."
                rows="3"
            ></textarea>
        </div>

        <button type="submit" class="btn-enviar">
            Enviar Evento
        </button>
    </form>
</div>

<style>
    .mi-formulario-evento {
        background: white;
        padding: 1.5rem;
        border-radius: 0.75rem;
        border: 2px solid #e5e7eb;
        max-width: 400px;
    }

    .mi-formulario-evento h3 {
        margin: 0 0 1rem 0;
        color: #1f2937;
        text-align: center;
    }

    .campo {
        margin-bottom: 1rem;
    }

    .campo label {
        display: block;
        margin-bottom: 0.25rem;
        font-weight: 600;
        color: #374151;
    }

    .campo input,
    .campo textarea {
        width: 100%;
        padding: 0.5rem;
        border: 2px solid #d1d5db;
        border-radius: 0.5rem;
        font-size: 1rem;
        transition: border-color 0.2s ease;
        box-sizing: border-box;
    }

    .campo input:focus,
    .campo textarea:focus {
        outline: none;
        border-color: #3b82f6;
    }

    .btn-enviar {
        width: 100%;
        padding: 0.75rem;
        background: #10b981;
        color: white;
        border: none;
        border-radius: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .btn-enviar:hover {
        background: #059669;
        transform: translateY(-1px);
    }
</style>