const querystring = require('querystring');

//  Bu metot, bir URL sorgu dizesini ayrıştırarak bir nesne olarak döndürür.
const parsedObj = querystring.parse("name=huseyin&age=35");
console.log(parsedObj); // { name: 'huseyin', age: '35' }

// Bu metot, bir nesneyi URL sorgu dizesine dönüştürür.
const queryString = querystring.stringify({ name: "ferhat", search: "pamuk" });
console.log(queryString); // name=fehat&search=pamuk

//  Bu metot, bir URL bileşenindeki özel karakterleri kodlar.
const escapedString = querystring.escape('Merhaba, Dünya!');
console.log(escapedString); // Merhaba%2C%20D%C3%BCnya!

//  Bu metot, bir URL bileşenindeki kodlanmış karakterleri çözümler.
const unescapedString = querystring.unescape('Merhaba%2C%20D%C3%BCnya%21');
console.log(unescapedString); // Merhaba, Dünya!



// Not : Butun bu kodları kendim derleyerek , kendi projeme dahil ediyorum...