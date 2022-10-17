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
    const [secondPage, setsecondPage] = useState(true)
    const [thirdPage, setthirdPage] = useState(false)

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

                        <button className='bgcolor2 w-1/2 text-white rounded-xl  text-xl font-medium mb-5 py-2'>Next
                        </button>

                    </div>
                </>}
                {
                    secondPage && <>
                        <div>
                            <h2 className='text-xl font-medium text-center mt-12 mb-11'>What type of event?</h2>
                            <form className='flex justify-center flex-col items-center'>
                                <div>
                                    <input className='w-9 border-gray-800' type="radio" id="ex1" name="radio-option" value="ex1" />
                                    <label className='ml-4 text-xl font-normal' htmlFor="ex1">Ex1</label>
                                </div>
                                <div className='test'>
                                    <input className='' type="radio" id="ex2" name="radio-option" value="ex2" />
                                    <label className='ml-4 text-xl font-normal' htmlFor="ex2">Ex2</label>
                                </div>
                                <div>
                                    <input className='' type="radio" id="ex3" name="radio-option" value="ex3" />
                                    <label className='ml-4 text-xl font-normal' htmlFor="ex3">Ex3</label>
                                </div>

                            </form>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default InformationModal;