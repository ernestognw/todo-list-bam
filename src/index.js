import Web3 from "web3";
import { abi, networks } from '../build/contracts/TODO.json'

window.onload = async () => {
  const web3 = new Web3(Web3.givenProvider);

  const accounts = await web3
    .eth
    .requestAccounts();

  const accountDisplay = document
    .getElementById('account')
    
  accountDisplay.innerText = accounts[0]

  const netId = await web3.eth.net.getId()
  
  const TODOContract = new web3
    .eth
    .Contract(
      abi,
      networks[netId].address
    )
    
  const fillTasks = async () => {
    const tasks = await TODOContract
      .methods
      .getAll()
      .call()

    const list = document.getElementById('list')

    list.innerHTML = ''

    tasks.forEach(task => {
      list.insertAdjacentHTML(
        'beforeend', 
        `<li>${task.name} <button>x</button></li>`
      )
    })
  }

  fillTasks();

  const input = document.getElementById('task')
  const button = document.getElementById('add')

  button.onclick = async () => {
    if(input.value == "") return;
    
    await TODOContract.
      methods
      .set(input.value)
      .send({ from: accounts[0] })

    fillTasks()
  }
};
