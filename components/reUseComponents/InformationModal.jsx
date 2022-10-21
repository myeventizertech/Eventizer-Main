import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { optionsServiceLoction } from '../../utils/options';
import { DatePickersStart } from '../each-profile/cinematography/orderRequest/DateTimeInputs';
import { DatePickersEnd } from '../each-profile/photography/orderRequest/DateTimeInputs';
import CLoso from './icons/Close';
import GoBack from './icons/GoBack';
import Input from './Input';
import SelectInput from './SelectInput';

const InformationModal = ({setModal,setShowForm,firstPage,setFirstPage,modal,fourthPage, setFourthPage}) => {
    const [secondPage, setSecondPage] = useState(false)
    const [thirdPage, setThirdPage] = useState(false)
       
    const [description,setDescription]=useState('')
    const [eventType,setEventType]=useState('')
    const [customerAge,setCustomerAge]=useState([])
    const [peopleNumber,setPeopleNumber]=useState('')
  

    const handleOrderDataForPageOne = (e)=>{
        e.preventDefault()
        
        setFirstPage(false)
    
        setSecondPage(true)
        setDescription(e.target.description.value)
    }
    
    const changeWedding = (e)=>{
        setEventType(e.target.value)        
    }
    const changeFormal = (e)=>{
        setEventType(e.target.value)    }
    const changeBirthday = (e)=>{
        setEventType(e.target.value)
    }
    const changePhotoshoot = (e)=>{
        setEventType(e.target.value)
    }
    const changeFashion = (e)=>{
        setEventType(e.target.value)
    }
    
    const handleOrderDataForPageTwo = (e)=>{
        e.preventDefault()              
        setSecondPage(false)
        setThirdPage(true)               
    }

    const checkUnder13=(e)=>{
        setCustomerAge(e.target.value)
    }
    const check1317=(e)=>{
        setCustomerAge(e.target.value)
    }
    const check1828=(e)=>{
        setCustomerAge(e.target.value)
    }
    const check2944=(e)=>{
        setCustomerAge(e.target.value)
    }
    const chec4565=(e)=>{
        setCustomerAge(e.target.value)
    }
    const check65older=(e)=>{
        setCustomerAge(e.target.value)
    }

    const handleOrderDataForPageThree = (e)=>{
        e.preventDefault()                   
        setThirdPage(false)
        setFourthPage(true)        
    }

    const change1 =(e)=>{
        setPeopleNumber(e.target.value)
    }
    const change2 =(e)=>{
        setPeopleNumber(e.target.value)
    }
    const change3 =(e)=>{
        setPeopleNumber(e.target.value)
    }
    const change4 =(e)=>{
        setPeopleNumber(e.target.value)
    }
    const change5 =(e)=>{
        setPeopleNumber(e.target.value)
    }
  
    let customerData ={
        description:description,
        eventType:eventType,
        customerAge:customerAge,
        peopleNumber:peopleNumber
    }
  
    const handleOrderDataForPageFour = (e)=>{
        e.preventDefault()                   
        setModal(false);
        setShowForm(true)
        console.log(customerData)
    }

   
    const handleBackButton =()=>{
        firstPage && setModal(false);
        if(secondPage){
            setFirstPage(true)
            setSecondPage(false)
        }
         else if(thirdPage){
            setSecondPage(true)
            setThirdPage(false)
         }
         else if(fourthPage ){
            setThirdPage(true)
            setFourthPage(false)
         }
        
    }

    return (
      <div>
        {modal&&
              <div className={`${modal && 'shadow-lg'} my-5 container  md:w-[900px] w-[100%] bg-white rounded-md`}>
              <header className='h-[73px] w-[100%] '>
                  <div className='flex justify-between '>
                      <div className='flex items-center pt-5'>
                        <button onClick={handleBackButton}>
                        <GoBack></GoBack>
                        </button>
                          <h1 className='text-2xl font-normal ml-5'>Makeup Artist</h1>
                      </div>
                      <div className='pt-5'>
                         <button onClick={()=>setModal(false)}>
                         <CLoso></CLoso>
                         </button>
                      </div>
                  </div>
              </header>
              <div>
                  {/* First page starts from here */}
  
                  {firstPage && <>
                      <h2 className='text-xl font-medium text-center mt-12 mb-11'>Fillup some information to book</h2>
                      <form onSubmit={handleOrderDataForPageOne} className='flex flex-col justify-center items-center w-320px  md:w-[454px] mx-auto'>
                          <div className='flex justify-center '>
  
                              <div className='mr-1 md:w-1/2 w-[150px]'>
                                  <SelectInput                                      
                                      options={optionsServiceLoction}                                
                                      placeholder="Select City"
                                      name="city"
                                 / >
                              </div>
                              <div className='ml-1 md:w-1/2 w-[150px]'>
                                  <Input
                                      type="text"
                                      name="yourAddress"
                                      placeholder="Write Your Address"
                                  />
                              </div>
                          </div>
                          <div>
                              <DatePicker
                                  name={"eventDate"}
                                  showPopperArrow={false}
                                  className={`inputdesign md:w-[454px]  w-[310px] font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px] mb-5`}
                                  placeholderText="Select date"
                                  // minDate={moment().toDate()}
                                  onFocus={(e) => (e.target.readOnly = true)}
                                  dateFormat="dd/MM/yyyy"
                              />
                          </div>
                          <div className='flex'>
                              <div className='mr-1 md:w-1/2 w-[150px]'>
                                  <DatePickersStart />
                              </div>
                              <div className='ml-1 md:w-1/2 w-[150px]'>
                                  <DatePickersEnd />
                              </div>
                          </div>
                          <div className='mt-4 w-[310px] md:w-auto'>
                              <Input
  
                                  istextArea={true}
                                  name="description"
                                  placeholder="Write something about your booking"  
                              />
                          </div>
                              <input
                            role={'button'}
                            className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 py-2'
                            type="submit" value="Next" />                                              
                      </form>
                  </>}
  
                  {/* Second page starts from here */}
  
                  {
                      secondPage && <>
                          <div className='mb-6'>
                              <h2 className='text-xl font-medium text-center mt-12 mb-11'>What type of event?</h2>
                              <form onSubmit={handleOrderDataForPageTwo} className='flex flex-col items-center '>
                                  <div className='flex flex-col'>
                                      <label role={'button'} className='my-2 label flex text-xl font-normal ' htmlFor="ex1">Wedding
                                          <input onChange={changeWedding} role={'button'} className=' border-gray-800'  type="radio" id="ex1" name="radio-option" value="Wedding" />
                                          <span className="checkmark ml-[-8px]"></span>        
                                      </label>
                                      <label role={'button'} className='my-2 label flex text-xl font-normal ' htmlFor="ex2">Formal
                                          <input onChange={changeFormal} role={'button'} className=' border-gray-800'  type="radio" id="ex2" name="radio-option" value="Formal" />
                                          <span className="checkmark ml-[-8px]"></span>        
                                      </label>
                                      <label role={'button'} className='my-2 label flex text-xl font-normal ' htmlFor="ex3">Birthday Party
                                          <input onChange={changeBirthday} role={'button'} className=' border-gray-800'  type="radio" id="ex3" name="radio-option" value="Birthday Party" />
                                          <span className="checkmark ml-[-8px]"></span>        
                                      </label>
                                      <label role={'button'} className='my-2 label flex text-xl font-normal ' htmlFor="ex4">Photoshoot
                                          <input onChange={changePhotoshoot} role={'button'} className=' border-gray-800'  type="radio" id="ex4" name="radio-option" value="Photoshoot" />
                                          <span className="checkmark ml-[-8px]"></span>        
                                      </label>
                                      <label role={'button'} className='my-2 label flex text-xl font-normal ' htmlFor="ex5">Fashion Show
                                          <input onChange={changeFashion} role={'button'} className='  border-gray-800'  type="radio" id="ex5" name="radio-option" value="Fashion Show" />
                                          <span className="checkmark ml-[-8px]"></span>        
                                      </label>
                                      
                                  </div>
                                  <input
                            role={'button'}
                            className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 py-2'
                            type="submit" value="Next" />                          
                              </form>
                          </div>
                      </>
                  }
  
                  {/* Third page starts from here */}
  
                  {
                      thirdPage && <>
                          <div>
                              <h2 className='text-xl font-medium text-center mt-12 mb-11'>How old are member?</h2>
                              <form onSubmit={handleOrderDataForPageThree} className='flex flex-col items-center '>
                                  <div className='flex flex-col'>
                                      <label role={'button'} className='my-2 text-xl font-normal check flex' htmlFor="ex1">Under 13
                                          <input onChange={checkUnder13} role={'button'} className=' border-gray-800' type="checkbox" id="ex1" name="radio-option"  value="Under 13" />
                                          <span className="checkmark-box ml-[-8px]"></span>                                        
                                      </label>
                                      <label role={'button'} className='my-2  text-xl font-normal check flex' htmlFor="ex2">13-17 years old                                    
                                          <input onChange={check1317} role={'button'} className=' border-gray-800' type="checkbox" id="ex2" name="radio-option"  value="13-17 years old" />                                        
                                          <span className="checkmark-box ml-[-8px]"></span>
                                      </label>
                                      <label role={'button'} className='my-2 text-xl font-normal check flex' htmlFor="ex3">18-28 years old
                                          <input onChange={check1828} role={'button'} className=' border-gray-800' type="checkbox" id="ex3" name="radio-option"  value="18-28 years old" />
                                          <span className="checkmark-box ml-[-8px]"></span>                                        
                                      </label>
                                      <label role={'button'} className='my-2 text-xl font-normal check flex' htmlFor="ex4">29-44 years old
                                          <input onChange={check2944} role={'button'} className=' border-gray-800' type="checkbox" id="ex4" name="radio-option"  value="29-44 years old" />
                                          <span className="checkmark-box ml-[-8px]"></span>                                        
                                      </label>
                                      <label role={'button'} className='my-2 text-xl font-normal check flex' htmlFor="ex5">45-65 years old
                                          <input onChange={chec4565} role={'button'} className=' border-gray-800' type="checkbox" id="ex5" name="radio-option"  value="45-65 years old" />
                                          <span className="checkmark-box ml-[-8px]"></span>                                        
                                      </label>
                                      <label role={'button'} className='my-2 text-xl font-normal check flex' htmlFor="ex6">65 years or older
                                          <input onChange={check65older} role={'button'} className=' border-gray-800' type="checkbox" id="ex6" name="radio-option"  value="65 years or older" />
                                          <span className="checkmark-box ml-[-8px]"></span>                                        
                                      </label>
                                      
                                  </div>
                                  <input
                            role={'button'}
                            className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 py-2'
                            type="submit" value="Next" />       
                              </form>
                          </div>
                      </>
                  }
  
                  {/* Fourth page starts from here */}
                  {
                      fourthPage && <>
                          <div className='mb-6'>
                              <h2 className='text-xl font-medium text-center mt-12 mb-11'>How many people want to take makeup service?</h2>
                              <form onSubmit={handleOrderDataForPageFour} className='flex flex-col items-center '>
                                  <div className='flex flex-col'>
                                      <label role={'button'} className='my-2 label flex text-xl font-normal' htmlFor="ex1">1
                                          <input onChange={change1} role={'button'} className=' border-gray-800' type="radio" id="ex1" name="radio-option" value="1" />
                                          <span className="checkmark ml-[-8px]"></span>                                          
                                      </label>                                    
                                      <label role={'button'} className='my-2 label flex text-xl font-normal' htmlFor="ex2">2                                        <input onChange={change2} role={'button'} className=' border-gray-800' type="radio" id="ex2" name="radio-option" value="2" />
                                          <span className="checkmark ml-[-8px]"></span>                                          
                                      </label>                                    
                                      <label role={'button'} className='my-2 label flex text-xl font-normal' htmlFor="ex3">3                                        <input onChange={change3} role={'button'} className=' border-gray-800' type="radio" id="ex3" name="radio-option" value="3" />
                                          <span className="checkmark ml-[-8px]"></span>                                          
                                      </label>                                    
                                      <label role={'button'} className='my-2 label flex text-xl font-normal' htmlFor="ex4">4                                        <input onChange={change4} role={'button'} className=' border-gray-800' type="radio" id="ex4" name="radio-option" value="4" />
                                          <span className="checkmark ml-[-8px]"></span>                                          
                                      </label>                                    
                                      <label role={'button'} className='my-2 label flex text-xl font-normal' htmlFor="ex5">5                                        <input onChange={change5} role={'button'} className=' border-gray-800' type="radio" id="ex5" name="radio-option" value="5" />
                                          <span className="checkmark ml-[-8px]"></span>                                          
                                      </label>
                                    
                                  </div>
                                 <input                                
                            role={'button'}
                            className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 py-2'
                            type="submit"
                             value="Next" />    
                              </form>
                          </div>
                      </>
                  }
  
              </div>
          </div>
        }
      </div>
    );
};

export default InformationModal;