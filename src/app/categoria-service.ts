import { Injectable } from '@angular/core';
import { SupabaseApi } from './supabase-api';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private supabaseApi: SupabaseApi) {}

  async listarCategoria(): Promise<Categoria[]> {
    const { data, error } = await this.supabaseApi.supabase.from('categorias').select('*').order('id', { ascending: true });
    if (error) throw error;
    return data || [];
  }

  async inserir(categoria: Categoria): Promise<void> {
    const { error } = await this.supabaseApi.supabase.from('categorias').insert([{ nomeCategoria: categoria.nomeCategoria }]);
    if (error) throw error;
  }

  async editar(id: number, categoria: Categoria): Promise<void> {
    const { error } = await this.supabaseApi.supabase.from('categorias').update({ nomeCategoria: categoria.nomeCategoria }).eq('id', id);
    if (error) throw error;
  }

  async deletar(id: number): Promise<void> {
    const { error } = await this.supabaseApi.supabase.from('categorias').delete().eq('id', id);
    if (error) throw error;
  }
}
