import React from 'react';
import './Holiday.css';


const Title = () => {
    return (
        <div className="row px-5">
            <div className="col-12 form-group pt-5 text-left">
                <span className="h2">Thinking about next holidays?</span>
                <hr/>
            </div>
        </div>
    );
}

const LabelEngagementQuestion = () => {
    return (
        <div className="container row px-5">
            <div className="col-12 form-group text-left">
                <span>Let's find out next public holidays for you or your family?</span>
            </div>
        </div>
    );
}

const SelectCountry = () => {
    return (
        <div className="container row px-5">
            <div className="col-12 form-group text-left">
                <span>Select your country</span>
                <select className="custom-select" size="3">
                    <option defaultValue>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

            </div>
        </div>
    );
}

const LongWeekend = () => {
    return (
        <div className="container row px-5">
            <div className="col-3 text-left">
                <span>Long weekend?</span>
            </div>
            <div className="col-9 d-flex">
                <label className="switch">
                    <input className="primary" type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
}

const FirstName = () => {
    return (
        <div className="container row px-5">
            <div className="col-12 form-group text-left">
                <span>First name</span>
                <input className="form-control" type="text"/>
            </div>
        </div>
    );
}

const SearchButton = () => {
    return (
        <div className="container row px-5">
            <div className="col-12 form-group text-center">
                <button type="submit" className="btn btn-primary mb-2 px-5">Search</button>
            </div>
        </div>
    );
}
const Holiday = () => {
    return ( 
        <div className="Holiday bg-light position-absolute round rounded w-100">
            <div className="position-relative">
                { Title() }
                { LabelEngagementQuestion() }
                { SelectCountry() }
                { LongWeekend() }
                { FirstName() }
                { SearchButton() }
            </div>
        </div>
        
    );
 }

 export default Holiday;

