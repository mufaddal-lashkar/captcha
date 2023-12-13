const refresh = document.querySelector('.re-btn')
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
let code = ""
function generateCap() {
    code = ""
    for(i=0;i<6;i++){
        code += str.charAt(Math.floor(Math.random()*62))
    }    
    document.getElementById('cap').value = code
}