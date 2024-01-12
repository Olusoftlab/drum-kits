const btnEl_1=document.getElementById('but-1')
const btnEl_2=document.getElementById('but-2')
const btnEl_3=document.getElementById('but-3')
const btnEl_4=document.getElementById('but-4')
const crashEl=document.getElementById('crash')
const kickEl=document.getElementById('kick')
const snareEl=document.getElementById('snare')
const tomEl=document.getElementById('tom')
console.log(tomEl)
console.log(snare)
console.log(crashEl)
console.log(kickEl)
// console.log(btnEl_1, btnEl_2, btnEl_3, btnEl_4)

btnEl_1.addEventListener('click', ()=>{

     crashEl.play()
     btnEl_1.style.width=172 + "px"
     setTimeout(()=>{
        btnEl_1.style.width=160 + "px"
     },1000)
})

btnEl_2.addEventListener('click', ()=>{

    kickEl.play()
    btnEl_2.style.width=172 + 'px'
    setTimeout(()=>{
        btnEl_2.style.width =160 + 'px'
    },1000)
})


btnEl_3.addEventListener('click', ()=>{
    snareEl.play()
    btnEl_3.style.width=172 + 'px'
    setTimeout(()=>{

        btnEl_3.style.width = 160 + 'px'
    },1000)
})


btnEl_4.addEventListener('click', ()=>{

    tomEl.play()
    btnEl_4.style.width=172 + "px"
    setTimeout(()=>{
        btnEl_4.style.width =160 + "px"
    },1000)
})


document.addEventListener('keyup', (e)=>{

    if (e.key == 'c' || e.key == 'C'){
        crashEl.play()
        btnEl_1.style.width = 172 + "px"
        setTimeout(() => {
            btnEl_1.style.width = 160 + "px"
        }, 1000)      
    }

    else if (e.key == 'k' || e.key == 'K'){

        kickEl.play()
        btnEl_2.style.width = 172 + 'px'
        setTimeout(() => {
            btnEl_2.style.width = 160 + 'px'
        }, 1000)

    }

    else if (e.key == 's' || e.key == 'S') {

        snareEl.play()
        btnEl_3.style.width = 172 + 'px'
        setTimeout(() => {

            btnEl_3.style.width = 160 + 'px'
        }, 1000)
    }
 
     
    else if (e.key == 't' || e.key == 'T') {


        tomEl.play()
        btnEl_4.style.width = 172 + "px"
        setTimeout(() => {
            btnEl_4.style.width = 160 + "px"
        }, 1000)
    }

})






