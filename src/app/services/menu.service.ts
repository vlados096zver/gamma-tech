import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MenuService {

  public menu = [
    {
      link: 'Головна',
      key: 'block'
    },
    {
      link: 'Чому обирають нас?',
      key: 'advantages'
    },
    {
      link: 'Ціни',
      key: 'projects'
    },
    {
      link: 'Відповіді',
      key: 'faq'
    },
    {
      link: 'Наша команда',
      key: 'team'
    },
    {
      link: 'Контакти',
      key: 'contact'
    }
  ];

  public menuMain = [
    {
      link: 'Головна',
      key: 'block'
    },
    {
      link: 'Переваги',
      key: 'advantages'
    },
    {
      link: 'Ціни',
      key: 'projects'
    },
    {
      link: 'Контакти',
      key: 'contact'
    }
  ];

  public scroll(section: string, hideMenu?: boolean) {
    const element = document.querySelector('.' + section);
    const header = document.getElementById('header');
    if (element && header) {
      const heightHeader  = header.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      window.scrollTo({
        left: 0,
        top: elementPosition - heightHeader + window.pageYOffset,
        behavior: "smooth",
      });
    }

    if(hideMenu) {
      this.showMenu = false;
      this.allowScroll();
    }
  }

  showFeedback = false;
  showMenu = false;
  constructor() { }

  openFeedback() {
    this.showFeedback = !this.showFeedback;
    if(this.showFeedback) {
      this.disAllowScroll();
    } else {
      this.allowScroll();
    }
  }

  openMenu() {
    this.showMenu = !this.showMenu;
    if(this.showMenu) {
      this.disAllowScroll();
    } else {
      this.allowScroll();
    }
  }

  public allowScroll() {
    document.documentElement.classList.remove('hidden');
    document.body.classList.remove('hidden');
  }

  public disAllowScroll() {
    document.documentElement.classList.add('hidden');
    document.body.classList.add('hidden');
  }
}
