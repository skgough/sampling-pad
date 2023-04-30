export class HTMLUnknownElementError extends Error {
  constructor(message) {
    super(message);
    this.name = "HTMLUnknownElementError";
    this.message = `Unknown element type ${message}`
  }
}
