function getItem(name) {
  return localStorage.getItem(name) !== undefined
    ? localStorage.getItem(name)
    : 0;
}

function reset() {
  localStorage.setItem("current", 0);
  localStorage.setItem("correct", 0);
  localStorage.setItem("wrong", 0);
  localStorage.setItem("wrong_quizes_indexes", []);

  return;
}

export { getItem, reset };
