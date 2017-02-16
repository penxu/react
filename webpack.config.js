/**
 * Created by Amy on 2017/2/10.
 */

module.exports = {
  entry:'./entry.js',//入口文件
  output:{
      filename:'bundle.js'//出口
  },
  devtool: 'source-map',//直接生成srouce-map
  module: {
      loaders:[
          {
            test: /\.css|.scss|.sass$/,
            loader: 'style-loader!css-loader!sass-loader'
          },

          {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
          }
      ]
  },
  resolve: {
      extensions: ['.js', '.scss']
  }
/*  babel: {
      'presets': ['es2015']
  }*/
};
