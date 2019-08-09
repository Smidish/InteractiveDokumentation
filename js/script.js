var questions = [
  {
    frage: "Hey, ich bin Finge und ich kenne mich verdammt gut mit Menschen und Finanzen aus. Ich würde dir gerne ein paar Fragen stellen. Ich speichere keine von deinen Angaben.",
    id: 0,
    buttons: [
      {
        antwort: "Fuck you",
        id: 0,
        questionId: 1
      },
      {
        antwort: "Fuck you too",
        id: 1,
        questionId: 2
      }
    ]
  },
  {
    frage: "Aktion 1",
    id: 1,
    buttons: [
      {
        antwort: "Fuck you",
        id: 0,
        questionId: 1
      },
      {
        antwort: "Fuck you too",
        id: 1,
        questionId: 2
      }
    ]
  },
  {
    frage: "Aktion 2",
    id: 2,
    buttons: [
      {
        antwort: "Fuck you",
        id: 0,
        questionId: 1
      },
      {
        antwort: "Fuck you too",
        id: 1,
        questionId: 2
      }
    ]
  }
]

//Erste Frage laden
$(document).ready(function(){
  loadNextQuestion(0);
});

function loadNextQuestion(quest_id){
  //shizzle leeren
   $( "#finge" ).empty();
   $('#btns').empty();

   //Frage updaten
   $('#finge').append("<p>"+ questions[quest_id].frage +"</p>");

   //Buttons zur Frage generieren
   for(i=0; i< questions[quest_id].buttons.length; i++){
      $('#btns').append("<button id="+i+">"+questions[quest_id].buttons[i].antwort+"</button>");
      var btnid = "#"+i;
      var questid = questions[quest_id].buttons[i].questionId;
      $(btnid).click(function() {
          loadNextQuestion(questions[quest_id].buttons[this.id].questionId);
      });
    }
}
