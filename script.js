function getPersonalInfo(callback) {
    var returnPersonalInfo = [];
    var personalInfo = document.getElementById("personal");
    personalInfo.onsubmit = function (event) {
        event.preventDefault();
        var personalData = new FormData(personalInfo);
        var name = personalData.get('name');
        var email = personalData.get('email');
        var city = personalData.get('city');
        returnPersonalInfo = [name, email, city];
        callback(returnPersonalInfo);
    };
}
function getEducation(callback) {
    var education = {};
    var eduInfo = document.getElementById("education");
    eduInfo.onsubmit = function (event) {
        event.preventDefault();
        var eduData = new FormData(eduInfo);
        var school = eduData.get('school');
        var start_edu = eduData.get('start-edu');
        var end_edu = eduData.get('end-edu');
        if (school && start_edu && end_edu) {
            education[school] = [start_edu, end_edu];
            callback(education);
            console.log(education);
            var schoolElement = document.getElementById("school");
            schoolElement.value = '';
            var startedu = document.getElementById("start-edu");
            startedu.value = '';
            var endedu = document.getElementById("end-edu");
            endedu.value = '';
        }
    };
}
function getExperience(callback) {
    var experience = {};
    var expinfo = document.getElementById('experience');
    expinfo.onsubmit = function (event) {
        event.preventDefault();
        var expData = new FormData(expinfo);
        var company = expData.get('company');
        var comp_start = expData.get('start-work');
        var comp_end = expData.get('end-work');
        if (company && comp_start && comp_end) {
            experience[company] = [comp_start, comp_end];
            callback(experience);
            console.log(experience);
            var companyinput = document.getElementById('company');
            companyinput.value = '';
            var company_start_date = document.getElementById('start-work');
            company_start_date.value = '';
            var company_end_date = document.getElementById('end-work');
            company_end_date.value = '';
        }
    };
}
function getSkills(callback) {
    var my_skills = [];
    var skillInfo = document.getElementById('my-skills');
    skillInfo.onsubmit = function (event) {
        event.preventDefault();
        var skillData = new FormData(skillInfo);
        var skills = skillData.get('skill');
        if (skills) {
            var new_skills = skills.split(", ").map(function (skill) { return skill.trim(); });
            my_skills.push.apply(my_skills, new_skills);
            callback(my_skills);
            console.log(my_skills);
            var companyinput = document.getElementById('skill');
            companyinput.value = '';
        }
    };
}
getPersonalInfo(function (info) {
    var Name = document.getElementsByClassName("name-heading");
    if (Name.length > 0) {
        Name[0].innerText = info[0];
    }
    var Email = document.getElementsByClassName("email-class");
    if (Email.length > 0) {
        Email[0].innerHTML = info[1];
    }
    var City = document.getElementsByClassName("city-class");
    if (City.length > 0) {
        City[0].innerHTML = info[2];
    }
});
getEducation(function (edu) {
    console.log("working edu");
    var keys = Object.keys(edu);
    var eduDiv = document.getElementsByClassName("education-class");
    if (eduDiv.length > 0) {
        eduDiv[0].innerHTML = "";
    }
    keys.forEach(function (key) {
        if (edu[key] && edu[key].length >= 2) {
            eduDiv[0].innerHTML += "\n           <div class = 'education-class-div'>\n            <div><h4> ".concat(key, "</h4></div>\n            <div class=\"date\">\n            <p>").concat(edu[key][0], "</p>\n            <p>").concat(edu[key][1], "</p>\n            </div>\n           </div>\n            ");
        }
    });
});
getExperience(function (exp) {
    var keys = Object.keys(exp);
    var expDiv = document.getElementsByClassName("experience-class");
    if (expDiv.length > 0) {
        expDiv[0].innerHTML = "";
    }
    keys.forEach(function (key) {
        if (exp[key] && exp[key].length >= 2) {
            expDiv[0].innerHTML += "\n           <div class = 'experience-class-div'>\n            <div><h4> ".concat(key, "</h4></div>\n            <div class=\"date\">\n            <p>").concat(exp[key][0], "</p>\n            <p>").concat(exp[key][1], "</p>\n            </div>\n           </div>\n            ");
        }
    });
});
getSkills(function (skills) {
    console.log('Skills array:', skills);
    var skillDiv = document.getElementsByClassName("skill-class");
    if (skills && skills.length > 0) {
        var skillListHTML = '';
        for (var i = 0; i < skills.length; i += 3) {
            skillListHTML += '<ul>';
            for (var j = 0; j < 3; j++) {
                if (i + j < skills.length) { // Ensure we don't go out of bounds
                    skillListHTML += "<li class=\"sk-list\">".concat(skills[i + j], "</li>"); // Add the skill
                }
            }
            skillListHTML += '</ul>';
        }
        skillDiv[0].innerHTML = skillListHTML;
    }
});
