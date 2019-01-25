import Octicon, { ChevronDown, ChevronUp } from '@githubprimer/octicons-react';
import { decreaseIronThrone, increaseIronThrone } from '../../actions/house';

import Button from '../Button';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import constants from '../../constants';
import influenceImg from '../../assets/images/influence.png';
import influenceTargaryenImg from '../../assets/images/influence_targaryen.png';
import styled from 'styled-components';

class IronThroneCounter extends React.PureComponent {
    handleIncreaseIronThrone = () => {
        if (this.props.ironThroneInfluence < constants.MAX_INFLUENCE) {
            this.props.increaseIronThrone(this.props.id);
        }
    };

    handleDecreaseIronThrone = () => {
        if (this.props.ironThroneInfluence > 1) {
            this.props.decreaseIronThrone(this.props.id);
        }
    };

    render() {
        const {
            ironThroneInfluence,
            primaryColor,
            secondaryColor
        } = this.props;

        const Container = styled.div.attrs({
            className: 'h-100 tc flex flex-column justify-between'
        })``;

        const IronThroneCountContainer = styled.div.attrs({
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
                    handleOnClick={this.handleIncreaseIronThrone}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronUp} size="medium" />
                </Button>
                <IronThroneCountContainer>
                    <img
                        height="100px"
                        src={
                            this.props.id === 7
                                ? influenceTargaryenImg
                                : influenceImg
                        }
                        alt="Iron Throne"
                    />
                    <InfluenceCount>
                        {this.props.id === 7 ? '' : ironThroneInfluence}
                    </InfluenceCount>
                </IronThroneCountContainer>

                <Button
                    disabled={this.props.id === 7}
                    handleOnClick={this.handleDecreaseIronThrone}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronDown} size="medium" />
                </Button>
            </Container>
        );
    }
}

IronThroneCounter.propTypes = {
    id: PropTypes.number.isRequired,
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired
};

const mapDispatchToProps = {
    increaseIronThrone,
    decreaseIronThrone
};

const mapStateToProps = function(state, props) {
    return {
        ironThroneInfluence: state.houses[props.id].influenceTrack.ironThrone
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IronThroneCounter);
