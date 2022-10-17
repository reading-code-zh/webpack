const webpack = require('../../webpack')
const config = require('./webpack.config')
const cp = require('child_process');

// 删除 dist
cp.spawnSync('rm',['-rf', './dist'])

const compiler = webpack(config, (err, stats) => { // [Stats Object](#stats-object)

  if (err || stats.hasErrors()) {
    // [在这里处理错误](#error-handling)

    console.log(err);
  }
  // process.stdout.write(stats.toString() + '\n');

  // 处理完成
  console.log('done');
  // console.log(stats);

});


// eslint-disable-next-line no-unused-vars
compiler.run((err, stats) => { // [Stats Object](#stats-object)
  // ...
  console.log('run');

  // eslint-disable-next-line no-unused-vars
  compiler.close((closeErr) => {
  console.log('close');

    // ...
  });
});
