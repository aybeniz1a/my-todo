let input = document.getElementById("input-value");
let con = document.getElementById("con");

document.querySelector("#add").addEventListener("click", () => {
  if (input.value !== "") {
    let div = document.createElement("div");
    div.classList.add("pcon");

    let p = document.createElement("p");
    p.innerText = input.value;
    p.classList.add("p");

    let delteButton = document.createElement("button");
    delteButton.classList.add("delte");
    delteButton.innerText = "x";

    div.append(p, delteButton);
    con.appendChild(div);

    input.value = "";

    delteButton.addEventListener("click", () => {
      con.removeChild(div);
    });

    div.addEventListener("click", () => {
      div.classList.toggle("pad");
      delteButton.classList.toggle("deltepad");
    });
  } else {
    alert("xana bos ola bilmez");
  }
});
