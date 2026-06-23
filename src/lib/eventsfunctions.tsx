export const loadLocalStorage = (name, value) => {
  value = JSON.stringify(value);
  localStorage.setItem(name, value);
};
export const addEvent = (key, source, event) => {
  const addLoad = [...source, event];
  localStorage.clear();
  JSON.stringify(addLoad);
  loadLocalStorage(key, addLoad);
};
