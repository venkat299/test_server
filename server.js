
var seneca = require('seneca')();
// =========== test env db ==========//
seneca.use('mongo-store',{
  name:'harvest_test',
  host:'127.0.0.1',
  port:27017
})
 
// =================================//

  
seneca.use('../harvest_data/index.js')
seneca.use('../harvest_strategy/index.js')
seneca.use('../harvest_evaluator/index.js')

seneca.listen();