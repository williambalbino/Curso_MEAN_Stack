const express = require('express')

module.exports = function(server){

  //API routes
  const router = express.Router()
  server.use('/api', router)

  //rotas da api
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')

  const billingSumaryService = require('../api/billingSumary/billingSumaryService')
  router.route('/billingSumary').get(billingSumaryService.getSummary)
}
