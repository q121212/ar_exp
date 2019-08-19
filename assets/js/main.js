function $(hrex) {
    if (hrex.startsWith('#')) {
        return document.getElementById(hrex.substr(1));
    }
}

window.onload = function () {
    var singInBtn = $('#signIn');
    var modal = $('#signInModal');
    var ourTeam = $('#ourTeam');
    var retail = $('#retail');
    var edu = $('#edu');
    var mainText = $('#mainText');
    var feedback = $('#feedback');
    var createSignIn = $('#createSignInLink');
    var createBtn = $('#createBtn');
    var signIn_btn = $('#signIn_btn');

    // Get the <span> element that closes the modal
    var spanCloseBnt = document.getElementsByClassName("close")[0];

    singInBtn.addEventListener('click', function () {
        modal.style.display = "block";
    });
    spanCloseBnt.addEventListener('click', function () {
        modal.style.display = "none";
    });
    window.addEventListener('click', function (event) {
        if (event.target == ourTeam) {
            mainText.innerHTML='<div class="ourTeam">' +
                '<div class="teamHeader">' +
                '   <h2>Team behind</h2>' +
                '   <h1>SmartReality<hr></h1>' +
                '</div>' +
                '<div id="YT" class="person">' +
                '   <div class="position">Leader, CEO & Founder</div>' +
                '   <div class="name">Tyurlo Yulia</div>' +
                '   <hr class="person_hr">' +
                '   <div class="personDescription">Born in small North city. Yulia has an impressive perseverance. Multi-tasker.</div>' +
                '</div>' +
                '<div id="AM" class="person">' +
                '   <div class="position">Co-founder</div>' +
                '   <div class="name">Melnikov Aleksey</div>' +
                '   <hr class="person_hr">' +
                '   <div class="personDescription">Alexey is an a great manager.</div>' +
                '</div>' +
                '<div id="DN" class="person">' +
                '   <div class="position">Head of Marketing</div>' +
                '   <div class="name">Nevidomsky Dmirty</div>' +
                '   <hr class="person_hr">' +
                '   <div class="personDescription">An judicious man.</div>' +
                '</div>' +
                '<div id="AS" class="person">' +
                '   <div class="position">Head of technical direction</div>' +
                '   <div class="name">Salikov Aleksander</div>' +
                '   <hr class="person_hr">' +
                '   <div class="personDescription"></div>' +
                '</div>' +
                '<div id="YV" class="person">' +
                '   <div class="position">Chief financier</div>' +
                '   <div class="name">Vasilchenko Yulia</div>' +
                '   <hr class="person_hr">' +
                '   <div class="personDescription">An finance guru.</div>' +
                '</div>' +
                '<div id="MR" class="person">' +
                '   <div class="position">Chief developer</div>' +
                '   <div class="name">Rekunchak Max</div>' +
                '   <hr class="person_hr">' +
                '   <div class="personDescription">Passionate about analysis of data.</div>' +
                '</div>' +
                '<div id="SE" class="person">' +
                '   <div class="position">Support manager</div>' +
                '   <div class="name">Eremenko Stanislav</div>' +
                '   <hr class="person_hr">' +
                '   <div class="personDescription"></div>' +
                '</div>' +
                '<div id="TS" class="person">' +
                '   <div class="position">Main coach</div>' +
                '   <div class="name">Shanina Tatjana</div>' +
                '   <hr class="person_hr">' +
                '   <div class="personDescription"></div>' +
                '</div>' +
                    '</div>';
            document.body.style.setProperty('background-image', "url('./imgs/bg_team.jpg')");
            document.body.style.setProperty('background-size', "cover");
            document.body.style.setProperty('background-repeat', "no-repeat");
            // document.body.style.setProperty('background', "url('./imgs/bg_team.jpg') cover no-repeat");
            mainText.style.setProperty('background-color', 'rgba(255,255,255,0.9)');
        } else if (event.target == retail) {
          mainText.innerHTML='<p>Создание промо-акций' +
              '<p>Визуализация информационных материалов (POS)</p>' +
              '<p>Создание 3d карт конференций</p>' +
              '<p>Визуализация товаров, тарифов и услуг</p>';
            document.body.style.setProperty('background-image', "url('./imgs/bg_store.jpg')");
            document.body.style.setProperty('background-size', "cover");
            document.body.style.setProperty('background-repeat', "no-repeat");
            document.body.style.setProperty('background', "url('./imgs/bg_store.jpg') cover no-repeat");
        } else if (event.target == edu) {
            mainText.innerHTML='<span><div><em>Курс "Новый сотрудник"</em></div><span>погружение в телеком-тематику и специфику деятельности в салоне связи</span>' +
                '<div><em>Курс "Первые продажи"</em></div><span>отработка навыков работы с проблемными ситуациями и клиентами, обучение работе со сложными продуктами</span>' +
                '<div><em>Курс "Презентация продукта"</em></div><span>развитие навыков проведения презентаций</span>' +
                '<div><p><em>Тестирование</em></div><span>оценка качества закрепления умений и навыков</span>' +
                '<div><p><em>Рейтинг</em></div><span>формирование отранжированных списком участников учебных проектов</span>';
            document.body.style.setProperty('background-image', "url('./imgs/bg_chairs.jpg')");
            document.body.style.setProperty('background-size', "cover");
            document.body.style.setProperty('background-repeat', "no-repeat");
            // document.body.style.setProperty('background', "url('./imgs/bg_chairs.jpg') cover no-repeat");
            mainText.style.setProperty('background-color', 'rgba(255,255,255,0.9)');
        } else if (event.target == feedback) {
            mainText.innerHTML='<img src="./imgs/feedback.jpg" style="width: 100%">' +
                '<p><b><ul>What’s in a great support request?</ul></b>' +
                '<li>Provide us with as much essential information as possible.' +
                '<li>Include any screenshots or links that are related to your problem.' +
        '<form action="/contact" accept-charset="UTF-8" method="post">' +
                '<dl class="form-group"><dt class="input-label"><label placeholder="Your name" for="form_name">Name</label></dt><dd>' +
                '<dl><dt><input placeholder="Your name" value="" class="form-control" type="text" name="form[name]" id="form_name"></dd></dt> ' +
                '<dl><dt><label for="form_email">Email</label></dt><dd>' +
                '<input placeholder="Your email" value="" class="form-control" type="text" name="form[email]" id="form_email">' +
                '<dl class="form-group"><dt class="input-label"><label maxlength="72" for="form_subject">Subject</label></dt>' +
                '<dd><input value="" maxlength="72" class="form-control" size="72" type="text" name="form[subject]" id="form_subject"></dd>' +
                '<dt><label for="form_comments">How can we help?</label></dt>' +
                '<dd><textarea name="form[comments]" id="form_comments" placeholder="Please describe exactly what you’re trying to accomplish." required="required" class="form-control input-block js-comment-field js-quick-submit"></textarea> ' +
                '</dd></dl>' +
                '<div class="form-actions">' +
                '<button type="submit" class="btn btn-primary" data-disable-with="Send request" data-ga-click="Support, send request, link:send-button" data-disable-invalid="" >Send request</button> ' +
                '</div> ' +
                '</form>';
            mainText.style.setProperty('background-color', 'rgba(255,255,255,0.9)');
        } else if (event.target == modal) {
            modal.style.display = "none";

            // IMPORTANT: this code is duplicated below!!!
            if(modalHeaderText.innerText === 'Create account'){
                let modalHeaderText = $('#modalHeaderText');
                modalHeaderText.innerText = 'Sign in to your workspace';
                createSignIn.innerText = 'Create an account';
                createBtn.style.display='none';
                signIn_btn.style.display='block';
                if(document.signInRegister.confirmPassword){
                    document.signInRegister.confirmPassword.remove();
                }
                document.signInRegister.password.style.setProperty('width','90%');
            }
        }
            else if (event.target == createSignIn) {
                event.preventDefault();

            // IMPORTANT: this code is duplicated above!!!
                if(modalHeaderText.innerText === 'Create account'){
                    let modalHeaderText = $('#modalHeaderText');
                    modalHeaderText.innerText = 'Sign in to your workspace';
                    createSignIn.innerText = 'Create an account';
                    createBtn.style.display='none';
                    signIn_btn.style.display='block';
                    if(document.signInRegister.confirmPassword){
                        document.signInRegister.confirmPassword.remove();
                    }
                    document.signInRegister.password.style.setProperty('width','90%');
                } else {
                    let modalHeaderText = $('#modalHeaderText');
                    modalHeaderText.innerText = 'Create account';
                    createSignIn.innerText = 'Sign In';
                    createBtn.style.display='block';
                    signIn_btn.style.display='none';
                    document.signInRegister.password.style.setProperty('width','33%');
                    clonedPassword = document.signInRegister.password.cloneNode(true);
                    clonedPassword.name='confirmPassword';
                    clonedPassword.placeholder='Confirm password';
                    document.signInRegister.insertBefore(clonedPassword, signIn_btn);
                }

        }
    });
}