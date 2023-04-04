const Environments = ['production', 'local'] as const
type Environment = typeof Environments[number]

export const getEnvironment = (): Environment => {
  switch (process.env.ENVIRONMENT) {
    case 'local':
      return 'local'
    default:
      return 'production'
  }
}
