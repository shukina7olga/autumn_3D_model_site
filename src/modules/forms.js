const forms = () => {    
    //первую букву заглавную. остальные маленькие. делаем для каждого слова
    const textCase = (str) => {
        const words = str.toLowerCase().split(' ');
        const result = words.map(word => {
            return word[0].toUpperCase() + word.slice(1);
        })
        return result.join(' ');
    }

    const validInput = (selector, reg) => {
        const inputs = document.querySelectorAll(selector)

        //Работа с событием blur
        inputs.forEach(item => {
            item.addEventListener('blur', (e) => { // поле теряет фокус. когда клик вне поля
                e.target.value = e.target.value.replace(reg, '');

                e.target.value = e.target.value.replace(/\s+/g, ' '); //один и более пробелов поменять на 1 пробел
                e.target.value = e.target.value.replace(/-+/g, '-'); //один и более дефисов поменять на 1 дефис
                
                e.target.value = e.target.value.trim(); // удалить пробелы в начале и в конце. или так /^\s+|\s+$/g
                e.target.value = e.target.value.replace(/^-+|-+$/g, ''); //удалить дефисы в начале и в конце
            })
        })

        //Работа с событием input
        // inputs.forEach(item => {
        //     item.addEventListener('input', (e) => {
        //         e.target.value = e.target.value.replace(reg, '');
        //     })
        // })
    }

    validInput('input.calc-item', /\D/g);
    validInput('input[type=text]:not(.calc-item), #form2-message', /[^а-яА-Я-\s]/g);
    validInput('input[type=email]', /[^A-Z\d@_.!~*'-]/gi);
    validInput('input[type=tel]', /[^\d()-]/g);  

    const textInputs = document.querySelectorAll('input[type=text]:not(.calc-item)');
    
    textInputs.forEach(item => {
        item.addEventListener('blur', (e) => {
            e.target.value = textCase(e.target.value);
        })
    })
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