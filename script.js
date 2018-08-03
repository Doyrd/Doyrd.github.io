/* javascript file start test */
console.log("Javascript connected.");

/* dropdown menu */
var dropdowns = document.getElementsByClassName("dropdown-content");
var i;

function dropdown()
{
    document.getElementById("dropdown-id").classList.toggle("show");
}

window.onclick = function(event)
{
  if(!event.target.matches('.dropdown-button'))
  {
    for (i = 0; i < dropdowns.length; i++)
    {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show'))
      {
        openDropdown.classList.remove('show');
      }
    }
  }
}

console.log("Dropdown menu working.")

/* smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor =>
  {
    anchor.addEventListener('click', function(e)
    {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView
        ({
            behavior: 'smooth'
        });
    });
});

console.log("Smooth scrolling working.")
