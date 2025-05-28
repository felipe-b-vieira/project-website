export type METHOD_OPTIONS = 'GET' | 'POST' | 'PUT' | 'DELETE'

const baseUrl = 'https://api.artifactsmmo.com'

const baseHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_ARTIFACT_API_TOKEN
}

const baseRequestOptions: RequestInit = {
    headers: baseHeader,
    redirect: 'follow'
}

export const makeRequest = (method: METHOD_OPTIONS, extendedUrl: string, body: object | null = null) => {
    const requestOptions: RequestInit = {
        ...baseRequestOptions,
        method: method
    }

    if (body) {
        requestOptions.body = JSON.stringify(body)
    }

    return fetch(baseUrl + '/' + extendedUrl, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error))
}
