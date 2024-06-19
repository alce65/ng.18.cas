export class Pet {
  name
  constructor(name) {
    this.name = name
  }
}


export class Person {
  myPet
  constructor(myPet) {
    this.myPet = myPet;
  }
}

const z = new Persona(new Pet('Molly'));



// Front(Browser) <--> Back(PHP. Node.js, Java, Python, Ruby, Go, C#, etc)
// HTTP (1.2) / HTTPS Request/Response
// AJAX (Asynchronous JavaScript and XML) - XMLHttpRequest
// Fetch API (ES6)
// Axios (3rd party library)

// Request
// URL (Uniform Resource Locator) - http:80//www.google.com - localhost
// GET, POST, PUT/PATCH, DELETE, OPTIONS, HEAD, etc
// Headers - Content-Type, Authorization, etc
// Body - JSON, Form Data, etc


// Response
// Status - 200, 404, 500, etc
// Headers - etc
// Recursos - JSON, HTML, XML, etc

// API REST (Representational State Transfer)
// C (Create) - POST,
// R (Read) - GET,
// U (Update) - PUT/PATCH,
// D (Delete) - DELETE

// URL: http://localhost:3000/api/v1/users/1
// URL: http://localhost:3000/api/v1/users?name=John&age=30
