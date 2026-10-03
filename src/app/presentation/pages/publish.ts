import { Component, signal } from '@angular/core';
import { CATEGORIAS } from '../mock/data';

@Component({
  selector: 'app-publish',
  template: `
    <h1 class="text-xl font-bold">Publicar producto</h1>
    <div class="mt-4 space-y-3">
      <input placeholder="Nombre del producto" class="w-full rounded-xl border border-stone-300 p-3 bg-white" />
      <select class="w-full rounded-xl border border-stone-300 p-3 bg-white">
        @for (c of categorias.slice(1); track c) { <option>{{ c }}</option> }
      </select>
      <div class="grid grid-cols-2 gap-3">
        <input type="number" placeholder="Precio (USD)" class="rounded-xl border border-stone-300 p-3 bg-white" />
        <input type="number" placeholder="Cantidad" class="rounded-xl border border-stone-300 p-3 bg-white" />
      </div>
      <input placeholder="Unidad (lb, quintal...)" class="w-full rounded-xl border border-stone-300 p-3 bg-white" />
      <input placeholder="Ubicación" class="w-full rounded-xl border border-stone-300 p-3 bg-white" />
      <textarea rows="3" placeholder="Descripción" class="w-full rounded-xl border border-stone-300 p-3 bg-white"></textarea>
      <div class="rounded-xl border-2 border-dashed border-stone-300 p-6 text-center text-stone-500">📷 Subir foto</div>
      <button (click)="ok.set(true)" class="w-full bg-brand text-white font-semibold py-3 rounded-xl">Publicar</button>
      @if (ok()) { <div class="rounded-xl bg-green-100 text-green-900 p-3 text-sm">✅ Producto publicado correctamente.</div> }
    </div>
  `,
})
export class PublishPage {
  categorias = CATEGORIAS;
  ok = signal(false);
}
