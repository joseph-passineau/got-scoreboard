import Octicon, { ChevronDown, ChevronUp } from '@githubprimer/octicons-react';
import { decreaseRound, increaseRound } from '../../actions/game';

import Button from '../Button';
import React from 'react';
import { connect } from 'react-redux';
import constants from '../../constants';
import markerImg from '../../assets/images/game_round_marker.png';
import roundImg from '../../assets/images/round.png';
import styled from 'styled-components';

class RoundCounter extends React.PureComponent {
    handleIncreaseRound = () => {
        if (this.props.round < constants.MAX_ROUND) {
            this.props.increaseRound();
        }
    };

    handleDecreaseRound = () => {
        if (this.props.round > 1) {
            this.props.decreaseRound();
        }
    };
    render() {
        const { round } = this.props;

        const Container = styled.div.attrs({
            className: 'tc flex flex-column'
        })``;

        const RoundCountContainer = styled.div.attrs({
            className: 'relative'
        })``;

        const RoundCount = styled.span.attrs({
            className: 'fw9 f2 absolute'
        })`
            top: 25px;
            color: #e3e9e5;
            left: 50%;
            transform: translate(-50%);
        `;

        const RoundMarker = styled.img.attrs({
            className: 'absolute'
        })`
            top: 65px;
            left: 50%;
            width: 60px;
            transform: translate(-50%);
        `;

        const Title = styled.h2.attrs({
            className: 'pv1 fw5 f2 ma0'
        })`
            color: #b1d5f4;
        `;

        const primaryColor = 'transparent';
        const secondaryColor = 'transparent';

        return (
            <Container>
                <Title>Round</Title>
                <Button
                    handleOnClick={this.handleIncreaseRound}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronUp} size="medium" />
                </Button>
                <RoundCountContainer>
                    <img src={roundImg} alt="round" />
                    <RoundMarker src={markerImg} alt="marker" />
                    <RoundCount>{round}</RoundCount>
                </RoundCountContainer>

                <Button
                    handleOnClick={this.handleDecreaseRound}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronDown} size="medium" />
                </Button>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        round: state.game.round
    };
};

const mapDispatchToProps = {
    increaseRound,
    decreaseRound
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RoundCounter);
