import { Component, OnInit } from '@angular/core';
import mermaid from 'mermaid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mermaid-docs';

  ngOnInit(): void {
    mermaid.initialize({ 
      startOnLoad: true 
    });
  }
  
}
