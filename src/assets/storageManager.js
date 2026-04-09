function setStorageItems() {
  console.log("yes");

  localStorage.getItem("current") ?? localStorage.setItem("current", 0);

  localStorage.getItem("correct") ?? localStorage.setItem("correct", 0);

  localStorage.getItem("wrong") ?? localStorage.setItem("wrong", 0);

  localStorage.getItem("wrong_quizes_indexes") ??
    localStorage.setItem("wrong_quizes_indexes", JSON.stringify([]));

  localStorage.getItem("done") ??
    localStorage.setItem("done", JSON.stringify([]));
}

function getItem(name) {
  return localStorage.getItem(name);
}

function reset() {
  localStorage.setItem("current", 0);
  localStorage.setItem("correct", 0);
  localStorage.setItem("wrong", 0);
  localStorage.setItem("wrong_quizes_indexes", JSON.stringify([]));
  localStorage.setItem("done", JSON.stringify([]));

  location.reload();

  return;
}

function redo() {
  const wrong_quizes = JSON.parse(localStorage.getItem("wrong_quizes_indexes"));
  let done = JSON.parse(localStorage.getItem("done"));

  done = done.filter((index) => !wrong_quizes.includes(index));

  localStorage.setItem("wrong", 0);
  localStorage.setItem("wrong_quizes_indexes", JSON.stringify([]));
  localStorage.setItem("done", JSON.stringify(done));
  localStorage.setItem("current", 0);

  location.reload();

  return wrong_quizes;
}

export { getItem, reset, redo, setStorageItems };
