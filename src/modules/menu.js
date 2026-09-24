const menu = () => {
    const menuBlock = document.querySelector('menu')

    const toggleMenu = (e) => {
        if (e.target.closest('.menu')) {
            menuBlock.classList.toggle('active-menu')
            return
        }
        //крестик или ссылка - выйти
        if (e.target.closest('.close-btn') || e.target.closest('menu ul > li > a')) {
            menuBlock.classList.remove('active-menu')
            return
        }
        //мимо менюшки - выйти
        if (!e.target.closest('menu')) {
            menuBlock.classList.remove('active-menu')
        }
    }
    document.addEventListener('click', toggleMenu)
}

export default menu


// const menu = () => {
//     const menuBtn = document.querySelector('.menu')
//     const menuBlock = document.querySelector('menu')

//     menuBtn.addEventListener('click', (e) => {
//         e.stopPropagation()
//         menuBlock.classList.toggle('active-menu')
//     })

//     document.addEventListener('click', (e) => {
//         const isMenuOpen = menuBlock.classList.contains('active-menu')

//         if (e.target.closest('.close-btn') || e.target.closest('menu ul > li > a')) {
//             menuBlock.classList.remove('active-menu')
//             return
//         }

//         if (isMenuOpen && !e.target.closest('menu')) {
//             menuBlock.classList.remove('active-menu')
//         }
//     })
// }

// export default menu