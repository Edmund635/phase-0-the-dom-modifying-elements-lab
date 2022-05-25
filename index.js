// Write your code here!
document.getElementById('main').remove();
let newHeader = document.createElement('h1')
newHeader.id = "victory";
newHeader.textContent = "Edmund Adjei is the champion";
document.body.append(newHeader);