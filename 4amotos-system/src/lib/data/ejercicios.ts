/**
 * 📚 DATOS DE EJERCICIOS CENTRALIZADOS
 * ===================================
 * 
 * Este archivo contiene la estructura de datos de todos los ejercicios
 */

export interface Ejercicio {
    id: string;
    titulo: string;
    descripcion: string;
    ruta?: string; // Se genera dinámicamente
}

export interface NivelEjercicios {
    nivel: string;
    descripcion: string;
    ejercicios: Ejercicio[];
}

/**
 * Estructura base de ejercicios
 * Esta data se reutiliza en todos los directorios de ejercicios
 */
export const ejerciciosData: NivelEjercicios[] = [
    {
        nivel: "🟢 NIVEL 1: Fundamentos Básicos",
        descripcion: "Conceptos esenciales para empezar",
        ejercicios: [
            { id: "01", titulo: "Hola Mundo", descripcion: "Tu primer componente Svelte" },
            { id: "02", titulo: "Variables", descripcion: "Usando $state() para crear variables reactivas" },
            { id: "03", titulo: "Interpolación", descripcion: "Mostrar variables en HTML con {}" },
            { id: "04", titulo: "Botones", descripcion: "Eventos onclick básicos" },
            { id: "05", titulo: "Contador", descripcion: "Incrementar y decrementar números" }
        ]
    },
    {
        nivel: "🟡 NIVEL 2: Reactividad e Interacción",
        descripcion: "Haciendo páginas interactivas",
        ejercicios: [
            { id: "06", titulo: "Formularios", descripcion: "bind:value en inputs" },
            { id: "07", titulo: "Condicionales", descripcion: "{#if} para mostrar/ocultar" },
            { id: "08", titulo: "Listas", descripcion: "{#each} para arrays" },
            { id: "09", titulo: "Valores Derivados", descripcion: "$derived() para cálculos automáticos" },
            { id: "10", titulo: "Efectos", descripcion: "$effect() para reaccionar a cambios" }
        ]
    },
    {
        nivel: "🟠 NIVEL 3: Componentes y Organización",
        descripcion: "Construyendo aplicaciones modulares",
        ejercicios: [
            { id: "11", titulo: "Componente Simple", descripcion: "Tu primer componente reutilizable" },
            { id: "12", titulo: "Props", descripcion: "$props() para pasar datos" },
            { id: "13", titulo: "Eventos Custom", descripcion: "Comunicación entre componentes" },
            { id: "14", titulo: "Snippets", descripcion: "Contenido flexible en componentes" }
        ]
    },
    {
        nivel: "🔴 NIVEL 4: Aplicaciones Reales",
        descripcion: "Proyectos completos y funcionales",
        ejercicios: [
            { id: "15", titulo: "Todo App", descripcion: "Lista de tareas completa" },
            { id: "16", titulo: "Forms Avanzados", descripcion: "Validación y manejo de errores" },
            { id: "17", titulo: "Routing", descripcion: "Navegación entre páginas" },
            { id: "18", titulo: "Stores", descripcion: "Estado global compartido" }
        ]
    }
];