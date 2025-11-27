const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://wrvrqkaedknuiaxkhrqh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndydnJxa2FlZGtudWlheGtocnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxMTA2MTIsImV4cCI6MjA3OTY4NjYxMn0.oNGEtwajwgLiDHn7Mp0hQNuJw9SW6S4TBJTN3MAu7Jw';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function test() {
  console.log('Fetching categories...');
  const { data, error } = await supabase.from('categorias').select('*').limit(1);
  
  if (error) {
    console.error('Error fetching categories:', error);
  } else {
    console.log('Data received:', data);
    if (data && data.length > 0) {
        console.log('Columns found:', Object.keys(data[0]));
    } else {
        console.log('Table is empty. Attempting to insert with "descricao" to test hypothesis...');
        // Try to insert with 'descricao' to see if it works
        const { error: insertError } = await supabase.from('categorias').insert([{ descricao: 'Teste Debug' }]);
        if (insertError) {
             console.log('Insert with "descricao" failed:', insertError.message);
             // Try 'nome'
             const { error: insertError2 } = await supabase.from('categorias').insert([{ nome: 'Teste Debug' }]);
             if (insertError2) {
                 console.log('Insert with "nome" failed:', insertError2.message);
             } else {
                 console.log('Insert with "nome" SUCCESS! Column is "nome".');
             }
        } else {
            console.log('Insert with "descricao" SUCCESS! Column is "descricao".');
        }
    }
  }
}

test();
