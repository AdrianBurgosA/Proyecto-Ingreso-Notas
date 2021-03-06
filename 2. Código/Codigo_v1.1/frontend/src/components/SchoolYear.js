import React, {useState, useEffect} from 'react';
import { getActualSchoolYear } from '../services/periodService';
import Typography from '@mui/material/Typography';

const SchoolYear = () => {

    const [schoolYearValues, setSchoolYearValues] = useState({});

    useEffect(() => {
        async function loadSchoolYear() {
            const response = await getActualSchoolYear();

            if (response.status === 200) {
                setSchoolYearValues(response.data[0]);
            }
        }

        loadSchoolYear();
    });

    return (

        <Typography
            style={{
                marginLeft: '5%'
            }}
        >
            Año lectivo actual: {schoolYearValues.name} <br />
        </Typography>
    
    );

};
export default SchoolYear;

