var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [
    new Product({
        imagePath: "https://m.media-amazon.com/images/I/41OJbCJUIjL.jpg",
        title: "UX Fundamentals",
        description: "Professionals who work alongside UX designers and researchers, including but not limited to: project managers, graphic designers, copyeditors, developers, and human resource professionals; and business, marketing, and computer science students seeking to understand how UX affects human cognition and memory, product pricing and promotion, and software security and privacy.",
        price: 499
    }),
    new Product({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/51skTWP9S6L._SX382_BO1,204,203,200_.jpg",
        title: "Mobile Computing",
        description: "The first few chapters present the concepts of mobile computing and mobile communication in equal measure, including 2G, 2.5G, 3G, 3G+, and 4G communication systems, mobile satellite communication networks, mobile IP, mobile TCP and digital audio-video broadcasting, and mobile TV. The subsequent chapters provide a systematic explanation of mobile computing as a discipline in itself. The book provides an in-depth coverage of mobile systems and devices, mobile operating systems used for application development, mobile databases, client-server computing agents, application servers, security protocols, mobile Internet, and ad-hoc and sensor networks.",
        price: 599
    }),
    new Product({
        imagePath: "https://www.geniuspublications.com/uploads/book/medium_thumb/871c8a8f565c42f829b9a379bab9bdde.jpg",
        title: "Theory of Computation(toc)",
        description: "Units :  1. Introduction,2. Finite Automata & Regular Expression , 3. Context Free Grammars (CFG), Derivations and Languages , 4.4. Nondeterministic , 5. Turing Machines ",
        price: 399
    }),
    new Product({
        imagePath: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/6-046jf05.jpg",
        title: "Introduction To Algorithms",
        description: "This book teaches techniques for the design and analysis of efficient algorithms, emphasizing methods useful in practice. Topics covered include: sorting; search trees, heaps, and hashing; divide-and-conquer; dynamic programming; amortized analysis; graph algorithms; shortest paths; network flow; computational geometry; number-theoretic algorithms; polynomial and matrix calculations; caching; and parallel computing.",
        price: 499
    }),
    new Product({
        imagePath: "https://www.schandpublishing.com/uploads/bookimages/schand-books/9789325984370.jpg",
        title: "DATABASE MANAGEMENT SYSTEM",
        description: "This book provides a complete guide to the theoretical as well as the practical implementation of DBMS concepts including E-R Model, Relational Algebra, SQL queries, Integrity, Security, Database design, Transaction management ,Query processing and Procedural SQL language. This book assumes no prior knowledge of the reader on the subject.",
        price: 399
    }),
    new Product({
        imagePath: "https://images-na.ssl-images-amazon.com/images/I/417oM625TyL._SX258_BO1,204,203,200_.jpg",
        title: "Data Structures Using Java",
        description: "This highly-anticipated CS2 text from Dr. D.S. Malik is ideal for a one-semester course focused on data structures. Clearly written with the student in mind, this text focuses on Data Structures and includes advanced topics in Java such as Linked Lists and the Standard Template Library (STL). This student-friendly text features abundant Programming Examples and extensive use of visual diagrams to reinforce difficult topics. Students will find Dr. Malik's use of complete programming code and clear display of syntax, explanation, and example easy to read and conducive to learning.",
        price: 450
    })
];

var done = 0;
for(var i = 0; i<products.length; i++){
    products[i].save(function(err , result){
        done++;
        if(done == products.length){
            exit();            
        }
    });
}
function exit(){
    mongoose.disconnect();
}