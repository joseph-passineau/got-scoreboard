import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import Modal from 'react-modal';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import constants from '../../constants';
import influenceTracksExpansionImg from '../../assets/images/influence_tracks_expansion.png';
import influenceTracksImg from '../../assets/images/influence_tracks.png';
import { moveIronThrone } from '../../actions/track';
import styled from 'styled-components';

const getItemStyle = (isDragging, draggableStyle, index) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    margin: index === constants.MAX_INFLUENCE - 1 ? '0 0 0 120px' : `0 0 0 50px`,
    // styles we need to apply on draggables
    ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
    display: 'flex',
    overflow: 'auto',
    width: '1300px',
});

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
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            <Droppable droppableId="droppable" direction="horizontal">
                                {(provided, snapshot) => (
                                    <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                                        {tracks.ironThrone.map((houseId, index) => (
                                            <Draggable key={houseId} draggableId={houseId.toString()} index={index}>
                                                {(provided, snapshot) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                            snapshot.isDragging,
                                                            provided.draggableProps.style,
                                                            index
                                                        )}
                                                    >
                                                        {

                                                        }
                                                        <img
                                                            key={index}
                                                            src={images(
                                                                `./${
                                                                houses[houseId].name
                                                                }_token.png`
                                                            )}
                                                            alt={houses[houseId].name}
                                                        />

                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
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

const mapDispatchToProps = {
    moveIronThrone
};

const mapStateToProps = function (state) {
    return {
        houses: state.houses,
        tracks: state.tracks
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfluenceTracksModal);
