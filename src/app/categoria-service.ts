import { Injectable } from '@angular/core';
import { Supabase } from './service/supabase';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private supabase: Supabase) {}

  async listarCategoria(): Promise<Categoria[]> {
    const { data, error } = await this.supabase.supabase.from('categorias').select('*').order('id', { ascending: true });
    if (error) throw error;
    return data || [];
  }

  async inserir(categoria: Categoria): Promise<void> {
    const { error } = await this.supabase.supabase.from('categorias').insert([{ nomecategoria: categoria.nomecategoria }]);
    if (error) throw error;
  }

  async editar(id: number, categoria: Categoria): Promise<void> {
    const { error } = await this.supabase.supabase.from('categorias').update({ nomecategoria: categoria.nomecategoria }).eq('id', id);
    if (error) throw error;
  }

  async deletar(id: number): Promise<void> {
    const { error } = await this.supabase.supabase.from('categorias').delete().eq('id', id);
    if (error) throw error;
  }
}
