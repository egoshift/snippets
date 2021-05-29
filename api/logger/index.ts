import pino from 'pino'
import http from 'pino-http' 

// const pinoHttp = http({
//   logger: pino,
//   name: pino.namespace(__dirname, __filename),
//   level: pino.level,
//   customLogLevel: function (res, err) {
//    if (res.statusCode >= 400 && res.statusCode < 500) return 'warn'
//    if (res.statusCode >= 500 || err) return 'error'
//    return 'trace'
//   }, customSuccessMessage: (res) => {
//    if (res.statusCode === 404) {
//     return `${res.$.method} ${res.$.path} Not found`
//    }
    
//    return 'Request Complete'
//   }
// })
 
const pinoLogger = pino({
  prettyPrint: true,
})

const pinoHttpLogger = http({
  logger: pinoLogger,
  level: pinoLogger.level,
  customLogLevel: function (res, err) {
    if (res.statusCode >= 400 && res.statusCode < 500) return 'warn'
    if (res.statusCode >= 500 || err) return 'error'
    return 'trace'
  },
  customSuccessMessage: (res) => {
    if (res.statusCode === 404) {
    return `${res} Not found`
    }
          
    return 'Request Complete'
  }
})

export default pinoLogger

export { pinoHttpLogger }
