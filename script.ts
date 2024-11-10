function getPersonalInfo(callback: (info: string[])=>void){


    let returnPersonalInfo : string[]=[]
const personalInfo = document.getElementById("personal") as HTMLFormElement;
personalInfo.onsubmit =  function (event) {
    event.preventDefault();
    let personalData = new FormData(personalInfo);
    const name = personalData.get('name') as string
    const email = personalData.get('email') as string
    const city = personalData.get('city') as string   
     returnPersonalInfo= [name, email,city]   
     callback(returnPersonalInfo)      
}
}   

function getEducation(callback:(edu:{ [key: string]: [string, string] })=>void){
    const education: { [key: string]: [string, string] } = {};
const eduInfo = document.getElementById("education") as HTMLFormElement;
    eduInfo.onsubmit= function (event) {
        event.preventDefault();
        let eduData = new FormData(eduInfo);
        const school = eduData.get('school') as string
        const start_edu = eduData.get('start-edu') as string
        const end_edu = eduData.get('end-edu') as string     
        
        if(school&& start_edu && end_edu){
            education[school] = [start_edu, end_edu]
            callback(education)
            console.log(education)
            const schoolElement = document.getElementById("school") as HTMLInputElement;
            schoolElement.value = ''; 
            const startedu = document.getElementById("start-edu") as HTMLInputElement;
            startedu.value = ''; 
            const endedu = document.getElementById("end-edu") as HTMLInputElement;
            endedu.value = ''; 
        }
        
    } 

   
}

function getExperience(callback:(exp:{ [key: string]: [string, string] })=>void){
    const experience : {[key: string]:[string,string]} = {}  

const expinfo = document.getElementById('experience') as HTMLFormElement;
expinfo.onsubmit = function(event){
    event.preventDefault();
    let expData = new FormData(expinfo)
    const company = expData.get('company') as string
    const comp_start = expData.get('start-work') as string
    const comp_end = expData.get('end-work') as string

    if(company && comp_start && comp_end){
        experience[company] =[comp_start, comp_end]
        callback(experience)
        console.log(experience)
        const companyinput =  document.getElementById('company') as HTMLInputElement
        companyinput.value =''
        const company_start_date = document.getElementById('start-work') as HTMLInputElement
        company_start_date.value=''
        const company_end_date = document.getElementById('end-work') as HTMLInputElement
        company_end_date.value= ''
    }

}
}


function getSkills(callback:(exp:string[])=>void){
    let my_skills : string[] = []   

const skillInfo = document.getElementById('my-skills') as HTMLFormElement;
skillInfo.onsubmit = function(event){
    event.preventDefault();
    let skillData = new FormData(skillInfo)
    const skills = skillData.get('skill') as string


    if(skills){
        let new_skills = skills.split(", ").map(skill => skill.trim());
            my_skills.push(...new_skills);
        callback(my_skills)
        console.log(my_skills);
        
         const companyinput =  document.getElementById('skill') as HTMLInputElement
         companyinput.value =''
       
    }

}
}

getPersonalInfo((info) => {
    const Name = document.getElementsByClassName("name-heading") as HTMLCollectionOf<HTMLHeadingElement>
    if(Name.length>0){
        Name[0].innerText = info[0]
    } 
    const Email = document.getElementsByClassName("email-class") as HTMLCollectionOf<HTMLHeadingElement>
    if(Email.length>0){
        Email[0].innerHTML = info[1]
    }
    const City = document.getElementsByClassName("city-class") as HTMLCollectionOf<HTMLHeadingElement>
    if(City.length>0){
        City[0].innerHTML = info[2]
    }
});

getEducation((edu)=>{
    console.log("working edu");
    
    const keys = Object.keys(edu)
    const eduDiv = document.getElementsByClassName("education-class") as HTMLCollectionOf<HTMLDivElement>
    
    if(eduDiv.length>0){
        eduDiv[0].innerHTML=""
    }
    keys.forEach((key)=>{
        if(edu[key] && edu[key].length>=2){
            eduDiv[0].innerHTML += `
           <div class = 'education-class-div'>
            <div><h4> ${key}</h4></div>
            <div class="date">
            <p>${edu[key][0]}</p>
            <p>${edu[key][1]}</p>
            </div>
           </div>
            `
        }    
    })
})
getExperience((exp)=>{
 
    const keys = Object.keys(exp)
    const expDiv = document.getElementsByClassName("experience-class") as HTMLCollectionOf<HTMLDivElement>
    
    if(expDiv.length>0){
        expDiv[0].innerHTML=""
    }
    keys.forEach((key)=>{
        if(exp[key] && exp[key].length>=2){
            expDiv[0].innerHTML += `
           <div class = 'experience-class-div'>
            <div><h4> ${key}</h4></div>
            <div class="date">
            <p>${exp[key][0]}</p>
            <p>${exp[key][1]}</p>
            </div>
           </div>
            `
        }    
    })
})
getSkills((skills)=>{
    console.log('Skills array:', skills);
    const skillDiv = document.getElementsByClassName("skill-class") as HTMLCollectionOf<HTMLDivElement>
    if(skills && skills.length>0){
        let skillListHTML = ''
       for(let i = 0; i< skills.length; i+=3){
        skillListHTML += '<ul>'
        for(let j = 0; j<3; j++){
            if (i + j < skills.length) { // Ensure we don't go out of bounds
                skillListHTML += `<li class="sk-list">${skills[i + j]}</li>`; // Add the skill
            }
        }     

        skillListHTML += '</ul>'; 
        
       }
       skillDiv[0].innerHTML = skillListHTML
             
    }

})