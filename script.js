
const body=document.querySelector('body')// the body will store everything
const container= document.createElement("div")//main conatiner div created
const div =document.createElement("div")// div created

container.innerText="im inside the body"
div.innerText="im in the container"

body.appendChild(container) // added the main container to the body
container.appendChild(div)


