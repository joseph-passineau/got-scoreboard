import Octicon, { ChevronDown, ChevronUp } from '@githubprimer/octicons-react';
import { decreaseCastles, increaseCastles } from '../../actions/house';

import Button from '../Button';
import PropTypes from 'prop-types';
import React from 'react';
import castlesImg from '../../assets/images/castles.png';
import castlesWinImg from '../../assets/images/castles_win.png';
import { connect } from 'react-redux';
import constants from '../../constants';
import styled from 'styled-components';

class VictoryCounter extends React.PureComponent {
    handleIncreaseCastles = () => {
        if (this.props.castles < constants.MAX_CASTLES) {
            this.props.increaseCastles(this.props.id);
        }
    };

    handleDecreaseCastles = () => {
        if (this.props.castles > 0) {
            this.props.decreaseCastles(this.props.id);
        }
    };

    render() {
        const { castles, primaryColor, secondaryColor } = this.props;

        const Container = styled.div.attrs({
            className: 'h-100 tc flex flex-column justify-between'
        })``;

        const CastlesCountContainer = styled.div.attrs({
            className: 'relative'
        })``;

        const CastlesCount = styled.span.attrs({
            className: 'fw9 absolute'
        })`
            font-size: 1.8em;
            top: 15px;
            color: ${castles === constants.MAX_CASTLES ? '#D4C230' : '#c2c4b9'};
            left: 50%;
            transform: translate(-50%);
        `;

        return (
            <Container>
                <Button
                    handleOnClick={this.handleIncreaseCastles}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronUp} size="medium" />
                </Button>
                <CastlesCountContainer>
                    <img
                        height="100px"
                        src={
                            castles === constants.MAX_CASTLES
                                ? castlesWinImg
                                : castlesImg
                        }
                        alt="castles"
                    />
                    <CastlesCount>{castles}</CastlesCount>
                </CastlesCountContainer>

                <Button
                    handleOnClick={this.handleDecreaseCastles}
                    primaryColor={primaryColor}
                    secondaryColor={secondaryColor}
                >
                    <Octicon icon={ChevronDown} size="medium" />
                </Button>
            </Container>
        );
    }
}

VictoryCounter.propTypes = {
    id: PropTypes.number.isRequired,
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired
};

const mapDispatchToProps = {
    increaseCastles,
    decreaseCastles
};

const mapStateToProps = function(state, props) {
    return {
        castles: state.houses[props.id].castles
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VictoryCounter);
