// printre primele chestii sunt interceptorii si transformatorii

axios.interceptors.request.use(
  (config) => {
    if (
      config.url === 'http://localhost:8080/persons' &&
      config.method === 'post'
    ) {
      config.data.person.name = config.data.person.name.toUpperCase();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$(document).ready(() => {
  buildPersonList();

  let $form = $('form');
  let requestBody = {
    person: {
      name: '',
      skills: [],
    },
  };

  $form.find('.addSkill').on('click', (event) => {
    let $button = $(event.currentTarget);
    // accesam parintele(div-ul) butonului
    let $buttonParent = $button.parent();
    let inputValue = $button.prev().val();

    //early return
    if (inputValue.length < 1) {
      return;
    }

    requestBody.person.skills.push(inputValue);

    let $ul = $button.parents('form').find('ul');

    // if it does not exist, it is created
    if ($ul.length === 0) {
      $ul = $('<ul>');
    }

    $('<li>', {
      text: inputValue,
    }).appendTo($ul);

    $buttonParent.insertAfter;

    $buttonParent.after($ul);

    $button.prev().val('');
  });

  $form.on('submit', (event) => {
    event.preventDefault();
    let $form = $(event.currentTarget);
    let $nameInput = $form.find('input[name="name"]');
    let inputValue = $nameInput.val();

    if (inputValue.length < 1) {
      return;
    }

    requestBody.person.name = inputValue;

    //
    // remove /server folder from this repo
    // use static server

    createPerson(requestBody).then((response) => {
      if (response.success === true) {
        buildPersonList();
        $form.find('ul').remove();
      }
    });
  });

  function createPerson(requestJson) {
    let personRequest = axios.post(
      'http://localhost:8080/persons',
      requestJson
    );

    return personRequest;
  }

  // default value of function is declared in brackets

  // solid principles => o functie face un singur lucru. aici facem si Ajax si manipulare DOM

  function buildPersonList(ulClassName = 'person-list') {
    let personRequest = axios
      .get('http://localhost:8080/persons')
      .then((result) => {
        let data = result.data;
        $(`.${ulClassName}`).remove();
        let $ul = $('<ul>', {
          class: ulClassName,
        });
        data.persons.forEach((person) => {
          let $li = $('<li>', {
            text: person.name,
          });
          let $skillsUl = $('<ul>');
          person.skills.forEach((skill) => {
            let $skillLi = $('<li>', {
              text: skill,
            });
            $skillLi.appendTo($skillsUl);
          });
          $li.append($skillsUl).appendTo($ul);
        });
        $('body').append($ul);
      });
  }
});
