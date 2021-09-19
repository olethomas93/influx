const { newFluxTableColumn } = require('@influxdata/influxdb-client')
var {influxQuery} = require('./fluxQuery')
var {map} = require('rxjs/operators') 

const Query =
'from(bucket:"mydb") |> range(start:-30d)  |> filter(fn: (r) => r._measurement == "average_temperature" and r._field == "degrees" and r.location == "santa_monica") '
 influxQuery(Query).then((data)=>{

    data.subscribe({
        next(o){

            console.log(o)
        }
    })
 })





   





