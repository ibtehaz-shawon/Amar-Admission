//connect and show data.
//write the boards of Bangladesh with values and everything else.
//recieve success message after each submission.



// global variable zone
var globalGroup = "";
var array = ["Public University"];
var privateArray = ["Private University"];
var saveCounter = 1;
var userName = "";
var sscGPA = 0;
var hscGPA = 0;
// global variable zone

//butmton event listener
var page1 = document.getElementById("page1");
var page2_signUp = document.getElementById("page2_button_signup");
var page2_logIn = document.getElementById("page2_button_logIN");
var page3_logIn = document.getElementById("page3_logIN");
var page5_signUp = document.getElementById("page5_Sign_up");
var page7_sscInfo = document.getElementById("page7_button_next");
var page8_hscInfo = document.getElementById("page8_button_next");
var page12_hscSubject = document.getElementById("page12_button_next");
var page13_hscSubject = document.getElementById("page13_button_next");
var page14_hscSubject = document.getElementById("page14_button_next");
var page9_govt_click = document.getElementById("page9_govt_click");
var page9_private_click = document.getElementById("page9_private_click");

var page7_profile = document.getElementById("page7_profile");
var page8_profile = document.getElementById("page8_profile");
var page9_profile = document.getElementById("page9_profile");
var page10_profile = document.getElementById("page10_profile");
var page11_profile = document.getElementById("page11_profile");
var page12_profile = document.getElementById("page12_profile");
var page13_profile = document.getElementById("page13_profile");
var page14_profile = document.getElementById("page14_profile");
var page16_profile = document.getElementById("page16_profile");
var page17_profile = document.getElementById("page7_profile");

var page18_button =document.getElementById("page18_button");


//button event listener

//button event functions

page17_profile.onclick = function()
{
    getBack("page17");
    
};


page16_profile.onclick = function()
{
    getBack("page16");
    
};

page14_profile.onclick = function()
{
    getBack("page14");
    
};
page13_profile.onclick = function()
{
    getBack("page13");
    
};

page12_profile.onclick = function()
{
    getBack("page12");
    
};

page11_profile.onclick = function()
{
    getBack("page11");
    
};

page10_profile.onclick = function()
{
    getBack("page10");
    
};

page9_profile.onclick = function()
{
    getBack("page9");
    
};

page8_profile.onclick = function()
{
    getBack("page8");
    
};

page7_profile.onclick = function()
{
    getBack("page7");
    
};

function getBack(id)//for profile only
{
    alert("I am in "+id);
    page18_button.onclick = function()
    {
        PageJumping(id);
    };

}

page9_private_click.onclick = function()
{
    page9_private_click.style.backgroundColor = "#6591D5";
    getPrivateResult();
    var page11_p = document.getElementById("page11_p");
    
    for(i =0; i < privateArray.length;i++)
    {
      page11_p.innerHTML = page11_p.innerHTML + privateArray[i] +"<br />" ;
    }
    
    saveInfo(privateArray);

    if(saveCounter === 5)
    { 
        saveCounter = 1;
    }

    saveCounter++;
    PageJumping("page11");
    
};

function getPrivateResult()  
{//get result will be called from the button on result page
    var flag = checkNet();
    if(flag === true)
    {

        $.getJSON(
        "/admin.php",
        {   result: 2
        },
        save2
        );
    }
    else
    {   
        alert("please check internet connection");
    }
}

function save2(resultArray)
{
    privateArray = resultArray;
}


page9_govt_click.onclick = function()
{
    page9_govt_click.style.backgroundColor = "#6591D5";
    
    getResult();
    var page10_p = document.getElementById("page10_p");

    for(i =0; i< array.length;i++)
    {
      page10_p.innerHTML = page10_p.innerHTML + array[i] +"<br />" ;
    }
    //saving the information in the localStorage
    saveInfo(array);
    PageJumping("page10");
    
};

function getResult()  
{//get result will be called from the button on result page

    var flag = checkNet();
    if(flag === true)
    {

        $.getJSON(
        "/admin.php",
        {   result: 1
        },
        save
        );
    }
    else
    {   
        alert("please check internet connection");
    }
}

function save(resultArray)
{
    array = resultArray;
}


page14_hscSubject.onclick = function()
{
    page14_hscSubject.style.backgroundColor = "#6591D5";
    arts_subject("page14_bangla_gpa","page14_english_gpa","page14_arts1_gpa","page14_arts2_gpa","page14_arts3_gpa","page14_arts4_gpa","page14_fourth_subject");

};

page13_hscSubject.onclick = function()
{
    page13_hscSubject.style.backgroundColor = "#6591D5";
    commerce_subject("page13_bangla_gpa","page13_english_gpa","page13_commerce1_gpa", "page13_commerce2_gpa","page13_commerce3_gpa", "page13_commerce4_gpa","page13_fourth_subject");
};


page12_hscSubject.onclick = function()
{
    page12_hscSubject.style.backgroundColor = "#6591D5";
    science_subject("page12_bangla_gpa","page12_english_gpa","page12_physics_gpa","page12_chemistry_gpa","page12_maths_gpa","page12_biology_gpa","page12_fourth_subject");
};


page8_hscInfo.onclick = function()
{
    page8_hscInfo.style.backgroundColor = "#6591D5";
    get_student_info("HSC","page8_hsc_year_dropDown", "page8_hsc_board_dropDown", "page8_input_gpa","page8_hsc_group", "page9","page8");
};


page7_sscInfo.onclick = function()
{
    page7_sscInfo.style.backgroundColor = "#6591D5";
    get_student_info("SSC","page7_ssc_year_dropDown", "page7_ssc_board_dropDown", "page7_input_gpa","page7_ssc_group", "page8","page7");
};


page5_signUp.onclick = function()
{
    page5_signUp.style.backgroundColor = "#6591D5";
    signUp("page5_input_1", "page5_input_2", "page5_input_3", "page5_input_4");    
};


page3_logIN.onclick = function()
{
    page3_logIN.style.backgroundColor = "#6591D5";
    logIn("page3_email","page3_password");
};


page1.onclick = function()
{
    disableFirstPage();
};



//button event functions end


//functions
function disableFirstPage() 
{
    PageJumping("page2");
    //activate scrolling after finishing.
    //disableScrolling(); 
}

function PageJumping(x)
{
    window.location.hash = x; 
}
        
function disableScrolling()
{
    document.body.style.overflow = "hidden";
}

function checkNet()
{
    var online = window.navigator.onLine;
    if(online === true)
    {
        return true;
    }
    else
    {
        return false;
    }
}


function logIn(phoneId, passwordId)
{//runLogiN check

    var x = validatePhoneNumber(phoneId);

    if (x === true) //call server connection method here;
    {
        var phonenumber = document.getElementById(phoneId).value;
        var password = document.getElementById(passwordId).value;

        runLogIn(phonenumber,password);
    }
    else
    {
        alert("invalid credentials");
    }

}

function signUp(nameId,phoneId, passwordId, confirmId)
{//run signUp check.
//check again.

    var phoneFlag = validatePhoneNumber(phoneId);
    var x = validatePassword(passwordId);
    var y = validatePassword(confirmId);

    var passwordMatch = confirmPassword(passwordId,confirmId);

    if(phoneFlag === true && passwordMatch === true)
    {
        var name = document.getElementById(nameId).value;
        var phonenumber = document.getElementById(phoneId).value;
        var password = document.getElementById(passwordId).value;
        userName = name;

        //send data from here
        runSignUp(name, phonenumber, password);
    }
}


function validatePhoneNumber(id) //done
// showing error message.
//length of phonenumber === 11. [MUST]
{

    var x = document.getElementById(id).value;

    if((x.substring(0,2) !== "01") || (x.length !== 11))
    {
       document.getElementById(id).style.border = "thick solid red";
       return false
    }
    else
    {
       return true;
    }
}


function validatePassword(id) //done
{
    var x = document.getElementById(id).value;

    if(x.length < 6)
    {
        document.getElementById(id).style.border = "thick solid red";
        alert("password cannot be less than 6 words");
        return false;
    }
    else if(x.length > 12)
    {
        document.getElementById(id).style.border = "thick solid red";
        return false;
    }
    else
    {
        return true;
    }
}

function confirmPassword(id1,id2)//done
{
    var password1 = document.getElementById(id1).value;
    var password2 = document.getElementById(id2).value;

    if(password1 === password2)
    {
        return true;
    }
    else
    {
        document.getElementById(id1).style.border = "thick solid red";
        document.getElementById(id2).style.border = "thick solid red";
        return false;
     }

}



function science_subject(subject1, subject2, subject3, subject4, subject5, subject6, foruthSub)
{
    var subject_1 = "Bangla";
    var subject_2 = "English";
    var subject_3 = "Physics";
    var subject_4 = "Chemistry";
    var subject_5 = "Math";
    var subject_6 = "Biology";

    var alertMessage = "";

    var subject_1_grade = document.getElementById(subject1).value;
    var subject_2_grade = document.getElementById(subject2).value;
    var subject_3_grade = document.getElementById(subject3).value;
    var subject_4_grade = document.getElementById(subject4).value;
    var subject_5_grade = document.getElementById(subject5).value;
    var subject_6_grade = document.getElementById(subject6).value;
    var fourth_Subject = document.getElementById(foruthSub).value;   
    var flag = scienceCheckGrade(subject_1_grade, subject_2_grade, subject_3_grade, subject_4_grade, subject_5_grade, subject_6_grade);

    if(flag === false)
    {
        alertMessage = alertMessage + "Please provide appropiate GPA";
    }

    if(fourth_Subject === "---")
    {
        alertMessage = alertMessage + "you have to select your fourth subject";
        document.getElementById(foruthSub).style.border = "thick solid red";
    }
    

    if(alertMessage !== "")
    {
        alert(alertMessage);
        PageJumping("page12");
    }
    else
    {
        
        if(fourth_Subject === subject_3)
        {
            sendSubject("Science",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_4, subject_4_grade, subject_5, subject_5_grade, subject_6, subject_6_grade, subject_3, subject_3_grade);
        }
        else if(fourth_Subject === subject_4)
        {
 
           sendSubject("Science",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_5, subject_5_grade, subject_6, subject_6_grade, subject_3, subject_3_grade, subject_4, subject_4_grade);
     
        }
        else if(fourth_Subject === subject_5)
        {
     
            sendSubject("Science",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_4, subject_4_grade, subject_6, subject_6_grade, subject_3, subject_3_grade, subject_5, subject_5_grade);
        }
        else if(fourth_Subject === subject_6)
        {
     
            sendSubject("Science",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_4, subject_4_grade, subject_5, subject_5_grade, subject_3, subject_3_grade,  subject_6, subject_6_grade);
        }
    }
}

function commerce_subject(subject1, subject2, subject3, subject4, subject5, subject6, foruthSub)
{
    var subject_1 = "Bangla";
    var subject_2 = "English";
    var subject_3 = "Business";
    var subject_4 = "Management";
    var subject_5 = "Accounting";
    var subject_6 = "Computer";

    var alertMessage = "";

    var subject_1_grade = document.getElementById(subject1).value;
    var subject_2_grade = document.getElementById(subject2).value;
    var subject_3_grade = document.getElementById(subject3).value;
    var subject_4_grade = document.getElementById(subject4).value;
    var subject_5_grade = document.getElementById(subject5).value;
    var subject_6_grade = document.getElementById(subject6).value;
    var fourth_Subject = document.getElementById(foruthSub).value;

    var flag = commerceCheckGrade(subject_1_grade, subject_2_grade, subject_3_grade, subject_4_grade, subject_5_grade, subject_6_grade);

    if(flag === false)
    {
        alertMessage = alertMessage + "Please provide appropiate GPA";
    }

    if(fourth_Subject === "---")
    {
        alertMessage = alertMessage + "you have to select your fourth subject";
        document.getElementById(foruthSub).style.border = "thick solid red";
    }
    

    if(alertMessage !== "")
    {
        alert(alertMessage);
        PageJumping("page13");
    }
    else
    {
        
        if(fourth_Subject === subject_3)
        {
            sendSubject("Commerce",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_4, subject_4_grade, subject_5, subject_5_grade, subject_6, subject_6_grade, subject_3, subject_3_grade);
        }
        else if(fourth_Subject === subject_4)
        {
 
           sendSubject("Commerce",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_5, subject_5_grade, subject_6, subject_6_grade, subject_3, subject_3_grade, subject_4, subject_4_grade);
     
        }
        else if(fourth_Subject === subject_5)
        {
     
            sendSubject("Commerce",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_4, subject_4_grade, subject_6, subject_6_grade, subject_3, subject_3_grade, subject_5, subject_5_grade);
        }
        else if(fourth_Subject === subject_6)
        {
     
            sendSubject("Commerce",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_4, subject_4_grade, subject_5, subject_5_grade, subject_3, subject_3_grade,  subject_6, subject_6_grade);
        }
    }
}

function arts_subject(subject1, subject2, subject3, subject4, subject5, subject6, foruthSub)
{
    var subject_1 = "Bangla";
    var subject_2 = "English";
    var subject_3 = "Economics";
    var subject_4 = "Civics";
    var subject_5 = "Logic";
    var subject_6 = "Agri. Studies";

    var alertMessage = "";

    var subject_1_grade = document.getElementById(subject1).value;
    var subject_2_grade = document.getElementById(subject2).value;
    var subject_3_grade = document.getElementById(subject3).value;
    var subject_4_grade = document.getElementById(subject4).value;
    var subject_5_grade = document.getElementById(subject5).value;
    var subject_6_grade = document.getElementById(subject6).value;
    var fourth_Subject = document.getElementById(foruthSub).value;
    var flag = artsCheckGrade(subject_1_grade, subject_2_grade, subject_3_grade, subject_4_grade, subject_5_grade, subject_6_grade);

    if(flag === false)
    {
        alertMessage = alertMessage + "Please provide appropiate GPA";
    }

    if(fourth_Subject === "---")
    {
        alertMessage = alertMessage + "you have to select your fourth subject";
        document.getElementById(foruthSub).style.border = "thick solid red";
    }
    

    if(alertMessage !== "")
    {
        alert(alertMessage);
        PageJumping("page14");
    }
    else
    {
        
        if(fourth_Subject === subject_3)
        {
            sendSubject("Arts",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_4, subject_4_grade, subject_5, subject_5_grade, subject_6, subject_6_grade, subject_3, subject_3_grade);
        }
        else if(fourth_Subject === subject_4)
        {
 
           sendSubject("Arts",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_5, subject_5_grade, subject_6, subject_6_grade, subject_3, subject_3_grade, subject_4, subject_4_grade);
     
        }
        else if(fourth_Subject === subject_5)
        {
     
            sendSubject("Arts",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_4, subject_4_grade, subject_6, subject_6_grade, subject_3, subject_3_grade, subject_5, subject_5_grade);
        }
        else if(fourth_Subject === subject_6)
        {
     
            sendSubject("Arts",subject_1, subject_1_grade, subject_2, subject_2_grade, subject_4, subject_4_grade, subject_5, subject_5_grade, subject_3, subject_3_grade,  subject_6, subject_6_grade);
        }
    }
}



function scienceCheckGrade(subject1, subject2, subject3, subject4, subject5, subject6)
{
    var pageName = "page12";
    var flag = true;

    if(subject1 === "---")
    {
        document.getElementById(pageName+"_bangla_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject2 === "---")
    {
        document.getElementById(pageName+"_english_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject3 === "---")
    {
        document.getElementById(pageName+"_physics_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject4 === "---")
    {
        document.getElementById(pageName+"_chemistry_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject5 === "---")
    {
        document.getElementById(pageName+"_maths_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject6 === "---")
    {
        document.getElementById(pageName+"_biology_gpa").style.border = "thick solid red";
        flag = false;
    }

    if(flag === true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function commerceCheckGrade(subject1, subject2, subject3, subject4, subject5, subject6)
{
    var pageName = "page13";
    var flag = true;
    if(subject1 === "---")
    {
        document.getElementById(pageName+"_bangla_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject2 === "---")
    {
        document.getElementById(pageName+"_english_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject3 === "---")
    {
        document.getElementById(pageName+"_commerce1_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject4 === "---")
    {
        document.getElementById(pageName+"_commerce2_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject5 === "---")
    {
        document.getElementById(pageName+"_commerce3_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject6 === "---")
    {
        document.getElementById(pageName+"_commerce4_gpa").style.border = "thick solid red";
        flag = false;
    }

    if(flag === true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function artsCheckGrade(subject1, subject2, subject3, subject4, subject5, subject6)
{
    var pageName = "page14";
    var flag = true;

    if(subject1 === "---")
    {
        document.getElementById(pageName+"_bangla_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject2 === "---")
    {
        document.getElementById(pageName+"_english_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject3 === "---")
    {
        document.getElementById(pageName+"_arts1_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject4 === "---")
    {
        document.getElementById(pageName+"_arts2_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject5 === "---")
    {
        document.getElementById(pageName+"_arts3_gpa").style.border = "thick solid red";
        flag = false;
    }
    if(subject6 === "---")
    {
        document.getElementById(pageName+"_arts4_gpa").style.border = "thick solid red";
        flag = false;
    }

    if(flag === true)
    {
        return true;
    }
    else
    {
        return false;
    }
}


function sendSubject(group,subject1, subject_1_grade, subject2, subject_2_grade, subject3, subject_3_grade, subject4, subject_4_grade, subject5, subject_5_grade, subject6, subject_6_grade)
{
    var flag = checkNet();
    if(flag === true)
    {
        $.getJSON(
            "/hscgrade.php",
            {   
                subject1: subject1,
                grade1: subject_1_grade,
                subject2: subject2,
                grade2: subject_2_grade,
                subject3: subject3,
                grade3: subject_3_grade,
                subject4: subject4,
                grade4: subject_4_grade,
                subject5: subject5,
                grade5: subject_5_grade,
                subject6: subject6,
                grade6: subject_6_grade,
            },
            sendGroup(group) //need a method to perform certain tasks after each thing.
            );
        var newArray = [group,subject1, subject_1_grade, subject2, subject_2_grade, subject3, subject_3_grade, subject4, subject_4_grade, subject5, subject_5_grade, subject6, subject_6_grade];
        saveInfo(newArray);
    }
    else
    {   
        alert("Please check internet connection");
    }
}

function sendGroup(group)
{
    var flag = checkNet();
    if(flag === true)
    {
        $.getJSON(
            "/admin.php",
            { gr: group },
            jump
            );
    }
    else
    {
        alert("Please check internet connection");
    }
    
}

function jump(message)
{
    if(message === "success")
    {
        PageJumping("page9");
    }
}

function saveInfo(newArray) 
{
//its for internet connection === true;
    var value = " 1 \n"; 
    value = value + "SSC GPA = "+sscGPA;
    value = value + "\nHSC GPA = "+hscGPA + "\n";
    
    localStorage.setItem(saveCounter, value);
    
    for(i = 0; i < newArray.length;i++)
    {
        value = localStorage.getItem(saveCounter);
        value = value + "\n"+ newArray[i];
        localStorage.setItem(saveCounter,value);
    }
}


function get_student_info(name,passingYear, board, gpa,group, nextPage, currentPage)
//ssc and hsc information get info.
{
    var flag = true;
    
    var alertMessage = "";
    var valueName = name;
    var valuePassingYear = document.getElementById(passingYear).value;
    var valueBoard = document.getElementById(board).value;
    var valueGpa = document.getElementById(gpa).value;
    var valueGroup = document.getElementById(group).value;
    
    if(valuePassingYear === "---")
    {
        flag = false;
        alertMessage = alertMessage + "Input mismatched in passing year ";
        document.getElementById(passingYear).style.border = "thick solid red";
    }

    if(valueBoard === "---")
    {
        flag = false;
        alertMessage = alertMessage + ", Input mismatched in board"
        document.getElementById(board).style.border = "thick solid red";
    }

    if(valueGpa === "0" || valueGpa ==="0.0" || valueGpa === "0.00" || valueGpa === "")
    {
        flag = false;
        alertMessage = alertMessage + ", Input mismatched in gpa"
        document.getElementById(gpa).style.border = "thick solid red";
    }

    if(valueGroup === "---")
    {
        flag = false;
        alertMessage = alertMessage + ", Input mismatched in group";
        document.getElementById(group).style.border = "thick solid red";
    }

    if(flag === false)
    {
        alert(alertMessage);
        //if error do not leave.
        PageJumping(currentPage);
    }
    else
    {
        globalGroup = valueGroup;


    
        if(valueName === "SSC")
        {
            sscGPA = valueGpa;
            runSSCExam(valueName, valuePassingYear, valueBoard,valueGpa, valueGroup, nextPage, currentPage);
        }
        else
        {

            globalGroup = valueGroup;
            hscGPA = valueGpa;
            runHSCExam(valueName, valuePassingYear, valueBoard,valueGpa, valueGroup, nextPage, currentPage);
        }
    }
}

function runHSCExam(name, passingYear, board, gpa,group, nextPage, currentPage) 
//for hsc
{
    var flag = checkNet();
    if(flag === true)
    {

        $.getJSON(
        "/hsc.php",
        {   passingYear: passingYear,
                board: board,
                gpa: gpa,
                group: group
            },
        hscSuccess
       );
    }
    else
    {   
        alert("please check internet connection");
    }
}

function hscSuccess(message)
{
    if(message === "success")
    {
        if(globalGroup === "Science")
        {
            PageJumping("page12");
        }
        else if(globalGroup === "Commerce")
        {
            PageJumping("page13");
        }
        else
        {
            PageJumping("page14");
        }
    }
    else
    {
        PageJumping("page8");
    }
}



function runSSCExam(name, passingYear, board, gpa,group, nextPage, currentPage) 
//for ssc
{
    var flag = checkNet();
    if(flag === true)
    {   
        $.getJSON(
            "/ssc.php",
            {   passingYear: passingYear,
                    board: board,
                    gpa: gpa,
                    group: group
                },
            sscSuccess
            );
        //message sent is successful?
    }
    else
    {   
        alert("Please check internet connection");
    }
}

function sscSuccess(message)
{
    if(message === "success")
    {
        PageJumping("page8");
    }
    else
    {
        PageJumping("page7");
    }
}


function runSignUp(name, phonenumber, password)
{
    var flag = checkNet();
    if(flag === true)
    {
        $.getJSON(
            "/signup.php",
            {   
                name: name,
                phonenumber: phonenumber,
                password: password
            },
            afterSignUp
            );
        

    }
    else
    {
        alert("please check internet connection");
    }

}

function afterSignUp(message)
{
    if(message === "success")
    {
        PageJumping("page3");
    }
    else
    {
        PageJumping("page4");
    }
}

function runLogIn(phonenumber,password)
{
    var flag = checkNet();
    if(flag === true)
    {
        $.getJSON(
            "/login.php",
            {   phonenumber: phonenumber,
                password: password
            },
            nextPageLogIn
            );
    }
    else
    {
        alert("Please check internet connection");
    }

}


function nextPageLogIn(message) //page jumping comes from here.
{
    if(message === "success")
    {
        PageJumping("page7");
    }
    else
    {
        PageJumping("page3_log_in");
    }
}
