import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../components/product-card';
import { PRODUCTOS } from '../mock/data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductCard],
  template: `
    <section class="rounded-3xl bg-brand text-white p-6">
      <h1 class="text-2xl font-bold">Conecta el campo con tu mesa</h1>
      <p class="mt-2 text-green-100 text-sm">Vende tu cosecha directo, compra insumos cerca y resuelve dudas con asesoría técnica.</p>
      <div class="mt-4 flex gap-2">
        <a routerLink="/productos" class="bg-accent text-stone-900 font-semibold px-4 py-2 rounded-xl">Ver cosechas</a>
        <a routerLink="/publicar" class="bg-white/15 px-4 py-2 rounded-xl">Publicar</a>
      </div>
    </section>
    <div class="grid grid-cols-3 gap-3 mt-4 text-center text-sm">
      <a routerLink="/productos" class="bg-white rounded-2xl p-3 border"><div class="text-3xl">🌽</div>Cosechas</a>
      <a routerLink="/insumos" class="bg-white rounded-2xl p-3 border"><div class="text-3xl">🧪</div>Insumos</a>
      <a routerLink="/asesoria" class="bg-white rounded-2xl p-3 border"><div class="text-3xl">💬</div>Asesoría</a>
    </div>
    <h2 class="mt-6 mb-2 font-bold text-lg">Recién publicado</h2>
    <div class="space-y-3">
      @for (p of destacados; track p.id) { <app-product-card [p]="p" /> }
    </div>
  `,
})
export class HomePage {
  destacados = PRODUCTOS.slice(0, 4);
}
