var main = document.createElement('main');
var pageBody = document.getElementsByTagName('body')[0];
console.log(pageBody);
var scriptTag = document.getElementsByTagName('script')[0];
pageBody.insertBefore(main, scriptTag);

var header = document.createElement('h1');
main.appendChild(header);

var ul = document.createElement('ul');
header.appendChild(ul);

var li = document.createElement('li');
ul.appendChild(li);


