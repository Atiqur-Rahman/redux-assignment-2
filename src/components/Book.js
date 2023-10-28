import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeBooking } from '../redux/actions';

const Book = () => {
    const data = useSelector((state) => state.data);
    const size = data.length;
    const dispatch = useDispatch();
    const [bookingData, setBookingData] = useState({});

    const handleChange = (e) => {
        const newBookingData = { ...bookingData };
        newBookingData[e.target.name] = e.target.value;
        setBookingData(newBookingData);
    };

    const handleBook = (e) => {
        e.preventDefault();
        if (size >= 3) {
            alert('Sorry, you can not book more than 3');
        } else {
            if (Object.keys(bookingData).length === 5) {
                dispatch(makeBooking({ ...bookingData, id: size + 1 }));
            } else {
                alert('Please select data properly');
            }
        }
    };

    return (
        <div class="mt-[160px] mx-4 md:mt-[160px] relative">
            <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form class="first-hero lws-inputform">
                    {/* From */}
                    <div class="des-from">
                        <p>Destination From</p>
                        <div class="flex flex-row">
                            <img src="./img/icons/Frame.svg" alt="" />
                            <select class="outline-none px-2 py-2 w-full" name="from" id="lws-from" onChange={(e) => handleChange(e)} required>
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/* To */}
                    <div class="des-from">
                        <p>Destination To</p>
                        <div class="flex flex-row">
                            <img src="./img/icons/Frame.svg" alt="" />
                            <select class="outline-none px-2 py-2 w-full" name="to" id="lws-to" onChange={(e) => handleChange(e)} required>
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/* Date */}
                    <div class="des-from">
                        <p>Journey Date</p>
                        <input type="date" class="outline-none px-2 py-2 w-full date" name="date" id="lws-date" onChange={(e) => handleChange(e)} required />
                    </div>

                    {/* Guests */}
                    <div class="des-from">
                        <p>Guests</p>
                        <div class="flex flex-row">
                            <img src="./img/icons/Vector (1).svg" alt="" />
                            <select class="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" onChange={(e) => handleChange(e)} required>
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    {/* Class */}
                    <div class="des-from !border-r-0">
                        <p>Class</p>
                        <div class="flex flex-row">
                            <img src="./img/icons/Vector (3).svg" alt="" />
                            <select class="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" onChange={(e) => handleChange(e)} required>
                                <option value="" hidden>
                                    Please Select
                                </option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    <button class="addCity" type="submit" id="lws-addCity" onClick={(e) => handleBook(e)}>
                        <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span class="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Book;
