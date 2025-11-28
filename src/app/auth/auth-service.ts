import { Injectable } from '@angular/core';
import { SupabaseApi } from '../supabase-api';
import { User, Session } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _session: Session | null = null;
  
  constructor(private supabaseApi: SupabaseApi) {
    this.supabaseApi.supabase.auth.onAuthStateChange((event, session) => {
      this._session = session;
    });
    this.supabaseApi.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session;
    });
  }

  async login(email: string, senha: string): Promise<boolean> {
    const { data, error } = await this.supabaseApi.supabase.auth.signInWithPassword({
      email: email,
      password: senha,
    });

    if (error) {
      console.error('Erro no login:', error.message);
      return false;
    }
    return true;
  }

  async logout(): Promise<void> {
    await this.supabaseApi.supabase.auth.signOut();
  }

  async getSession(): Promise<Session | null> {
    const { data } = await this.supabaseApi.supabase.auth.getSession();
    return data.session;
  }

  async getUser(): Promise<User | null> {
    const { data } = await this.supabaseApi.supabase.auth.getUser();
    return data.user;
  }

  estaLogado(): boolean {
    return !!this._session;
  }

  ehAdmin(): boolean {
    return true; 
  }
}
