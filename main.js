var btn = document.getElementById('btn');
var closeBtn = document.getElementById('closeBtn');
var info = document.querySelector('.info');

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var message = document.getElementById('message');

var form = document.querySelectorAll('.form-control');
var submit = document.getElementById('submit');

var addressBook = document.querySelector('.addressBook');



btn.addEventListener('click', function() {
  info.style.top = '60px';
});
closeBtn.addEventListener('click', closeForm);
submit.addEventListener('click', function() {
  // validate input fields
  validation();
});
// from closing function
function closeForm() {
  info.style.top = '-400px';
}
// store in a array
var bookInfo = [];

function jsonStructure(firstName, lastName, message) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.message = message;
}


function validation() {
  var isNull = firstName.value != '' && lastName.value != '' && message.value != '';
  if (isNull) {
    var bookObj = new jsonStructure(firstName.value, lastName.value, message.value);
    bookInfo.push(bookObj);
    // sroting to local storage
    localStorage['book'] = JSON.stringify(bookInfo);
    // showing the book
    showBook();
    // clearing the form fields
    clearForm();
    // closing the from
    closeForm();
  } else {
    alert('Please fill all the fields');
  }
}
// show address book

function showBook() {
  if(!localStorage['book']) {
    localStorage['book'] = '[]';
  }else {
    bookInfo = JSON.parse(localStorage['book']);
    addressBook.innerHTML = '';
    for(var i in bookInfo) {
      var str = '<ul>';
      str += '<li>'+ bookInfo[i].firstName +'</li>';
      str += '<li>'+ bookInfo[i].lastName +'</li>';
      str += '<li>'+ bookInfo[i].message +'</li>';
      str += '</ul>';
      addressBook.innerHTML += str;
    }
  }
}

// clear form fields

function clearForm() {
  for(var i in form) {
    form[i].value = '';
  }
}






