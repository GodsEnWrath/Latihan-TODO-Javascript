const y = ["D", "F", "Baca Buku", "gogo"];
console.log(y);


function todo() {
  choice = prompt(
    "Apa yang ingin anda lakukan? (1: liat To do, 2: Tambah To do, 3: Delete To do"
  );

  switch (choice) {
    case "1":
      liatTodo();
      break;
    case "2":
      addTodo();
      break;
    case "3":
      DeleteTodo();
      break;
  }
  let retry = prompt("Apakah anda ingin kembali (Yes/No)?");

  if (retry === "Yes" || retry === "yes") {
    todo();
  }
}
todo();

function liatTodo() {
  let x = alert("Ini List To Do Anda");
  alert(y);
}

function addTodo() {
  alert(y.concat(prompt("tambah to do")));
}

function DeleteTodo() {
  let z = y.splice(prompt("Hapus to do"))
  alert(y)

}
