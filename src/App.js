import './App.css';

import Octicon, { Bookmark, Sync } from '@githubprimer/octicons-react';
import React, { PureComponent } from 'react';

import Button from './components/Button';
import GOTImg from './assets/images/got.png';
import HousesList from './components/HousesList';
import InfluenceTrackModal from './components/InfluenceTrackModal';
import ResetModal from './components/ResetModal';
import RoundCounter from './components/RoundCounter';
import WildlingThreatCounter from './components/WildlingThreatCounter';
import { connect } from 'react-redux';
import { resetGame } from './actions/game';
import styled from 'styled-components';

class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            resetModalIsOpen: false,
            influenceTrackModalIsOpen: false
        };
    }

    openResetModal = () => {
        this.setState({ resetModalIsOpen: true });
    };

    closeResetModal = () => {
        this.setState({ resetModalIsOpen: false });
    };

    openInfluenceTrackModal = () => {
        this.setState({ influenceTrackModalIsOpen: true });
    };

    closeInfluenceTrackModal = () => {
        this.setState({ influenceTrackModalIsOpen: false });
    };

    handleResetGame = () => {
        this.props.resetGame();
        this.closeResetModal();
    };

    componentDidMount() {
        window.addEventListener('beforeunload', ev => {
            ev.preventDefault();
            return (ev.returnValue = 'Changes you made may will be lost.');
        });
    }

    render() {
        const AppContainer = styled.main.attrs({
            className: 'flex'
        })``;

        const Sidebar = styled.div`
            width: 300px;
        `;

        const Main = styled.div.attrs({
            className: 'w-100'
        })``;

        return (
            <AppContainer>
                <Sidebar>
                    <img
                        className="pv4"
                        src={GOTImg}
                        alt="A Game of Throne Board Game"
                    />
                    <RoundCounter />
                    <WildlingThreatCounter />
                    <div className="mb4">
                        <Button
                            handleOnClick={this.openInfluenceTrackModal}
                            primaryColor="#0F4154"
                            secondaryColor="#B1D5F4"
                        >
                            <Octicon
                                icon={Bookmark}
                                size="medium"
                                verticalAlign="middle"
                            />{' '}
                            Influence Track
                        </Button>
                    </div>

                    <Button
                        handleOnClick={this.openResetModal}
                        primaryColor="#0F4154"
                        secondaryColor="#B1D5F4"
                    >
                        <Octicon
                            icon={Sync}
                            size="medium"
                            verticalAlign="middle"
                        />{' '}
                        Reset
                    </Button>
                </Sidebar>
                <Main>
                    <HousesList />
                </Main>
                <ResetModal
                    isOpen={this.state.resetModalIsOpen}
                    handleYes={this.handleResetGame}
                    handleNo={this.closeResetModal}
                />
                <InfluenceTrackModal
                    isOpen={this.state.influenceTrackModalIsOpen}
                    handleClose={this.closeInfluenceTrackModal}
                />
            </AppContainer>
        );
    }
}

const mapDispatchToProps = {
    resetGame
};

export default connect(
    null,
    mapDispatchToProps
)(App);
