document.getElementById('subscribe-button').addEventListener('click', function() {
    alert('Thank you for subscribing!');
});

var blogPosts = document.getElementById('blog-posts');
var rows = blogPosts.querySelectorAll('tr'); // Assuming 'blog-posts' contains table rows

rows.forEach(function(row) {
  row.addEventListener('click', function() {
    var blogTitle = this.cells[0].innerText;
    alert('You clicked on ' + blogTitle);
  });
});


var links = document.getElementById('favorite-blogs').getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault();
    this.style.color = 'red';
  });
}