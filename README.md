# kanimask-extension

v0.1 にも届かない ver.

# 参考（中）

https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate/tree/react

# temp

"content_scripts": [
{
"matches": ["<all_urls>"],
"js": ["content-script.js"]
}
],
"web_accessible_resources": ["embeded-script.js"],

"background": {
"scripts": ["background.js"]
},

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'background.html'),
      filename: 'background.html',
      chunks: ['background'],
    }),

    background: path.join(__dirname, 'src', 'js', 'background.js'),

次 →background.bundle.js について調べる＋ background.html
