
const body=document.querySelector('body')// querry the body element from html
const main_container= document.createElement("div")//main conatiner div created
main_container.setAttribute("className","main_container")
body.appendChild(main_container)// append the main container div to the body


// creating the div container  // probaly store these in a list
const div_container1=document.querySelector('div.div_container1')
const div_container2 =document.querySelector('div.div_container2')
const div_container3 =document.querySelector('div.div_container3')
const div_container4 =document.querySelector('div.div_container4')
const div_container5 =document.querySelector('div.div_container5')
const div_container6 =document.querySelector('div.div_container6')
const div_container7 =document.querySelector('div.div_container7')
const div_container8 =document.querySelector('div.div_container8')
const div_container9 =document.querySelector('div.div_container9')
const div_container10=document.querySelector('div.div_container10')
const div_container11 =document.querySelector('div.div_container11')
const div_container12 =document.querySelector('div.div_container12')
const div_container13 =document.querySelector('div.div_container13')
const div_container14 =document.querySelector('div.div_container14')
const div_container15 =document.querySelector('div.div_container15')
const div_container16 =document.querySelector('div.div_container16')


//append the div_containers into the main container // use an for each loop

main_container.append(div_container1)
main_container.append(div_container2)
main_container.append(div_container3)
main_container.append(div_container4)
main_container.append(div_container5)
main_container.append(div_container6)
main_container.append(div_container7)
main_container.append(div_container8)
main_container.append(div_container9)
main_container.append(div_container10)
main_container.append(div_container11)
main_container.append(div_container12)
main_container.append(div_container13)
main_container.append(div_container14)
main_container.append(div_container15)
main_container.append(div_container16)




const divs = new Array(16)// creates a list called divs with the length of 16 

divs[0]=document.createElement('div')
divs[1]=document.createElement('div')
divs[2]=document.createElement('div')
divs[3]=document.createElement('div')
divs[4]=document.createElement('div')
divs[5]=document.createElement('div')
divs[6]=document.createElement('div')
divs[7]=document.createElement('div')
divs[8]=document.createElement('div')
divs[9]=document.createElement('div')
divs[10]=document.createElement('div')
divs[11]=document.createElement('div')
divs[12]=document.createElement('div')
divs[13]=document.createElement('div')
divs[14]=document.createElement('div')
divs[15]=document.createElement('div')


//probably going to create a function for this

  const row1 =div_container1.append(// appending each div into div_conatiner
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
   
div_container1.innerHTML+=row1 

//  try to create another copy of this divs

const row2=div_container2.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container2.innerHTML+=row2


const row3=div_container3.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container3.innerHTML+=row3

const row4=div_container4.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container4.innerHTML+=row4

const row5=div_container5.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container5.innerHTML+=row5

const row6=div_container6.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container6.innerHTML+=row6

const row7=div_container7.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container7.innerHTML+=row7

const row8=div_container8.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container8.innerHTML+=row8

const row9=div_container9.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container9.innerHTML+=row9

const row10=div_container10.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container10.innerHTML+=row10

const row11=div_container11.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container11.innerHTML+=row11

const row12=div_container12.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container12.innerHTML+=row12

const row13=div_container13.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container13.innerHTML+=row13

const row14=div_container14.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container14.innerHTML+=row14

const row15=div_container15.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container15.innerHTML+=row15

const row16=div_container16.append(
    divs[0],
    divs[1],
    divs[2],
    divs[3],
    divs[4],
    divs[5],
    divs[6],
    divs[7],
    divs[8],
    divs[9],
    divs[10],
    divs[11],
    divs[12],
    divs[13],
    divs[14],
    divs[15]) 
div_container16.innerHTML+=row16




