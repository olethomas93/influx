const {InfluxDB} = require('@influxdata/influxdb-client')
const {from,of, Observable} =require('rxjs')
const {map,}= require('rxjs/operators')
// You can generate a Token from the "Tokens Tab" in the UI
const token = 'oIS2kzaB5-lGq_Pgi4U_bCLtkJIgA46x_f3LIbni9rQ3aMyVYqjcqhWagGShfJzNfWKPFTzazPtywBlmuhxfgw=='
const org = 'Norbye'
const bucket = 'mydb'

const client = new InfluxDB({url: 'http://localhost:8086', token: token})
const queryApi = client.getQueryApi(org)

  async function influxQuery(fluxQuery){


    return  from(queryApi.rows(fluxQuery)).pipe(map(({values, tableMeta}) => tableMeta.toObject(values)))

     



  }

  module.exports ={
      influxQuery
  }

      
   
  
  
  
  
  
      
      

     
    

    
    