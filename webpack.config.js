	module.exports =
{
	"entry":"./index.js", "output":"./bundle.js",
	
	module: {
		rules: [
				
		{
			test: /\.jsx?$/,
			use: ['babel-loader']

		},
		{
			test:/\.png$/,
			loader: 'url-loader'
		},
		{
			test:/\.gif$/,
			loader:'url-loader'
		}


		]
	},

	devtool:"eval", 
	devServer: {
		historyApiFallback:true
	}


}