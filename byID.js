console.dir(document)

console.log(document.domain)

console.log(document.URL)

console.log(document.title)

document.title = "Items "



console.log(document.all[10]);

console.log(document.forms)

console.log(document.links)





var headerTitle= document.getElementById('header-title')

console.log(headerTitle)

headerTitle.textContent="Hello"

headerTitle.innerText='GoodBye'



var headerTitle= document.getElementById('header-title')

console.log(headerTitle)



headerTitle.innerHTML = '<h3>Hello</h3>'

headerTitle.style.borderBottom='solid 3px #000'

 var addItems = document.getElementsByClassName('title')



 console.log(addItems[0])

 addItems[0].style.fontWeight ='bold';

 addItems[0].style.color='green'

