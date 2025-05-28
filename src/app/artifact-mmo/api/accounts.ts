import { makeRequest } from '.'

export const makeExtendedUrl = (account: string) => {
    return 'accounts/' + account + '/characters'
}

export const getAccountCharacters = (account: string) => {
    return makeRequest('GET', makeExtendedUrl(account))
}
