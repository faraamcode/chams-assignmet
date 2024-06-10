"use client"
import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ContactForm from './contactForm';

function Schedule() {
    const [startDate, setStartDate] = useState(new Date());
    const [showForm, setShowForm] = useState(false);
    const onChange = (date: any) => {
        // const [start, end] = dates;
        setStartDate(date);
        // setEndDate(end);
    };
    return (
        <div className='schedule-container'>
            {!showForm && <div className="calendar-container">
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    // startDate={startDate}
                    // endDate={endDate}
                    timeIntervals={60}
                    inline
                    showTimeSelect

                />
                <button className="btn" onClick={() => {
                    setShowForm(true)
                }}>Select date</button>
            </div>}
            {showForm && <ContactForm />}
        </div>
    )
}

export default Schedule
