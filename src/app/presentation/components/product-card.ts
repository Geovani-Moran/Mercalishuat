import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Producto } from '../../domain/models/producto.model';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink, CurrencyPipe],
  template: `
    <a [routerLink]="['/detalle', p().id]" class="flex gap-3 bg-white rounded-2xl p-3 shadow-sm border border-stone-100">
      <div class="w-16 h-16 rounded-xl bg-green-50 grid place-items-center text-3xl">{{ p().emoji }}</div>
      <div class="flex-1 min-w-0">
        <p class="font-semibold truncate">{{ p().nombre }}</p>
        <p class="text-xs text-earth truncate">{{ p().vendedor }} · {{ p().ubicacion }}</p>
        <p class="mt-1 font-bold text-brand">{{ p().precio | currency: 'USD' }}
          <span class="text-xs font-normal text-stone-500">/ {{ p().unidad }}</span></p>
      </div>
    </a>
  `,
})
export class ProductCard {
  p = input.required<Producto>();
}
