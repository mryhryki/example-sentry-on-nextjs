const Environments = ['production', 'local'] as const
type Environment = typeof Environments[number]

export const getEnvironment = (): Environment => {
  switch (process.env.NEXT_PUBLIC_ENVIRONMENT) {
    case 'local':
      return 'local'
    default:
      return 'production'
  }
}
