const button = document.querySelector('.button');

button.addEventListener('click', function () {
    const now = new Date();
    let birthdayDate = new Date(document.getElementById("bday-date").value);

    const fullBirthdayDate = new Date(birthdayDate.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate());
    const differenceInMilliseconds = new Date(fullBirthdayDate.getTime()) - new Date(now.getTime());
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 3600 * 24));

    let daysWord;
    if (differenceInDays %
        10 === 1 && differenceInDays % 100
        !== 11) {
        daysWord = "день";
    } else if (differenceInDays %
        10 >= 2 &&
        differenceInDays %
        10 <= 4 &&
        (differenceInDays
            % 100 < 10 || differenceInDays
            % 100 >= 20)) {
        daysWord = "дня";
    } else {
        daysWord = "дней";
    }


    if (birthday = !isNaN(document.getElementById("bday-date").value)) {
        document.getElementById("days-left").innerHTML = "Введите корректную дату!";

    } else {
        document.getElementById("days-left").innerHTML = "До дня рождения осталось " + differenceInDays + " " + daysWord;
    }

})
