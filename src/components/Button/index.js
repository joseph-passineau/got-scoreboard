import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default class Button extends React.Component {
    render() {
        const {
            handleOnClick,
            primaryColor,
            secondaryColor,
            disabled
        } = this.props;

        const Container = styled.button.attrs({
            className:
                'pointer tc w-100 f5 no-underline bg-animate bn border-box outline-0'
        })`
            background-color: ${secondaryColor};
            &:hover {
                background-color: ${primaryColor};
                color: ${secondaryColor};
            }
        `;

        return (
            <Container disabled={disabled} onClick={handleOnClick}>
                {this.props.children}
            </Container>
        );
    }
}

Button.propTypes = {
    handleOnClick: PropTypes.func.isRequired,
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};
