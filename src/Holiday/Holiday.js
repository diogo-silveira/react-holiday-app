import React from 'react';
import './Holiday.css';
import { getHolidays, Country } from './Repository';
import { validateForm } from '../Util/Helper'

export const Title = () => {
    return (
        <div>
            <div className="col-12 form-group pt-5 text-left">
                <span className="h2">Thinking about next holidays?</span>
                <hr/>
            </div>
        </div>
    );
}

export const LabelEngagementQuestion = () => {
    return (
        <div>
            <div className="col-12 form-group text-left">
                <span>Let's find out next public holidays for you or your family?</span>
            </div>
        </div>
    );
}

export class Holiday extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: '',
            isLongWeekend: true,
            firstName: '',
            countryList: Array(Country),
            filteredCountryList: Array(Country),
            searchCountry: '',
            errors: { firstName: '', selectedCountry: '' }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
   
    componentDidMount(){
        getHolidays()
        .then((res) => this.setState({countryList: res, filteredCountryList: res }))
        .catch(err => console.log(err));
    }

    handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        } else {
          console.error('Invalid Form')
        }
    }

    searchCountryFilter = (event) => {
        const { countryList }= this.state;
        const { value } = event.target;

        let newList = [];

        if (value !== "") {
            let currentList = countryList;
            newList = currentList.filter(item => {
                const lc = item.value.toLowerCase();
                const filter = value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = countryList;
        }

        this.setState({
            filteredCountryList: newList
        });
    }

    handleInputChange = (event) => {
        const { name, value, checked } = event.target;
        const val = name === 'isLongWeekend' ? checked : value;
        let errors = this.state.errors;

        switch(name) {
            case 'firstName':
                errors.firstName = 
                    value.length <= 2 ? 'First name is required' : '';
            break;
            case 'selectedCountry':
                errors.selectedCountry = 
                    value.length <= 1 ? 'Select a holiday destination' : '';
            break;
            default:
            break;
        }

        this.setState({
            errors,
            [name]: val
        });
    }

    CountryFilter = () => {
       return (
            <div className="col-12 col-lg-6">
                <input className="form-control form-control-sm" name="searchCountryFilter" type="text" placeholder="Search..." onChange={ this.searchCountryFilter }></input>
            </div>
        );
    }
      
    SelectCountry = () => {
        const { filteredCountryList, selectedCountry, errors } = this.state;
        const countryItems = filteredCountryList.map((x) => 
            <option key={ x.key } value={ x.key }> { x.value } </option>
        );

        return (  
            <div>
                <div className="col-12 form-group text-left">
                    <div class="justify-content-between pb-1 pr-0 row">
                        <div class="col-6">
                            <span>Select your country</span>
                        </div>
                        { this.CountryFilter() }
                    </div>
                    <select name="selectedCountry" value={ selectedCountry } onChange={ this.handleInputChange }  className="custom-select" size="3">
                        <option value="" defaultValue>Open this select menu</option>
                        {countryItems}
                    </select>
                    { errors.selectedCountry.length > 0 && <span className='pl-2 text-danger'>{errors.selectedCountry}</span>}
                </div>
            </div>
        );
    }

    LongWeekend = () => {
        return (
            <div className="d-flex">
                <div className="col-12 col-md-6 text-left">
                    <span>Long weekend?</span>
                    <label className="switch">
                        <input className="primary" 
                            name="isLongWeekend"
                            onChange={ this.handleInputChange } 
                            checked={ this.state.isLongWeekend } type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        );
    }

    FirstName = () => {
        const {errors} = this.state;
        return (
            <div>
                <div className="col-12 form-group text-left">
                    <span>First name</span>
                    <input className="form-control" 
                        name="firstName"
                        onChange={ this.handleInputChange }
                        value={ this.state.firstName } type="text"/>
                        { errors.firstName.length > 0 && <span className='pl-2 text-danger'>{errors.firstName}</span>}
                </div>
            </div>
        );
    }

    SearchButton = () => {  
        return (
            <div>
                <div className="col-12 form-group text-center">
                    <button type="submit" className="btn btn-primary mb-2 px-5">Search</button>
                </div>
            </div>
        );
    }


    render() {
        return ( 
            <div className="Holiday bg-light position-absolute round rounded w-100">
                <div className="position-relative">
                    <form onSubmit={ this.handleSubmit }>
                        <Title></Title>
                        <LabelEngagementQuestion></LabelEngagementQuestion>
                        { this.SelectCountry() }
                        { this.LongWeekend() }
                        { this.FirstName() }
                        { this.SearchButton() }  
                    </form>
                </div>
            </div>
        );
    }
}

