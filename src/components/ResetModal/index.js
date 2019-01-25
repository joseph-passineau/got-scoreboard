import Modal from 'react-modal';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export default class ResetModal extends React.Component {
    render() {
        const { handleYes, handleNo, isOpen } = this.props;

        const Title = styled.h2.attrs({
            className: 'pv1 fw5 f2 ma0'
        })``;

        const Question = styled.p.attrs({
            className: 'fw1'
        })``;

        const Button = styled.button.attrs({
            className:
                'pointer tc f5 no-underline bg-animate bn border-box outline-0'
        })`
            background-color: #b1d5f4;
            &:hover {
                background-color: #0f4154;
                color: #b1d5f4;
            }
        `;

        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={this.handleNo}
                className="modal"
                overlayClassName="overlay"
            >
                <Title>Reset Scoreboard</Title>
                <Question>
                    Are you sure you want to reset the scoreboard?
                </Question>
                <div className="flex justify-between">
                    <Button onClick={handleNo}>Cancel</Button>
                    <Button onClick={handleYes}>Reset</Button>
                </div>
            </Modal>
        );
    }
}

ResetModal.propTypes = {
    handleYes: PropTypes.func.isRequired,
    handleNo: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
};
