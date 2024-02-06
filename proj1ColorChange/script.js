// const buttons = document.querySelectorAll('.button')
// // console.log(buttons);
// const Body = document.querySelector('body')

// buttons.forEach(function(btn)
// {
//     console.log(btn);
//     btn.addEventListener('click',function(evnt){
//         console.log(evnt);
//         // console.log(evnt.target)

//         if(evnt.target.id === 'grey'){
//             Body.style.backgroundColor = evnt.target.id
//         }
//         if(evnt.target.id === 'white'){
//             Body.style.backgroundColor = evnt.target.id
//         }
//         if(evnt.target.id === 'blue'){
//             Body.style.backgroundColor = evnt.target.id
//         }
//         if(evnt.target.id === 'yellow'){
//             Body.style.backgroundColor = evnt.target.id
//         }if(evnt.target.id === 'purple'){
//             Body.style.backgroundColor = evnt.target.id
//         }
//     })
// })

// <!-- ================================================================================= -->

const buttons= document.querySelectorAll('.box')
// console.log('button',buttons);
const body= document.querySelector('body')
// console.log('body',body);

buttons.forEach(function(btn){
    // console.log('btn',btn);
    btn.addEventListener('click',function(evnt){
        console.log('evnt',evnt.target.id);

        if(evnt.target.id== 'blue'){
            body.style.background='blue'
        }
        if(evnt.target.id == 'red'){
            body.style.backgroundColor = evnt.target.id
        }
        if(evnt.target.id== 'purple'){
            body.style.background=evnt.target.id
    
        }
        if(evnt.target.id== 'green'){
            body.style.background=evnt.target.id
        }
        if(evnt.target.id== 'yellow'){
            body.style.background=evnt.target.id
        }

    })

})