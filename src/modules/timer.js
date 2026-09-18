const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow)/1000
        // let days = Math.floor(timeRemaining / 60 / 60 / 24)
        // let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return {
            timeRemaining,
            hours, // hours: hours, если названия совпадают, то можно так сократить
            minutes,// minutes: minutes,
            seconds // seconds: seconds 
        }
    }

    const addZero = (num) => {
        return num < 10 ? '0' + num : num
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()
        
        if (getTime.timeRemaining <= 0) {  
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'
            clearInterval(intervalId)
            return
        }

        timerHours.textContent = addZero(getTime.hours)
        timerMinutes.textContent = addZero(getTime.minutes)
        timerSeconds.textContent = addZero(getTime.seconds)
    }

    const intervalId = setInterval(updateClock, 1000)
    updateClock()
}

export default timer