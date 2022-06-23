// connection testing
console.log('linked file')

// variables
let image, b
const color = '2px solid red'

b = false
console.log('click = '.concat(b))

// get HTML elements 
image = document.getElementById('img')

// funtion 
image.addEventListener('click', function() {
    if (b == false) {
        this.style.border = color
        b = true
        console.clear()
        console.log('click = '.concat(b))
    } else {
        this.style.border = 'none'
        b = false
        console.clear()
        console.log('click = '.concat(b))
    }
})
 
