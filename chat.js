// Exported from snack.expo.io
// Modified from https://snack.expo.io/SyOdDdL8b
import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.2.5

export default class Example extends Component {
  static navigationOptions = {
    title: 'chat',
    }
  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Thank you!!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Susie',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
