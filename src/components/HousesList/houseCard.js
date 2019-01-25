import ArmiesCounter from './armiesCounter';
import FiefdomsCounter from './fiefdomsCounter';
import IronThroneCounter from './ironThroneCounter';
import KingsCourtCounter from './kingsCourtCounter';
import PropTypes from 'prop-types';
import React from 'react';
import SupplyCounter from './supplyCounter';
import VictoryCounter from './victoryCounter';
import { connect } from 'react-redux';
import constants from '../../constants';
import styled from 'styled-components';

class HouseCard extends React.PureComponent {
    render() {
        const { id, name } = this.props;

        const images = require.context('../../assets/images', true);
        const primaryColor =
            constants.HOUSES_PROPERTIES[this.props.id].PRIMARY_COLOR;

        const secondaryColor =
            constants.HOUSES_PROPERTIES[this.props.id].SECONDARY_COLOR;

        const Container = styled.li.attrs({
            className: 'w-50 pa1'
        })``;

        const Card = styled.div.attrs({
            className: 'w-100 flex'
        })`
            height: 250px;
            background-color: ${primaryColor};
            border: 2px solid ${primaryColor};
        `;

        const CardContent = styled.div.attrs({
            className: 'flex w-100'
        })`
            color: ${primaryColor};
            background-color: ${secondaryColor};
        `;

        const Column = styled.div.attrs({
            className: 'tc flex flex-column'
        })`
            width: calc(100% / 6);
        `;

        const ColumnTitle = styled.h2.attrs({
            className: 'pv1 fw5 f5'
        })``;

        return (
            <Container>
                <Card>
                    <img src={images(`./house_${name}.png`)} alt="" />
                    <CardContent>
                        <Column>
                            <ColumnTitle>Victory</ColumnTitle>
                            <VictoryCounter
                                id={id}
                                primaryColor={primaryColor}
                                secondaryColor={secondaryColor}
                            />
                        </Column>
                        <Column>
                            <ColumnTitle>Supply</ColumnTitle>
                            <SupplyCounter
                                id={id}
                                primaryColor={primaryColor}
                                secondaryColor={secondaryColor}
                            />
                        </Column>
                        <Column className="items-center">
                            <ColumnTitle>Armies</ColumnTitle>
                            <ArmiesCounter id={id} />
                        </Column>
                        <Column>
                            <ColumnTitle>Iron Throne</ColumnTitle>
                            <IronThroneCounter
                                id={id}
                                primaryColor={primaryColor}
                                secondaryColor={secondaryColor}
                            />
                        </Column>
                        <Column>
                            <ColumnTitle>Fiefdoms</ColumnTitle>
                            <FiefdomsCounter
                                id={id}
                                primaryColor={primaryColor}
                                secondaryColor={secondaryColor}
                            />
                        </Column>
                        <Column>
                            <ColumnTitle>Kings Court</ColumnTitle>
                            <KingsCourtCounter
                                id={id}
                                primaryColor={primaryColor}
                                secondaryColor={secondaryColor}
                            />
                        </Column>
                    </CardContent>
                </Card>
            </Container>
        );
    }
}

HouseCard.propTypes = {
    id: PropTypes.number.isRequired
};

const mapStateToProps = function(state, props) {
    return {
        name: state.houses[props.id].name
    };
};

export default connect(mapStateToProps)(HouseCard);
