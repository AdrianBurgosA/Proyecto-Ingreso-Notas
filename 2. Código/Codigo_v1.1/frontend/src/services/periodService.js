import axios from 'axios'

const baseUrl = "http://localhost:3001";

export async function savePeriod(periodData, setPeriodDataValues, messageBox, setMessage){
    try{
        const response = await axios({
            url: `${baseUrl}/schoolYears`,
            method: 'POST',
            data: periodData
        });
        setMessage({type: 'success', message: 'Año lectivo registrado', isHidden: false})
    }catch(error){
        setMessage({type: 'error', message: 'Hubo problemas al registrar el año lectivo', isHidden: false})
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