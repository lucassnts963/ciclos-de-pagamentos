const express = require('express')

module.exports = function(server){
    //Definir a URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)


    //Rotas de Ciclo de Pagamento
    const Billincycle = require('../api/billingCycle/billingCycleService')
    Billincycle.register(router, '/billingCycles')
}