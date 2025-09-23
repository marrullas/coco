<script lang="ts">
	import { page } from '$app/state';
</script>

<header class="modern-header">
	<div class="header-container">
		<!-- Logo y nombre de la marca -->
		<a href="/" class="brand">
			<img 
				src="https://tse2.mm.bing.net/th/id/OIP.ahikDrO8hfH-kId6TtKZmgHaF0?rs=1&pid=ImgDetMain&o=7&rm=3" 
				alt="4AMotos Logo" 
				class="logo"
			/>
			<h1 class="brand-name">4AMotos</h1>
		</a>

		<!-- Navegación principal -->
		<nav class="main-nav">
			<ul class="nav-list">
				<li>
					<a 
						href="/" 
						class="nav-link" 
						class:active={page.url.pathname === '/'}
					>
						<span class="nav-icon">🏠</span>
						Inicio
					</a>
				</li>
				<li>
					<a 
						href="/productos" 
						class="nav-link"
						class:active={page.url.pathname === '/productos'}
					>
						<span class="nav-icon">🔧</span>
						Productos
					</a>
				</li>
				<li>
					<a 
						href="/cotizacion" 
						class="nav-link"
						class:active={page.url.pathname === '/cotizacion'}
					>
						<span class="nav-icon">💰</span>
						Cotización
					</a>
				</li>
				<li>
					<a 
						href="/ejercicios" 
						class="nav-link"
						class:active={page.url.pathname === '/ejercicios_wilfran'}
					>
						<span class="nav-icon">📚</span>
						Ejercicios
					</a>
				</li>
			</ul>
		</nav>

		<!-- Botón de menú móvil (para futuro) -->
		<div class="mobile-menu-btn">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</header>

<style>
	.modern-header {
		background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem;
		min-height: 70px;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		transition: all 0.3s ease;
		padding: 0.5rem;
		border-radius: 8px;
	}

	.brand:hover {
		background: rgba(255, 255, 255, 0.1);
		transform: scale(1.02);
	}

	.logo {
		width: 45px;
		height: 45px;
		object-fit: cover;
		border-radius: 50%;
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
		border: 2px solid rgba(255, 255, 255, 0.3);
		transition: all 0.3s ease;
	}

	.brand:hover .logo {
		border-color: rgba(255, 255, 255, 0.6);
		filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
	}

	.brand-name {
		color: white;
		font-size: 1.5rem;
		font-weight: 800;
		margin: 0;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		letter-spacing: -0.02em;
	}

	.main-nav {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.nav-list {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 0.5rem;
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.25rem;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.95rem;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.nav-link::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.2);
		transition: left 0.3s ease;
		z-index: -1;
	}

	.nav-link:hover::before {
		left: 0;
	}

	.nav-link:hover {
		background: rgba(255, 255, 255, 0.15);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.nav-link.active {
		background: rgba(255, 255, 255, 0.25);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}

	.nav-link.active::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 20px;
		height: 3px;
		background: white;
		border-radius: 2px;
	}

	.nav-icon {
		font-size: 1.1rem;
		opacity: 0.9;
	}

	.mobile-menu-btn {
		display: none;
		flex-direction: column;
		cursor: pointer;
		gap: 4px;
		padding: 8px;
	}

	.mobile-menu-btn span {
		width: 25px;
		height: 3px;
		background: white;
		border-radius: 2px;
		transition: all 0.3s ease;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.header-container {
			padding: 0 1rem;
		}

		.main-nav {
			display: none;
		}

		.mobile-menu-btn {
			display: flex;
		}

		.brand-name {
			font-size: 1.25rem;
		}
	}

	@media (max-width: 640px) {
		.nav-list {
			flex-direction: column;
			gap: 0.25rem;
		}

		.nav-link {
			padding: 0.5rem 1rem;
			font-size: 0.9rem;
		}
	}
</style>
