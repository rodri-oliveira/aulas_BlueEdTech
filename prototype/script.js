function Student(name, email) {
    this.name = name,
    this.email = email
}
Student.prototype.login = function login() {
    return `${this.name} fez o login`
}
Student.prototype.comment = function comment() {
    return `${this.name} comentou`
}

function TeacherAssistent(name, email, scheduleWeekPosts){
    Student.call(this, name, email)
    this.scheduleWeekPosts = scheduleWeekPosts
}
TeacherAssistent.prototype = Object.create(Student.prototype)// possibilita herdar metodos e objetos

TeacherAssistent.prototype.medalha = function({name}){
    return `${this.name} deu uma medalha para ${name}`
}

// const gabrielFialho = new Student('Gabriel Fialho', 'gabri@gmail.com')
const brenoLemos = new Student('Breno Lemos', 'breno@gmail.com')
const arturSouza = new TeacherAssistent('Artur souza', 'artur@email.com', false)

console.log(brenoLemos, arturSouza)
console.log(arturSouza.medalha(brenoLemos))
console.log(arturSouza.login())
console.log(arturSouza.login === brenoLemos.login)
 