import styled from 'styled-components'
import Select from 'react-select'

export const CustomSelect = styled(Select).attrs({
    styles: {
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: 'var(--colors-text)',
            backgroundColor:
                state.isSelected || state.isFocused
                    ? 'var(--colors-bg)'
                    : 'var(--colors-ui-base)',
        }),
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
            color: 'var(--colors-text)',
            height: '50px',

            borderRadius: 'var(--radii)',
            border: '0',
            boxShadow: 'var(--shadow)',
            padding: '0.25rem',
            cursor: 'pointer',
        }),
        valueContainer: (provided) => ({
            ...provided,
            color: 'var(--colors-text)',
        }),

        input: (provided) => ({
            ...provided,
            color: 'var(--colors-text)',
            fontSize: 'var(--fs-sm)',
            fontFamily: 'var(--family)',
        }),

        placeholder: (provided) => ({
            ...provided,
            fontFamily: 'var(--family)',
            fontSize: 'var(--fs-md)',
            fontWeight: 'var(--fw-light)',
            color: 'var(--colors-text)',
        }),

        menu: (provided) => ({
            ...provided,
            backgroundColor: 'var(--colors-ui-base)',
        }),

        singleValue: (provided) => ({
            ...provided,
            color: 'var(--colors-text)',
        }),
    },
})`
    width: 200px;

    color: var(--colors-text) !important;
`
