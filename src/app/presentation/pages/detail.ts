import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { PRODUCTOS } from '../mock/data';

@Component({
  selector: 'app-detail',
  imports: [RouterLink, CurrencyPipe],
  template: `
    @if (p(); as p) {
      <a routerLink="/productos" class="text-sm text-brand">← Volver</a>
      <div class="mt-3 rounded-3xl bg-green-50 grid place-items-center text-8xl py-10">{{ p.emoji }}</div>
      <h1 class="mt-4 text-2xl font-bold">{{ p.nombre }}</h1>
      <p class="text-earth text-sm">{{ p.vendedor }} · {{ p.ubicacion }}</p>
      <p class="mt-2 text-3xl font-bold text-brand">{{ p.precio | currency: 'USD' }}
        <span class="text-base font-normal text-stone-500">/ {{ p.unidad }}</span></p>
      <p class="mt-3 text-stone-700">{{ p.descripcion }}</p>
      <p class="mt-2 text-sm text-stone-500">Disponible: {{ p.cantidad }} {{ p.unidad }}</p>
      <div class="mt-5 flex gap-2">
        <button (click)="ok.set(true)" class="flex-1 bg-accent text-stone-900 font-semibold py-3 rounded-xl">Hacer pedido</button>
        <button class="flex-1 border border-brand text-brand font-semibold py-3 rounded-xl">Contactar</button>
      </div>
      @if (ok()) {
        <div class="mt-4 rounded-xl bg-green-100 text-green-900 p-3 text-sm">✅ Pedido enviado. El vendedor te contactará pronto.</div>
      }
    } @else {
      <p class="text-center py-10">Producto no encontrado.</p>
    }
  `,
})
export class DetailPage {
  private id = toSignal(inject(ActivatedRoute).paramMap.pipe(map(m => m.get('id'))));
  p = computed(() => PRODUCTOS.find(x => x.id === this.id()));
  ok = signal(false);
}
