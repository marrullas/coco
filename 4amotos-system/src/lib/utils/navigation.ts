/**
 * 🧭 UTILIDADES DE NAVEGACIÓN DINÁMICA
 * ===================================
 * 
 * Este módulo centraliza toda la lógica de navegación para ejercicios,
 * permitiendo que funcione dinámicamente con cualquier nombre de directorio:
 * - ejercicios
 * - ejercicios_Aprendiz... 
 * etc.
 */

import { ejerciciosData } from '$lib/data/ejercicios.js';

/**
 * Convierte un título a un slug seguro para URLs
 * @param titulo - El título a convertir
 * @returns Un slug seguro para usar en URLs
 */
function generarSlugSeguro(titulo: string): string {
    return titulo
        .toLowerCase()                    // Minúsculas
        .normalize('NFD')                 // Normalizar caracteres Unicode
        .replace(/[\u0300-\u036f]/g, '')  // Remover acentos y diacríticos
        .replace(/[^a-z0-9\s-]/g, '')     // Solo letras, números, espacios y guiones
        .trim()                           // Remover espacios al inicio/final
        .replace(/\s+/g, '-')             // Espacios → guiones
        .replace(/-+/g, '-');             // Múltiples guiones → uno solo
}

/**
 * Detecta automáticamente la ruta base del directorio de ejercicios actual
 * @param currentPath - La ruta actual de la página
 * @returns La ruta base del directorio (ej: '/ejercicios' o '/ejercicios_Yeison_Ramirez')
 */
export function detectarRutaBase(currentPath: string): string {
    const segments = currentPath.split('/');
    // Buscar el segmento que comience con 'ejercicios'
    const ejerciciosSegment = segments.find(segment => segment.startsWith('ejercicios'));
    return ejerciciosSegment ? `/${ejerciciosSegment}` : '/ejercicios';
}

/**
 * Genera rutas dinámicas para ejercicios basadas en la ruta actual
 * @param ejerciciosData - Array con la data de ejercicios sin rutas
 * @param rutaBase - La ruta base detectada
 * @returns Array con ejercicios que incluyen rutas dinámicas
 */
export function generarRutasEjercicios(ejerciciosData: any[], rutaBase: string) {
    return ejerciciosData.map(nivel => ({
        ...nivel,
        ejercicios: nivel.ejercicios.map((ejercicio: any) => ({
            ...ejercicio,
            ruta: `${rutaBase}/${ejercicio.id}-${generarSlugSeguro(ejercicio.titulo)}`
        }))
    }));
}

/**
 * Genera URLs de navegación para ejercicios individuales
 * @param rutaBase - La ruta base del directorio actual
 * @param ejercicioId - ID del ejercicio (ej: '01', '02', etc.)
 * @param ejercicioTitulo - Título del ejercicio para formar la URL
 * @returns URL completa del ejercicio
 */
export function generarUrlEjercicio(rutaBase: string, ejercicioId: string, ejercicioTitulo: string): string {
    const slugSeguro = generarSlugSeguro(ejercicioTitulo);
    return `${rutaBase}/${ejercicioId}-${slugSeguro}`;
}

/**
 * Obtiene información de navegación para ejercicios individuales
 * @param currentPath - Ruta actual
 * @param ejercicioActual - Información del ejercicio actual
 * @returns Objeto con URLs de navegación (anterior, siguiente, volver)
 */
export function obtenerNavegacionEjercicio(currentPath: string, ejercicioActual?: { id: string, titulo: string }) {
    const rutaBase = detectarRutaBase(currentPath);
    
    // Usar datos centralizados de ejercicios.ts
    const todosLosEjercicios = ejerciciosData.flatMap(nivel => 
        nivel.ejercicios.map(ejercicio => ({
            id: ejercicio.id,
            titulo: generarSlugSeguro(ejercicio.titulo),
            nombre: ejercicio.titulo
        }))
    );
    
    let anterior = null;
    let siguiente = null;
    
    if (ejercicioActual) {
        const indiceActual = todosLosEjercicios.findIndex(ej => ej.id === ejercicioActual.id);
        
        if (indiceActual > 0) {
            const ejAnterior = todosLosEjercicios[indiceActual - 1];
            anterior = {
                url: `${rutaBase}/${ejAnterior.id}-${ejAnterior.titulo}`,
                nombre: ejAnterior.nombre
            };
        }
        
        if (indiceActual < todosLosEjercicios.length - 1) {
            const ejSiguiente = todosLosEjercicios[indiceActual + 1];
            siguiente = {
                url: `${rutaBase}/${ejSiguiente.id}-${ejSiguiente.titulo}`,
                nombre: ejSiguiente.nombre
            };
        }
    }
    
    return {
        rutaBase,
        volver: rutaBase,
        anterior,
        siguiente
    };
}