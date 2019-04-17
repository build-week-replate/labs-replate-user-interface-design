
// class TabLink {
//     constructor(element) {
      
//       this.element = element;
      
      
//       this.data = this.element.dataset.tab;
      
      
//       this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      
      
//       this.tabItem = new TabItem(this.itemElement);
      
      
//       this.element.addEventListener('click', _ => this.select());
//     };
  
//     select() {
      
//       const links = document.querySelectorAll('.tabs-link');
  
//       links.forEach(tab => tab.classList.remove('tabs-link-selected'))
  
//       this.element.classList.add('tabs-link-selected');
    
//       this.tabItem.select();
//     }
//   }
  
//   class TabItem {
//     constructor(element) {
//       this.element = element;
//     }
  
//     select() {
  
//       const items = document.querySelectorAll('.tabs-item');
  
      
//       items.forEach(tabItem => tabItem.classList.remove('tabs-item-selected'));
  
//       this.element.classList.add('tabs-item-selected');
//     }
//   }
  
//   links = document.querySelectorAll('.tabs-link').forEach(tab => new TabLink(tab));