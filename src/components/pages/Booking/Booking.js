import React from 'react'
import FormFields from './FormFields'

const Booking = () => {
    return (
        <form className='form-container'>
            <FormFields htmlFor={"booking-date"} label={"Booking Date"}>
                <input type="date" id='booking-date' value={"10/18/2023"} />
            </FormFields>
            <FormFields htmlFor={"available-time"} label={"Available Time"}>
                <select id='available-time' value={"17:00"}>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="20:00">20:00</option>
                    <option value="01:00">01:00</option>
                    <option value="08:00">08:00</option>
                </select>
            </FormFields>
            <FormFields htmlFor={"guest-number"} label={"Number of Guests"}>
                <input type="number" id='guest-number' max={10} min={1} value={1} />
            </FormFields>
            <FormFields htmlFor={"occasion"} label={"Number of Guests"}>
                <select id='occasion' value={"birthday"}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
            </FormFields>
            <button className='focus-button' type='submit'>Make your reservation</button>
        </form>
    )
}

export default Booking
