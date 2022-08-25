const myURL = new URL('https://www.register.com/?name=gfg');

// It prints gfg
console.log(myURL.searchParams.get('name'));

myURL.searchParams.append('name', 'xyz');

// It prints https://www.register.com/?name=gfg&name=xyz
console.log(myURL.href);

console.log(__dirname);

console.log(__filename);