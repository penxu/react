/**
 * Created by Amy on 2017/2/10.
 */

module.exports = {
  entry:'./entry.js',//����ļ�
  output:{
      filename:'bundle.js'//����
  },
  devtool: 'source-map',//ֱ������srouce-map
  module: {
      loaders:[
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
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
/*  babel: {
      'presets': ['es2015']
  }*/
};
