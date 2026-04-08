function setStorageItems() {
  console.log("yes");

  localStorage.getItem("current") ?? localStorage.setItem("current", 0);

  localStorage.getItem("correct") ?? localStorage.setItem("correct", 0);

  localStorage.getItem("wrong") ?? localStorage.setItem("wrong", 0);

  localStorage.getItem("wrong_quizes_indexes") === null ||
    localStorage.setItem("wrong_quizes_indexes", []);
}

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

function redo() {
  const wrong_quizes =
    localStorage.getItem("wrong_quizes_indexes") !== undefined
      ? localStorage.getItem("wrong_quizes_indexes")
      : [];

  localStorage.setItem("wrong", 0);

  if (wrong_quizes.length === 0) {
    return 0;
  } else {
    return wrong_quizes;
  }
}

export { getItem, reset, redo, setStorageItems };
