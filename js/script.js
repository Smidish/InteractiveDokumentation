var questions = [
  {
    frage: "Hey, ich bin Finge und ich kenne mich verdammt gut mit Menschen und Finanzen aus. Ich würde dir gerne ein paar Fragen stellen. Ich speichere keine von deinen Angaben.",
    id: 0,
    buttons: [
      {
        antwort: "Cool",
        id: 0,
        questionId: 1
      },
      {
        antwort: "HELL YES!",
        id: 1,
        questionId: 1
      }
    ]
  },
  {
    frage: "Was tust du momentan mit deinem Leben?",
    id: 1,
    buttons: [
      {
        antwort: "Schüler/Azubi",
        id: 0,
        questionId: 2
      },
      {
        antwort: "Student",
        id: 1,
        questionId: 0
      },
      {
        antwort: "Ich bin ein produktiver Teil der Gesellschaft und arbeite",
        id: 2,
        questionId: 0
      }
    ]
  },
  {
    frage: "Wie viel Geld hast du am Ende des Monats über?",
    id: 2,
    buttons: [
      {
        antwort: "Ein bisschen was",
        id: 1,
        questionId: 3
      },
      {
        antwort: "Nichts oder wenig",
        id: 2,
        questionId: 4
      }
    ]
  }
];

//Erste Frage laden
$(document).ready(function(){
  loadNextQuestion(0);
});

function loadNextQuestion(quest_id){
   //shizzle leeren
   var id = 0;
   $( "#finge" ).empty();
   $('#btns').empty();

   //Frage updaten
   $('#finge').append("<p>"+ questions[quest_id].frage +"</p>");

   //Buttons zur Frage generieren
   for(i=0; i< questions[quest_id].buttons.length; i++){
      id = questions[quest_id].buttons[i].id;
      $('#btns').append("<button id="+id+">"+questions[quest_id].buttons[i].antwort+"</button>");

      //Buttons Funktion zur Weiterleitung an die nächst Frage mitgeben
      $('#'+id).click(function() {
        var localid = this.id;
        var currentquestionid = quest_id;
        loadNextQuestion(questions[quest_id].buttons[this.id].questionId);
      });
    }
}
