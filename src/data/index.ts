interface Props {
    name: string;
    data: {
        id: number;
        question: string;
        options: string[];
        answer: number;
    }[]
}

const data: Props[] = [
    {
        name: "JavaScript",
        data: [
            {
                id: 1,
                question: "what is the difference between var and let?",
                options: [
                    "'let' variables is global scoped, 'var' variables are local scoped",
                    "'let' variables is block scoped, 'var' variables are global scoped",
                    "'let' and 'var' variables are both local scoped",
                    "there is no difference",
                ],
                answer: 1
            },
            {
                id: 2,
                question: "what is hoisting?",
                options: [
                    "is an object which defines a sequence and potentially a return value upon its termination.",
                    "gives you access to an outer function's scope from an inner function",
                    "creates a read-only reference to a value",
                    "functions, variables or classes are moved to the top of their scope, prior to execution of the code"
                ],
                answer: 3
            },
            {
                id: 3,
                question: "what is the difference between === and ==?",
                options: [
                    "=== compares the variable type",
                    "== compares the variable type",
                    "== can only be used with const variables",
                    "they are the same"
                ],
                answer: 0
            },
            {
                id: 4,
                question: "which of following is not a javascript data type?",
                options: [
                    "boolean",
                    "null",
                    "signal",
                    "symbol"
                ],
                answer: 0
            },
            {
                id: 5,
                question: "what is setInterval?",
                options: [
                    "calls a function as soon as it is defined",
                    "calls a function at specified intervals",
                    "calls a function after a number of milliseconds",
                    "calls a function as soon as the page loaded by default"
                ],
                answer: 1
            },
            {
                id: 6,
                question: "which of the following is a way to create a function?",
                options: [
                    "arrow function",
                    "named function",
                    "function constructor",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 7,
                question: "what is a callback function?",
                options: [
                    "calls a function as soon as it is defined",
                    "calls a function at specified intervals",
                    "calls a function after a number of milliseconds",
                    "calls a function passed into another function as an argument"
                ],
                answer: 3
            },
            {
                id: 8,
                question: "what are generator functions?",
                options: [
                    "a function that is immediately called after it's created",
                    "a function that does require to have a name",
                    "a function that can be exited and later re-entered",
                    "a function that accepts functions as parameters and/or returns a function"
                ],
                answer: 2
            },
            {
                id: 9,
                question: "what is destructuring?",
                options: [
                    "unpack values from arrays, or properties from objects, into variables.",
                    "deletes a function when called",
                    "deletes a variable when called",
                    "deletes an object property"
                ],
                answer: 0
            },
            {
                id: 10,
                question: "what are the 3 promise states?",
                options: [
                    "ongoing, fulfilled, rejected",
                    "pending, fulfilled, denied",
                    "pending, fulfilled, rejected",
                    "ongoing, completed, denied"
                ],
                answer: 2
            },
            {
                id: 11,
                question: "what is the spread operator?",
                options: [
                    "allows an iterable to be expanded",
                    "unpack values from arrays or objects into distinct variables",
                    "splits a string into an array of substrings & returns the new array",
                    "creates a new array with the result of calling a function for each array element"
                ],
                answer: 0
            },
            {
                id: 12,
                question: "which of the following is not an es6 feature?",
                options: [
                    "arrow function",
                    "classes",
                    "multiline strings",
                    "reduce function"
                ],
                answer: 3
            },
            {
                id: 13,
                question: "what is a higher order function?",
                options: [
                    "a function that accepts functions as parameters and or returns a function",
                    "a function without a name",
                    "a function that is immediately called after it's created",
                    "is a compact alternative to a traditional function expression"
                ],
                answer: 0
            },
            {
                id: 14,
                question: "which data type is immutable?",
                options: [
                    "strings",
                    "numbers",
                    "arrays",
                    "answers 1 & 2"
                ],
                answer: 3
            },
            {
                id: 15,
                question: "what are some way to write asynchronous code?",
                options: [
                    "promise",
                    "async/await",
                    "callback function",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 16,
                question: "what does the reduce function do?",
                options: [
                    "removes the last element of an array",
                    "methods to transform an array to a single value",
                    "adds new elements to the beginning of an array",
                    "removes the first item of an array"
                ],
                answer: 1
            },
            {
                id: 17,
                question: "which of the following array methods will not mutate an object?",
                options: [
                    "splice",
                    "push",
                    "slice",
                    "shift"
                ],
                answer: 2
            },
            {
                id: 18,
                question: "what can the ternary operator replace?",
                options: [
                    "for loop",
                    "if else condition",
                    "while loop",
                    "forEach"
                ],
                answer: 1
            }
        ]
    },
    {
        name: "OOP",
        data: [
            {
                id: 1,
                question: "what are the 4 pillars of OOP?",
                options: [
                    "encapsulation, abstraction, inheritance, polymorphism",
                    "encapsulation, transformation, inheritance, polymorphism",
                    "encapsulation, transaction, inheritance, polymorphism",
                    "encapsulation, abstraction, initialisation, polymorphism",
                ],
                answer: 0
            },
            {
                id: 2,
                question: "what is inheritance?",
                options: [
                    "a way to ensure security",
                    "one class receives the attributes and methods of another class",
                    "a description or a blueprint of the object is created",
                    "allows you to perform an action in multiple or different ways"
                ],
                answer: 1
            },
            {
                id: 3,
                question: "what is a class constructor?",
                options: [
                    "a description or a blueprint of the object is created",
                    "one class receives the attributes and methods of another class",
                    "a way to ensure security",
                    "is a special method of a class, which is called automatically when the instance of a class is created",
                ],
                answer: 3
            },
            {
                id: 4,
                question: "what is polymorphism?",
                options: [
                    "allows you to perform an action in multiple or different ways",
                    "one class receives the attributes and methods of another class",
                    "a description or a blueprint of the object is created",
                    "is a special method of a class, which is called automatically when the instance of a class is created",
                ],
                answer: 0
            },
            {
                id: 5,
                question: "what is a class?",
                options: [
                    "is a special method of a class, which is called automatically when the instance of a class is created",
                    "describes all the attributes and methods of objects that implement the behavior of member objects",
                    "allows you to perform an action in multiple or different ways",
                    "one class receives the attributes and methods of another class",
                ],
                answer: 1
            },
            {
                id: 6,
                question: "what does encapsulation do?",
                options: [
                    "allows you to perform an action in multiple or different ways",
                    "one class receives the attributes and methods of another class",
                    "prevents the data from unwanted access",
                    "a description or a blueprint of the object is created",
                ],
                answer: 2
            },
            {
                id: 7,
                question: "what is abstract class?",
                options: [
                    "a description or a blueprint of the object is created",
                    "a way to ensure security",
                    "is a restricted class that cannot be used to create objects",
                    "one class receives the attributes and methods of another class"
                ],
                answer: 2
            },
            {
                id: 8,
                question: "what is an interface?",
                options: [
                    "allows you to declare methods without defining them",
                    "allows displaying only the important information and hiding the implementation details",
                    "determines the accessibility of methods and classes",
                    "give the same name to more than one methods within a class if the arguments passed differ",
                ],
                answer: 0
            },
            {
                id: 9,
                question: "what is garbage collection?",
                options: [
                    "an implementation of automatic cpu management",
                    "an implementation of automatic network storage management",
                    "an implementation of automatic graphics management",
                    "an implementation of automatic memory management"
                ],
                answer: 3
            },
            {
                id: 10,
                question: "what is the final keyword?",
                options: [
                    "indicates the end of a loop",
                    "a variable whose value does not change",
                    "statements that are executed after the try statement completes",
                    "statements that specify what to do if an exception is thrown in the try-block"
                ],
                answer: 1
            },
            {
                id: 11,
                question: "what are the limitations of oop?",
                options: [
                    "usually not suitable for small problems",
                    "should think of solving a problem in terms of objects",
                    "takes more time to solve the problem",
                    "all of the bove",
                ],
                answer: 3
            },
        ]
    },
    {
        name: "Algorithms",
        data: [
            {
                id: 1,
                question: "which of the following statements is false when describing a binary search tree?",
                options: [
                    "Has a left and right nodes",
                    "Must have a root node",
                    "Right child node value must be larger than the root",
                    "Run time is O(logn)"
                ],
                answer: 2
            },
            {
                id: 2,
                question: "which of the following is not a type of data structure?",
                options: [
                    "Linked List",
                    "Binary Tree",
                    "Hash set",
                    "Star link"
                ],
                answer: 1
            },
            {
                id: 3,
                question: "which of the following statements is false when describing a linked list?",
                options: [
                    "First node is called head",
                    "Average time complexity for a lookup is O(1)",
                    "Is a linear data structure",
                    "Last node is called tail"
                ],
                answer: 1
            },
            {
                id: 4,
                question: "what is encapsulation?",
                options: [
                    "O(n^2) is slower than O(logn)",
                    "O(n) is slower than O(1)",
                    "O(n!) is faster than O(logn)",
                    "O(nlogn) is faster than O(logn)"
                ],
                answer: 0
            },
            {
                id: 5,
                question: "what algorithm can be used to generate a maze?",
                options: [
                    "binary search",
                    "backtracking",
                    "breadth first search",
                    "depth first search"
                ],
                answer: 1
            },
            {
                id: 6,
                question: "what is the Big O notation for a linear run time?",
                options: [
                    "O(n)",
                    "O(n!)",
                    "O(nlogn)",
                    "O(n^2)"
                ],
                answer: 1
            },
            {
                id: 7,
                question: "what data structure does bfs & dfs use?",
                options: [
                    "queue & stack",
                    "queue & hash set",
                    "stack & linked list",
                    "stack & hash set"
                ],
                answer: 0
            },
            {
                id: 8,
                question: "which of the following is not a method to traverse a binary tree?",
                options: [
                    "pre order",
                    "in order",
                    "free order",
                    "post order"
                ],
                answer: 2
            },
            {
                id: 9,
                question: "what statement is false relating backtracking?",
                options: [
                    "is a brute force algorithm",
                    "does not use recursion",
                    "can be used to solve sudoku",
                    "can be used to generate a maze"
                ],
                answer: 1
            },
            {
                id: 10,
                question: "what algorithm can be used to quickly find a name in a phone book",
                options: [
                    "binary search",
                    "backtracking",
                    "depth first search",
                    "breadth first search"
                ],
                answer: 3
            },
            {
                id: 11,
                question: "what is a full binary tree?",
                options: [
                    "all the nodes have two children except the leaf nodes",
                    "all the levels are completely filled except possibly the lowest one, which is filled from the left",
                    "every internal node has exactly two child nodes and all the leaf nodes are at the same level",
                    "None of the above"
                ],
                answer: 0
            },
            {
                id: 12,
                question: "which of the following is not a type of sorting algorithm?",
                options: [
                    "bubble sort",
                    "moon sort",
                    "heap sort",
                    "shell sort"
                ],
                answer: 1
            },
            {
                id: 13,
                question: "what is the run time for O(1)",
                options: [
                    "logarithmic",
                    "linear",
                    "constant",
                    "exponential"
                ],
                answer: 2
            },
            {
                id: 14,
                question: "which data structure uses the FIFO method to organize data?",
                options: [
                    "queue",
                    "linked list",
                    "stack",
                    "binary tree",
                ],
                answer: 0
            },
            {
                id: 15,
                question: "where will you see a Binary Tree data structure?",
                options: [
                    "file systems",
                    "json & yaml documents",
                    "routing tables",
                    "all of the above"
                ],
                answer: 3
            }
        ]
    },
    {
        name: "Server Side",
        data: [
            {
                id: 1,
                question: "which of the following is not a sql database?",
                options: [
                    "Oracle",
                    "Couchdb",
                    "Mongodb",
                    "redis"
                ],
                answer: 3
            },
            {
                id: 2,
                question: "which of the following is not a relational database?",
                options: [
                    "postgres",
                    "cassandra",
                    "mysql",
                    "oracle"
                ],
                answer: 1
            },
            {
                id: 3,
                question: "what is the structure of a json web token?",
                options: [
                    "header",
                    "payload",
                    "signature",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 4,
                question: "what is redis used for?",
                options: [
                    "real time data store",
                    "caching",
                    "streaming and messaging",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 5,
                question: "what are the advantages of using docker?",
                options: [
                    "portability",
                    "performance",
                    "isolation & scalability",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 6,
                question: "what is the purpose of a web server?",
                options: [
                    "stores and delivers the content for a website",
                    "communicates with a web browser using http",
                    "cache content to speed delivery of commonly requested content",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 7,
                question: "which of the following is not a type of hashing algorithm?",
                options: [
                    "md5",
                    "sha",
                    "bcrypt",
                    "halo"
                ],
                answer: 3
            },
            {
                id: 8,
                question: "what is ssl/tls?",
                options: [
                    "keeps an internet connection secure to protect data",
                    "used to remotely log in to another computer",
                    "a browser mechanism which enables controlled access to resources located outside of a given domain",
                    "primary protocol used to send data between a web browser and a website"
                ],
                answer: 1
            },
            {
                id: 9,
                question: "what are some ways to perform user authentication?",
                options: [
                    "cookie based",
                    "oauth",
                    "jwt",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 10,
                question: "which testing method aims to replicate real user scenarios so that the system can be validated for integration and data integrity?",
                options: [
                    "unit test",
                    "integration test",
                    "end to end test",
                    "all of the above"
                ],
                answer: 2
            },
            {
                id: 11,
                question: "which testing method tests small pieces of code that can be logically isolated in a system?",
                options: [
                    "unit test",
                    "integration test",
                    "end to end test",
                    "all of the above"
                ],
                answer: 0
            },
            {
                id: 12,
                question: "what of the following are types of testing methods?",
                options: [
                    "unit test",
                    "integration test",
                    "end to end test",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 13,
                question: "what of the following are types of testing methods?",
                options: [
                    "unit test",
                    "integration test",
                    "end to end test",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 14,
                question: "what is a monolithic application?",
                options: [
                    "software is composed of small independent services that communicate over well-defined api's",
                    "a single web application or service and deploying it as a container",
                    "end to end test",
                    "all of the above"
                ],
                answer: 3
            },
        ]
    },
    {
        name: "Web Dev",
        data: [
            {
                id: 1,
                question: "which of the following is not a css pseudo class?",
                options: [
                    "hover",
                    "before",
                    "after",
                    "nth-parent"
                ],
                answer: 3
            },
            {
                id: 2,
                question: "what of the following is not one of the four parts of the box model?",
                options: [
                    "content",
                    "padding",
                    "background",
                    "border"
                ],
                answer: 2
            },
            {
                id: 3,
                question: "which of the following is not a css position property?",
                options: [
                    "sticky",
                    "inline-block",
                    "fixed",
                    "inline-sticky"
                ],
                answer: 3
            },
            {
                id: 4,
                question: "which statement is false when building a progressive web app?",
                options: [
                    "contents can be found through search engines",
                    "can be available on the device's home screen or app launcher",
                    "works offline or with a poor network connection",
                    "does not use any javascript"
                ],
                answer: 3
            },
            {
                id: 5,
                question: "what of the following are types of testing methods?",
                options: [
                    "unit test",
                    "integration test",
                    "end to end test",
                    "all of the above"
                ],
                answer: 3
            },
            {

                id: 6,
                question: "which testing method where software modules are integrated logically and tested as a group?",
                options: [
                    "unit test",
                    "integration test",
                    "end to end test",
                    "all of the above"
                ],
                answer: 1
            },
            {
                id: 7,
                question: "what are the benefits of using a CDN?",
                options: [
                    "improved page load time",
                    "reliability",
                    "security",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 8,
                question: "which statement about DNS is false?",
                options: [
                    "converts a domain name to an ip address",
                    "makes it easier to navigate the internet",
                    "converts an ip address to a domain name",
                    "is an acronym for domain name system"
                ],
                answer: 2
            },
            {
                id: 9,
                question: "what are the benefits of version control?",
                options: [
                    "teams can review, comment, and improve each other’s code and assets",
                    "branch code, make changes, and merge commits faster",
                    "spark team collaboration to foster greater release build and release patterns",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 10,
                question: "which of the following is not a HTTP method?",
                options: [
                    "post",
                    "delete",
                    "fetch",
                    "put"
                ],
                answer: 2
            }
        ]
    },
    {
        name: "DevOps",
        data: [
            {
                id: 1,
                question: "why do we need devops?",
                options: [
                    "increase deployment frequency",
                    "lessen lead time between fixes",
                    "lower failure rate of new releases",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 2,
                question: "what is the difference between a mac address and ip address?",
                options: [
                    "mac address is permanent",
                    "ip address is permanent",
                    "mac address is a 32-bit integer expressed in hexadecimal notation",
                    "ipv4 address is a 48-bit hexadecimal address"
                ],
                answer: 0
            },
            {
                id: 3,
                question: "what is kubernetes used for?",
                options: [
                    "automating deploying, scaling, and management of containerized applications",
                    "an infrastructure as code tool to define cloud and on-prem resources in human-readable configuration files that you can version, reuse, and share",
                    "configuration management and orchestration tool",
                    "a messaging broker - an intermediary for messaging",
                ],
                answer: 0
            },
            {
                id: 4,
                question: "which of the following is not a networking protocol?",
                options: [
                    "ftp",
                    "ssh",
                    "iis",
                    "smtp"
                ],
                answer: 2
            },
            {
                id: 5,
                question: "which of the following is a container orchestration tool?",
                options: [
                    "docker",
                    "kubernetes",
                    "ansible",
                    "terraform"
                ],
                answer: 1
            },
            {
                id: 6,
                question: "what does the wget command do?",
                options: [
                    "retrieves content from a web server",
                    "a network diagnostic utility that prints the route that a packet takes to reach another host",
                    "copies a file, converting and formatting according to the operands",
                    "prints the last 10 lines of each file to standard output"
                ],
                answer: 0
            },
            {
                id: 7,
                question: "what port number is used for the https protocol?",
                options: [
                    "22",
                    "443",
                    "25",
                    "537"
                ],
                answer: 1
            },
            {
                id: 8,
                question: "which of the following is not a web server?",
                options: [
                    "nginx",
                    "apache",
                    "tomcat",
                    "rabbitmq"
                ],
                answer: 3
            },
            {
                id: 9,
                question: "which of the following is not a CI/CD tool?",
                options: [
                    "jenkins",
                    "teamcity",
                    "bamboo",
                    "caddy"
                ],
                answer: 3
            },
            {
                id: 10,
                question: "what tool is used for infrastructure provisioning?",
                options: [
                    "terraform",
                    "kubernetes",
                    "ansible",
                    "chef"
                ],
                answer: 0
            },
            {
                id: 11,
                question: "when would you use a reverse proxy?",
                options: [
                    "load balancing",
                    "web acceleration",
                    "security & anonymity",
                    "all of the above"
                ],
                answer: 3
            },
            {
                id: 12,
                question: "which of the following is not a Linux distribution?",
                options: [
                    "manjaro",
                    "pop",
                    "kali",
                    "chucky"
                ],
                answer: 3
            }
        ]
    },
    {
        name: "Data Science",
        data: [
            {
                id: 1,
                question: "what is object-oriented programming (OOP)?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 2,
                question: "what is inheritance?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 3,
                question: "what is polymorphism?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 4,
                question: "what is encapsulation?",
                options: [
                    "answer1",
                    "a technique of restricting a user from directly modifying the data members or variables of a class in order to maintain the integrity of the data",
                    "answer1",
                    "answer1"
                ],
                answer: 1
            },
            {
                id: 5,
                question: "Explain the concept of constructor?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 6,
                question: "what is a syntax parser?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 7,
                question: "what is the difference between procedural and object-oriented programming?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 8,
                question: "what is a class?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 9,
                question: "what are the 4 pillars of OOP?",
                options: [
                    "encapsulation, abstraction, inheritance, polymorphism",
                    "encapsulation, transformation, inheritance, polymorphism",
                    "encapsulation, transaction, inheritance, polymorphism",
                    "encapsulation, abstraction, initialisation, polymorphism",
                ],
                answer: 0
            },
            {
                id: 10,
                question: "Wwhat is the difference between a class and a structure?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 11,
                question: "what is the difference between a class and an object?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 12,
                question: "what is a subclass?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 13,
                question: "what is method overloading?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 14,
                question: "what is encapsulation?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 15,
                question: "what is an abstract class?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 16,
                question: "what is an interface?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 17,
                question: "what is Garbage Collection(GC)?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 18,
                question: "what is a try/ catch block?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 19,
                question: "what are the limitations of OOPs?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 20,
                question: "what is data abstraction?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            }
        ]
    },
    {
        name: "Databases",
        data: [
            {
                id: 1,
                question: "what is object-oriented programming (OOP)?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 2,
                question: "what is inheritance?",
                options: [
                    "answer1",
                    "answer1",
                    "a technique of acquiring the properties of another class having features in common.",
                    "answer1"
                ],
                answer: 2
            },
            {
                id: 3,
                question: "what is polymorphism?",
                options: [
                    "a feature that allows you to perform an action in multiple or different ways",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 4,
                question: "what is encapsulation?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 5,
                question: "Explain the concept of constructor?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 6,
                question: "what is a syntax parser?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 7,
                question: "what is the difference between procedural and object-oriented programming?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 8,
                question: "what is a class?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 9,
                question: "whatre the 4 pillars of OOP?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 10,
                question: "Wwhat is the difference between a class and a structure?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 11,
                question: "what is the difference between a class and an object?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 12,
                question: "what is a subclass?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 13,
                question: "what is method overloading?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 14,
                question: "what is encapsulation?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 15,
                question: "what is an abstract class?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 16,
                question: "what is an interface?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 17,
                question: "what is Garbage Collection(GC)?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 18,
                question: "what is a try/ catch block?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 19,
                question: "what are the limitations of OOPs?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            },
            {
                id: 20,
                question: "what is data abstraction?",
                options: [
                    "answer1",
                    "answer1",
                    "answer1",
                    "answer1"
                ],
                answer: 0
            }
        ]
    }
]

export default data