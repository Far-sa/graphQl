const createHttpError = require('http-errors')
const JWT = require('jsonwebtoken')

const { UserModel } = require('../../models/users')
const { ACCESS_TOKEN_SECRET_KEY } = require('../../utils/constans')

function getToken (headers) {
  const [bearer, token] = headers?.authorization?.split(' ') || []
  if (token && ['Bearer', 'bearer'].includes(bearer)) return token
  throw createHttpError.Unauthorized('Please Log in First!')
}

function VerifyAccessToken (req, res, next) {
  try {
    const token = getToken(req.headers)
    JWT.verify(token, ACCESS_TOKEN_SECRET_KEY, async (err, payload) => {
      try {
        if (err)
          throw createHttpError.Unauthorized('Please Log in into Your Account')
        const { mobile } = payload || {}
        const user = await UserModel.findOne(
          { mobile },
          { password: 0, otp: 0 }
        )
        if (!user) throw createHttpError.Unauthorized('User Not Found')
        req.user = user
        return next()
      } catch (error) {
        next(error)
      }
    })
  } catch (error) {
    next(error)
  }
}
async function VerifyAccessTokenInGraphQL (req) {
  try {
    const token = getToken(req.headers)
    const { mobile } = JWT.verify(token, ACCESS_TOKEN_SECRET_KEY)
    const user = await UserModel.findOne({ mobile }, { password: 0, otp: 0 })
    if (!user) throw new createHttpError.Unauthorized('User not found')
    return user
  } catch (error) {
    throw new createHttpError.Unauthorized()
  }
}
module.exports = {
  VerifyAccessToken,
  getToken,
  VerifyAccessTokenInGraphQL
}
