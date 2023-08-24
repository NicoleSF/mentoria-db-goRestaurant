import { style } from '@vanilla-extract/css';

export const header = style([{ backgroundColor: '#C72828', height: '281px' }])

export const divHeader = style([{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop: '43px' }])

const buttonTextAndIcon = style([{ display: 'flex', alignItems: 'center', gap: '10px' }])

export const buttonNewPlate = style([buttonTextAndIcon, { border: 'none', backgroundColor: '#39B100', borderRadius: '8px', padding: '16px', color: '#FFF' }])