import axios from 'axios'

const baseUrl = "http://localhost:3001";

export async function savePeriod(periodData, setPeriodDataValues){
    try{
        const response = await axios({
            url: `${baseUrl}/schoolYears`,
            method: 'POST',
            data: periodData
        });
        window.alert('Año lectivo registrado');
    }catch(error){
        console.log(error);
        window.alert('Fallo en el registro: ' + error);
    }
    setPeriodDataValues({
        name: '',
        startDate: new Date(),
        endDate: new Date()
    });
};

export async function getSchoolYears(){
    try{
        const response = await axios({
            url: `${baseUrl}/schoolYears`,
            method: 'GET',
        })
        
        return response;
  
    }catch(error){
      console.log(error)
    }
};