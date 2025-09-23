<script lang="ts">
    interface Props {
        nombre: string;
        email: string;
        avatar: string;
        rol: string;
        activo: boolean;
    }

    let { nombre, email, avatar, rol, activo }: Props = $props();
</script>

<div class="tarjeta-perfil-ejemplo" class:activo>
    <div class="cabecera">
        <div class="avatar">{avatar}</div>
        <div class="estado" class:activo>
            {activo ? '🟢' : '🔴'}
        </div>
    </div>

    <div class="info">
        <h3 class="nombre">{nombre}</h3>
        <p class="rol">{rol}</p>
        <p class="email">{email}</p>
    </div>

    <div class="badge-estado">
        {activo ? 'En línea' : 'Desconectado'}
    </div>
</div>

<style>
    .tarjeta-perfil-ejemplo {
        background: white;
        border-radius: 1rem;
        padding: 1.5rem;
        border: 2px solid #e5e7eb;
        transition: all 0.3s ease;
        position: relative;
        max-width: 280px;
    }

    .tarjeta-perfil-ejemplo:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
    }

    .tarjeta-perfil-ejemplo.activo {
        border-color: #10b981;
        background: linear-gradient(135deg, #fff, #ecfdf5);
    }

    .cabecera {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        margin-bottom: 1rem;
    }

    .avatar {
        font-size: 4rem;
        margin-bottom: 0.5rem;
    }

    .estado {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 1rem;
    }

    .info {
        text-align: center;
        margin-bottom: 1rem;
    }

    .nombre {
        margin: 0 0 0.5rem 0;
        color: #1f2937;
        font-size: 1.25rem;
        font-weight: 600;
    }

    .rol {
        margin: 0 0 0.25rem 0;
        color: #6b7280;
        font-weight: 500;
        font-size: 0.9rem;
    }

    .email {
        margin: 0;
        color: #9ca3af;
        font-size: 0.8rem;
        font-family: "Monaco", monospace;
    }

    .badge-estado {
        text-align: center;
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: 0.875rem;
    }

    .tarjeta-perfil-ejemplo.activo .badge-estado {
        background: #d1fae5;
        color: #065f46;
        border: 1px solid #10b981;
    }

    .tarjeta-perfil-ejemplo:not(.activo) .badge-estado {
        background: #fee2e2;
        color: #991b1b;
        border: 1px solid #ef4444;
    }
</style>