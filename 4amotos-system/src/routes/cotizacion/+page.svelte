<script lang="ts">
  import jsPDF from 'jspdf';
  import { onMount } from 'svelte';
  // Función para descargar el resumen de cotización en PDF
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
    // Logo y título principal
    if (logoData) {
      doc.addImage(logoData, 'JPEG', 80, y, 50, 40);
      y += 45;
    }
    doc.setFontSize(22);
    doc.setTextColor(255, 102, 0);
    y += 12;
    doc.setDrawColor(255, 102, 0);
    doc.setLineWidth(1);
    doc.line(20, y, 190, y);
    y += 8;
    doc.setFontSize(16);
    doc.setTextColor(40, 40, 40);
    doc.text('Resumen de Cotización', 105, y, { align: 'center' });
    y += 10;
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('Producto', 20, y);
    doc.text('Cantidad', 100, y);
    doc.text('Subtotal', 174, y);
    y += 8;
    doc.setLineWidth(0.5);
    doc.setDrawColor(200, 200, 200);
    doc.line(20, y, 190, y);
    y += 6;
    subtotales.filter(p => p.cantidad > 0).forEach(p => {
      doc.text(p.nombre, 20, y);
      doc.text(String(p.cantidad), 107, y, { align: 'center' });
      doc.text(`$${p.subtotal.toLocaleString()}`, 190, y, { align: 'right' });
      y += 8;
    });
    if (subtotales.every(p => p.cantidad === 0)) {
      doc.text('No hay productos seleccionados,para esta cotización.', 20, y);
      y += 8;
    }
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

  // Variable para búsqueda de repuestos
  let busqueda: string = "";

  // Filtrar productos por búsqueda
  $: productosFiltrados = productos.filter(
    p =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Calcular subtotales y total general
  $: subtotales = productosFiltrados.map(p => ({
    ...p,
    cantidad: cantidades[p.id] || 0,
    subtotal: (cantidades[p.id] || 0) * p.precio
  }));

  $: totalGeneral = subtotales.reduce((acc, p) => acc + p.subtotal, 0);
</script>

<svelte:head>
  <title>Cotización</title>
  <meta name="description" content="Cotiza tus repuestos fácilmente" />
</svelte:head>

<div class="min-h-screen bg-gray-100 p-6">
  <h1 class="text-3xl font-bold text-center mb-6 text-orange-600">Cotización</h1>
  <h2 class="text-lg text-center mb-8 text-gray-700">Selecciona los productos y cantidades para cotizar</h2>

  <!-- Barra de búsqueda -->
  <div class="flex justify-center mb-8">
    <input
      type="text"
      placeholder="Buscar repuesto..."
      bind:value={busqueda}
      class="border border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>

  <!-- Lista de productos filtrados -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
    {#each productosFiltrados as producto}
      <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
        <img src={producto.img} alt={producto.nombre} class="w-full h-40 object-cover" />
        <div class="p-4 flex-1 flex flex-col">
          <h3 class="text-lg font-semibold text-gray-800 mb-1">{producto.nombre}</h3>
          <p class="text-gray-600 mb-2">{producto.descripcion}</p>
          <p class="text-orange-600 font-bold mb-4">${producto.precio.toLocaleString()}</p>
          <label
            class="mb-2 text-sm text-gray-700"
            for={"cantidad-" + producto.id}
          >
            Cantidad:
          </label>
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