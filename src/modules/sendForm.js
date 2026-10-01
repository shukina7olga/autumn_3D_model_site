const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка'
    const successText = 'Спасибо! Менеджер свяжется с вами.'

    const checkEnteringInput = () => {
        //name="user_phone" разрешить ввод только цифр, знака “+”, круглых скобок и дефис
        const phoneInputs = form.querySelectorAll('[name="user_phone"]')
        phoneInputs.forEach(input => {
            input.addEventListener('input', e => {
                e.target.value = e.target.value.replace(/[^0-9\+\(\)\-]/g, '')
            })
        })

        //name="user_name" разрешить ввод только кириллицы и пробелов
        const nameInputs = form.querySelectorAll('[name="user_name"]')
        nameInputs.forEach(input => {
            input.addEventListener('input', e => {
                e.target.value = e.target.value.replace(/[^а-я\s]/gi, '')
            })
        })

        //name="user_message" разрешить только кириллицу, пробелы, цифры и знаки препинания.
        const messageInputs = form.querySelectorAll('[name="user_message"]')
        messageInputs.forEach(input => {
            input.addEventListener('input', e => {
                // Разрешаем: кириллицу, цифры, пробелы и основные знаки препинания
                e.target.value = e.target.value.replace(/[^а-я0-9\s\.\,\!\?\-\:\;\"\'\(\)]/gi, '')
            })
        })
    }

    const validate = (list) => {
        let success = true

        list.forEach(el => {
            console.log(el.value)
        })
        
        return success
    }

// https://jsonplaceholder.typicode.com/posts у меня даже с впн не прогружается(, нашла альтернативный ресурс
    const sendData = (data) => {
        return fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {     
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = error
                })
        } else {
            alert('Не валидны данные(')
        }

    }

    checkEnteringInput()

    try {
        if (!form) {
            throw new Error('Формы нету. Верните мою прелесть!')
        }

        form.addEventListener('submit', e => {
            e.preventDefault()
            submitForm()
        })
    } catch(error) {
        console.log(error.message)
    }
}

export default sendForm