import PropTypes from 'prop-types';
import React from 'react';

export default class VictoryPlaceholder extends React.Component {
    render() {
        const { houses, castles } = this.props;
        const images = require.context('../../assets/images', true);

        const selectedHouses = Object.keys(houses).filter(houseId => houses[houseId].castles === castles);

        return (
            <div className="flex flex-wrap justify-center items-center h-100">
                {selectedHouses.map((houseId, index) => (
                    <img
                        className="w-50"
                        key={houseId}
                        src={images(
                            `./${
                            houses[houseId].name
                            }_power.png`
                        )}
                        alt={houses[houseId].name}
                    />
                ))}
            </div>


        );
    }
}

VictoryPlaceholder.propTypes = {
    castles: PropTypes.number.isRequired,
    houses: PropTypes.any.isRequired,
};
