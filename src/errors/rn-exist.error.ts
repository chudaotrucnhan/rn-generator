export class RNExistError extends Error {
  constructor(message: string = 'RN already exists') {
    super(message);

    this.name = 'RNExistError';
  }
}