const colors = [
  { id: 0, name: "blue", color: "#73A2FF" },
  { id: 1, name: "green", color: "#73FFBC" },
  { id: 2, name: "yellow", color: "#FCFF73" },
  { id: 3, name: "orange", color: "#FFAE73" },
  { id: 4, name: "red", color: "#FF7373" },
];

export function getColors() {
  return colors;
}

export function getColor(id) {
  return colors[id].color;
}

export function getColorName(id) {
  return colors[id].name;
}
