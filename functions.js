class Library{

    constructor(id, title, dueDate, author, overdueCharge){
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
        this.author = author;
        this.overdueCharge = overdueCharge;
        
    }
}

let firstBook = new Library(1, 'Faith', 10, 'Hagin', 100);
let secondBook = new Library(2, 'Hope', 20, 'Hagin', 200);
let thirdBook = new Library(3, 'Charity', 30, 'Hagin', 250);

let books = [firstBook, secondBook, thirdBook];

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
        
        if(bookId == book.id){
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = book.title;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = book.dueDate;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = book.author;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = book.overdueCharge + ' Naira';
            cell5 = newRow.insertCell(4);
            if(daysRemained < 0){
                cell5.innerHTML = 'Overdue by '+ Math.abs(daysRemained) + ' days';               
            }else{
                cell5.innerHTML = 'Due in '+ daysRemained + ' days';
            }
            
            cell6 = newRow.insertCell(5);
            if(daysRemained < 0){
                cell6.innerHTML = (book.overdueCharge * Math.abs(daysRemained)) + ' Naira';
            }else{
                cell6.innerHTML = 'Not yet due';
            }
        }

    })

}

