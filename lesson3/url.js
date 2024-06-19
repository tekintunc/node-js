const url = require('url');

// 1
let urlObject = url.parse("https://www.google.com:3000/categories/1/products/2?user=huseyin&age=35");
console.log(urlObject);
console.log(urlObject.protocol)

// 2
let urlStr = url.format({
    protocol: 'https:',
    hostname: 'www.google.com',
    pathname: '/categories/1/products/2',
})

console.log(urlStr);

// 3
console.log(url.resolve('http://example.com/', '/test'));
// http://example.com/test