/*
 * The following configuration is used in the browser examples
 * (index.html and giraffe.html).
 *
 * Replace the values with your own InfluxDB values.
 */
// eslint-disable-next-line no-undef
window.INFLUX_ENV = {
    /** InfluxDB v2 URL, '/influxdb' relies upon proxy to forward to the target influxDB */
    url: 'http://localhost:8086', //'http://localhost:8086',
    /** InfluxDB authorization token */
    token: 'oIS2kzaB5-lGq_Pgi4U_bCLtkJIgA46x_f3LIbni9rQ3aMyVYqjcqhWagGShfJzNfWKPFTzazPtywBlmuhxfgw==',
    /** InfluxDB organization */
    org: 'Norbye',
    /** InfluxDB bucket used for onboarding and write requests. */
    bucket: 'mydb',
  
    /** The following properties are used ONLY in the onboarding example */
    /** InfluxDB user  */
    username: 'my-user',
    /** InfluxDB password  */
    password: 'my-password',
  }