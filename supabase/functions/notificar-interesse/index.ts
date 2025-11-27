import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 1. Extract the JWT from the Authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('Missing Authorization header')
    }

    // 2. Create a Supabase client with the user's token
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    )

    // 3. Verify the user
    const {
      data: { user },
      error: userError,
    } = await supabaseClient.auth.getUser()

    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized', details: userError }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // 4. Parse the request body
    const { idProduto, mensagem } = await req.json()

    if (!idProduto) {
      throw new Error('idProduto is required')
    }

    // 5. (Optional) Fetch product details to ensure it exists and get seller info
    // const { data: produto, error: prodError } = await supabaseClient.from('produtos').select('*').eq('id', idProduto).single()

    // 6. Log the action (Simulating email sending)
    console.log(`[EMAIL SERVICE] Sending email to seller of product ${idProduto}...`)
    console.log(`[EMAIL SERVICE] From: ${user.email}`)
    console.log(`[EMAIL SERVICE] Message: ${mensagem || 'Tenho interesse neste produto.'}`)
    
    // Here you would call Resend, SendGrid, etc.

    return new Response(
      JSON.stringify({ message: 'Notificação enviada com sucesso!', sender: user.email }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
