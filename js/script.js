let books = [
  {
    title: "Война и мир",
    author: "Лев Толстой",
    year: 1869,
    genre: "Роман",
  },
  {
    title: "Преступление и наказание",
    author: "Фёдор Достоевский",
    year: 1866,
    genre: "Роман",
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    genre: "Фантастика",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    genre: "Роман",
  },
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    genre: "Фэнтези",
  },
];

const wrapper = document.querySelector(`.wrapper`);

function render(box, list) {
  list.forEach((el) => {
    box.innerHTML += `
      <div class="book">
          <h3>${el.title} <span>${el.year} y.</span></h3>
          <h5>${el.author}</h5>
      </div>
    `;
  });
}

render(wrapper, books);

function clearBox(box) {
  box.innerHTML = "";
}

const btnOpenModal = document.querySelector(`.add-btn`);
const btnCloseModal = document.querySelector(`.close`);

const modal = document.querySelector(`.modal`);
btnOpenModal.addEventListener(`click`, () => modal.classList.add("active"));
btnCloseModal.addEventListener(`click`, () => modal.classList.remove("active"));

const inputTitle = document.querySelector(`.input-title`);
const inputAuthor = document.querySelector(`.input-author`);
const inputYear = document.querySelector(`.input-year`);

const createBtn = document.querySelector(`.create-btn`);
const message = document.querySelector(`.message`);


createBtn.addEventListener(`click`, () => {
  const inputTitleValue = inputTitle.value;
  const inputAuthorValue = inputAuthor.value;
  const inputYearValue = inputYear.value;

  
  if(inputTitleValue && inputAuthorValue && inputYearValue) {
    const bookObject = {
      title: inputTitleValue,
      author: inputAuthorValue,
      year: inputYearValue,
    };
  
    books.push(bookObject);
  
  
    inputTitle.value = "";
    inputAuthor.value = "";
    inputYear.value = "";

    message.innerText = 'Success'
    message.style.background = 'green'
    message.style.scale = '1'

    setTimeout(() => {
      modal.classList.remove("active");
      clearBox(wrapper);
      render(wrapper, books);
      message.style.scale = '0'
    }, 2000)

  }else{
    message.innerText = 'Unsuccess, Enter valid data'
    message.style.background = 'red'
    message.style.scale = '1'
  }



});
