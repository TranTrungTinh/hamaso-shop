const NodeEnv = {
  Development: 'development',
  Production: 'production',
  Test: 'test'
}

// ? env
export const NODE_ENV = process.env.NODE_ENV || import.meta.env.MODE
export const isDev = NODE_ENV === NodeEnv.Development || import.meta.env.DEV
export const isProd = NODE_ENV === NodeEnv.Production || import.meta.env.PROD
export const isTest = NODE_ENV === NodeEnv.Test
