import axios from 'axios'

const baseUrl = "http://localhost:3001";

export async function saveGrades(gradesData, setGradesData, setValues, setStudentsValues, setSubjectsValues, setCoursesValues){

    try{
        const response = await axios({
            url: `${baseUrl}/grades`,
            method: 'POST',
            data: gradesData
        });
        setGradesData([])
        setValues({
            idSubject: '',
            idCourse: '',
            quimester: 0
        })
        setValues([])
        setStudentsValues([])
        setSubjectsValues([])
        setCoursesValues([])

    }catch(error){
        console.log(error);
    }
};
