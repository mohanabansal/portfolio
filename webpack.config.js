const CompressionPlugin = require('compression-webpack-plugin')
const S3Plugin = require('webpack-s3-plugin')

const isDev = process.env.NODE_ENV === 'development'

console.log(process.env.NODE_ENV)

module.exports = {
  mode: isDev ? 'development' : 'production',
  plugins: [].concat(
    process.env.NODE_ENV === 'production'
      ? [
          new CompressionPlugin({
            test: /\.(js|css)$/,
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            deleteOriginalAssets: true,
          }),
          new S3Plugin({
            s3Options: {
              accessKeyId: process.env.accessKeyId, // Your AWS access key
              secretAccessKey: process.env.secretAccessKey, // Your AWS secret key
              region: 'us-east-2', // The region of your S3 bucket
            },
            s3UploadOptions: {
              Bucket: 'mbansal.net', // Your bucket name
              // Here we set the Content-Encoding header for all the gzipped files to 'gzip'
              ContentEncoding(fileName) {
                if (/\.gz/.test(fileName)) {
                  return 'gzip'
                }
              },
              // Here we set the Content-Type header for the gzipped files to their appropriate values, so the browser can interpret them properly
              ContentType(fileName) {
                if (/\.css/.test(fileName)) {
                  return 'text/css'
                }
                if (/\.js/.test(fileName)) {
                  return 'text/javascript'
                }
              },
            },
            basePath: '', // This is the name the uploaded directory will be given
            directory: 'public/', // This is the directory you want to upload
          }),
        ]
      : []
  ),
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: '[name].[ext]', outputPath: './assets/images/'},
          },
        ],
      },
    ],
  },
}
