const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.yaml$/i,
        use: ['raw-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|webp)$/i,
        oneOf: [
          // Use responsive-loader for images that need multiple sizes
          // Import with ?sizes[]=400&sizes[]=800&sizes[]=1200 to generate responsive images
          {
            resourceQuery: /sizes/,
            use: {
              loader: 'responsive-loader',
              options: {
                adapter: require('responsive-loader/sharp'),
                // Sizes will be parsed from query string automatically by responsive-loader
                // Default sizes if not specified in query
                sizes: [400, 800, 1200, 1600],
                placeholder: true,
                placeholderSize: 50,
                quality: 85,
                format: 'webp',
                outputPath: 'images/',
                name: '[name]-[width].[ext]',
              },
            },
          },
          // Default: optimize but keep single size
          {
            type: 'asset/resource',
          },
        ],
      },
      {
        test: /\.(gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      favicon: './src/assets/favicon.ico',
    }),
    // Optimize images in production
    ...(process.env.NODE_ENV === 'production' ? [
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        optipng: {
          optimizationLevel: 7,
        },
        pngquant: {
          quality: [0.65, 0.8],
        },
        mozjpeg: {
          quality: 85,
          progressive: true,
        },
        webp: {
          quality: 85,
        },
      }),
    ] : []),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 1234,
    hot: true,
    open: true,
  },
};


