import { animate } from "./helpers"

const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')

    const isMobile = window.innerWidth < 768

    const openModal = () => {
        modal.style.display = 'block'

        if (!isMobile) {
            animate({
                duration: 700,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = progress
                }
            });
        }        
    }

    const closeModal = () => {
        if (!isMobile) {
            animate({
                duration: 700,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = 1 - progress
                }
            });
            setTimeout(() => {
                modal.style.display = 'none'
            }, 700)
        } else {
            modal.style.display = 'none'
        }      
    }    

    buttons.forEach(btn => {
        btn.addEventListener('click', openModal)
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.closest('.popup-close')) {
            closeModal()
        }
    })
}

export default modal