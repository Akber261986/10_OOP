#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(studentName) {
        this.name = studentName;
    }
}
class Teacher {
    name;
    constructor(teacherName) {
        this.name = teacherName;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
    teachers = [];
    addTeacher(obj2) {
        this.teachers.push(obj2);
    }
}
const newPerson = new Person();
console.log(`\n\t**************************************`);
console.log(`\t* Welcome to Object Oriented Program *`);
console.log(`\t**************************************\n`);
const functionPerson = async (Persons) => {
    do {
        const answer = await inquirer.prompt({
            name: "q1",
            type: "list",
            message: "Select one option talk with someone or End Discussion",
            choices: ["Teacher", "Student", "End Discussion"]
        });
        if (answer.q1 === "Teacher") {
            const answer3 = await inquirer.prompt({
                name: "q3",
                type: "input",
                message: "With which Teacher do you want to Talk ?"
            });
            const isTeacher = Persons.teachers.find(val => val.name === answer3.q3);
            if (!isTeacher) {
                const newTeacher = new Teacher(answer3.q3);
                Persons.addTeacher(newTeacher);
                console.log(`\n\tI am your teacher ${newTeacher.name}`);
                console.log(`\tHow can i help you ?`);
            }
            else if (isTeacher) {
                console.log(`\n\tWelcom back`);
                console.log(`\tI am ${isTeacher.name} how can I help you ?`);
            }
        }
        else if (answer.q1 === "Student") {
            const answer2 = await inquirer.prompt({
                name: "q2",
                type: "input",
                message: "which Student do you you want to talk ?"
            });
            const isstudent = Persons.students.find(val => val.name === answer2.q2);
            if (!isstudent) {
                const newStudent = new Student(answer2.q2);
                Persons.addStudent(newStudent);
                console.log(`\n\tI am New Student my name is ${newStudent.name}`);
                console.log(`\tDo you want to ask me question ?`);
            }
            else if (isstudent) {
                console.log(`\n\tWelcome Back sir this is ${isstudent.name}`);
                console.log(`\tDo you want to ask more questions ?`);
            }
        }
        else {
            break;
        }
    } while (true);
};
functionPerson(newPerson);
