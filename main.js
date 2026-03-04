let wi = document.querySelector(".wi");
console.log(wi.textContent);
let di = document.querySelector(".di");
let container = document.querySelector(".container");
let add_btn = document.querySelector(".add_btn");


add_btn.addEventListener("click",()=> {

  let msg = document.querySelector(".msg");
  if(msg) {
  msg.remove();
  }
  let new_div = document.createElement("div");
  new_div.classList.add("new_div")
   let new_para = document.createElement("P");
  new_para.textContent = `${wi.value}`;
  let new_para2 = document.createElement("P");
  new_para2.textContent = `${di.value}`;
  let new_button = document.createElement("button");
  new_button.classList.add("new_btn");
  new_button.textContent = "DONE"
  new_button.style.height = "30px";
  new_button.style.borderRadius = "10px"
  new_button.style.border = "none";
  new_button.style.backgroundColor = "green";
  new_button.style.color = "white";
  new_button.style.fontWeight = "500";
  new_button.style.boxShadow = "4px 4px 8px rgba(0, 0, 0, 0.4)"
   new_div.appendChild(new_para);
   new_div.appendChild(new_para2);
    new_div.appendChild(new_button);
    new_div.style.width = 80 + "%"
    new_div.style.display = "flex";
    new_div.style.justifyContent = "space-around";
    new_div.style.marginTop = 50 + "px";
    new_div.style.marginLeft = 100 + "px";
    new_para2.style.paddingLeft = 110 + "px";
    new_button.style.marginLeft = 120 + "px";
    new_button.style.width = "70px"
  container.insertAdjacentElement("afterend", new_div);
  wi.value=" ";
  di.value=" ";
  new_button.addEventListener("click",()=> {
    new_div.remove();
    if (document.querySelectorAll(".new_div").length === 0) {
      let div = document.createElement("div");
      div.style.width = 80 +"%";
  div.style.textAlign = "center";
      let heading = document.createElement("h2");
      div.appendChild(heading)
      heading.classList.add("msg");
       heading.style.marginTop = "50px"
       heading.style.marginLeft = "105px"
      heading.textContent = "ADD A TASKS";
      container.appendChild(div);

    }
  })
})


