import Octicon, { ChevronDown, ChevronUp } from '@githubprimer/octicons-react';
import { decreaseKingsCourt, increaseKingsCourt } from '../../actions/house';

import Button from '../Button';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import constants from '../../constants';
import influence1StarsImg from '../../assets/images/influence_1stars.png';
import influence2StarsImg from '../../assets/images/influence_2stars.png';
import influence3StarsImg from '../../assets/images/influence_3stars.png';
import influenceImg from '../../assets/images/influence.png';
import influenceTargaryenImg from '../../assets/images/influence_targaryen_3stars.png';
import styled from 'styled-components';

class KingsCourtCounter extends React.PureComponent {
    handleIncreaseKingsCourt = () => {
        if (this.props.kingsCourtInfluence < constants.MAX_INFLUENCE) {
            this.props.increaseKingsCourt(this.props.id);
        }
    };

    handleDecreaseKingsCourt = () => {
        if (this.props.kingsCourtInfluence > 1) {
            this.props.decreaseKingsCourt(this.props.id);
        }
    };

    getInfluenceImage = () => {
        if (this.props.id === 7) {
            return influenceTargaryenImg;
        }
        switch (this.props.kingsCourtInfluence) {
            case 1:
            case 2:
                return influence3StarsImg;
            case 3:
                return influence2StarsImg;
            case 4:
                return influence1StarsImg;
            default:
                return influenceImg;
        }
    };

    render() {
        const {
            kingsCourtInfluence,
            primaryColor,
            secondaryColor
        } = this.props;

        const Container = styled.div.attrs({
            className: 'h-100 tc flex flex-column justify-between'
        })``;

        const KingsCourtCountContainer = styled.div.attrs({
            className: 'tc relative'
        })``;

        const InfluenceCount = styled.span.attrs({
            className: 'fw9 f2 absolute'
        })`
            top: 50%;
            color: #c2c4b9;
            left: 50%;
            transform: translate(-50%, -50%);
        `;

        return (
            <Container>
                <Button
                    disabled={this.props.id === 7}
                    handleOnClick={this.handleIncreaseKingsCourt}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronUp} size="medium" />
                </Button>
                <KingsCourtCountContainer>
                    <img
                        height="100px"
                        src={this.getInfluenceImage()}
                        alt="Kings Court"
                    />
                    <InfluenceCount>
                        {this.props.id === 7 ? '' : kingsCourtInfluence}
                    </InfluenceCount>
                </KingsCourtCountContainer>

                <Button
                    disabled={this.props.id === 7}
                    handleOnClick={this.handleDecreaseKingsCourt}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronDown} size="medium" />
                </Button>
            </Container>
        );
    }
}

KingsCourtCounter.propTypes = {
    id: PropTypes.number.isRequired,
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired
};

const mapDispatchToProps = {
    increaseKingsCourt,
    decreaseKingsCourt
};

const mapStateToProps = function(state, props) {
    return {
        kingsCourtInfluence: state.houses[props.id].influenceTrack.kingsCourt
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KingsCourtCounter);
