const cells = document.querySelectorAll('.calendar__cell');
const addPopup = document.querySelector('.add-popup');
const addPopupCross = document.querySelector('.close-add');
const quickPopupCross = document.querySelector('.close-quick');
const quickPopup = document.querySelector('.quick-add');
const addQuickPopup = document.getElementById('btn-add');
const quickForm = document.getElementById('quick-form');
const searchInput = document.querySelector('.control__search-input');
const closeSearchInput = document.querySelector('.search-close');
const eventSubmit = document.getElementById('event__submit');



cells.forEach(el => el.addEventListener('click', () => {
    if (el.classList.contains('active')) {
        addPopup.classList.remove('hidden');
        addPopup.classList.add('change')
    } else {
        addPopup.classList.remove('hidden')
    }
}));

function clearAddPopup() {
    addPopup.classList.add('hidden');
    document.querySelector('.event-input').value = '';
    document.querySelector('.date-input').value = '';
    document.querySelector('.persons-input').value = '';
    document.querySelector('.add__description').value = '';
}

addPopupCross.addEventListener('click', () => clearAddPopup());

quickPopupCross.addEventListener('click', function() {
    quickPopup.classList.add('hidden');
    document.querySelector('.quick-input').value = '';
    addQuickPopup.classList.remove('active');
});

addQuickPopup.addEventListener('click', () => {
    quickPopup.classList.remove('hidden');
    addQuickPopup.classList.add('active');
})

closeSearchInput.addEventListener('click', function() {
    searchInput.value = '';
})

eventSubmit.addEventListener('click', function() {
    let titleValue = document.querySelector('.event-input').value;
    let dateValue = document.querySelector('.date-input').value;
    let personValue = document.querySelector('.persons-input').value;
    let discriptionValue = document.querySelector('.add__description').value;
    //localStorage.setItem('event-value', inputValue);
    //let res = localStorage.getItem('event-value')
    clearAddPopup();
    addText(dateValue, titleValue, personValue, discriptionValue);

})



function addText(currentDay, currentTitle, currenPerson, currentDiscription) {
    let cell = document.querySelector(`[day="${currentDay}"]`);
    cell.insertAdjacentHTML('beforeend', `<span class="description__title">${currentTitle}</span>`);
    cell.insertAdjacentHTML('beforeend', `<div class="description__persons"><p class="person">${currenPerson}</p></div>`);
    cell.insertAdjacentHTML('beforeend', `<p class="description__content">${currentDiscription}</p>`);
    cell.classList.add('active')
}