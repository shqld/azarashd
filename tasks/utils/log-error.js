const logError = err => console.error(err.stack || err)

process.on('uncaughtException', logError)
process.on('unhandledRejection', logError)
