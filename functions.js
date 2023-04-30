import { knownElementTypes } from "./enums";
import { HTMLUnknownElementError } from "./classes";

export const create = (elementName, options) => {
  if (knownElementTypes.includes(elementName)) {
    const element = document.createElement(elementName);
    Object.entries(options).forEach(([prop, value]) => {
      element[prop] = value
    })
    return element
  } else {
    throw new HTMLUnknownElementError(elementName);
  }
}

export const qs = selector => {
  const query = document.querySelectorAll(selector);
  if (query.length === 0) return undefined;
  if (query.length === 1) return query[0];
  if (query.length >   1) return Array.from(query);
}
