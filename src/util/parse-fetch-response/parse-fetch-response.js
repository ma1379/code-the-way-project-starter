export default async function parseFetchResponse(
  response = {},
  defaultResponse = {}
) {
  const { text } = response;

  const responseText = text ? await response.text() : undefined;
  if (responseText) return JSON.parse(responseText);

  return defaultResponse;
}
