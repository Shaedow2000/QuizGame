function getItem(name) {
  return localStorage.getItem(name) !== undefined
    ? localStorage.getItem(name)
    : 0;
}

export { getItem };
