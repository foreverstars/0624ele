module.exports = {
	entry: "./main.js",
	output:{
		path :  __dirname,
		filename : "dist/bundle.js"
	},
	module:{
		loaders: [
			{	
				test : /\.js$/,
				loader:"babel-loader",
				exclude:/node_modules/,
				query:{
					presets: [ "es2015","react"],
					plugins: ['react-html-attrs']
				}
			},
			{
				test :  /\.css$/,
				loader: "style-loader!css-loader"
			},{
				test : /\.(png|jpg|gif|ttf)$/,
				loader: "file-loader"
			}
		]
	}
	
	
	
}
