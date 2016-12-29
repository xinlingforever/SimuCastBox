 var config = {
   entry: {
      a: ['./main.js']
   },
	
   output: {
      path:'./build',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7777
   },
	
   module: {
      loaders: [ {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel',
			
         query: {
            presets: ['es2015', 'react', 'stage-0']
         }
      }]
   }
	
}

module.exports = config;