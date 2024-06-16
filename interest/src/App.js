//Importing React, UseState and different components
import React, {useState} from 'react'; 
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import AddInterest from './components/AddInterest';
import CalculatedAmount from './components/CalculatedAmount';
import Time from './components/Time';
import BankFee from './components/BankFee';



//Declaring State variable and setter function. State value is 0
function App() {
  const [initAmount, setInitAmount] = useState(5000)
  const [deposit, setDeposit] = useState(0)
  const [withdraw, setWithdraw] = useState(0)
  const [interestrate, setInterestrate]= useState(0)
  const[numberOfYears, setNumberOfYears] = useState(0)
  const[bankfee, setBankfee] = useState(0)
  const[finalValue, setfinalValue] = useState(null)
  

//Creating function to calculate final earnings of the user
//parseInt is used to ensure the input made by the user is an integer not a string 
  function calculationFunc() {
    let earnings = parseInt(initAmount)
    earnings = earnings + parseInt(deposit) - parseInt(withdraw)
    //Using for loop to calculate compound interest
    for(let i=1; i<=numberOfYears; i++){
      earnings *= 1+ parseInt(interestrate)/100
    }
       earnings = earnings-bankfee
  console.log(earnings)
  setfinalValue(earnings)
  }
//initAmount is the initial amount the investor has. It has been fed into the sytem
//Deposit allows user to put in amount she has deposited
//Withdraw allows user user to put in amount which he has withdrawn
// interest rate will take in the annual rate at which interest is paid to the user
//Time is in number of years. the number of years user has stayed invested in
//BankFee deducts bank's fee from the final amount 
//props are being passed to the components
  return (
   <div classname = 'App'>
    <header>
      <h1>Financial Calculator</h1>
      <i class="fa-solid fa-money-check"></i>
      <i class="fa-solid fa-money-check"></i>
      <i class="fa-solid fa-money-check"></i>
      <i class="fa-solid fa-money-check"></i>
      <i class="fa-solid fa-money-check"></i>
      <i class="fa-solid fa-money-check"></i>
      <i class="fa-solid fa-money-check"></i>
    </header>
    <h3> Your last balance was ${initAmount}</h3>
    <h2>Please add relevant information below to know what your final balance would be</h2>
    <Deposit title ={'How much money did you deposit?'} symbol= {'$'} value = {deposit} setValue = {setDeposit} />
    <Withdraw title ={'How much money did you withdraw?' } symbol= {'$'} value = {withdraw} setValue = {setWithdraw}/>
    <AddInterest title={'What is the annual rate of interest?'} symbol= {'%'} value = {interestrate} setValue ={setInterestrate} />
    <Time title={'Number of years your money earned interest'} symbol= {'Yrs'} value ={numberOfYears} setValue = {setNumberOfYears} />
    <BankFee title ={'Deduct Bank Fee'} symbol = {'$'} value ={bankfee} setValue= {setBankfee}/>
    <CalculatedAmount title={'your Final Balance'} symbol ={'$'} calculationFunc = {calculationFunc} value={finalValue}/>
    
   </div>
  )
}

export default App;
