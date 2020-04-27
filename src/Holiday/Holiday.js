import React from 'react';
import './Holiday.css';
import { getHolidays, Country } from './Repository';

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

class Holiday extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: 'default',
            isLongWeekend: true,
            firstName: '',
            countryList: Array(Country)
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
   
    componentDidMount(){
        getHolidays()
        .then((res) => this.setState({countryList: res}))
        .catch(err => console.log(err));
    }

    handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.name === 'isLongWeekend' ? target.checked : target.value;
        const name = target.name;
        console.log(name+'='+value);
        this.setState({
          [name]: value
        });
      }
      
    SelectCountry = () => {
        const { countryList, ...rest } = this.state;
        const countryItems = countryList.map( (x) => 
            <option key={ x.key } value={ x.key }> { x.value } </option>
        ) 

        return (
            <div className="container row px-5">
                <div className="col-12 form-group text-left">
                    <span>Select your country</span>
                    <select name="selectedCountry" value={ rest.selectedCountry } onChange={ this.handleInputChange }  className="custom-select" size="3">
                        <option value="default" defaultValue>Open this select menu</option>
                        {countryItems}
                    </select>
                </div>
            </div>
        );
    }

    LongWeekend = () => {
        return (
            <div className="container row px-5">
                <div className="col-3 text-left">
                    <span>Long weekend?</span>
                </div>
                <div className="col-9 d-flex">
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
        return (
            <div className="container row px-5">
                <div className="col-12 form-group text-left">
                    <span>First name</span>
                    <input className="form-control" 
                        name="firstName"
                        onChange={ this.handleInputChange }
                        value={ this.state.firstName } type="text"/>
                </div>
            </div>
        );
    }

    SearchButton = () => {  
        return (
            <div className="container row px-5">
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
                        { Title() }
                        { LabelEngagementQuestion() }
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

 export default Holiday;

