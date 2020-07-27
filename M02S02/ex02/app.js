$(document).ready(() => {
  // replaced
  // let $form = $('#personForm');
  
  let $personDetails = $('.person-details');
  let $personSkills = $('.person-skills');
  let $personPets = $('.person-pets');
  let $personFriends = $('.person-friends');
  let isButtonClicked = false;

  $personSkills.css('display', 'none');
  $personFriends.css('display', 'none');
  $personPets.css('display', 'none');

  let textCaptureForm = () => {
    let $formFragment = $('<div>');

    return $formFragment.append('<label for="skill-name">Editare</label>')
      .append(
        $('<input>', {
          type: 'text',
          name: 'skill-rename'
        }),
      )
      .append(
        `
          <button type="button" class="skill-edit-save">Salvare</button>
          <button type="button" class="skill-edit-cancel">Anulare</button>
        `,
      );
  };

  //Ignorati complet campurile de persoana de sus, ca nu mai merge 
  //cu submit acum, sau ... pentru extra credit, portati acel cod pe
  // sistemul de la pet
  //replaced
  // $form.on('submit', (event) => {
  //   let formFields = $(event.currentTarget).serializeArray();
  //   let $personFragment = $('<div>');
  //   $personDetails.empty();
  //   // console.log(formFields);

  //   formFields.forEach((field) => {
  //     let $labelElement = $(`input[name="${field.name}"]`)
  //       .prev();
  //       let displayName = $labelElement.text();
  //     $personFragment.append(
  //       $('<p>',{ 
  //         text: `${displayName} ${field.value}`,
  //       })
  //     );
  //   });

  //   $personFragment.appendTo($personDetails);
  //   // $personDetails.empty().append($personFragment) - can replace line 26, at this position
    
  //   event.currentTarget.reset();
  //   event.preventDefault();
  // });

  $('#person-button').on('click', (event) => {
    $personDetails.empty();
    let $formButton = $(event.currentTarget);
    let $personForm = $formButton.parent();
    let $personFields = $personForm.children('input[name]');

    let personClass = 'person-info-ul';
    let $personUl = $(`.${personClass}`);

    let message = 'Ma numesc ';
    let personFormFields = [];

    if ($personUl.length < 1) {
      $personUl = $('<ul>', {
        class: 'person-info-ul'
      })
        .appendTo($personDetails)
        .on('click', '.person-delete', (event) => {
          $(event.currentTarget).parent().remove();
        });
    };

    $personFields.each((index, domElement) => {
      let $field = $(domElement);
      personFormFields.push({
        name: $field.attr('name'),
        value: $field.val()
      });
    });

    personFormFields.forEach((info, index) => {

      let $personInfo = $(`input[name = "${info.name}"]`);
      let infoLength = personFormFields.length;
      let $personInfoValue = $personInfo.val();

      let connector = index === infoLength - 1 ? ' de ani.' : ' si am ';

      if(index === 0) {
        connector = ' ';
      }

      message += $personInfoValue + connector;
    });

    $personUl.append(
      `
        <li>${message}
        <br>
          <button type="button" class="person-delete">Stergere</button>
        </li>
      `);

      $personFields.val('');
  });

  $('#addSkill').on('click', (event) => {

    // let skillName = $(event.currentTarget).prev().val();
    let $skillInput = $(event.currentTarget).prev();
    let skillName = $skillInput.val();

    // early return exemplified below  
    if (skillName.length < 1) {
      return;
    }

    let ulClass = 'skills-ul';
    let $skillsUl = $(`.${ulClass}`);

    if ($skillsUl.length < 1) {
      $skillsUl = $('<ul>', {
        class: ulClass,
      })
        .appendTo('.person-skills')
        .on('click', '.skill-delete, .skill-edit-cancel', (event) => {
          // console.log(event.currentTarget); --- visualize what the currentTarget is
          $(event.currentTarget).parent().remove();
        })
        .on('click', '.skill-edit', (event) => {
          $(event.currentTarget).parent().prepend(textCaptureForm());
        })
        .on('click', '.skill-edit-save', (event) => {
          let $skillEditSave = $(event.currentTarget);
          let newSkillName = $skillEditSave.prev().val();

          if (newSkillName.length < 1) {
            return;
          };

          $skillEditSave
            .parents('li')
            .find('span')
            .text(newSkillName);

          $skillEditSave.parent().remove(); 
        });
    };
 
    $skillsUl.append(
      `
        <li>
          <span>${skillName}</span>
          <button class="skill-delete">Sterge</button>
          <button class="skill-edit">Editeaza</button>
        </li>
      `
    );

    $skillInput.val('');
  });

  //* deasupra fieldsetului Detalii, adaugati un buton Ascunde Detalii, 
  // cand se apasa, textul se schimba in Afiseaza Detalii (si invers) 
  //iar fieldsetul trebuie ascuns/afisat cu:
  // https://api.jquery.com/fadetoggle/ (butonul poate fi imediat 
  //deasupra fieldsetului si merge cu button.next().fadeToggle() apoi 
  //face jQuery tot)

  $('#skill-toggle').on('click', (event) => {

    isButtonClicked = !isButtonClicked;
    let $skillButton = $(event.currentTarget);
    let $skillForm = $skillButton.next();

    if (isButtonClicked) {
      $skillButton.text('Arata Detaliile');
    } else {
      $skillButton.text('Ascunde Detaliile');
    };

    $skillForm.fadeToggle('slow', 'linear');
  });

  $('#person-skills').on('change', (event) => {
    let $checkBox = $(event.currentTarget);
    let isChecked = $checkBox.is(':checked');
    let $skillForm = $checkBox.siblings('#person-skills');
    // console.log($checkBox);
    // console.log($skillForm);

    if (isChecked) {
      $skillForm.show();
    } else {
      $skillForm.hide();
    }
  });

  $('#person-friends').on('click', (event) => {
    let $checkBox = $(event.currentTarget);
    let isChecked = $checkBox.is(':checked');
    let $friendForm = $checkBox.siblings('.person-friends');

    if (isChecked) {
      $friendForm.show();
    } else {
      $friendForm.hide();
    }
  });

  $('#person-pets').on('click', (event) => {
    let $checkBox = $(event.currentTarget);
    let isChecked = $checkBox.is(':checked');
    let $petForm = $checkBox.siblings('.person-pets');

    if(isChecked) {
      $petForm.show()
    } else {
      $petForm.hide();
    }
  });

  $('#has-pets').on('change', (event) => {
    let $checkBox = $(event.currentTarget);
    let isChecked = $checkBox.is(':checked');
    let $petForm = $checkBox.siblings('.pet-form');

    if (isChecked) {
      $petForm.show();
    } else {
      $petForm.hide();
    }
  });

  //* Adaugarea animalului de casa intr-un UL (similar cu skillurile si persoana,
  // la final de adaugare, campurile trebuie golite -> cu each, ca nu mai merge 
  // cu reset, $field.val('') )
  //fiecare li poate sa fie o propozitie similara cu: "Rex este caine si are 12 ani."
  // * fiecare li trebuie sa aibe si un delete (si atat) astfel incat sa se 
  //elimine animalul de companie
  $('#addPet').on('click', (event) => {
    let $addPetButton = $(event.currentTarget);
    let $petForm = $addPetButton.parent();
    let $fields = $petForm.children('input[name]');

    // var for ul class name
    let petClass = 'pet-ul';
    let $petUl = $(`.${petClass}`);

    // create the <ul>
    if ($petUl.length < 1) {
      $petUl = $('<ul>', {
        class: petClass,
      })
        .appendTo($personPets)

        // creates 1 delete button for the entire <ul>
        .on('click', '.pet-delete', (event) => {
           $(event.currentTarget).parent().remove();
        });
    };
      // reuse this code
    let petFormFields = [];
    $fields.each((index, domElement) => {
      let $field = $(domElement);
      petFormFields.push({
        name: $field.attr('name'),
        value: $field.val(),
      });
    });
      // reuse this code
      // return petFormFields - array with keys = input names, values = input values;

    let message = '';

    petFormFields.forEach((pet, index) => {

      let $petInfoGeneric = $(`input[name ="${pet.name}"]`);
      let formLength = petFormFields.length;
      // let $petInfo = $petInfoGeneric.prev().text();
      let $petInfoMessage = $petInfoGeneric.val();
      // let $petInfoSliced = $petInfo.slice(0, -1);

      let connector = index === formLength - 1 ? ' ani.' : ' si are ';

      if (index === 0) {
        connector = ' este ';
      }

      message += $petInfoMessage + connector;
    });
    
    $petUl.append(
      `
        <li>${message}
        <button type="button" class="pet-delete">Stergere</button>
        </li>
      `
    );

    $fields.val('');
  });

  // * la add friend, folositi codul meu cu each sa preluati 
  //informatiile prietenului si le afisati intr-un ul cu linii de genul: 
  //Prietenul meu este Andrei Popescu si are 20 de ani. 
  //* similar cu animalul de companie, fiecare prieten trebuie sa aibe un 
  //buton de delete 

  $('#addFriend').on('click', (event) => {
    let $addFriendButton = $(event.currentTarget);
    let $friendForm = $addFriendButton.parent();
    let $friendFields = $friendForm.children('input[name]');

    // create ul class
    let friendClass = 'friend-ul';
    let $friendUl = $(`.${friendClass}`);

    // create <ul> if no <ul> exists
    if ($friendUl.length < 1) {
      $friendUl = $('<ul>', {
        class: friendClass,
      })
        .appendTo($personFriends)
        .on('click', '.friend-delete', (event) => {
          $(event.currentTarget).parent().remove();
        });
    };

    let friendFormFields = [];
    $friendFields.each((index, element) => {
      let $field = $(element);
      friendFormFields.push({
        name: $field.attr('name'),
        value: $field.val(),
      });
    });

    message = 'Prietenul meu este ';
    friendFormFields.forEach((friend, index) => {

      let $friendInfoGeneric = $(`input[name = "${friend.name}"]`);
      // let $friendInfo = $friendInfoGeneric.prev().text();
      let formLength = friendFormFields.length;
      let $friendInfoMessage = $friendInfoGeneric.val();
      // let $friendInfoSliced = $friendInfo.slice(0, -1);

      let connector = index === formLength - 1 ? ' ani.' : ' si are ';
      
      if (index === 0) {
        connector = ' ';
      }

      message += $friendInfoMessage + connector;

    });

    $friendUl.append(
      `
        <li>${message}
        <button type="button" class="friend-delete">Stergere</button>
        </li>
      `
    );
    
    $friendFields.val('');
  });
});
