export default defineEventHandler(async event => {
  throw createError({
    statusCode: 401,
    message: 'Never again'
  })
})
