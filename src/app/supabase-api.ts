import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseApi {
  private SUPABASE_URL = 'https://wrvrqkaedknuiaxkhrqh.supabase.co';
  private SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndydnJxa2FlZGtudWlheGtocnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMTA2MTIsImV4cCI6MjA3OTY4NjYxMn0.oNGEtwajwgLiDHn7Mp0hQNuJw9SW6S4TBJTN3MAu7Jw';
  public supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.SUPABASE_URL, this.SUPABASE_KEY);
  }
}
