import React, { Component } from 'react'
import Counter from './components/Counter'
import ListItem from './components/ListItem';
import CardOpen from './components/CardOpen';
import ContentWithLoading from './components/ContentWithLoading';

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <ListItem title="HOC" body="Hello World HOC" />
        <CardOpen title="WITH STATE" content="Hello withState" />
        <ContentWithLoading title="Hello Branch"/>
      </div>
    )
  }
}