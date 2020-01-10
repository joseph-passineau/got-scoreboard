import Modal from 'react-modal';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import influenceTracksExpansionImg from '../../assets/images/influence_tracks_expansion.png';
import influenceTracksImg from '../../assets/images/influence_tracks.png';
import { moveIronThrone, moveFiefdoms, moveKingscourt } from '../../actions/track';
import styled from 'styled-components';
import DraggableTrack from './draggableTrack';

Modal.setAppElement('#root')

class InfluenceTracksModal extends React.Component {

    constructor(props) {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        this.props.moveIronThrone(result.source.index, result.destination.index);
    }

    render() {
        const { isOpen, handleClose, houses, tracks, moveIronThrone, moveFiefdoms, moveKingscourt } = this.props;

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
                        <DraggableTrack trackItems={tracks.ironThrone} houses={houses} handleMove={moveIronThrone} />
                    </IronThroneTrack>
                    <FiefdomsTrack>
                        <DraggableTrack trackItems={tracks.fiefdoms} houses={houses} handleMove={moveFiefdoms} />
                    </FiefdomsTrack>
                    <KingsCourtTrack>
                        <DraggableTrack trackItems={tracks.kingsCourt} houses={houses} handleMove={moveKingscourt} />
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

const mapDispatchToProps = {
    moveIronThrone,
    moveFiefdoms,
    moveKingscourt
};

const mapStateToProps = function (state) {
    return {
        houses: state.houses,
        tracks: state.tracks
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfluenceTracksModal);
