const user = document.getElementById("user");
const category = document.getElementById("category");
const comment = document.getElementById("comment");
const addBtn = document.querySelector(".addbtn");
const containerCards = document.querySelector(".containerCards");

let users = [];

const addCard = (e) => {
  e.preventDefault();
  let today = new Date()
  let cardBody = {
    id: user.value,
    cate: category.value,
    comm: comment.value,
    date: today.toISOString().split('T')[0].split('-').reverse().join("."),
  };
  if(cardBody.id==""){
      alert("id missing")
  }else{
    users.push(cardBody);
  }
  if(users.length!=0 && Object.keys(cardBody.id).length !== 0){ //Object.keys(cardBody.id).length !== 0 to verify if the id field is empty
    users.map((el,i) => {
        if (users.length === i + 1) {// las element in the array
            containerCards.insertAdjacentHTML(
                "beforeend",
                ` 
                <li class="commCard">
                  <h4 class="user_name">${el.id}</h4>
                  <span class="category_card">${el.cate}</span>
                  <p class="content_card">${el.comm}</p>
                  <span class="date">${el.date}</span>
               </li>
                  `
              );
          }
        
      });
}
document.forms[0].reset();// just to clear the form for next entries
  
};

addBtn.addEventListener("click", addCard);
