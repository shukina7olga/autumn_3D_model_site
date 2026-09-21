const forms = () => {
    const validInput = (selector, reg) => {
        const inputs = document.querySelectorAll(selector)

        inputs.forEach(item => {
            item.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(reg, '');
            })
        })
    }

    validInput('input.calc-item', /\D/g);
    validInput('input[type=text]:not(.calc-item), #form2-message', /[^а-яА-Я-\s]/g);
    validInput('input[type=email]', /[^A-Z\d@_.!~*'-]/gi);
    validInput('input[type=tel]', /[^\d()-]/g);  
}

export default forms



// вид до оптимизации
// const calcItems = document.querySelectorAll('input.calc-item');
// const textInputs = document.querySelectorAll('input[type=text]:not(.calc-item), #form2-message');
// const emailInputs = document.querySelectorAll('input[type=email]');
// const tellInputs = document.querySelectorAll('input[type=tel]');

// calcItems.forEach(item => {
//     item.addEventListener('input', (e) => {
//         e.target.value = e.target.value.replace(/\D/g, '');
//     })
// })
// //ввод только кириллицы в любом регистре, дефиса и пробела
// textInputs.forEach(item => {
//     item.addEventListener('input', (e) => {
//         e.target.value = e.target.value.replace(/[^а-яА-Я-\s]/g, '');
//     })
// })

// // ввод только латиницы в любом регистре, цифры и спецсимволы: @ - _ . ! ~ * '
// emailInputs.forEach(item => {
//     item.addEventListener('input', (e) => {
//         e.target.value = e.target.value.replace(/[^A-Z\d@_.!~*'-]/gi, '');
//     })
// })

// // ввод только цифр, круглых скобок и дефис
// tellInputs.forEach(item => {
//     item.addEventListener('input', (e) => {
//         e.target.value = e.target.value.replace(/[^\d()-]/g, '');
//     })
// })