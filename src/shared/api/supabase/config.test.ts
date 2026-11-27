import { describe, expect, it } from 'vitest'
import { getSupabaseConfig } from './config'

describe('getSupabaseConfig', () => {
  it('returns the url and key when both are set', () => {
    const config = getSupabaseConfig({
      VITE_SUPABASE_URL: 'https://example.supabase.co',
      VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_test',
    })

    expect(config).toEqual({
      url: 'https://example.supabase.co',
      key: 'sb_publishable_test',
    })
  })

  it('throws a helpful error when the url is missing', () => {
    expect(() =>
      getSupabaseConfig({
        VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_test',
      }),
    ).toThrow(/\.env\.local/)
  })

  it('throws a helpful error when the key is missing', () => {
    expect(() =>
      getSupabaseConfig({ VITE_SUPABASE_URL: 'https://example.supabase.co' }),
    ).toThrow(/\.env\.local/)
  })
})
