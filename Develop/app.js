const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamMembers = []

function appMenu () {
   function createManager (){
       inquirer.prompt([
        {
           name: 'managerName',
           type: 'input',
           message: 'What is your name?'
                   
        },
        { 
          name: 'id',
          type: 'input',
          message: 'What is your id?'

        },  
        { 
          name: 'email',
          type: 'input',
          message: 'What is your email?'

        },
        {
           name: 'officeNumber',
           type: 'input',
           message: 'What is your officeNumber?'
                   
        }      


        
       ]) .then ( answers => {
           const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
           teamMembers.push(manager)
   createTeam ()

       })
    }
       function createIntern (){
        inquirer.prompt([
         {
            name: 'InternName',
            type: 'input',
            message: 'What is your name?'
                    
         },
         { 
           name: 'id',
           type: 'input',
           message: 'What is your id?'
 
         },  
         { 
           name: 'email',
           type: 'input',
           message: 'What is your email?'
 
         },
         {
            name: 'school',
            type: 'input',
            message: 'What school do you attend?'
                    
         }      
 
 
         
        ]) .then ( answers => {
            const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
            teamMembers.push(intern)
    createTeam ()
 
        })
   }
   function createEngineer (){
    inquirer.prompt([
     {
        name: 'EngineerName',
        type: 'input',
        message: 'What is your name?'
                
     },
     { 
       name: 'id',
       type: 'input',
       message: 'What is your id?'

     },  
     { 
       name: 'email',
       type: 'input',
       message: 'What is your email?'

     },
     {
        name: 'githubUserName',
        type: 'input',
        message: 'What is your github user name?'
                
     }      


     
    ]) .then ( answers => {
        const engineer = new Engineer (answers.name, answers.id, answers.email, answers.githubUserName)
        teamMembers.push(engineer)
createTeam ()

    })
   }

   function createTeam (){
       inquirer.prompt([
           {
               name: 'choice',
               type: 'list',
               message: 'What type of team member would you like to add?',
               choices: ['Engineer', 'Intern', 'No more team members']
           }
       ]).then (choice => {
           switch (choice.choice) {
               case 'Engineer':
                   createEngineer()
                   break;
               
               case 'Intern':
                   createIntern()
                   break;  

               default: 
                   buildTeam()    
           }
       })
   }

   function buildTeam () {
    if(!fs.existsSync(OUTPUT_DIR)){ 
        fs.mkdirSync(OUTPUT_DIR) 
    }
    fs.writeFileSync(outputPath, render(teamMembers),"utf-8")
   }

   createManager()



   
}
   
appMenu ()
   