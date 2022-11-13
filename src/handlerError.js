export function handlerError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
