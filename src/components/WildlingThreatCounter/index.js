import Octicon, { ChevronDown, ChevronUp } from '@githubprimer/octicons-react';
import {
    decreaseWildlingThreat,
    increaseWildlingThreat
} from '../../actions/game';

import Button from '../Button';
import React from 'react';
import { connect } from 'react-redux';
import constants from '../../constants';
import styled from 'styled-components';
import wildlingImg from '../../assets/images/wildling.png';

class WildlingThreatCounter extends React.PureComponent {
    handleIncreaseWildlingThreat = () => {
        if (this.props.wildlingThreat < constants.MAX_WILDLING_THREAT) {
            this.props.increaseWildlingThreat();
        }
    };

    handleDecreaseWildlingThreat = () => {
        if (this.props.wildlingThreat > 0) {
            this.props.decreaseWildlingThreat();
        }
    };
    render() {
        const { wildlingThreat } = this.props;

        const Container = styled.div.attrs({
            className: 'pv6 tc flex flex-column'
        })``;

        const RoundCountContainer = styled.div.attrs({
            className: 'relative'
        })``;

        const RoundCount = styled.span.attrs({
            className: 'fw9 f2 absolute'
        })`
            top: 50%;
            color: #4e4b46;
            left: 50%;
            transform: translate(-50%, -50%);
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
                <Title>Wildling Threat</Title>
                <Button
                    handleOnClick={this.handleIncreaseWildlingThreat}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronUp} size="medium" />
                </Button>
                <RoundCountContainer>
                    <img src={wildlingImg} alt="wildling threat" />
                    <RoundCount>{wildlingThreat}</RoundCount>
                </RoundCountContainer>

                <Button
                    handleOnClick={this.handleDecreaseWildlingThreat}
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
        wildlingThreat: state.game.wildlingThreat
    };
};

const mapDispatchToProps = {
    decreaseWildlingThreat,
    increaseWildlingThreat
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WildlingThreatCounter);
