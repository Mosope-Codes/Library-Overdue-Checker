const addInfoTable = function(){
        var list1 = [];
		var list2 = [];
		var list3 = [];
		var list4 = [];

		var n = 1;
		var x = 0;

		function AddRow(){

			var AddRown = document.querySelector('.display-table');
			var NewRow = AddRown.insertRow(n);

			list1[x] = document.getElementById("name").value;
			list2[x] = document.getElementById("date").value;
			list3[x] = document.getElementById("charge").value;
			list4[x] = document.getElementById("max-charge").value;
			

			

			var cel1 = NewRow.insertCell(0);
			var cel2 = NewRow.insertCell(1);
			var cel3 = NewRow.insertCell(2);
			var cel4 = NewRow.insertCell(3);
		



			cel1.innerHTML = list1[x];
			cel2.innerHTML = list2[x];
			cel3.innerHTML = list3[x];
			cel4.innerHTML = list4[x];
			


			n++;
			x++;
		}
    AddRow();
}

// const addDisplayTable = function(){
//     var list1 = [];
//     var list2 = [];

//     var n = 1;
//     var x = 0;

//     function AddRow(){

//         var AddRown = document.getElementById('display-table');
//         var NewRow = AddRown.insertRow(n);

//         list1[x] = document.getElementById("name").value;
//         list2[x] = document.getElementById("date").value;
//         list3[x] = document.getElementById("charge").value;
//         list4[x] = document.getElementById("max-charge").value;
        

        

//         var cel1 = NewRow.insertCell(0);
//         var cel2 = NewRow.insertCell(1);
//         var cel3 = NewRow.insertCell(2);
//         var cel4 = NewRow.insertCell(3);
    



//         cel1.innerHTML = list1[x];
//         cel2.innerHTML = list2[x];
//         cel3.innerHTML = list3[x];
//         cel4.innerHTML = list4[x];
        


//         n++;
//         x++;
//     }
// AddRow();
// }

const bookList = document.querySelector('.display-books');
const compareDate = document.querySelector('.compare');
const hideBooks = document.querySelector('.hide');
hideBooks.addEventListener('change', function(e){
    if(hideBooks.checked){
        bookList.style.display = 'none';
        compareDate.style.display = 'block';
    }else{
        bookList.style.display = 'block';
        compareDate.style.display = 'none';
        
    }
})