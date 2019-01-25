import Octicon, { ChevronDown, ChevronUp } from '@githubprimer/octicons-react';
import { decreaseSupplies, increaseSupplies } from '../../actions/house';

import Button from '../Button';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import constants from '../../constants';
import styled from 'styled-components';
import supplyImg from '../../assets/images/supply_icon.png';

class SupplyCounter extends React.PureComponent {
    handleIncreaseSupplies = () => {
        if (this.props.supplies < constants.SUPPLIES_ARMIES.length - 1) {
            this.props.increaseSupplies(this.props.id);
        }
    };

    handleDecreaseSupplies = () => {
        if (this.props.supplies > 0) {
            this.props.decreaseSupplies(this.props.id);
        }
    };

    render() {
        const { supplies, primaryColor, secondaryColor } = this.props;

        const Container = styled.div.attrs({
            className: 'h-100 tc flex flex-column justify-between'
        })``;

        const SuppliesCountContainer = styled.div.attrs({
            className: 'tc relative'
        })``;

        const SuppliesCount = styled.span.attrs({
            className: 'fw9 absolute'
        })`
            text-shadow: 0 0 4px #fff;
            font-size: 2em;
            top: 39px;
            color: #8d3c20;
            left: 50%;
            transform: translate(-50%);
        `;

        return (
            <Container>
                <Button
                    handleOnClick={this.handleIncreaseSupplies}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronUp} size="medium" />
                </Button>
                <SuppliesCountContainer>
                    <img height="100px" src={supplyImg} alt="supply" />
                    <SuppliesCount>{supplies}</SuppliesCount>
                </SuppliesCountContainer>

                <Button
                    handleOnClick={this.handleDecreaseSupplies}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronDown} size="medium" />
                </Button>
            </Container>
        );
    }
}

SupplyCounter.propTypes = {
    id: PropTypes.number.isRequired,
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired
};

const mapDispatchToProps = {
    increaseSupplies,
    decreaseSupplies
};

const mapStateToProps = function(state, props) {
    return {
        supplies: state.houses[props.id].supplies
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SupplyCounter);
