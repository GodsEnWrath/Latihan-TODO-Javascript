function todo() {
  choice = prompt("Apa yang ingin anda lakukan?");

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
}

function liatTodo() {}
