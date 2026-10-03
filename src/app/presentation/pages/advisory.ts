import { Component, signal } from '@angular/core';
import { CONSULTAS } from '../mock/data';

@Component({
  selector: 'app-advisory',
  template: `
    <h1 class="text-xl font-bold">Asesoría técnica</h1>
    <p class="text-sm text-stone-600">Pregunta a nuestros técnicos agrícolas.</p>
    <textarea rows="3" placeholder="Escribe tu duda sobre el cultivo..." class="w-full mt-3 rounded-xl border border-stone-300 p-3 bg-white"></textarea>
    <button (click)="ok.set(true)" class="mt-2 w-full bg-brand text-white font-semibold py-3 rounded-xl">Enviar consulta</button>
    @if (ok()) { <div class="mt-3 rounded-xl bg-green-100 text-green-900 p-3 text-sm">✅ Consulta enviada.</div> }
    <h2 class="mt-6 mb-2 font-bold">Consultas recientes</h2>
    <div class="space-y-3">
      @for (c of consultas; track c.pregunta) {
        <div class="bg-white rounded-2xl p-4 border">
          <p class="font-semibold">{{ c.pregunta }}</p>
          <p class="mt-1 text-sm text-stone-700">{{ c.respuesta }}</p>
          <p class="mt-2 text-xs text-earth">— {{ c.tecnico }}</p>
        </div>
      }
    </div>
  `,
})
export class AdvisoryPage {
  consultas = CONSULTAS;
  ok = signal(false);
}
