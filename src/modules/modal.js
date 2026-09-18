const modal = () => {
    const modal = document.querySelector('.popup')
    const closeBtn = modal.querySelector('.popup-close')
    const buttons = document.querySelectorAll('.popup-btn')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

export default modal