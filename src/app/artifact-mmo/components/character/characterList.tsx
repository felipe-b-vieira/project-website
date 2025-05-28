'use client'
import { Box, Tabs, Tab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAccountCharacters } from '../../api/accounts'
import { Character, CharacterResponseData } from '../../types/accounts'

interface CharacterListProps {
    selectedCharacter: number
    setSelectedCharacter: (character: number) => void
    characterList: Character[]
}

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    }
}

const CharacterList: React.FC<CharacterListProps> = ({ selectedCharacter, setSelectedCharacter, characterList }) => {
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedCharacter(newValue)
    }

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={selectedCharacter} onChange={handleChange} aria-label="basic tabs example">
                    {characterList.map((character, index) => (
                        <Tab key={character.name} label={character.name} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </Box>
            {characterList.map((character, index) => (
                <CustomTabPanel key={character.name} value={selectedCharacter} index={index}>
                    <div>
                        <h2>{character.name}</h2>
                        <p>Level: {character.level}</p>
                        <p>
                            XP: {character.xp}/{character.max_xp}
                        </p>
                        <p>Gold: {character.gold}</p>
                        {/* Add more character details as needed */}
                    </div>
                </CustomTabPanel>
            ))}
        </>
    )
}

export default CharacterList
