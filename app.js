const {InfluxDB} = require('@influxdata/influxdb-client')

// You can generate a Token from the "Tokens Tab" in the UI
const token = 'oIS2kzaB5-lGq_Pgi4U_bCLtkJIgA46x_f3LIbni9rQ3aMyVYqjcqhWagGShfJzNfWKPFTzazPtywBlmuhxfgw=='
const org = 'Norbye'
const bucket = 'mydb'

const client = new InfluxDB({url: 'http://localhost:8086', token: token})
const fluxQuery =
  'from(bucket:"mydb") |> range(start:-30d)  |> filter(fn: (r) => r._measurement == "average_temperature" and r._field == "degrees" and r.location == "santa_monica") '





    
    const queryApi = client.getQueryApi(org)
    queryApi.queryRows(fluxQuery, {
      next(row, tableMeta) {
        const o = tableMeta.toObject(row)
       
        if (o){
          // custom output for example query
          console.log(
            `${o._time} ${o._measurement} in '${o.location}' (${o.result}): ${o._field}=${o._value}`
          )
        } else {
          // default output
          console.log(JSON.stringify(o, null, 2))
        }
      },
      error(error) {
        console.log('QUERY FAILED', error)
      },
      complete() {
        console.log('QUERY FINISHED')
      },
    })
  