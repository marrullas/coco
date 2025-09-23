<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher<{
        enviado: { nombre: string; email: string };
        cancelado: {};
        cambio: { campo: string; valor: string };
    }>();

    let nombre = $state("");
    let email = $state("");
    let enviando = $state(false);

    function handleSubmit(event: Event) {
        event.preventDefault();

        if (!nombre.trim() || !email.trim()) {
            return;
        }

        enviando = true;

        // Simular envío
        setTimeout(() => {
            dispatch("enviado", { nombre, email });
            nombre = "";
            email = "";
            enviando = false;
        }, 1000);
    }

    function handleCancel() {
        nombre = "";
        email = "";
        dispatch("cancelado", {});
    }

    function handleInputChange(campo: string, valor: string) {
        dispatch("cambio", { campo, valor });
    }
</script>

<div class="formulario-evento-ejemplo">
    <h3>📝 Formulario con Eventos</h3>

    <form onsubmit={handleSubmit}>
        <div class="campo">
            <label for="nombre">Nombre:</label>
            <input
                id="nombre"
                type="text"
                bind:value={nombre}
                oninput={(e) => handleInputChange("nombre", (e.target as HTMLInputElement).value)}
                placeholder="Tu nombre"
                disabled={enviando}
            />
        </div>

        <div class="campo">
            <label for="email">Email:</label>
            <input
                id="email"
                type="email"
                bind:value={email}
                oninput={(e) => handleInputChange("email", (e.target as HTMLInputElement).value)}
                placeholder="tu@email.com"
                disabled={enviando}
            />
        </div>

        <div class="acciones">
            <button
                type="button"
                class="btn-cancelar"
                onclick={handleCancel}
                disabled={enviando}
            >
                ❌ Cancelar
            </button>
            <button
                type="submit"
                class="btn-enviar"
                disabled={!nombre.trim() || !email.trim() || enviando}
            >
                {enviando ? "⏳ Enviando..." : "✅ Enviar"}
            </button>
        </div>
    </form>

    <div class="info">
        <div class="estado-campos">
            <small>Nombre: {nombre.length > 0 ? "✅" : "❌"}</small>
            <small>Email: {email.length > 0 ? "✅" : "❌"}</small>
        </div>
    </div>
</div>

<style>
    .formulario-evento-ejemplo {
        background: white;
        border-radius: 1rem;
        padding: 1.5rem;
        border: 2px solid #e5e7eb;
        max-width: 400px;
        transition: all 0.3s ease;
    }

    .formulario-evento-ejemplo:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        border-color: #3b82f6;
    }

    .formulario-evento-ejemplo h3 {
        margin: 0 0 1.5rem 0;
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

    .campo input {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #d1d5db;
        border-radius: 0.5rem;
        font-size: 1rem;
        transition: border-color 0.2s ease;
        box-sizing: border-box;
    }

    .campo input:focus {
        outline: none;
        border-color: #3b82f6;
    }

    .campo input:disabled {
        background: #f3f4f6;
        cursor: not-allowed;
    }

    .acciones {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 1rem;
    }

    .btn-cancelar,
    .btn-enviar {
        flex: 1;
        padding: 0.75rem;
        border: none;
        border-radius: 0.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 0.9rem;
    }

    .btn-cancelar {
        background: #ef4444;
        color: white;
    }

    .btn-cancelar:hover:not(:disabled) {
        background: #dc2626;
    }

    .btn-enviar {
        background: #10b981;
        color: white;
    }

    .btn-enviar:hover:not(:disabled) {
        background: #059669;
    }

    .btn-cancelar:disabled,
    .btn-enviar:disabled {
        background: #d1d5db;
        color: #9ca3af;
        cursor: not-allowed;
    }

    .info {
        text-align: center;
    }

    .estado-campos {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
    }

    .estado-campos small {
        color: #6b7280;
        font-family: "Monaco", monospace;
    }
</style>
