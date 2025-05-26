type METHOD_OPTIONS = "GET" | "POST" | "PUT" | "DELETE";

const baseUrl = "https://api.artifactsmmo.com/my";

const baseHeader = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "Bearer " + process.env.NEXT_PUBLIC_ARTIFACT_API_TOKEN,
};

const baseRequestOptions: RequestInit = {
  headers: baseHeader,
  redirect: "follow",
};

export const makeBodyRequest = (
  method: METHOD_OPTIONS,
  characterName: string,
  action: string,
  body: object | null
) => {
  const requestOptions: RequestInit = {
    ...baseRequestOptions,
    method: method,
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  return fetch(
    baseUrl + "/" + characterName + "/action/" + action,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const makeRequest = (
  method: METHOD_OPTIONS,
  characterName: string,
  action: string
) => {
  makeBodyRequest(method, characterName, action, null);
};
