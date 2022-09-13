class Book{

    constructor(id, title, dueDate, author, overdueCharge){
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
        this.author = author;
        this.overdueCharge = overdueCharge;
        
    }
}

let firstBook = new Book(01, 'ABC Of Faith', 10, 'Hagin', 100);
let secondBook = new Book(02, 'Art Of Prayer', 5, 'Hagin', 250);
let thirdBook = new Book(03, 'Believers\' Authority ', 5, 'Hagin', 250);
let fourthBook = new Book(04, 'Following God\'s Plan For Your Life ', 5, 'Hagin', 250);
let fifthBook = new Book(05, 'Growing Up Spiritually ', 8, 'Hagin', 100);
let sixthBook = new Book(06, 'Holy Spirit And His Gifts', 7, 'Hagin', 150);
let seventhBook = new Book(07, 'How You Can Be Led By The Spirit ', 8, 'Hagin', 100);
let eigthBook = new Book(08, 'Love The Way To Victory', 6, 'Hagin', 150);
let ninthBook = new Book(09, 'Plans Purposes & Pursuits', 8, 'Hagin', 150);
let tenthBook = new Book(10, 'Spirit Within Spirit Upon', 8, 'Hagin', 100);


let books = [
    firstBook, secondBook, thirdBook, 
    fourthBook, fifthBook, sixthBook, seventhBook,
    eigthBook, ninthBook, tenthBook
];

function updateTable(){
    
    books.forEach(function(book){

    let table = document.getElementById('book-list').getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);   
    let bookId = document.getElementById('book-id').value;
    let dateBorrowed = document.getElementById('date-borrowed').value;
    
    
        const MillisecondsPerDay = 86400000; 
        let daysForBookToBeDue = (book.dueDate * MillisecondsPerDay) +  new Date(dateBorrowed).getTime(); 
        let currentDate = Date.now();
        let daysRemained = Math.round((daysForBookToBeDue - currentDate)/MillisecondsPerDay);
        
        if(Number(bookId) === book.id){
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = book.title;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = book.dueDate;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = book.author;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = book.overdueCharge;
            cell5 = newRow.insertCell(4);
            if(daysRemained < 0){
                cell5.innerHTML = 'Overdue by '+ Math.abs(daysRemained) + ' day(s)';               
            }else{
                cell5.innerHTML = 'Due in '+ daysRemained + ' day(s)';
            }
            
            cell6 = newRow.insertCell(5);
            if(daysRemained < 0){
                cell6.innerHTML = (book.overdueCharge * Math.abs(daysRemained));
            }else{
                cell6.innerHTML = 'Not yet due';
            }
        }

    })

}

