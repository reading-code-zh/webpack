const webpack = require('../../webpack')
const config = require('./webpack.config')

webpack(config, (err, stats) => {
  if(err) console.log(err);

  console.log('done');
})
