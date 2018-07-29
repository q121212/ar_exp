function $(hrex) {
    if (hrex.startsWith('#')) {
        return document.getElementById(hrex.substr(1));
    }
}

window.onload = function () {
    var singInBtn = $('#signIn');
    var modal = $('#signInModal');
    var ourTeam = $('#ourTeam');
    var mainText = $('#mainText');
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
    window.addEventListener('click', function () {
        if (event.target == ourTeam) {
            mainText.innerHTML='<h1>Our team</h1> <p>Leader: Yulia Tyurlo</p>' +
                '<p>Nevidomsky Dmirty</p>' +
                '<p>Melnikov Aleksey</p>' +
                '<p>Vasilchenko Yulia</p>' +
                '<p>Salikov Aleksander</p>' +
                '<p>Eremenko Stanislav</p>' +
                '<p>Shanina Tatjana</p>' +
                '<p>Rekunchak Max</p>' +
                '----';
            document.body.style.setProperty('background-image', "url('./imgs/bg_team.jpg')");
            document.body.style.setProperty('background-size', "cover");
            document.body.style.setProperty('background-repeat', "no-repeat");
            document.body.style.setProperty('background', "url('./imgs/bg_team.jpg') cover no-repeat");
            mainText.style.setProperty('background-color', 'rgba(255,255,255,0.9)')
        } else if (event.target == modal) {
            modal.style.display = "none";
        }
            else if (event.target == createSignIn) {
                event.preventDefault();
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
                    document.signInRegister.password.style.setProperty('width','40%');
                    clonedPassword = document.signInRegister.password.cloneNode(true);
                    clonedPassword.name='confirmPassword';
                    clonedPassword.placeholder='Confirm password';
                    document.signInRegister.insertBefore(clonedPassword, signIn_btn);
                }

        }
    });
}