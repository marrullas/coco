<script lang="ts">
  import jsPDF from 'jspdf';
  import { onMount } from 'svelte';
  // Función para descargar el resumen de cotización en PDF YUCA
  let logoData = '';

    // Cargar el logo como base64
    onMount(async () => {
    const response = await fetch('/img/Logo 4A.jpg');
    const blob = await response.blob();
    const reader = new FileReader();
    reader.onloadend = () => {
      logoData = reader.result as string;
    };
    reader.readAsDataURL(blob);
  });

  function descargarPDF() {
  const doc = new jsPDF();
  let y = 20;

  // Logo
  if (logoData) {
    doc.addImage(logoData, 'JPEG', 80, y, 50, 40);
    y += 50;
  }

  // Título
  doc.setFontSize(22);
  doc.setTextColor(255, 102, 0);
  doc.text('Resumen de Cotización', 105, y, { align: 'center' });
  y += 12;

  // Encabezados
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Producto', 20, y);
  doc.text('Cantidad', 100, y);
  doc.text('Subtotal', 190, y, { align: 'right' });
  y += 6;
  doc.setDrawColor(200, 200, 200);
  doc.line(20, y, 190, y);
  y += 6;

  // Filtramos productos con cantidad > 0
  const productosSeleccionados = subtotales.filter(p => p.cantidad > 0);

  if (productosSeleccionados.length > 0) {
    productosSeleccionados.forEach(p => {
      doc.text(p.nombre, 20, y);
      doc.text(String(p.cantidad), 107, y, { align: 'center' });
      doc.text(`$${p.subtotal.toLocaleString()}`, 190, y, { align: 'right' });
      y += 8;
    });
  } else {
    doc.text('No hay productos seleccionados para esta cotización.', 20, y);
    y += 8;
  }

  // Total general
  y += 4;
  doc.setFontSize(14);
  doc.setTextColor(255, 102, 0);
  doc.text('Total general:', 20, y);
  doc.text(`$${totalGeneral.toLocaleString()}`, 190, y, { align: 'right' });

  doc.save('cotizacion.pdf');
}

  // Mockup de productos
  type Producto = {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    img: string;
  };

  const productos: Producto[] = [
    {
      id: 1,
      nombre: "Aceite Motul 7100",
      descripcion: "Aceite sintético para motores KTM",
      precio: 85000,
      img: "/img/Aceite Motul 7100.jpg"
    },
    {
      id: 2,
      nombre: "Kit de Arrastre KTM",
      descripcion: "Kit completo para alto rendimiento",
      precio: 350000,
      img: "/img/Kit de Arrastre KTM.jpg"
    },
    {
      id: 3,
      nombre: "Espejos KTM Racing",
      descripcion: "Diseño deportivo y ajustable",
      precio: 120000,
      img: "/img/Espejos KTM Racing.jpg"
    },
    {
      id: 4,
      nombre: "Aceite Kawasaki Pro",
      descripcion: "Lubricante para motos Kawasaki",
      precio: 90000,
      img: "/img/Aceite Kawasaki Pro.jpg"
    },
    {
      id: 5,
      nombre: "Kit de Cadena Kawasaki",
      descripcion: "Durabilidad y resistencia garantizada",
      precio: 340000,
      img: "/img/Kit de Cadena Kawasaki.jpg"
    },
    {
      id: 6,
      nombre: "Filtro Kawasaki",
      descripcion: "Filtros originales para alto rendimiento",
      precio: 70000,
      img: "/img/Filtro Kawasaki.jpg"
    },
    {
      id: 7,
      nombre: "Aceite Husqvarna",
      descripcion: "Protección avanzada para tu motor",
      precio: 95000,
      img: "/img/Aceite Husqvarna.jpg"
    },
    {
      id: 8,
      nombre: "Pastillas de freno Husqvarna",
      descripcion: "Rendimiento y durabilidad superior",
      precio: 360000,
      img: "/img/Pastillas de freno Husqvarna.jpg"
    },
    {
      id: 9, 
      nombre: "Kit de arrastre Bajaj", 
      descripcion: "Repuesto original para motos Bajaj", 
      precio: 280000, 
      img: "/img/Kit de arrastre Bajaj.jpg"
    },
    {
      id: 10,
      nombre: "Espejos Bajaj", 
      descripcion: "Estilo y funcionalidad", 
      precio: 110000, 
      img: "/img/Espejos Bajaj.jpg"
    }
  ];

  // Estado de cantidades por producto
  let cantidades: Record<number, number> = {};

  // Inicializar cantidades en 0
  productos.forEach(p => {
    if (cantidades[p.id] === undefined) cantidades[p.id] = 0;
  });

  // Variables para búsqueda y filtro por modelo
  let busqueda: string = "";
  let modeloSeleccionado: string = "";
  const modelos = ["Todos", "KTM Duque", "Kawasaki", "Husqvarna", "Bajaj"];

  // Filtrar productos por búsqueda y modelo
  $: productosFiltrados = productos.filter(p => {
    const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase()) || p.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    if (modeloSeleccionado === "" || modeloSeleccionado === "Todos") {
      return coincideBusqueda;
    }
    return coincideBusqueda && p.nombre.toLowerCase().includes(modeloSeleccionado.toLowerCase());
  });

  // Calcular subtotales y total general
  $: subtotales = productosFiltrados.map(p => ({
    ...p,
    cantidad: cantidades[p.id] || 0,
    subtotal: (cantidades[p.id] || 0) * p.precio
  }));

  $: totalGeneral = subtotales.reduce((acc, p) => acc + p.subtotal, 0);

  // Estado para pop-up de novedades
  let mostrarPopup = false;
  let tipoNovedad = "";
  let descripcionNovedad = "";

  function enviarNovedad() {
    if (!tipoNovedad || !descripcionNovedad) {
      alert("Por favor completa todos los campos.");
      return;
    }
    // Aquí podrías enviar la novedad a un backend o mostrar un mensaje
    alert(`Novedad enviada: ${tipoNovedad}\n${descripcionNovedad}`);
    tipoNovedad = "";
    descripcionNovedad = "";
    mostrarPopup = false;
  }
</script>

<svelte:head>
  <title>Cotización</title>
  <meta name="description" content="Cotiza tus repuestos fácilmente" />
</svelte:head>

<div class="min-h-screen bg-gray-100 p-6">
  <h1 class="text-3xl font-bold text-center mb-6 text-orange-600">Cotización</h1>
  <h2 class="text-lg text-center mb-8 text-gray-700">Selecciona los productos y cantidades para cotizar</h2>

<!-- Barra de búsqueda y filtro por modelo -->
<!-- Pop-up de novedades -->
{#if mostrarPopup}
  <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
      <button class="absolute top-2 right-2 text-gray-400 hover:text-gray-600" on:click={() => mostrarPopup = false}>✕</button>
      <h2 class="text-xl font-bold mb-4 text-blue-600">Reportar Novedad</h2>
      <label class="block mb-2 text-sm" for="tipo-novedad">Tipo de novedad:</label>
      <select id="tipo-novedad" bind:value={tipoNovedad} class="border border-gray-300 rounded-lg p-2 w-full mb-4">
        <option value="">Selecciona...</option>
        <option value="Error de Stock">Error de Stock</option>
        <option value="Error de Precio">Error de Precio</option>
        <option value="Otro">Otro</option>
      </select>
      <label class="block mb-2 text-sm" for="descripcion-novedad">Descripción:</label>
      <textarea id="descripcion-novedad" bind:value={descripcionNovedad} rows="3" class="border border-gray-300 rounded-lg p-2 w-full mb-4" placeholder="Describe la novedad..."></textarea>
      <button class="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition w-full" on:click={enviarNovedad}>Enviar</button>
    </div>
  </div>
{/if}


<!-- Lista de productos filtrados -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
  {#each productosFiltrados as producto}
    <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
      <img src={producto.img} alt={producto.nombre} class="w-full h-40 object-cover" />
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="text-lg font-semibold text-gray-800 mb-1">{producto.nombre}</h3>
        <p class="text-gray-600 mb-2">{producto.descripcion}</p>
        <p class="text-orange-600 font-bold mb-4">${producto.precio.toLocaleString()}</p>
        <label class="mb-2 text-sm text-gray-700" for={"cantidad-" + producto.id}>Cantidad:</label>
        <input
          type="number"
          min="0"
          id={"cantidad-" + producto.id}
          class="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          bind:value={cantidades[producto.id]}
        />
      </div>
    </div>
  {/each}
</div>

  <!-- Resumen de Cotización -->
  <div class="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8">
    <button on:click={descargarPDF} class="mb-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition float-right">Descargar PDF</button>
    <h3 class="text-xl font-bold text-orange-600 mb-4 text-center">Resumen de Cotización</h3>
    <table class="w-full text-left mb-4">
      <thead>
        <tr class="text-gray-700 border-b">
          <th class="py-2">Producto</th>
          <th class="py-2 text-center">Cantidad</th>
          <th class="py-2 text-right">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {#each subtotales.filter(p => p.cantidad > 0) as p}
          <tr class="border-b">
            <td class="py-2">{p.nombre}</td>
            <td class="py-2 text-center">{p.cantidad}</td>
            <td class="py-2 text-right">${p.subtotal.toLocaleString()}</td>
          </tr>
        {/each}
        {#if subtotales.every(p => p.cantidad === 0)}
          <tr>
            <td colspan="3" class="py-4 text-center text-gray-400">No hay productos seleccionados.</td>
          </tr>
        {/if}
      </tbody>
    </table>
    <div class="flex justify-between items-center font-bold text-lg">
      <span>Total general:</span>
      <span class="text-orange-600">${totalGeneral.toLocaleString()}</span>
    </div>
  </div>
  </div>