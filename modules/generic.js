//create dom elements with generic function
export const createAndAppend = (tag, append, innerHTML, id, Class) => {
  const child = document.createElement(tag);

  append.appendChild(child);

  innerHTML !== undefined ? (child.innerHTML = innerHTML) : null;

  id !== undefined ? (child.id = id) : null;
  Class !== undefined ? (child.className = Class) : null;

  return child;
};
