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
                        <div className='mb-6'>
                            <h2 className='text-xl font-medium text-center mt-12 mb-11'>What type of event?</h2>
                            <form className='flex flex-col items-center '>
                                <div className='flex flex-col'>
                                    <div role={'button'} className='my-2'>
                                        <input role={'button'} className=' border-gray-800' type="radio" id="ex1" name="radio-option" value="Wedding" />
                                        <label role={'button'} className='ml-4  text-xl font-normal' htmlFor="ex1">Wedding</label>
                                    </div>
                                    <div role={'button'} className='my-2'>
                                        <input role={'button'} className='' type="radio" id="ex2" name="radio-option" value="Formal" />
                                        <label role={'button'} className='ml-4 text-xl font-normal' htmlFor="ex2">Formal</label>
                                    </div>
                                    <div role={'button'} className='my-2'>
                                        <input role={'button'} className='' type="radio" id="ex3" name="radio-option" value="Birthday Party" />
                                        <label role={'button'} className='ml-4 text-xl font-normal' htmlFor="ex3">Birthday Party</label>
                                    </div>
                                    <div role={'button'} className='my-2'>
                                        <input className='' role={'button'} type="radio" id="ex4" name="radio-option" value="Photo Shoot" />
                                        <label role={'button'} className='ml-4 text-xl font-normal' htmlFor="ex4">Photo Shoot</label>
                                    </div>
                                    <div role={'button'} className='my-2'>
                                        <input role={'button'} className='' type="radio" id="ex5" name="radio-option" value="Fashion Show" />
                                        <label role={'button'} className='ml-4 text-xl font-normal' htmlFor="ex5">Fashion Show</label>
                                    </div>
                                </div>
                                <button className='bgcolor2 w-1/2 text-white rounded-xl  text-xl font-medium mb-5 my-8 py-2'>Next
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