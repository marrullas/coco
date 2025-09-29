<script lang="ts">
  import { onMount } from "svelte";

  // --- 1. Definir tipo de producto
  type Producto = {
    nombre: string;
    descripcion: string;
    precio: number;
    img: string;
  };

  // --- 2. Definir productos por marca 
  const productosPorMarca: Record<string, Producto[]> = {
    "KTM Duke": [
      { 
        nombre: "Aceite Motul 7100", 
        descripcion: "Aceite sintético para motores KTM", 
        precio: 85000, 
        img: "/img/Aceite Motul 7100.jpg" 
      },
      { 
        nombre: "Kit de Arrastre KTM", 
        descripcion: "Kit completo para alto rendimiento", 
        precio: 350000, 
        img: "/img/Kit de Arrastre KTM.jpg" 
      },
      { 
        nombre: "Espejos KTM Racing", 
        descripcion: "Diseño deportivo y ajustable", 
        precio: 120000, 
        img: "/img/Espejos KTM Racing.jpg" 
      }
    ],
    "Kawasaki": [
      { 
        nombre: "Aceite Kawasaki Pro", 
        descripcion: "Lubricante para motos Kawasaki", 
        precio: 90000, 
        img: "/img/Aceite Kawasaki Pro.jpg" 
      },
      { 
        nombre: "Kit de Cadena Kawasaki", 
        descripcion: "Durabilidad y resistencia garantizada", 
        precio: 340000, 
        img: "/img/Kit de Cadena Kawasaki.jpg" 
      },
      { 
        nombre: "Filtro Kawasaki", 
        descripcion: "Filtros originales para alto rendimiento", 
        precio: 70000, 
        img: "/img/Filtro Kawasaki.jpg" 
      }
    ],
    "Husqvarna": [
      { 
        nombre: "Aceite Husqvarna", 
        descripcion: "Protección avanzada para tu motor", 
        precio: 95000, 
        img: "/img/Aceite Husqvarna.jpg" 
      },
      { 
        nombre: "Pastillas de freno Husqvarna", 
        descripcion: "Frenado seguro en todo momento", 
        precio: 80000, 
        img: "/img/Pastillas de freno Husqvarna.jpg" 
      }
    ],
    "Bajaj": [
      { 
        nombre: "Kit de arrastre Bajaj", 
        descripcion: "Repuesto original para motos Bajaj", 
        precio: 280000, 
        img: "/img/Kit de arrastre Bajaj.jpg" 
      },
      { 
        nombre: "Espejos Bajaj", 
        descripcion: "Estilo y funcionalidad", 
        precio: 110000, 
        img: "/img/Espejos Bajaj.jpg" 
      }
    ]
  };

  // --- 3. Estado de la interfaz
  let marcaSeleccionada: string = "Todos"; // muestra todo al inicio
  let busqueda: string = "";

  // --- 4. Filtrar productos por búsqueda con protección
  $: productosFiltrados =
    (marcaSeleccionada === "Todos"
      ? Object.values(productosPorMarca).flat() // unir todos los productos de todas las marcas
      : (productosPorMarca[marcaSeleccionada] || [])
    ).filter((p: Producto) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    );

  // --- 5. Estado y funciones para el popup de novedad
  let mostrarPopup = false;
  let tipoNovedad = "";
  let descripcionNovedad = "";

  function enviarNovedad() {
    if (!tipoNovedad || !descripcionNovedad) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    alert(`Novedad enviada: ${tipoNovedad} - ${descripcionNovedad}`);
    mostrarPopup = false;
    tipoNovedad = "";
    descripcionNovedad = "";
  }
</script>

<div class="min-h-screen bg-gray-100 p-6">
  <h1 class="text-3xl font-bold text-center mb-4 text-orange-600">Marketplace de Repuestos</h1>

  <!-- Selector de marca y barra de búsqueda -->
  <div class="flex flex-col items-center mb-6">
    <p class="mb-2 text-sm text-gray-600">Seleccione una marca para filtrar:</p>
    <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
      <select
        bind:value={marcaSeleccionada}
        class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="Todos">Todos</option>
        <option value="KTM Duke">KTM Duke</option>
        <option value="Kawasaki">Kawasaki</option>
        <option value="Husqvarna">Husqvarna</option>
        <option value="Bajaj">Bajaj</option>
      </select>
      <input
        type="text"
        placeholder="Buscar repuesto..."
        bind:value={busqueda}
        class="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  </div>

  <!-- Grid de productos -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {#each productosFiltrados as producto}
      <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img src={producto.img} alt={producto.nombre} class="w-full h-48 object-cover" />
        <div class="p-4">
          <h2 class="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <span>🏍️</span> {producto.nombre}
          </h2>
          <p class="text-sm text-gray-500 mt-2">{producto.descripcion}</p>
          <p class="mt-3 font-bold text-orange-600">COP ${producto.precio.toLocaleString("es-CO")}</p>
        </div>
      </div>
    {/each}
    {#if productosFiltrados.length === 0}
      <p class="col-span-full text-center text-gray-500">No hay repuestos que coincidan con la búsqueda.</p>
    {/if}
  </div>

  <!-- Sección de ayuda/contacto con botón para abrir el pop-up -->
  <div class="mt-10 text-center text-gray-500">
    ¿Apreciado colaborador, deseas reportar alguna novedad con el sistema?  
    <button 
      class="text-orange-600 underline hover:text-orange-800 ml-2"
      on:click={() => mostrarPopup = true}>
      Reporta aquí
    </button>
  </div>

  <!-- Pop-up para reportar novedad -->
  {#if mostrarPopup}
    <div class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div class="bg-white rounded-lg p-6 w-80 shadow-lg">
        <h2 class="text-lg font-bold mb-4">Reportar Novedad</h2>

        <!-- Menú desplegable -->
        <label class="block mb-2" for="tipoNovedad">Tipo de Novedad</label>
        <select id="tipoNovedad" bind:value={tipoNovedad} class="border border-gray-300 rounded w-full p-2 mb-4">
          <option value="" disabled selected>Seleccione una opción</option>
          <option value="Error de Stock">Error de Stock</option>
          <option value="Error de Precio">Error de Precio</option>
          <option value="Problema de Navegación">Problema de Navegación</option>
          <option value="Imagen de producto erronea">Imagen de producto erronea</option>
          <option value="Otro">Otro</option>
        </select>

        <!-- Campo de texto -->
        <label class="block mb-2" for="descripcionNovedad">Descripción</label>
        <textarea 
          id="descripcionNovedad"
          bind:value={descripcionNovedad} 
          rows="3" 
          class="border border-gray-300 rounded w-full p-2 mb-4" 
          placeholder="Describa la novedad..."></textarea>

        <!-- Botones -->
        <div class="flex justify-end gap-2">
          <button class="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400" on:click={() => mostrarPopup = false}>Cancelar</button>
          <button class="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600" on:click={enviarNovedad}>Enviar</button>
        </div>
      </div>
    </div>
  {/if}
</div>
