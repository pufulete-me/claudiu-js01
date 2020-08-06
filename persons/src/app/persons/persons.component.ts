import { Component, OnInit } from '@angular/core';
import { PersonsService } from './../persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.sass'],
})
export class PersonsComponent implements OnInit {
  skills: string[] = [];
  persons: [] = [];
  constructor(private personsService: PersonsService) {}

  buildPersonList() {
    this.personsService.getAll().subscribe((persons) => {
      this.persons = persons;
    });
  }

  addSkill(skillInput) {
    let skillName = skillInput.value;

    if (skillName.length < 1) {
      return;
    }

    this.skills.push(skillName);
    skillInput.value = '';
  }

  onSubmit(personForm) {
    if (personForm.name.length < 1) {
      return;
    }

    let personData = {
      person: {
        name: personForm.name,
        skills: this.skills,
      },
    };

    this.personsService.addOne(personData).subscribe((result) => {
      if (result.success === true) {
        this.buildPersonList();
        this.skills.length = 0;
      }
    });
  }

  ngOnInit(): void {
    this.buildPersonList();
  }
}
