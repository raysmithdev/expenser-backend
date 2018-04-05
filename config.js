exports.PORT = process.env.PORT || 8080
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000' || 'http://localhost:19000'
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/expenser-app'
exports.JWT_SECRET = process.env.JWT_SECRET || 'secret'
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d'
