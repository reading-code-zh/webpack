const webpack = require('../../webpack')
const config = require('./webpack.config')
const cp = require('child_process')

cp.spawnSync('rm',['-rf', 'dist'])

webpack(config, (err, stats) => {
  if(err) console.log(err);

  console.log('done');
})
