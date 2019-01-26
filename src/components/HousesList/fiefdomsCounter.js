import Octicon, { ChevronDown, ChevronUp } from '@githubprimer/octicons-react';
import { decreaseFiefdoms, increaseFiefdoms } from '../../actions/house';

import Button from '../Button';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import constants from '../../constants';
import influenceImg from '../../assets/images/influence.png';
import influenceTargaryenImg from '../../assets/images/influence_targaryen.png';
import styled from 'styled-components';

class FiefdomsCounter extends React.PureComponent {
    handleIncreaseFiefdoms = id => {
        if (this.props.fiefdomsInfluence < constants.MAX_INFLUENCE) {
            this.props.increaseFiefdoms(this.props.id);
        }
    };

    handleDecreaseFiefdoms = id => {
        if (this.props.fiefdomsInfluence > 1) {
            this.props.decreaseFiefdoms(this.props.id);
        }
    };

    render() {
        const { fiefdomsInfluence, primaryColor, secondaryColor } = this.props;

        const Container = styled.div.attrs({
            className: 'h-100 tc flex flex-column justify-between'
        })``;

        const FiefdomsCountContainer = styled.div.attrs({
            className: 'tc relative'
        })``;

        const FiefdomsCount = styled.span.attrs({
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
                    handleOnClick={this.handleIncreaseFiefdoms}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronUp} size="medium" />
                </Button>
                <FiefdomsCountContainer>
                    <img
                        height="100px"
                        src={
                            this.props.id === 7
                                ? influenceTargaryenImg
                                : influenceImg
                        }
                        alt="Fiefdoms"
                    />
                    <FiefdomsCount>
                        {this.props.id === 7 ? '' : fiefdomsInfluence}
                    </FiefdomsCount>
                </FiefdomsCountContainer>

                <Button
                    disabled={this.props.id === 7}
                    handleOnClick={this.handleDecreaseFiefdoms}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronDown} size="medium" />
                </Button>
            </Container>
        );
    }
}

FiefdomsCounter.propTypes = {
    id: PropTypes.number.isRequired,
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired
};

const mapDispatchToProps = {
    increaseFiefdoms,
    decreaseFiefdoms
};

const mapStateToProps = function(state, props) {
    return {
        fiefdomsInfluence: state.houses[props.id].influenceTracks.fiefdoms
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FiefdomsCounter);
