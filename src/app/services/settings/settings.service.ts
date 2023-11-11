import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
  ) { 
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleDarkMode(event?: any): void {
    const value = event ? event.detail.checked : true;
    localStorage.setItem('dark_theme', value.toString());
    this.setTheme();
  }

  setTheme(): void {
    const storedTheme = localStorage.getItem('dark_theme');
    if (storedTheme !== null) {
      const isDarkTheme = JSON.parse(storedTheme);
      this.renderer.setAttribute(document.body, 'color-theme', isDarkTheme ? 'dark' : 'light');
    } else {
      // Handle the case where 'dark_theme' is not found in local storage
      // You may choose to set a default theme in this case.
    }
  }

  isDark(): boolean {
    return localStorage.getItem('dark_theme') === 'true';
  }
}
