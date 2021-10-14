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



cells.forEach(el => el.addEventListener('click', () => addPopup.classList.remove('hidden')));

function clearAddPopup () {
    addPopup.classList.add('hidden');
    document.querySelector('.event-input').value = '';
    document.querySelector('.date-input').value = '';
    document.querySelector('.persons-input').value = '';
    document.querySelector('.add__description').value = '';
}

addPopupCross.addEventListener('click',() => clearAddPopup());

quickPopupCross.addEventListener('click', function () {
  quickPopup.classList.add('hidden');
  document.querySelector('.quick-input').value = '';
  addQuickPopup.classList.remove('active');
});

addQuickPopup.addEventListener('click', () => {
  quickPopup.classList.remove('hidden');
  addQuickPopup.classList.add('active')
})

closeSearchInput.addEventListener('click', function () {
  searchInput.value = '';
})

eventSubmit.addEventListener('click', function () {
  cells[0].insertAdjacentHTML("beforeend",`<h3 class="description-title"> ${document.querySelector('.event-input').value}</h3>`);
  cells[0].insertAdjacentHTML("beforeend",`<div class="decription-persons"><p class="persons">${document.querySelector('.persons-input').value}</p></div>`);
  cells[0].classList.add('active');
  clearAddPopup ();

})
