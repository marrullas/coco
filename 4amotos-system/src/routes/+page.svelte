<script lang="ts">
  import { goto } from '$app/navigation';

  function irAConsulta() {
    goto('/productos');
  }

  function irACotizacion() {
    goto('/cotizacion');
  }
</script>

<svelte:head>
  <title>4AMotos - Inicio</title>
  <meta name="description" content="Sistema de repuestos y cotizaciones para motos" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-0.6 min-h-screen bg-gray-100">
  <!-- Imagen/logo en la parte alta -->
  <img
    src="https://tse2.mm.bing.net/th/id/OIP.ahikDrO8hfH-kId6TtKZmgHaF0?rs=1&pid=ImgDetMain&o=7&rm=3"
    alt="Logo o imagen de moto"
    class="w-40 h-40 object-cover rounded-full shadow-lg mb-6"
  />
  <h1 class="text-4xl font-bold text-orange-600 mb-4">4AMotos</h1>
  <h2 class="text-xl text-gray-700 mb-8">Bienvenido a 4amotos-system</h2>
  <div class="flex gap-6">
    <button
      class="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition font-semibold"
      on:click={irAConsulta}
    >
      Consultar Repuestos
    </button>
    <button
      class="bg-gray-200 text-orange-600 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition font-semibold"
      on:click={irACotizacion}
    >
      Realizar Cotización
    </button>
  </div>
</section>