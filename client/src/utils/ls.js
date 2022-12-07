export function set(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

export function get(key) {
  return JSON.parse(localStorage.getItem(key));
}
