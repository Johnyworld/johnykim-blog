import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
    font: `
        color: white;
    `,
    color: {
        lightShade: '#eeeee8',
        lightAccent: '#949b92',
        mainBrand: '#876351',
        darkShade: '#252423',
        darkAccent: '#ac7742',
        primary: '#876351',
        info: '#232525',
        success: '#5e9850',
        warning: '#db8818',
        danger: '#f44336',
    },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;