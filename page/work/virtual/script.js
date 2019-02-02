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
console.log("Dropdown menu working.");

/* smooth scrolling */
document.querySelectorAll('a[href^="#"]').forEach(anchor =>
  {
    anchor.addEventListener('click', function(drop)
    {
        drop.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView
        ({
            behavior: 'smooth'
        });
    });
});
console.log("Smooth scrolling working.");

/* navigation change */
window.onscroll = function()
{
  adjustment()
};

function adjustment()
{
  var links = document.getElementsByClassName('link');

  if(screen.width > 600)
  {
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)
    {
      document.getElementById('navigation-id').style.backgroundColor = "rgba(255, 255, 255, 1)";
      document.getElementById('logo-id').style.color = "rgba(0, 0, 0, 1)";
      for(var i = 0; i < links.length; i++)
      {
        links[i].style.color = "rgba(0, 0, 0, 1)";
      }
    }
    else
    {
      document.getElementById('navigation-id').style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      document.getElementById('logo-id').style.color = "rgba(255, 255, 255, 1)";
      for(var i = 0; i < links.length; i++)
      {
        links[i].style.color = "rgba(255, 255, 255, 1)";
      }
    }
  }
}
console.log("Navigation change working.");
