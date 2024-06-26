
// function search_list() {
//   let input = document.getElementById('searchbar').value.trim().toLowerCase();
//   let x = document.getElementsByClassName('content');
    
//     if (input === '') {
//       for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//       }
//     } else {
//       for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//           x[i].style.display = "none";
//         } else {
//           x[i].style.display = "list-item";
//         }
//       }
//     }
//   }

// document.getElementById('searchbar').addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') {
//     search_list();
//   }
// });


let displayedCount = 9;

function search_list() {
  let input = document.getElementById('searchbar').value.trim().toLowerCase();
  let x = document.getElementsByClassName('content');

  for (let i = 0; i < x.length; i++) {
    if (input === '' || x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = i < displayedCount ? 'list-item' : 'none';
    } else {
      x[i].style.display = 'none';
    }
  }
}

function showMore() {
  let x = document.getElementsByClassName('content');
  let currentCount = 0;
  
  for (let i = 0; i < x.length; i++) {
    if (x[i].style.display === 'list-item') {
      currentCount++;
    }
  }

  displayedCount = currentCount + 9;
  search_list();
}

document.getElementById('searchbar').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    search_list();
  }
});

document.getElementById('seeMore').addEventListener('click', showMore);

// Initially display the first 9 items
showMore();
