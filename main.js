var main = document.createElement('main');
var pageBody = document.getElementsByTagName('body')[0];

var scriptTag = document.getElementsByTagName('script')[0];
pageBody.insertBefore(main, scriptTag);

var header = document.createElement('h1');
main.appendChild(header);

var ul = document.createElement('ul');
main.appendChild(ul);

var li = document.createElement('li');
ul.appendChild(li);


var headerText = document.createTextNode('This is the header text!');
var listItemText = document.createTextNode('This is the list item');

header.appendChild(headerText);
li.appendChild(listItemText);


header.classList.add('blue');
header.classList.add('text-center');

var link = document.createElement('a');
var linkListItem = document.createElement('li');




console.log(pageBody);
