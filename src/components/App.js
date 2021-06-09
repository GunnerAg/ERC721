import React, { useState,useEffect } from 'react';
import Web3 from 'web3'
import './App.css';
import Color from '../abis/Color.json'

export default function App()  {


  useEffect(() => {
    loadWeb3()
    loadBlockchainData()
  }, [])

  let [account,setAccount]=useState('')
  let [contract,setContract]=useState(null)
  let [totalSupply,setSupply]=useState()
  let [colors,setColors]=useState([])
  let [newToken,setToken]=useState('')

  async function loadWeb3 (){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async function loadBlockchainData(){
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    setAccount(account=accounts[0])
    const networkId = await web3.eth.net.getId()
    const networkData = Color.networks[networkId]
    if(networkData) {
      const abi = Color.abi
      const address = networkData.address
      const currentContract = new web3.eth.Contract(abi, address)
      setContract(contract=currentContract);
      console.log(contract.methods.totalSupply().call())
      const currentSupply= await contract.methods.totalSupply().call()
      console.log('IM HERE', currentSupply)
      setSupply(totalSupply=currentSupply);
      // Load Colors
      for (var i = 1; i<= totalSupply; i++) {
        const color = await contract.methods.colors(i).call()
        let colorArray=[...colors, color];
        setColors(colors=colorArray)
      }
      console.log('here',colors)
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }

  let mint = (newToken) => {
    if(/^#[0-9A-F]{6}$/i.test(newToken)){
      contract.methods.mint(newToken).send({from: account})
        .once('receipt', (receipt) => {
          let colorsArray=[...colors, newToken]
          setColors(colors=colorsArray)
        });
    }
    else{ window.alert(' that is not a valid href color, try something like #000000 ')}
  }

  let handleSubmit=(e)=>{
    e.preventDefault()
    mint(newToken)
  } 

  let handleChange=(event)=>{
    setToken(newToken=event.currentTarget.value)
  }

  
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <h1
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Color Tokens
          </h1>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-white"><span id="account">{account}</span></small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <h1>Issue Token</h1>
                <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    className='form-control mb-1'
                    placeholder='e.g. #FFFFFF'
                    onChange={handleChange}
                  />
                  <input
                    type='submit'
                    className='btn btn-block btn-primary'
                    value='MINT'
                  />
                </form>
              </div>
            </main>
          </div>
          <hr/>
          <div className="colorsContainer">
            { colors.map((color, key) => {
              return(
                <div key={key} className="colorContainer">
                  <div className="token" style={{ backgroundColor: color }}></div>
                  <div>{color}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }

