import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class ArmiesCounter extends React.PureComponent {
    render() {
        const { supplies } = this.props;

        const images = require.context('../../assets/images', true);

        const ArmiesImage = styled.img`
            margin: auto 0;
        `;

        return (
            <ArmiesImage
                width="78px"
                src={images(`./${supplies}_armies.png`)}
                alt="armies"
            />
        );
    }
}

ArmiesCounter.propTypes = {
    id: PropTypes.number.isRequired
};

const mapStateToProps = function(state, props) {
    return {
        supplies: state.houses[props.id].supplies
    };
};

export default connect(mapStateToProps)(ArmiesCounter);
