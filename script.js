
const body=document.querySelector('body')// querry the body element from html
const main_container= document.createElement("div")//main conatiner div created
body.appendChild(main_container)// append the main container div to the body
const div_container=document.createElement('div')
main_container.appendChild(div_container)//append the div_container into the main container
const div_container_class_name=div_container.setAttribute("className","div_container") // create a class name for div container



const divs = new Array(16) // creates a list called divs with the length of 16 

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



div_container.append(divs[0],divs[1]) // appending each div into div_conatiner





