import { Form, Formik } from 'formik';
import * as yup from "yup";
import React from 'react';
import { useState,useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { optionsServiceLoction } from '../../utils/options';
import { DatePickersStart, TimePickers } from '../each-profile/cinematography/orderRequest/DateTimeInputs';
import { DatePickersEnd } from '../each-profile/photography/orderRequest/DateTimeInputs';
import CLoso from './icons/Close';
import GoBack from './icons/GoBack';
import Input from './Input';
import SelectInput from './SelectInput';
import moment from "moment";
import toast from 'react-hot-toast';


const InformationModal = ({setModal,setShowForm,firstPage,setFirstPage,modal,fourthPage, vendor,setFourthPage,packageValue,packageObj}) => {
    const [secondPage, setSecondPage] = useState(false)
    const [thirdPage, setThirdPage] = useState(false)
       
    const [description,setDescription]=useState('')
    const [eventType,setEventType]=useState('')
    const [customerAge,setCustomerAge]=useState([])
    const [peopleNumber,setPeopleNumber]=useState('')
  
    
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const [startTime, setStartTime] = useState('');
  const [address,setAddress]=useState('')

  const [location, setlocation] = useState([])
  const [errorText,setErrorText]=useState('')


  const handleOrderDataForPageOne = async(e)=>{      
        e.preventDefault()            
       
        setlocation(location)        
        setAddress(e.target.yourAddress.value)
        setStartTime(startTime?._i)
        setDescription(e.target.detailsAboutBooking.value)     
       
          setFirstPage(false)
          setSecondPage(true)
    }
    
    const changeWedding = (e)=>{
        setEventType(e.target.value)      
        setErrorText(false)                 
    }
    const changeFormal = (e)=>{
        setEventType(e.target.value)    
        setErrorText(false)               
      }
    const changeBirthday = (e)=>{
        setEventType(e.target.value)
        setErrorText(false)               
    }
    const changePhotoshoot = (e)=>{
        setEventType(e.target.value)
        setErrorText(false)               
    }
    const changeFashion = (e)=>{
        setEventType(e.target.value)
        setErrorText(false)               
    }
    
    const handleOrderDataForPageTwo = (e)=>{
      e.preventDefault()              
      if (!eventType) {
        setErrorText(true)
      } else if(eventType){
        setSecondPage(false)
        setThirdPage(true)        
        setErrorText(false)               
      }
    }

    const checkUnder13=(e)=>{
      setCustomerAge([...customerAge],e.target.value)
      setErrorText(false)
    }
    const check1317=(e)=>{
      setCustomerAge([...customerAge,e.target.value])
      setErrorText(false)
    }
    const check1828=(e)=>{
      setCustomerAge([...customerAge,e.target.value])
      setErrorText(false)
    }
    const check2944=(e)=>{
      setCustomerAge([...customerAge,e.target.value])
      setErrorText(false)
    }
    const chec4565=(e)=>{
      setCustomerAge([...customerAge,e.target.value])        
      setErrorText(false)
    }
    const check65older=(e)=>{
      setCustomerAge([...customerAge,e.target.value])     
      setErrorText(false)   
      }
       
        const handleOrderDataForPageThree = (e)=>{
          e.preventDefault()     
          if(customerAge.length===0){
            setErrorText(true)
          }              
          else{
            setThirdPage(false)
            setFourthPage(true)        
          }
    }

    const change1 =(e)=>{
        setPeopleNumber(e.target.value)
        setErrorText(false)
      }
    const change2 =(e)=>{
        setPeopleNumber(e.target.value)
        setErrorText(false)
      }
    const change3 =(e)=>{
        setPeopleNumber(e.target.value)
        setErrorText(false)
      }
    const change4 =(e)=>{
        setPeopleNumber(e.target.value)
        setErrorText(false)
      }
    const change5 =(e)=>{
        setPeopleNumber(e.target.value)
        setErrorText(false)
    }
  
    let customerData ={
      packageObj:packageObj,
     vendor:vendor,
      location:location,
      address:address,
      startTime:startTime,
      startDate:startDate,    
        description:description,
        eventType:eventType,
        customerAge:customerAge,
        peopleNumber:peopleNumber
    }
  
    const handleOrderDataForPageFour = (e)=>{
        e.preventDefault()    
        if (!peopleNumber) {
          setErrorText(true)
        } else {          
          setModal(false);
          // setShowForm(true)
          toast.success('Data passed')
          console.log(customerData)
        }               
    }
// Alumni Association

   
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
    let currOrderTime = [
      { id: 0, value: "I want to book for one day" },
      { id: 1, value: " I want to book for multiple day" },
    ];

    let [currOrder, setCurrOrder] = useState(currOrderTime[0].id);
    let commonFieldSchema = yup.mixed().nullable().required("Required field");
    let initialValues = {
        city: "",
        detailsAboutBooking: "",
        yourAddress: "",
        startTime: "",
        endTime: "",
        startDate: "",
        endDate: "",
      };
      
      let onSubmit = async (values, actions) => {
        await debounce(1000);
        try {

            
          if (currOrder === 0 && durationTime?.hours < 1) {
            toast.error(`Time must be more than 1 hour`);
            return actions.setSubmitting(false);
          }
    
          if (currOrder === 1 && durationDates.days < 2) {
            toast.error(`Date must be more than 2 Day`);
            return actions.setSubmitting(false);
          }
          if (currOrder === 0) {
            let { endDate, ...valueOfSigleDay } = values;
            let payloadDataSingle = {
              ...valueOfSigleDay,
              totalTime: `${durationTime?.hours} hour and ${durationTime?.min} minutes`,
              totalMoney: durationTime.totalmoney,
            };
            if (user?.phoneNumber === null) {
              toast.error(`Please update your phone number.`);
              router.push("/dashboard/profile");
            }
            if (user?.phoneNumber !== null) {
              let data = {
                address: payloadDataSingle?.yourAddress,
                name: user?.firstName + " " + user?.lastName,
                phoneNumberUser: user?.phoneNumber,
                phoneNumberVendor: passData?.vendorNumber,
                package: JSON.stringify(passData),
                bookedDay: payloadDataSingle?.startDate,
                totalPayment: payloadDataSingle?.totalMoney,
                vendorID: passData?.vendorID,
                userID: user?.id,
                city: payloadDataSingle?.city?.label,
                start: payloadDataSingle?.startTime,
                end: payloadDataSingle?.endTime,
                total: payloadDataSingle?.totalTime,
                initialPayment: 0,
                duePayment: payloadDataSingle?.totalMoney,
                status: "Pending",
                title: passData?.title,
                packageName: passData?.packName + " " + passData?.packageStandard,
                notes: values?.detailsAboutBooking || "",
              };
              await API.graphql({
                query: mutations.createOrders,
                variables: { input: data },
              });
              await fetch(
                "https://ouorw5sokfjhv44dyacow5acju0ucjeg.lambda-url.ap-southeast-1.on.aws/",
                {
                  method: "POST",
                  mode: "no-cors",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    email: passData?.vendorEmail,
                    subject: "New order request on eventizer",
                    body: "You have a new order request on eventizer. Please approve or reject the order request.",
                  }),
                }
              );
              router.push("/dashboard/my-booking");
            }
          }
    
          if (currOrder === 1) {
            let { startTime, endTime, ...valueOfMultipleDay } = values;
            let payloadDataMulti = {
              ...valueOfMultipleDay,
              totalDays: durationDates.days,
              totalMoney: durationDates.totalmoney,
            };
            if (user?.phoneNumber === null) {
              toast.error(`Please update your phone number.`);
              router.push("/dashboard/profile");
            }
            if (user?.phoneNumber !== null) {
              let data = {
                address: payloadDataMulti?.yourAddress,
                name: user?.firstName + " " + user?.lastName,
                phoneNumberUser: user?.phoneNumber,
                phoneNumberVendor: passData?.vendorNumber,
                package: JSON.stringify(passData),
                totalPayment: payloadDataMulti?.totalMoney,
                vendorID: passData?.vendorID,
                userID: user?.id,
                city: payloadDataMulti?.city?.label,
                start: payloadDataMulti?.startDate,
                end: payloadDataMulti?.endDate,
                total: payloadDataMulti?.totalDays,
                initialPayment: 0,
                duePayment: payloadDataMulti?.totalMoney,
                status: "Pending",
                title: passData?.title,
                packageName: passData?.packName + " " + passData?.packageStandard,
                notes: values?.detailsAboutBooking || "",
              };
              await API.graphql({
                query: mutations.createOrders,
                variables: { input: data },
              });
              router.push("/dashboard/my-booking");
            }
          }
        } catch (error) {
         
        }
      };
      
     
useEffect(() => {
    let array = [];
    vendor?.serviceLocation?.map((e) => {
      let k = JSON.parse(e);
      array.push(k);
    });
    setlocation(array);
  }, []);


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
                      <h2 className='text-xl font-medium text-center mt-12 mb-8'>Fillup some information to book</h2>
                      <Formik
                          initialValues={initialValues}
                          validationSchema={yup.object().shape({
                            city: commonFieldSchema,
                            detailsAboutBooking: yup
                              .string()
                              .min(5, "Minimum 5 letter required")
                              .max(500, "Maximum 500 letter required")
                              .required("Required field")
                              .matches(/^([^0-9@]*)$/, "Only alphabets are allowed"),
                    
                            yourAddress: yup
                              .string()
                              .min(5, "Minimum 5 letter required")
                              .required("Required field"),
                    
                            startTime: yup
                            .string()
                            .min(5, "Minimum 5 letter required")
                            .required("Required field"),
                    
                            startDate:   yup
                            .string()
                            .min(5, "Minimum 5 letter required")
                            .required("Required field"),
                            endDate: commonFieldSchema,
                          })}
                          validateOnBlur={true}
                 onSubmit={onSubmit}
                     >


                    {(props) => (
                        
                      <Form onSubmit={handleOrderDataForPageOne} className='flex flex-col justify-center items-center w-320px  md:w-[454px] mx-auto'>
                          <div className='flex justify-center '>
  
                              <div className='mr-1 md:w-1/2 w-[150px]'>
                              <SelectInput
                           
                              options={location}
                              placeholder="Select City"
                              name="city"
                              handleBlur={props.setFieldTouched}
                              value={props.values.city}
                              handleChange={props.setFieldValue}
                              error={
                                    props.touched.city &&
                                      props.errors.city &&
                                   !props.values.city
                                   ? props.errors.city
                                       : ""
                              }
                            />
                              </div>
                              <div className='ml-1 md:w-1/2 w-[150px]'>
                                  <Input
                                      type="text"
                                      name="yourAddress"
                                      placeholder="Write Your Address"
                                     onChange={()=>setAddress(value)}
                                      value={props.values.yourAddress}
                                      handleChange={props.handleChange}
                                      handleBlur={props.handleBlur}
                                      error={
                                        props.touched.yourAddress && props.errors.yourAddress
                                          ? props.errors.yourAddress
                                          : ""
                                      }
                                  />
                              </div>
                          </div>
                          <div className={` md:w-[492px]  w-[310px] font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px] mb-5`}>
                          <DatePickersStart
                  name="startDate"
                  startDate={startDate}
                  endDate={endDate}
                  fieldProps={props}
                  
                  error={
                    props.touched.startDate && props.errors.startDate
                      ? props.errors.startDate
                      : ""
                  }
                  handleChange={(value) => setStartDate(value)}
                />
                          </div>
                          <div className=''>
                              <div className=' md:w-[492px]  w-[310px] font-14 sm:font-16 md:font-18 rounded-[8px] px-2 sm:px-[20px] h-[38px] sm:h-[45px] '>
                              <TimePickers
                      value={startTime}
                      name="startTime"
                      fieldProps={props}
                      handleChange={(value) => {
                        setStartTime(value);
                      }}
                      error={
                        props.touched.startTime && props.errors.startTime
                          ? props.errors.startTime
                          : ""
                      }
                      placeholderText="Time"
                    />
                              </div>
                             
                          </div>
                          <div className='mt-4 w-[310px] md:w-auto'>
                              <Input
                                  istextArea={true}
                                  name="detailsAboutBooking"
                                  placeholder="Write something about your booking"
                                  handleChange={props.handleChange}
                                  handleBlur={props.handleBlur}
                                  onBlur={()=>setDescription(value)}
                                  error={
                                    props.touched.detailsAboutBooking &&
                                      props.errors.detailsAboutBooking
                                      ? props.errors.detailsAboutBooking
                                      : ""
                                  }  
                              />
                          </div>
                              <input
                              
                            role={'button'}
                            className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 py-2 my-6'
                            type="submit" value="Next" />                                              
                      </Form>
                      )}
                      </Formik>
                  </>}
  
                  {/* Second page starts from here */}
  
                  {
                      secondPage && <>
                          <div className='mb-6'>
                              <h2 className='text-xl font-medium text-center mt-12 mb-8'>What type of event?</h2>
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
                                  <div>
                                   {errorText&& <small className='text-sm text-red-500 text-center'>*Please select one</small>}
                                  </div>
                                  <input
                                  // disabled={!eventType}
                            role={'button'}
                            className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 py-2 my-6'
                            type="submit" value="Next" />                          
                              </form>
                          </div>
                      </>
                  }
  
                  {/* Third page starts from here */}
  
                  {
                      thirdPage && <>
                          <div>
                              <h2 className='text-xl font-medium text-center mt-12 mb-8'>How old are member?</h2>
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
                                  <div>
                                   {errorText&& <small className='text-sm text-red-500 text-center'>*Please select one</small>}
                                  </div>
                                  <input
                                  // disabled={customerAge.length===0}
                            role={'button'}
                            className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 py-2 my-6'
                            type="submit" value="Next" />       
                              </form>
                          </div>
                      </>
                  }
  
                  {/* Fourth page starts from here */}
                  {
                      fourthPage && <>
                          <div className='mb-6'>
                              <h2 className='text-xl font-medium text-center mt-12 mb-8'>How many people want to take makeup service?</h2>
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
                                  <div>
                                   {errorText&& <small className='text-sm text-red-500 text-center'>*Please select one</small>}
                                  </div>
                                 <input 
                                                   
                            role={'button'}
                            className='bgcolor2 w-1/2 text-white rounded btn-hover  text-xl font-medium mb-5 py-2 my-6'
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