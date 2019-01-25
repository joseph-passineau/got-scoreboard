import './App.css';

import Octicon, { Sync } from '@githubprimer/octicons-react';
import React, { PureComponent } from 'react';

import Button from './components/Button';
import GOTImg from './assets/images/got.png';
import HousesList from './components/HousesList';
import RoundCounter from './components/RoundCounter';
import WildlingThreatCounter from './components/WildlingThreatCounter';
import { connect } from 'react-redux';
import { resetGame } from './actions/game';
import styled from 'styled-components';

class App extends PureComponent {
    handleResetGame = () => {
        this.props.resetGame();
    };

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
                    <Button
                        handleOnClick={this.handleResetGame}
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
