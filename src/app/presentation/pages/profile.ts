import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  template: `
    <div class="text-center">
      <div class="mx-auto w-24 h-24 rounded-full bg-earth text-white grid place-items-center text-4xl">👨‍🌾</div>
      <h1 class="mt-3 text-xl font-bold">Mario Pérez</h1>
      <p class="text-sm text-earth">Agricultor · Izalco, Sonsonate</p>
    </div>
    <div class="grid grid-cols-3 gap-3 mt-5 text-center">
      <div class="bg-white rounded-2xl p-3 border"><p class="text-2xl font-bold text-brand">12</p><p class="text-xs">Productos</p></div>
      <div class="bg-white rounded-2xl p-3 border"><p class="text-2xl font-bold text-brand">34</p><p class="text-xs">Pedidos</p></div>
      <div class="bg-white rounded-2xl p-3 border"><p class="text-2xl font-bold text-brand">4.8</p><p class="text-xs">Valoración</p></div>
    </div>
    <a routerLink="/publicar" class="mt-5 block text-center bg-accent text-stone-900 font-semibold py-3 rounded-xl">+ Publicar producto</a>
    <a routerLink="/login" class="mt-3 block text-center border border-stone-300 py-3 rounded-xl">Cerrar sesión</a>
  `,
})
export class ProfilePage {}
