class Dropdown {
    constructor(element) {
      
      this.element = element
      
      this.button = this.element.querySelector(".dropdown-button");
      
      
      this.content = document.querySelector('.dropdown-content');
      
      this.button.addEventListener('click', (e) => {
        this.toggleContent();
      })
    }
  
    toggleContent(e) {
   
      if (this.content.classList.contains('dropdown-hidden')) {
        this.content.classList.toggle('dropdown-hidden');
        TweenMax.fromTo(this.content, .8, {x:-200}, {x:0})
      } else {
        setTimeout(() => {
          this.content.classList.toggle('dropdown-hidden')
        },150);
        TweenMax.fromTo(this.content, .8, {x:0}, {x:-200}) 
      }
    }
  }
  
  let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));