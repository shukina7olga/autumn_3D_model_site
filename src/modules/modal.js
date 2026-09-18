const modal = () => {
    const modal = document.querySelector('.popup')
    const closeBtn = modal.querySelector('.popup-close')
    const buttons = document.querySelectorAll('.popup-btn')

    const isMobile = window.innerWidth < 768

    console.log(window.innerWidth)

    if (!isMobile) {
        modal.style.opacity = '0'
        modal.style.transition = 'opacity 0.9s'
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            
            if(!isMobile) {
                //чтобы мы увидели как отрабатывает строка, а не все сразу выполнилось
                requestAnimationFrame(() => {
                    modal.style.opacity = '1'
                })
            }
        })
    })

    closeBtn.addEventListener('click', () => {
        if (!isMobile) {
            modal.style.opacity = '0'
        } else {
            modal.style.display = 'none'
        }
    })

    modal.addEventListener('transitionend', () => {
        if (modal.style.opacity === '0') {
            modal.style.display = 'none'
        }
    })
}

export default modal