import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "cadastro-produto-senacplace", appId: "1:560071899984:web:fd9cc75d8a110c14c50a55", storageBucket: "cadastro-produto-senacplace.firebasestorage.app", apiKey: "AIzaSyBN65cenTgN02N2NNsWpf7cBMUPlGZYecI", authDomain: "cadastro-produto-senacplace.firebaseapp.com", messagingSenderId: "560071899984"})), provideFirestore(() => getFirestore())
  ]
};
