// Datos de prueba SOLO para las vistas. Luego se reemplazan por los casos de uso (application/).
import { Producto } from '../../domain/models/producto.model';

export const PRODUCTOS: Producto[] = [
  { id: '1', nombre: 'Tomate criollo', tipo: 'cosecha', categoria: 'Hortalizas', precio: 0.6, unidad: 'lb', cantidad: 300, ubicacion: 'Izalco, Sonsonate', vendedor: 'Don Mario Pérez', emoji: '🍅', descripcion: 'Cosecha fresca de esta semana, cultivado sin agroquímicos pesados.' },
  { id: '2', nombre: 'Maíz blanco', tipo: 'cosecha', categoria: 'Granos', precio: 18, unidad: 'quintal', cantidad: 50, ubicacion: 'Nahuizalco, Sonsonate', vendedor: 'Coop. Los Naranjos', emoji: '🌽', descripcion: 'Maíz seco y limpio, ideal para tortillas y pupusas.' },
  { id: '3', nombre: 'Loroco', tipo: 'cosecha', categoria: 'Hortalizas', precio: 2.5, unidad: 'lb', cantidad: 40, ubicacion: 'Cuisnahuat, Sonsonate', vendedor: 'Doña Rosa Hernández', emoji: '🌿', descripcion: 'Flor de loroco recién cortada.' },
  { id: '4', nombre: 'Mango tommy', tipo: 'cosecha', categoria: 'Frutas', precio: 0.25, unidad: 'unidad', cantidad: 500, ubicacion: 'Acajutla, Sonsonate', vendedor: 'Finca El Palmar', emoji: '🥭', descripcion: 'Mango maduro de temporada.' },
  { id: '5', nombre: 'Fertilizante 15-15-15', tipo: 'insumo', categoria: 'Fertilizantes', precio: 32, unidad: 'quintal', cantidad: 80, ubicacion: 'Sonsonate', vendedor: 'AgroInsumos Sonsonate', emoji: '🧪', descripcion: 'Fertilizante granulado balanceado para todo tipo de cultivo.' },
  { id: '6', nombre: 'Semilla de chile pimiento', tipo: 'insumo', categoria: 'Semillas', precio: 4.5, unidad: 'sobre', cantidad: 200, ubicacion: 'Armenia, Sonsonate', vendedor: 'Semillas del Valle', emoji: '🌱', descripcion: 'Semilla certificada con alto porcentaje de germinación.' },
  { id: '7', nombre: 'Bomba de mochila 20 L', tipo: 'insumo', categoria: 'Herramientas', precio: 45, unidad: 'unidad', cantidad: 15, ubicacion: 'Sonsonate', vendedor: 'Ferretería El Campo', emoji: '🧰', descripcion: 'Fumigadora manual de 20 litros, resistente y fácil de usar.' },
];

export const CATEGORIAS = ['Todas', 'Hortalizas', 'Granos', 'Frutas', 'Fertilizantes', 'Semillas', 'Herramientas'];

export const PEDIDOS = [
  { id: 'P-001', producto: 'Fertilizante 15-15-15', cantidad: '2 quintales', estado: 'En camino', fecha: '30 sep 2026' },
  { id: 'P-002', producto: 'Tomate criollo', cantidad: '100 lb', estado: 'Entregado', fecha: '25 sep 2026' },
  { id: 'P-003', producto: 'Semilla de chile pimiento', cantidad: '10 sobres', estado: 'Pendiente', fecha: '02 oct 2026' },
];

export const CONSULTAS = [
  { pregunta: '¿Cómo controlo la mosca blanca en tomate?', respuesta: 'Usa trampas amarillas y aplica jabón potásico cada 5 días.', tecnico: 'Ing. Carla Mejía' },
  { pregunta: '¿Cuándo sembrar maíz en época lluviosa?', respuesta: 'Idealmente en las primeras lluvias de mayo.', tecnico: 'Ing. Luis Ramos' },
];
