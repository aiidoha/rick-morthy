

// Запросы, XMLHttpRequest, AJAX. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch. Отобразите на странице имена персонажей из 
Рика и Морти в list.
(Вы можете стилизовать страницу по желанию.)
*/


let list = document.querySelector('.list');

let z = fetch('https://rickandmortyapi.com/api/character');
z.then((response) => {
  return response.json();
}).then((info) => {
    // console.log(info.results);
  list.innerHTML = '';
  info.results.forEach((elem) => {

    list.innerHTML += `
    <li>${elem.name}
    <br>
    <img src="${elem.image}" alt="" width="50">
    </li>
    `;
  })
});


/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/


/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/
// function func(){fetch('https://rickandmortyapi.com/api/character').then((response) => {
//   return response.json();
// }).then((info) => {
//   info.results.forEach((elem) => {
//     fetch("http://localhost:5000/characters" , {
//         method:"POST",
//         headers:{
//             'Content-type':'application/json'
//         },
//         body:JSON.stringify(elem)
//     })
//   })
// })}

/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.



/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/

let z2 = fetch("https://rickandmortyapi.com/api/character");
z2.then((response) => {
    return response.json();
  }).then((info) => {
    let res = info.results;
    console.log(res)
    fetch("http://localhost:5000/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(res),
    });
});