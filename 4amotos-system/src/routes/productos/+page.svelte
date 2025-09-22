<script lang="ts">
  import { onMount } from "svelte";

  // --- 1. Definir tipo de producto
  type Producto = {
    nombre: string;
    descripcion: string;
    precio: number;
    img: string;
  };

  // --- 2. Definir el diccionario de productos por marca (Record<string, Producto[]>)
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
        img: "https://picsum.photos/400/250?4" 
      },
      { 
        nombre: "Kit de Cadena Kawasaki", 
        descripcion: "Durabilidad y resistencia garantizada", 
        precio: 340000, 
        img: "https://picsum.photos/400/250?5" 
      },
      { 
        nombre: "Filtro Kawasaki", 
        descripcion: "Filtros originales para alto rendimiento", 
        precio: 70000, 
        img: "https://picsum.photos/400/250?6" 
      }
    ],
    "Husqvarna": [
      { 
        nombre: "Aceite Husqvarna", 
        descripcion: "Protección avanzada para tu motor", 
        precio: 95000, 
        img: "https://picsum.photos/400/250?7" 
      },
      { 
        nombre: "Pastillas de freno Husqvarna", 
        descripcion: "Frenado seguro en todo momento", 
        precio: 80000, 
        img: "https://picsum.photos/400/250?8" 
      }
    ],
    "Bajaj": [
      { 
        nombre: "Kit de arrastre Bajaj", 
        descripcion: "Repuesto original para motos Bajaj", 
        precio: 280000, 
        img: "https://picsum.photos/400/250?9" 
      },
      { 
        nombre: "Espejos Bajaj", 
        descripcion: "Estilo y funcionalidad", 
        precio: 110000, 
        img: "https://picsum.photos/400/250?10" 
      }
    ]
  };

  // --- 3. Estado de la interfaz
  let marcaSeleccionada: string = "KTM Duke";
  let busqueda: string = "";

  // --- 4. Filtrar productos por búsqueda con protección
  $: productosFiltrados =
    (productosPorMarca[marcaSeleccionada] || []).filter((p: Producto) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
    );
</script>

<div class="min-h-screen bg-gray-100 p-6">
  <h1 class="text-3xl font-bold text-center mb-4 text-orange-600">Marketplace de Repuestos</h1>

  <!-- Selector de marca y barra de búsqueda -->
  <div class="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
    <select bind:value={marcaSeleccionada} class="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
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

  <!-- Grid de productos -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {#each productosFiltrados as producto}
      <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
        <img src={producto.img} alt={producto.nombre} class="w-full h-48 object-cover" />
        <div class="p-4">
          <h2 class="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <span>🏍️</span> {producto.nombre}
          </h2>
          <p class="text-gray-600 mt-1">{producto.descripcion}</p>
          <p class="text-orange-600 font-bold mt-2">${producto.precio.toLocaleString()}</p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Sección de ayuda/contacto -->
  <div class="mt-10 text-center text-gray-500">
    ¿Apreciado colaborador, deseas reportar alguna novedad con el sistema? <a href="mailto:soporte@turepuestos.com" class="text-orange-600 underline">Reporta aca</a>
  </div>
</div>

 
