import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="min-h-screen bg-brand grid place-items-center p-4">
      <div class="w-full max-w-sm bg-white rounded-3xl p-6">
        <p class="text-center text-4xl">🌱</p>
        <h1 class="text-center text-xl font-bold mt-1">Agrozalcoalt</h1>
        <p class="text-center text-sm text-stone-500">{{ registro() ? 'Crea tu cuenta' : 'Inicia sesión' }}</p>
        <div class="mt-4 space-y-3">
          @if (registro()) {
            <input placeholder="Nombre completo" class="w-full rounded-xl border border-stone-300 p-3" />
            <select class="w-full rounded-xl border border-stone-300 p-3"><option>Agricultor</option><option>Comprador</option></select>
          }
          <input type="email" placeholder="Correo" class="w-full rounded-xl border border-stone-300 p-3" />
          <input type="password" placeholder="Contraseña" class="w-full rounded-xl border border-stone-300 p-3" />
          <button (click)="entrar()" class="w-full bg-brand text-white font-semibold py-3 rounded-xl">{{ registro() ? 'Registrarme' : 'Entrar' }}</button>
        </div>
        <button (click)="registro.set(!registro())" class="mt-4 w-full text-sm text-earth">
          {{ registro() ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate' }}
        </button>
      </div>
    </div>
  `,
})
export class LoginPage {
  private router = inject(Router);
  registro = signal(false);
  entrar() { this.router.navigateByUrl('/'); }
}
