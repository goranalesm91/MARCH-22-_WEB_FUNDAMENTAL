const playername =['Virat','Ronaldo','Messi','Dhoni','Rohit']
const back_color=[ 'red','blue','yellow','orange','aqua']
for(let i=0; i<playername.length;i++){
const para = document.createElement('p');
para.innerText=playername[i]
para.classList.add(back_color[i])
const element=document.querySelector('h1')
element.appendChild(para)


}
