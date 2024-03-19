import styled from "styled-components"

export const colors = {
    primary: 'blue'
}
export const invertTheme = ({fg, bg}) => ({
    fg: bg,
    bg: fg
})

export const Button = styled.button`
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background: ${props  => props.theme.bg};

    font-size: 1em;
    margin: 0;
    padding: 0.25em 1em;
    border-radius: 3px;
    cursor: pointer;
`;

export const theme = {
    fg: '#e84393',
    bg: 'white'
}