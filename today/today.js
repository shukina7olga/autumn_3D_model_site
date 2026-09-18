const getGreet = () => {
    const hours = new Date().getHours()

    if (hours >= 5 && hours < 12) {
        return 'Доброе утро'
    } else if (hours >= 12 && hours < 18) {
        return 'Добрый день'
    } else if (hours >= 18 && hours < 23) {
        return 'Добрый вечер'
    } else {
        return 'Доброй ночи'
    }
}

const getDayOfWeek = () => {
    // getDay() вернет нам число - номер дня недели. нулевой - вс
    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ]
    return days[new Date().getDay()]
}

const getTime = () => {
    const now = new Date()
    let hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hours = hours % 12
    hours = hours ? hours : 12

    const addZero = (num) => {
        return num < 10 ? '0' + num : num
    }

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${ampm}`
}

const getDaysNewYear = () => {
    const now = new Date()
    //берем время с 1 янв текущ года
    const newYear = new Date(now.getFullYear() + 1, 0, 1)
    //получаем разницу в милисекундах
    const diff = newYear - now

    return Math.ceil(diff / (1000*60*60*24))
}

const render = () => {
    document.getElementById('greet').textContent = getGreet()
    document.getElementById('day').textContent = `Сегодня: ${getDayOfWeek()}`
    document.getElementById('time').textContent = `Текущее время: ${getTime()}`
    document.getElementById('newYear').textContent = `До нового года осталось ${getDaysNewYear()} дней`
}

render()

setInterval(render, 1000)