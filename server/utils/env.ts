function env(name: keyof typeof Bun.env): string {
  const value = Bun.env[name]

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }

  return value
}

export const PORT = Number(env("PORT"))
