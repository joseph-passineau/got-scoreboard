import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import Modal from 'react-modal';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import constants from '../../constants';

Modal.setAppElement('#root')

const portal = document.createElement("div");
document.body.appendChild(portal);

const getItemStyle = (isDragging, draggableStyle, index) => ({
    userSelect: 'none',
    margin: index === constants.MAX_INFLUENCE - 1 ? '0 0 0 120px' : `0 0 0 50px`,
    ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
    display: 'flex',
    overflow: 'auto',
    width: '1300px',
});

export default class DraggableTrack extends React.Component {

    constructor(props) {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        this.props.handleMove(result.source.index, result.destination.index);
    }

    render() {
        const { trackItems, houses } = this.props;
        const images = require.context('../../assets/images', true);

        return (

            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable-iron-throne" direction="horizontal">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                            {trackItems.map((houseId, index) => (
                                <Draggable key={houseId} draggableId={houseId.toString()} index={index}>
                                    {(provided, snapshot) => {
                                        const child = (
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
                                        );
                                        const usePortal = snapshot.isDragging;

                                        if (!usePortal) {
                                            return child;
                                        }

                                        // if dragging - put the item in a portal
                                        return ReactDOM.createPortal(child, portal);
                                    }}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

        );
    }
}

DraggableTrack.propTypes = {
    trackItems: PropTypes.any.isRequired,
    houses: PropTypes.any.isRequired,
    handleMove: PropTypes.func.isRequired
};
