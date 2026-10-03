import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCard } from '../components/product-card';
import { CATEGORIAS, PRODUCTOS } from '../mock/data';

@Component({
  selector: 'app-catalog',
  imports: [ProductCard],
  template: `
    <h1 class="text-xl font-bold">{{ tipo === 'cosecha' ? 'Catálogo de cosechas' : 'Catálogo de insumos' }}</h1>
    <input placeholder="Buscar..." (input)="q.set($any($event.target).value)"
           class="w-full mt-3 rounded-xl border border-stone-300 p-3 bg-white" />
    <div class="flex gap-2 overflow-x-auto py-3">
      @for (c of categorias; track c) {
        <button (click)="cat.set(c)" class="px-3 py-1 rounded-full text-sm whitespace-nowrap border"
                [class]="cat() === c ? 'bg-brand text-white border-brand' : 'bg-white'">{{ c }}</button>
      }
    </div>
    <div class="space-y-3">
      @for (p of filtrados(); track p.id) { <app-product-card [p]="p" /> }
      @empty { <p class="text-center text-stone-500 py-10">No se encontraron resultados.</p> }
    </div>
  `,
})
export class CatalogPage {
  tipo = inject(ActivatedRoute).snapshot.data['tipo'];
  categorias = CATEGORIAS;
  q = signal('');
  cat = signal('Todas');
  filtrados = computed(() =>
    PRODUCTOS.filter(p => p.tipo === this.tipo
      && (this.cat() === 'Todas' || p.categoria === this.cat())
      && p.nombre.toLowerCase().includes(this.q().toLowerCase())));
}
