import { Component } from '@angular/core';
import { PEDIDOS } from '../mock/data';

@Component({
  selector: 'app-orders',
  template: `
    <h1 class="text-xl font-bold">Mis pedidos</h1>
    <div class="mt-4 space-y-3">
      @for (o of pedidos; track o.id) {
        <div class="bg-white rounded-2xl p-4 border flex justify-between items-center">
          <div>
            <p class="font-semibold">{{ o.producto }}</p>
            <p class="text-xs text-stone-500">{{ o.id }} · {{ o.cantidad }} · {{ o.fecha }}</p>
          </div>
          <span class="text-xs px-2 py-1 rounded-full"
            [class]="o.estado === 'Entregado' ? 'bg-green-100 text-green-800' : o.estado === 'En camino' ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-700'">{{ o.estado }}</span>
        </div>
      }
    </div>
  `,
})
export class OrdersPage {
  pedidos = PEDIDOS;
}
