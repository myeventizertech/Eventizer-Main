import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { DatePickersStart } from '../each-profile/cinematography/orderRequest/DateTimeInputs';
import { DatePickersEnd } from '../each-profile/photography/orderRequest/DateTimeInputs';
import CLoso from './icons/Close';
import GoBack from './icons/GoBack';
import Input from './Input';
import SelectInput from './SelectInput';

const InformationModal = () => {
    const [firstPage, setFirstPage] = useState(false)
    const [secondPage, setSecondPage] = useState(false)
    const [thirdPage, setThirdPage] = useState(true)
    const [fourthPage, setFourthPage] = useState(false)

    return (
        <div className='my-52 container  md:w-[900px] w-[100%] bg-white rounded-md'>
            <header className='h-[73px] shadow-sm'>
                <div className='flex justify-between '>
                    <div className='flex items-center pt-5'>
                        <GoBack></GoBack>
                        <h1 className='text-2xl font-normal ml-5'>Makeup Artist</h1>
                    </div>
                    <div className='pt-5'>
                        <CLoso></CLoso>
                    </div>
                </div>
            </header>
            <div>
                {/* First page starts from here */}

                {firstPage && <>
                    <h2 className='text-xl font-medium text-center mt-12 mb-11'>Fillup some information to book</h2>
                    <div className='flex flex-col justify-center items-center w-[454px] mx-auto'>
                        <div className='flex justify-center '>

                            <div className='mr-1'>
                                <SelectInput
                                    options={location}
                                    placeholder="Select City"
                                    name="city"
                                >
                                    <option value="Dhaka">Dhaka</option>
                                </SelectInput>
                            </div>
                            <div className='ml-1'>
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
                                className={`inputdesign md:w-[454px]  w-[340px] font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px] mb-5`}
                                placeholderText="Select date"
                                // minDate={moment().toDate()}
                                onFocus={(e) => (e.target.readOnly = true)}
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                        <div className='flex'>
                            <div className='mr-1 md:w-1/2 w-[160px]'>
                                <DatePickersStart />
                            </div>
                            <div className='ml-1 md:w-1/2 w-[160px]'>
                                <DatePickersEnd />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <Input

                                istextArea={true}
                                name="description"
                                placeholder="Write something about your booking"

                            />
                        </div>

                        <button className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 py-2'>Next
                        </button>

                    </div>
                </>}

                {/* Second page starts from here */}

                {
                    secondPage && <>
                        <div className='mb-6'>
                            <h2 className='text-xl font-medium text-center mt-12 mb-11'>What type of event?</h2>
                            <form className='flex flex-col items-center '>
                                <div className='flex flex-col'>
                                    <div role={'button'} className='my-2 label flex'>
                                        <input role={'button'} className=' border-gray-800'  type="radio" id="ex1" name="radio-option" value="Wedding" />
                                        <span className="checkmark"></span>
                                        <label role={'button'} className='ml-4 label   text-xl font-normal ' htmlFor="ex1">Wedding</label>
                                    </div>
                                    <div role={'button'} className='my-2 label flex'>
                                        <input role={'button'} className='' type="radio" id="ex2" name="radio-option" value="Formal" />
                                        <span className="checkmark"></span>
                                        <label role={'button'} className='ml-4 label  text-xl font-normal  ' htmlFor="ex2">Formal</label>
                                    </div>
                                    <div role={'button'} className='my-2 label flex'>
                                        <input role={'button'} className='' type="radio" id="ex3" name="radio-option" value="Birthday Party" />
                                        <span className="checkmark"></span>
                                        <label role={'button'} className='ml-4 label  text-xl font-normal ' htmlFor="ex3">Birthday Party</label>
                                    </div>
                                    <div role={'button'} className='my-2 label flex'>
                                        <input className='' role={'button'} type="radio" id="ex4" name="radio-option" value="Photo Shoot" />
                                        <span className="checkmark"></span>
                                        <label role={'button'} className='ml-4 label  text-xl font-normal ' htmlFor="ex4">Photo Shoot</label>
                                    </div>
                                    <div role={'button'} className='my-2 label flex'>
                                        <input role={'button'} className='' type="radio" id="ex5" name="radio-option" value="Fashion Show" />
                                        <span className="checkmark"></span>
                                        <label role={'button'} className='ml-4 label  text-xl font-normal ' htmlFor="ex5">Fashion Show</label>
                                    </div>
                                </div>
                                <button className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 my-8 py-2'>Next
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
                                    <div role={'button'} className='my-2 check flex'>
                                        <input role={'button'} className=' border-gray-800' type="checkbox" id="ex1" name="radio-option"  value="Under 13" />
                                        <span className="checkmark-box"></span>
                                        <label role={'button'} className='ml-4 check  text-xl font-normal' htmlFor="ex1">Under 13</label>
                                    </div>
                                    <div role={'button'} className='my-2 check flex'>
                                        <input role={'button'} className='' type="checkbox" id="ex2" name="radio-option" value="13-17 years old" />
                                        <span className="checkmark-box"></span>
                                        <label role={'button'} className='ml-4 check text-xl font-normal' htmlFor="ex2">13-17 years old</label>
                                    </div>
                                    <div role={'button'} className='my-2 check flex'>
                                        <input role={'button'} className='' type="checkbox" id="ex3" name="radio-option" value="18-28 years old" />
                                        <span className="checkmark-box"></span>
                                        <label role={'button'} className='ml-4 check text-xl font-normal' htmlFor="ex3">18-28 years old</label>
                                    </div>
                                    <div role={'button'} className='my-2 check flex'>
                                        <input className='' role={'button'} type="checkbox" id="ex4" name="radio-option" value="29-44 years old" />
                                        <span className="checkmark-box"></span>
                                        <label role={'button'} className='ml-4 check text-xl font-normal' htmlFor="ex4">29-44 years old</label>
                                    </div>
                                    <div role={'button'} className='my-2 check flex'>
                                        <input role={'button'} className='' type="checkbox" id="ex5" name="radio-option" value="45-65 years old" />
                                        <span className="checkmark-box"></span>
                                        <label role={'button'} className='ml-4 check text-xl font-normal' htmlFor="ex5">45-65 years old</label>
                                    </div>
                                    <div role={'button'} className='my-2 check flex'>
                                        <input role={'button'} className='' type="checkbox" id="ex6" name="radio-option" value="65 or older" />
                                        <span className="checkmark-box"></span>
                                        <label role={'button'} className='ml-4 check text-xl font-normal' htmlFor="ex6">65 or older</label>
                                    </div>
                                </div>
                                <button className='bgcolor2 w-1/2 text-white   text-xl font-medium mb-5 my-8 py-2 rounded btn-hover'>Next
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
                                    <div role={'button'} className='my-2 label flex'>
                                        <input role={'button'} className=' border-gray-800' type="radio" id="ex1" name="radio-option" value="1" />
                                        <span className="checkmark"></span>
                                        <label role={'button'} className='ml-4  text-xl font-normal' htmlFor="ex1">1</label>
                                    </div>
                                    <div role={'button'} className='my-2 label flex'>
                                        <input role={'button'} className='' type="radio" id="ex2" name="radio-option" value="2" />                                        
                                        <span className="checkmark"></span>
                                        <label role={'button'} className='ml-4 text-xl font-normal' htmlFor="ex2">2</label>
                                    </div>
                                    <div role={'button'} className='my-2 label flex'>
                                        <input role={'button'} className='' type="radio" id="ex3" name="radio-option" value="3" />                                        
                                        <span className="checkmark"></span>
                                        <label role={'button'} className='ml-4 text-xl font-normal' htmlFor="ex3">3</label>
                                    </div>
                                    <div role={'button'} className='my-2 label flex'>
                                        <input className='' role={'button'} type="radio" id="ex4" name="radio-option" value="4" />
                                        <span className="checkmark"></span>
                                        <label role={'button'} className='ml-4 text-xl font-normal' htmlFor="ex4">4</label>
                                    </div>
                                    <div role={'button'} className='my-2 label flex'>
                                        <input role={'button'} className='' type="radio" id="ex5" name="radio-option" value="5" />
                                        <span className="checkmark"></span>
                                        <label role={'button'} className='ml-4 text-xl font-normal' htmlFor="ex5">5</label>
                                    </div>
                                </div>
                                <button className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 my-8 py-2'>Next
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