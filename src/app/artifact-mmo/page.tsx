'use client'
import React, { useEffect, useState } from 'react'
import { fight, move } from './api/myCharacter'
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    styled,
    TextField
} from '@mui/material'
import CharacterList from './components/character/characterList'
import { getAccountCharacters } from './api/accounts'
import { Character, CharacterResponseData } from './types/accounts'

const CharacterActions: React.FC = () => {
    const [characterList, setCharacterList] = useState<Character[]>([])
    const [selectedCharacter, setSelectedCharacter] = useState<number>(0)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        getAccountCharacters(process.env.NEXT_PUBLIC_ACCOUNT_NAME || '')
            .then((characters: CharacterResponseData) => {
                console.log('Fetched characters:', characters)
                setCharacterList(characters?.data || [])
            })
            .catch(error => {
                console.error('Failed to fetch characters:', error)
            })
    }, [])

    const handleMove = () => {
        if (selectedCharacter != null) {
            move(characterList[selectedCharacter].name, x, y)
        }
    }

    const handleFight = () => {
        if (selectedCharacter != null) {
            fight(characterList[selectedCharacter].name)
        }
    }

    const Item = styled(Paper)(({ theme }) => ({
        height: '100%',
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027'
        }),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle'
    }))

    // TODO Separate components to styled components with tailwind
    // TODO Proper logging on frontend
    // TODO Add loading
    // TODO Add proper translation
    return (
        <div className="flex h-screen justify-center items-center flex-col space-y-4">
            <CharacterList
                selectedCharacter={selectedCharacter}
                setSelectedCharacter={setSelectedCharacter}
                characterList={characterList}
            />
            {characterList.length > 0 && (
                <>
                    <h1 className="text-2xl font-bold mb-4">Character Actions</h1>
                    <div>
                        <div className="flex justify-center items-center">
                            <Grid
                                container
                                rowSpacing={1}
                                sx={{
                                    justifyContent: 'center',
                                    alignItems: 'stretch'
                                }}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            >
                                <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                                    <Item className="flex space-x-4">
                                        <div>
                                            <TextField
                                                label="X"
                                                type="number"
                                                margin="none"
                                                value={x}
                                                onChange={e => setX(Number(e.target.value))}
                                            />
                                        </div>
                                        <div>
                                            <TextField
                                                label="Y"
                                                type="number"
                                                margin="none"
                                                value={y}
                                                onChange={e => setY(Number(e.target.value))}
                                            />
                                        </div>
                                        <Button onClick={handleMove}>Move</Button>
                                    </Item>
                                </Grid>
                                <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                                    <Item>
                                        <Button onClick={handleFight}>Fight</Button>
                                    </Item>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CharacterActions
