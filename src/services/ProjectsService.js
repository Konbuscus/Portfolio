import axios from "axios"

const PROJECTS = "apphz3PNJxSGDcTDC";
const API_KEY = "keyOBSRLs8BciPWqN";
const Axios = axios.create({
    baseURL: "https://api.airtable.com/v0/" + PROJECTS + "/Projects"
});

const AxiosSkills = axios.create({
    baseURL : "https://api.airtable.com/v0/" + PROJECTS + "/Skills"
});

const AxiosTechs = axios.create({
    baseURL : "https://api.airtable.com/v0/" + PROJECTS + "/Techs"
});

const AxiosEducation = axios.create({
    baseURL : "https://api.airtable.com/v0/" + PROJECTS + "/Education"
});

const AxiosWork = axios.create({
    baseURL: "https://api.airtable.com/v0/" + PROJECTS +  "/WorkExperiences"
});


//?api_key="+API_KEY
Axios.defaults.headers.common = {'Authorization': `Bearer ` + API_KEY}
AxiosSkills.defaults.headers.common = {'Authorization': `Bearer ` + API_KEY}
AxiosTechs.defaults.headers.common = {'Authorization': `Bearer ` + API_KEY}
AxiosEducation.defaults.headers.common = {'Authorization': `Bearer ` + API_KEY}
AxiosWork.defaults.headers.common = {'Authorization': `Bearer ` + API_KEY}

export default{
    getProjects(){
        return Axios.get();
    },
    getProject(slug) {
        return Axios.get("?filterByFormula={Slug}='" + slug + "'");
    },
    getSkills(){
        return AxiosSkills.get();
    },
    getTechs(){
        return AxiosTechs.get();
    },
    getEducation(){
        return AxiosEducation.get();
    },
    getWorkExperiences(){
        return AxiosWork.get();
    }    
}