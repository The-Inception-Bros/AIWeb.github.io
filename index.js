function search_list() {
    let input = document.getElementById('searchbar').value.trim().toLowerCase();
    let x = document.getElementsByClassName('content');
  
    if (input === '') {
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
    } else {
      for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display = "none";
        } else {
          x[i].style.display = "list-item";
        }
      }
    }
  }

document.getElementById('searchbar').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    search_list();
  }
});
