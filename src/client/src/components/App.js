import React, { Component } from 'react';
import Blocks from './Blocks';
import logo from '../assets/logo.jpg';

class App extends Component {
    state = { walletInfo: { }};
      componentDidMount() {
        this.getWalletInfo();
    }

     getWalletInfo() {
          fetch('http://localhost:3000/api/wallet-info')
           .then(response => {
               response.json().then(json => this.setState({ walletInfo: json}) );
           })
           .catch((error) => {
               console.log('Error: ', error.message);
           });

    }

    render() {
        const { address, balance } = this.state.walletInfo;
        return (
            <div className='App'>
                <img className='logo' src={logo}></img>
                <br />
                <div>Welcome to Cryptochain from React component ...</div>
                <div className='WalletInfo'>
                    <div>Address: {address}</div>
                    <div>Balance: {balance}</div>
                </div>

                <br />
                <Blocks />
            </div>
        )
    }
}

export default App;