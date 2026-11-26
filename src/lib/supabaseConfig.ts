type SupabaseEnv = {
  VITE_SUPABASE_URL?: string
  VITE_SUPABASE_PUBLISHABLE_KEY?: string
}

export function getSupabaseConfig(env: SupabaseEnv) {
  const url = env.VITE_SUPABASE_URL
  const key = env.VITE_SUPABASE_PUBLISHABLE_KEY

  if (!url || !key) {
    throw new Error(
      'Missing Supabase environment variables. Copy .env.example to .env.local and fill in the values.',
    )
  }

  return { url, key }
}
