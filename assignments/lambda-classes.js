// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}!`
    }
}


class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty 
        this.favLanguage = instructorAttributes.favLanguage
        this.catchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}!`
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground
        this.className = studentAttributes.className
        this.favSubjects = studentAttributes.favSubjects
    }
    listsSubjects(){
        let i = 0
        while(i <= this.favSubjects.length -1){
            console.log(this.favSubjects[i])
            i += 1
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor{
    constructor(projectManagerAttributes){
        super(projectManagerAttributes)
        this.gradClassName = projectManagerAttributes.gradClassName
        this.favInstructor = projectManagerAttributes.favInstructor
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}


// =============== OBJECTS ===============

const student1 = new Student({
    name: 'Cesar',
    age: 22,
    location: 'Philly',
    previousBackground: "Exchange Systems Admin",
    className: "Web20",
    favSubjects: ["Pythong", "Javascript", "DJango"]

})

const student2 = new Student({
    name: 'James',
    age: 24,
    location: 'San Francisco',
    previousBackground: "IT Support Specalist",
    className: "Web20",
    favSubjects: ["PowerShell", "BreakFix", "Networking", "Telecommunication"]

})

const student3 = new Student({
    name: 'Berry',
    age: 22,
    location: 'Phoenix',
    previousBackground: "Automotive Dealer",
    className: "Web18",
    favSubjects: ["Math", "Sociology", "English"]

})

const instructor1 = new Instructor({
    name: 'Gary',
    age: 32,
    location: 'Los Angeles',
    specialty: "Web Design",
    favLanguage: "Python",
    catchPhrase: "Getcha head in the game!"
})

const instructor2 = new Instructor({
    name: 'Jerry',
    age: 35,
    location: 'Gainsvill',
    specialty: "Backend",
    favLanguage: "Python",
    catchPhrase: "opps!"
})

const projectManager1 = new ProjectManager({
    name: 'Jade',
    age: 28,
    location: 'New York',
    specialty: "Frontend",
    favLanguage: "Python",
    catchPhrase: "Heck it up!",
    gradClassName: "Web11",
    favInstructor: "Josh"
})

const projectManager2 = new ProjectManager({
    name: 'Hailey',
    age: 29,
    location: 'Chicago',
    specialty: "UX",
    favLanguage: "CSS",
    catchPhrase: "Damn, that's pretty",
    gradClassName: "Web10",
    favInstructor: "Jane"
})


console.log(student1.PRAssignment("Python"))
console.log(student2.speak())
console.log(student3.sprintChallenge("JavaScript IV"))
student2.listsSubjects()

console.log(instructor1.grade(student1, "Python"))
console.log(instructor2.demo("CSS"))
console.log(instructor2.name)
console.log(instructor1.speak())

console.log(projectManager1.debugsCode(student3, "Python"))
console.log(projectManager1.standUp("Web20_Jade"))
console.log(projectManager2.speak())
console.log(projectManager2.grade(student2, "CSS"))