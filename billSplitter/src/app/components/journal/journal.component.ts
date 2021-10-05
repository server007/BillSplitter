import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  journalEntries:any[]=[
    {
      "date":"20-jul-2021",
      "spentOn":"Food"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
