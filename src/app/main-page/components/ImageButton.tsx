"use client";

import React from "react";
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { lightBlue } from '@mui/material/colors';

export type ImageType = {
    url: string;
    title: string;
    width?: string;
    height?: string;
    onClick?: () => void;
}

const ImageButtonContainer = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '3px solid',
    lineHeight: 1.5,
    borderRadius: '25px',
    borderColor: lightBlue[300],
    backgroundColor: lightBlue[300],

    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
    },
    '&:hover': {
        backgroundColor: lightBlue[700],
        borderColor: lightBlue[700],
        boxShadow: 'none',
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
    },
}));

const baseSpan = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: '25px'
});

const ImageSrc = styled(baseSpan)({
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const ImageSuperposition = styled(baseSpan)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled(baseSpan)(({ theme }) => ({
    opacity: 0.3,
    backgroundColor: theme.palette.common.black,
    transition: theme.transitions.create('opacity'),
}));

export default function ImageButton(image: ImageType) {
    return (
        <ImageButtonContainer
            focusRipple
            onClick={image.onClick}
            key={image.title}
            style={{
                width: image.width,
                height: image.height
            }}
        >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <ImageSuperposition>
                <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={() => ({
                        position: 'relative',
                        pt: 18,
                        pl: 18
                    })}
                >
                    {image.title}
                </Typography>
            </ImageSuperposition>
        </ImageButtonContainer>
    );
}