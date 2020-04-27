import { countriesList } from '../Fake/Country'

export const Country = {
    key: null,
    value: null
}

export const getHolidays = () => new Promise((resolve, reject) => {
    if(countriesList.length > 0){
        resolve(countriesList);
    }else{
        reject('could not retrieve data');
    }
});

    
    