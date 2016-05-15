var seneca = require('seneca')();
seneca.use('entity')

var Promise = require('bluebird')

//Promise.promisify(seneca.make$,{context:seneca})
//Promise.promisify(seneca.list$,{context:seneca})


var config = require('./config.json')
	//=========== test env db ========== //
seneca.use(config.test.db_type, config.test.db_config)
	//================================= //


seneca.use('../harvest_data/index.js')
seneca.use('../harvest_strategy/index.js')
seneca.use('../harvest_evaluator/index.js')


seneca.ready(function() {
	seneca.listen()
})