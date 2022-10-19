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

const InformationModal = ({setModal,setShowForm,firstPage,setFirstPage}) => {
    const [secondPage, setSecondPage] = useState(false)
    const [thirdPage, setThirdPage] = useState(false)
    const [fourthPage, setFourthPage] = useState(false)
    
    const handleOrderData = (e)=>{
        e.preventDefault()
        const city = e.target.city.value
        console.log(city)
    }

    return (
        <div className='my-24 container  md:w-[900px] w-[100%] bg-white rounded-md'>
            <header className='h-[73px] w-[100%] shadow-sm'>
                <div className='flex justify-between '>
                    <div className='flex items-center pt-5'>
                      <button onClick={handleBack}>
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
                    <form onSubmit={handleOrderData} className='flex flex-col justify-center items-center w-320px  md:w-[454px] mx-auto'>
                        <div className='flex justify-center '>

                            <div className='mr-1 md:w-1/2 w-[150px]'>
                                <SelectInput
                                    
                                    options={optionsServiceLoction}                                
                                    placeholder="Select City"
                                    name="city"
                                >
                                </SelectInput>
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

                        <button onClick={()=>(setFirstPage(false) , setSecondPage(true))} className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 py-2'>Next
                        </button>

                    </form>
                </>}

                {/* Second page starts from here */}

                {
                    secondPage && <>
                        <div className='mb-6'>
                            <h2 className='text-xl font-medium text-center mt-12 mb-11'>What type of event?</h2>
                            <form className='flex flex-col items-center '>
                                <div className='flex flex-col'>
                                    <label role={'button'} className='my-2 label flex text-xl font-normal ' htmlFor="ex1">Wedding
                                        <input role={'button'} className=' border-gray-800'  type="radio" id="ex1" name="radio-option" value="Wedding" />
                                        <span className="checkmark ml-[-8px]"></span>        
                                    </label>
                                    <label role={'button'} className='my-2 label flex text-xl font-normal ' htmlFor="ex2">Formal
                                        <input role={'button'} className=' border-gray-800'  type="radio" id="ex2" name="radio-option" value="Formal" />
                                        <span className="checkmark ml-[-8px]"></span>        
                                    </label>
                                    <label role={'button'} className='my-2 label flex text-xl font-normal ' htmlFor="ex3">Birthday Party
                                        <input role={'button'} className=' border-gray-800'  type="radio" id="ex3" name="radio-option" value="Birthday Party" />
                                        <span className="checkmark ml-[-8px]"></span>        
                                    </label>
                                    <label role={'button'} className='my-2 label flex text-xl font-normal ' htmlFor="ex4">Photoshoot
                                        <input role={'button'} className=' border-gray-800'  type="radio" id="ex4" name="radio-option" value="Photoshoot" />
                                        <span className="checkmark ml-[-8px]"></span>        
                                    </label>
                                    <label role={'button'} className='my-2 label flex text-xl font-normal ' htmlFor="ex5">Fashion Show
                                        <input role={'button'} className='  border-gray-800'  type="radio" id="ex5" name="radio-option" value="Fashion Show" />
                                        <span className="checkmark ml-[-8px]"></span>        
                                    </label>
                                    
                                </div>
                                <button onClick={()=>(setSecondPage(false),setThirdPage(true))} className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 my-8 py-2'>Next
                                </button>                         
                            </form>
                        </div>
                    </>
                }

                {/* Third page starts from here */}

                {
                    thirdPage && <>
                        <div>
                            <h2 className='text-xl font-medium text-center mt-12 mb-11'>How old are member?</h2>
                            <form className='flex flex-col items-center '>
                                <div className='flex flex-col'>
                                    <label role={'button'} className='my-2 text-xl font-normal check flex' htmlFor="ex1">Under 13
                                        <input role={'button'} className=' border-gray-800' type="checkbox" id="ex1" name="radio-option"  value="Under 13" />
                                        <span className="checkmark-box ml-[-8px]"></span>                                        
                                    </label>
                                    <label role={'button'} className='my-2  text-xl font-normal check flex' htmlFor="ex2">13-17 years old                                    
                                        <input role={'button'} className=' border-gray-800' type="checkbox" id="ex2" name="radio-option"  value="13-17 years old" />                                        
                                        <span className="checkmark-box ml-[-8px]"></span>
                                    </label>
                                    <label role={'button'} className='my-2 text-xl font-normal check flex' htmlFor="ex3">18-28 years old
                                        <input role={'button'} className=' border-gray-800' type="checkbox" id="ex3" name="radio-option"  value="18-28 years old" />
                                        <span className="checkmark-box ml-[-8px]"></span>                                        
                                    </label>
                                    <label role={'button'} className='my-2 text-xl font-normal check flex' htmlFor="ex4">29-44 years old
                                        <input role={'button'} className=' border-gray-800' type="checkbox" id="ex4" name="radio-option"  value="29-44 years old" />
                                        <span className="checkmark-box ml-[-8px]"></span>                                        
                                    </label>
                                    <label role={'button'} className='my-2 text-xl font-normal check flex' htmlFor="ex5">45-65 years old
                                        <input role={'button'} className=' border-gray-800' type="checkbox" id="ex5" name="radio-option"  value="45-65 years old" />
                                        <span className="checkmark-box ml-[-8px]"></span>                                        
                                    </label>
                                    <label role={'button'} className='my-2 text-xl font-normal check flex' htmlFor="ex6">65 years or older
                                        <input role={'button'} className=' border-gray-800' type="checkbox" id="ex6" name="radio-option"  value="65 years or older" />
                                        <span className="checkmark-box ml-[-8px]"></span>                                        
                                    </label>
                                    
                                </div>
                                <button onClick={()=>(setThirdPage(false), setFourthPage(true))} className='bgcolor2 w-1/2 text-white   text-xl font-medium mb-5 my-8 py-2 rounded btn-hover'>Next
                                </button>

                                {/* text-white bgcolor2 font-18 mt-3 rounded w-full px-2 py-1 font-normal btn-hover */}

                            </form>
                        </div>
                    </>
                }

                {/* Fourth page starts from here */}
                {
                    fourthPage && <>
                        <div className='mb-6'>
                            <h2 className='text-xl font-medium text-center mt-12 mb-11'>How many people want to take makeup service?</h2>
                            <form className='flex flex-col items-center '>
                                <div className='flex flex-col'>
                                    <label role={'button'} className='my-2 label flex text-xl font-normal' htmlFor="ex1">1
                                        <input role={'button'} className=' border-gray-800' type="radio" id="ex1" name="radio-option" value="1" />
                                        <span className="checkmark ml-[-8px]"></span>
                                        
                                    </label>
                                  
                                    <label role={'button'} className='my-2 label flex text-xl font-normal' htmlFor="ex2">2                                        <input role={'button'} className=' border-gray-800' type="radio" id="ex2" name="radio-option" value="2" />
                                        <span className="checkmark ml-[-8px]"></span>
                                        
                                    </label>
                                  
                                    <label role={'button'} className='my-2 label flex text-xl font-normal' htmlFor="ex3">3                                        <input role={'button'} className=' border-gray-800' type="radio" id="ex3" name="radio-option" value="3" />
                                        <span className="checkmark ml-[-8px]"></span>
                                        
                                    </label>
                                  
                                    <label role={'button'} className='my-2 label flex text-xl font-normal' htmlFor="ex4">4                                        <input role={'button'} className=' border-gray-800' type="radio" id="ex4" name="radio-option" value="4" />
                                        <span className="checkmark ml-[-8px]"></span>
                                        
                                    </label>
                                  
                                    <label role={'button'} className='my-2 label flex text-xl font-normal' htmlFor="ex5">5                                        <input role={'button'} className=' border-gray-800' type="radio" id="ex5" name="radio-option" value="5" />
                                        <span className="checkmark ml-[-8px]"></span>
                                        
                                    </label>
                                  
                                </div>
                                <button onClick={()=>(setModal(false),setShowForm(true))} className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 my-8 py-2'>Next
                                </button>
                            </form>
                        </div>
                    </>
                }

            </div>
        </div>
    );
};

export default InformationModal;