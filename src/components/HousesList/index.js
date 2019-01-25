import HouseCard from './houseCard';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

class HousesList extends React.PureComponent {
    render() {
        const Container = styled.ul.attrs({
            className: 'flex flex-wrap items-center ma0 pa0 list absolute h-100'
        })``;

        return (
            <Container>
                {this.props.housesId.map((id, index) => {
                    return <HouseCard key={index} id={id} />;
                })}
            </Container>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        housesId: state.game.housesIds
    };
};

export default connect(mapStateToProps)(HousesList);
