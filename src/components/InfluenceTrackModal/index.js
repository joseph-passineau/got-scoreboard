import Modal from 'react-modal';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import constants from '../../constants';
import influenceTracksExpansionImg from '../../assets/images/influence_tracks_expansion.png';
import influenceTracksImg from '../../assets/images/influence_tracks.png';
import styled from 'styled-components';

class InfluenceTracksModal extends React.Component {
    render() {
        const { isOpen, handleClose, houses, tracks } = this.props;
        const images = require.context('../../assets/images', true);

        const Container = styled.div.attrs({
            className: 'relative'
        })`
            height: 480px;
            width: 100%;
        `;

        const InfluenceTracksImg = styled.img`
            height: 480px;
        `;

        const InfluenceTracksExpansionImg = styled.img.attrs({
            className: 'relative'
        })`
            height: 448px;
            top: -6px;
        `;

        const IronThroneTrack = styled.div.attrs({
            className: 'absolute'
        })`
            top: 48px;
            left: 192px;
        `;

        const FiefdomsTrack = styled.div.attrs({
            className: 'absolute'
        })`
            top: 196px;
            left: 192px;
        `;

        const KingsCourtTrack = styled.div.attrs({
            className: 'absolute'
        })`
            top: 345px;
            left: 192px;
        `;

        const HouseTokenImg = styled.img`
            margin-left: 50px;
        `;

        const LastTokenImg = styled.img`
            margin-left: 120px;
        `;

        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={handleClose}
                className="modal"
                overlayClassName="overlay"
                shouldCloseOnOverlayClick={true}
            >
                <Container>
                    <InfluenceTracksImg src={influenceTracksImg} />
                    <InfluenceTracksExpansionImg
                        src={influenceTracksExpansionImg}
                    />
                    <IronThroneTrack>
                        {tracks.ironThrone.map((houseId, index) => {
                            if (index === constants.MAX_INFLUENCE - 1) {
                                return (
                                    <LastTokenImg
                                        key={index}
                                        src={images(
                                            `./${
                                                houses[houseId].name
                                            }_token.png`
                                        )}
                                        alt={houses[houseId].name}
                                    />
                                );
                            } else {
                                return (
                                    <HouseTokenImg
                                        key={index}
                                        src={images(
                                            `./${
                                                houses[houseId].name
                                            }_token.png`
                                        )}
                                        alt={houses[houseId].name}
                                    />
                                );
                            }
                        })}
                    </IronThroneTrack>
                    <FiefdomsTrack>
                        {tracks.fiefdoms.map((houseId, index) => {
                            if (index === constants.MAX_INFLUENCE - 1) {
                                return (
                                    <LastTokenImg
                                        key={index}
                                        src={images(
                                            `./${
                                                houses[houseId].name
                                            }_token.png`
                                        )}
                                        alt={houses[houseId].name}
                                    />
                                );
                            } else {
                                return (
                                    <HouseTokenImg
                                        key={index}
                                        src={images(
                                            `./${
                                                houses[houseId].name
                                            }_token.png`
                                        )}
                                        alt={houses[houseId].name}
                                    />
                                );
                            }
                        })}
                    </FiefdomsTrack>
                    <KingsCourtTrack>
                        {tracks.kingsCourt.map((houseId, index) => {
                            if (index < constants.MAX_INFLUENCE) {
                                if (index === constants.MAX_INFLUENCE - 1) {
                                    return (
                                        <LastTokenImg
                                            key={index}
                                            src={images(
                                                `./${
                                                    houses[houseId].name
                                                }_token.png`
                                            )}
                                            alt={houses[houseId].name}
                                        />
                                    );
                                } else {
                                    return (
                                        <HouseTokenImg
                                            key={index}
                                            src={images(
                                                `./${
                                                    houses[houseId].name
                                                }_token.png`
                                            )}
                                            alt={houses[houseId].name}
                                        />
                                    );
                                }
                            } else {
                                return '';
                            }
                        })}
                    </KingsCourtTrack>
                </Container>
            </Modal>
        );
    }
}

InfluenceTracksModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
};

const mapStateToProps = function(state) {
    return {
        houses: state.houses,
        tracks: state.tracks
    };
};

export default connect(mapStateToProps)(InfluenceTracksModal);
