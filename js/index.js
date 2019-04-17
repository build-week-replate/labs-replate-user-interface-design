//GSAP animation for Logo

TweenMax.from('.header', 2, { x: -600, y: -50, scale: 0, rotation: 360, ease: SlowMo.ease.config(0.6, 0.2, false) });
TweenMax.to('.header', { x: 0, y: 0 });


// Tabs 


class TabLink {
    constructor(element) {
      
      this.element = element;
      
      
      this.data = this.element.dataset.tab;
      
      
      this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      
      
      this.tabItem = new TabItem(this.itemElement);
      
      
      this.element.addEventListener('click', _ => this.select());
    };
  
    select() {
      
      const links = document.querySelectorAll('.tabs-link');
  
      links.forEach(tab => tab.classList.remove('tabs-link-selected'))
  
      this.element.classList.add('tabs-link-selected');
    
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
  
      const items = document.querySelectorAll('.tabs-item');
  
      
      items.forEach(tabItem => tabItem.classList.remove('tabs-item-selected'));
  
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  links = document.querySelectorAll('.tabs-link').forEach(tab => new TabLink(tab));


  //Dropdown

  class Dropdown {
    constructor(element) {
      
      this.element = element
      
      this.button = this.element.querySelector(".dropdown-button");
      
      
      this.content = document.querySelector('.dropdown-content');
      
      this.button.addEventListener('click', (e) => {
        this.toggleContent();
        console.log("clicked");
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

