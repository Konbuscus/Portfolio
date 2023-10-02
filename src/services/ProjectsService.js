import axios from "axios"

const baseURL = "https://portfolio-api-4u9u.onrender.com/api";
const PROJECTS = "/projects";
const SKILLS = "/skills";
const TECHS = "/techs";
const WORKEXPERIENCES = "/workexperiences";
const EDUCATION = "/educations";
const CONTACTS = "/contact";
const CRYPTOS = "/getCryptos";

export default{
    getProjects(){
    
        try{
            const response =  axios.get(baseURL + PROJECTS);
            return response;
        }catch(err){
            console.log(err);
        }
    },
    getProject(_id) {
        try{
            const response =  axios.get( baseURL + PROJECTS + "/" + _id);
            return response;
        }catch(err){
            console.log(err);
        }
    },
    getSkills(){
        
        try{
            const response =  axios.get(baseURL + SKILLS);
            return response;
        }catch(err){
            console.log(err);
        }
    },
    getTechs(){
        
        try{
            const response =  axios.get(baseURL + TECHS);
            return response;
        }catch(err){
            console.log(err);
        }
    },
    getEducation(){
        
        try{
            const response =  axios.get(baseURL + EDUCATION);
            return response;
        }catch(err){
            console.log(err);
        }
    },
    getWorkExperiences(){
       
        try{
            const response =  axios.get(baseURL + WORKEXPERIENCES);
            return response;
        }catch(err){
            console.log(err);
        }
    },
    getContacts(){
        try{
            const response = axios.get(baseURL + CONTACTS);
            return response;
        }catch(err){
            console.log(err);
        }
    },
    getCryptos(){
        try {
            const response = axios.get(baseURL + CRYPTOS);
            return response
        }
        catch(err){
            console.log(err);
        }
    }
}
