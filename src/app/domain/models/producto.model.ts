export interface Producto {
  id: string;
  nombre: string;
  tipo: 'cosecha' | 'insumo';
  categoria: string;
  precio: number;
  unidad: string;
  cantidad: number;
  ubicacion: string;
  vendedor: string;
  emoji: string;
  descripcion: string;
}
