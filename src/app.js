import React, { Component } from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Container from './Container';
import Row from './Row';
import Column from './Column';
import friends from './friends.json';
import './App.css';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

class App extends Component {

    state = {
        friends,
        score: 0,
        highScore: 0,
        rightWrong: '',
        clicked: [],
    };

    handleClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            this.handleReset();
        }
    };

    handleIncrement = () => {
        const newScore = this.state.score + 1;
        this.setState({
            score: newScore,
            rightWrong: ''
        });
        // test if current score is high score and update
        if (newScore >= this.state.highScore) {
            this.setState({ highScore: newScore });
        } else if (newScore === 12) {
            this.setState({ rightWrong: 'You win!' });
        }
        this.handleShuffle();
    };

    handleReset = () => {
        this.setState({
            score: 0,
            highScore: this.state.highScore,
            rightWrong: 'Try again!',
            clicked: []
        });
        this.handleShuffle();
    };

    handleShuffle = () => {
        let shuffledCards = shuffle(friends);
        this.setState({ friends: shuffledCards });
    };

    render() {
        return (
            <Wrapper>
                <Nav title='Adventure Time Clicky Game'
                    score={this.state.score}
                    highScore={this.state.highScore}
                    rightWrong={this.state.rightWrong}
                />

                <Title>
                    Try to click each character only once!
                </Title>

                <Container>
                    <Row>
                        {this.state.friends.map(friend => (
                            <Column size='md-3 sm-6'>
                                <Card key={friend.id}
                                    handleClick={this.handleClick}
                                    handleIncrement={this.handleIncrement}
                                    handleReset={this.handleReset}
                                    id={friend.id}
                                    image={friend.image}
                                />
                            </Column>
                        ))}
                    </Row>
                </Container>
            </Wrapper>
        );
    }
}

export default App;