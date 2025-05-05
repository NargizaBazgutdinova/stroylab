 // вкладки
 let btns = document.querySelectorAll('.btn_rev')
 let texts = document.querySelectorAll('.text')

 btns.forEach((btn, index) => {
     btn.onclick = () => {
         document.querySelector('.btn_rev.active').classList.remove('active')
         btns[index].classList.add('active')
         document.querySelector('.text.active').classList.remove('active')
         texts[index].classList.add('active')
     }
 })
