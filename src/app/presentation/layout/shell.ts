import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="sticky top-0 z-10 bg-brand text-white px-4 py-3 flex items-center justify-between">
      <a routerLink="/" class="font-bold text-lg">🌱 Agrozalcoalt</a>
      <a routerLink="/login" class="text-sm bg-white/15 px-3 py-1 rounded-full">Ingresar</a>
    </header>
    <main class="max-w-2xl mx-auto p-4 pb-24"><router-outlet /></main>
    <nav class="fixed bottom-0 inset-x-0 bg-white border-t grid grid-cols-6 text-[11px]">
      @for (i of items; track i.link) {
        <a [routerLink]="i.link" routerLinkActive="text-brand font-semibold"
           [routerLinkActiveOptions]="{ exact: i.link === '/' }"
           class="flex flex-col items-center py-2 text-stone-500">
          <span class="text-xl">{{ i.icon }}</span>{{ i.label }}
        </a>
      }
    </nav>
  `,
})
export class Shell {
  items = [
    { link: '/', icon: '🏠', label: 'Inicio' },
    { link: '/productos', icon: '🌽', label: 'Cosechas' },
    { link: '/insumos', icon: '🧪', label: 'Insumos' },
    { link: '/asesoria', icon: '💬', label: 'Asesoría' },
    { link: '/pedidos', icon: '📦', label: 'Pedidos' },
    { link: '/perfil', icon: '👤', label: 'Perfil' },
  ];
}
