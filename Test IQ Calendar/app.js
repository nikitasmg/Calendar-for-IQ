const date = new Date();

const renderCalendar = ()=> {
    date.setDate(1);
    
    const lastDay = new Date(date.getUTCFullYear(), date.getMonth() + 1,0).getDate();
    const firstDayIndex = date.getDay() - 1;
    const lastDayIndex = new Date(date.getUTCFullYear(), date.getMonth() + 1,0).getDay();
    const nextDays = 7 - lastDayIndex;
    const lastPrevDay = new Date(date.getUTCFullYear(), date.getMonth(),0).getDate();

    let template = document.querySelector('.calendar__template');
    let mounths = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ]

    let week = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
    ]

    document.querySelector('.calendar__title').innerHTML = mounths[date.getMonth()] + ' ' + date.getFullYear();

    let days = '';

    
    if (firstDayIndex >=  0) {
        for(let x = firstDayIndex; x > 0; x--) {
            console.log(x)
            days += `<div class="calendar__cell"></span> <span class="day">${lastPrevDay - x + 1}</span></div>`
        }
    }else {
        for(let x = 6; x > 0; x--) {
            console.log(x)
            days += `<div class="calendar__cell"></span> <span class="day">${lastPrevDay - x + 1}</span></div>`
        }
    }    

    for(let i = 1; i <= lastDay; i++) {
        days += `<div class="calendar__cell"></span> <span class="day">${i}</span></div>`;
    }

    for(j = 1; j <= nextDays; j++) {
        if(nextDays !== 7) {
        days += `<div class="calendar__cell"></span> <span class="day">${j}</span></div>`;
        }   
    }
    template.innerHTML = days;

    let cells = document.querySelectorAll('.calendar__cell');
    for(let i = 0; i < week.length; i++) {
        cells[i].insertAdjacentHTML("afterbegin",`<span class="week">${week[i]},</span>`)
    }

    
    
    
}

document.querySelector('#arrow-left').addEventListener('click',()=>{
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})

document.querySelector('#arrow-right').addEventListener('click',()=>{
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})

renderCalendar();
 

















{/* <div class="calendar__cell active ">
<span class="week">Понедельник,</span> <span class="day">27</span>
<h3 class="description-title">Шашлыки</h3>
<div class="discription-persons">
   <p class="persons">Филипп Коров, 
    Дмитрий Табасков</p>    
</div>
</div>
<div class="calendar__cell"><span class="week">Вторник,</span> <span class="day">28</span></div>
<div class="calendar__cell"><span class="week">Среда,</div>
<div class="calendar__cell"><span class="week">Четверг,</div>
<div class="calendar__cell"><span class="week">Пятница,</div>
<div class="calendar__cell"><span class="week">Суббота,</div>
<div class="calendar__cell"><span class="week">Воскресенье,</div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div>
<div class="calendar__cell"></div> */}