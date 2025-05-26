'use client'
import React, { useState } from 'react'
import { fight, move } from './commands/actions'
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

export const characterList = ['AstraeVal']

const CharacterActions: React.FC = () => {
    const [selectedCharacter, setSelectedCharacter] = useState(characterList[0])
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handleMove = () => {
        move(selectedCharacter, x, y)
    }

    const handleFight = () => {
        fight(selectedCharacter)
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
        <div className="flex h-screen justify-center items-center">
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
                    <Item>
                        <FormControl>
                            <InputLabel id="character-select-label">Select Character:</InputLabel>
                            <Select
                                labelId="character-select-label"
                                id="character-select"
                                value={selectedCharacter}
                                label="Select Character:"
                                onChange={(event: SelectChangeEvent) => {
                                    setSelectedCharacter(event.target.value as string)
                                }}
                            >
                                {characterList.map(character => (
                                    <MenuItem key={character} value={character}>
                                        {character}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Item>
                </Grid>
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
    )
}

export default CharacterActions
