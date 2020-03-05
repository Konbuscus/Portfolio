import axios from "axios"

const baseURL = "https://portfolio-data-api.herokuapp.com/api";
const PROJECTS = "/projects";
const SKILLS = "/skills";
const TECHS = "/techs";
const WORKEXPERIENCES = "/workexperiences";
const EDUCATION = "/educations";

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
    wakeUpHeroku(callback){

        const interval = 25;
        const milliseconds = interval * 60000;
        setTimeout(() => {

            try { 
                console.log(`setTimeout called.`);
                // HTTP GET request to the dyno's url
                axios.get(baseURL).then(() => console.log("wakeUp")); 
            }
            catch (err) { // catch fetch errors
                console.log(`Error fetching ${baseURL}: ${err.message} 
                Will try again in ${interval} minutes...`);
            }
            finally {
    
                try {
                    callback(); // execute callback, if passed
                }
                catch (e) { // catch callback error
                    callback ? console.log("Callback failed: ", e.message) : null;
                }
                finally {
                    // do it all again
                    this.wakeUpHeroku(baseURL, interval, callback);
                }
            }
        }, milliseconds);

    }

}