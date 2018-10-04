var main = document.createElement('main');
var pageBody = document.getElementsByTagName('body')[0];
console.log(pageBody);
var scriptTag = document.getElementsByTagName('script')[0];
pageBody.insertBefore(main, scriptTag);
