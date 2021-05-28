function initialIsNotCapital( word ){
    return word[0] == word[0].toLowerCase();
  }

function allAreNotCapital(word)
{
    return word != word.toUpperCase();
}

function setContent(x,y,z)
{
    $('#'+x).append('<h1>Fiche de Renseignement Boussole Pro</h1> <p> <h4>Nom :'+ y+'  </h4></p><p> <h4>Prenom :'+z+'</h4></p><p><img src="images/logo-pro.PNG"/></p>');


}

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
