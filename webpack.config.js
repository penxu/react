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
