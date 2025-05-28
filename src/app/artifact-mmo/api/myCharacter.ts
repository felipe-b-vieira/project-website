import { makeRequest } from '.'

export const makeExtendedUrl = (characterName: string, action: string) => {
    return 'my/' + characterName + '/action/' + action
}

export const move = (characterName: string, x: number, y: number) => {
    return makeRequest('POST', makeExtendedUrl(characterName, 'move'), { x, y })
}

export const fight = (characterName: string) => {
    return makeRequest('POST', makeExtendedUrl(characterName, 'fight'))
}
