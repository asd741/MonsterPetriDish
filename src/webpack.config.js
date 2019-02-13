var bower_dir = __dirname + '/src';
module.exports = {
  module: { 
    // 這邊指定 webpack 不要處理 react 這個檔案
    noParse: [bower_dir + '/banner.js'],
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  }
};