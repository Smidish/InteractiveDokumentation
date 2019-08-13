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
        id: 0,
        questionId: 3
      },
      {
        antwort: "Nichts oder wenig",
        id: 1,
        questionId: 4
      }
    ]
  }
];

var results = [
{
  name: "Playful: Sorgloses Wochenende",
  text: "<p>lucky you</p>"
},

{
  name: "Dreamy: Urlaubsvorfreude",
  text: "<p>lucky you</p>"
},
{
  name: "Helpful: Charity",
  text: "<p>lucky you</p>"
},
{
  name: "Useful: Notgroschen",
  text: "<p>lucky you</p>"
},
{
  name: "Serious: Altersvorsorge",
  text: "<p>lucky you</p>"
}];

var tools = [
{
  name: "Sporty",
  tool: "Spare jedes Mal, wenn du eine Aktivität vollendet oder ein Ziel erreicht hast",
  text: "<p>lucky you</p>",
  frage: "Ich möchte mehr Sport machen."
},

{
  name: "Foodie",
  tool: "Spare für jedes Gemüse auf deinem Kassenzettel",
  text: "<p>lucky you</p>",
  frage: "Ich möchte mich gesünder ernähren."
},
{
  name: "Sleepy",
  tool: "Spare, wenn du deinen Schlafrhythmus einhälst",
  text: "<p>lucky you</p>",
  frage: "Ich möchte einen gesunden Schlafrhythmus etablieren."
},
{
  name: "Produktiv",
  tool: "Spare, wenn du eine Task abgehakt hast",
  text: "<p>lucky you</p>",
  frage: "Ich möchte produktiver sein."
},
{
  name: "Automatisch",
  tool: "Lege dir einen Dauerauftrag an, der das Sparen für dich übernimmt",
  text: "<p>lucky you</p>",
  frage: "Ich möchte mich so wenig wie möglich um mein Geld kümmern."
},
{
  name: "Selbstkontrolle",
  tool: "??????????????????????????",
  text: "<p>lucky you</p>",
  frage: "Ich möchte weniger Geld für unnötigen Kram ausgeben."
}];

function toolfrage(){
  $("#finge").empty();
  $('#btns').empty();
  $('#finge').show();
  $('#btns').show();
  $('#result').hide();
  $('#finge').append("<p>Welche Aussage trifft eher auf dich zu?</p>");

  //Buttons zur Frage generieren
  for(i=0; i< tools.length; i++){
     $('#btns').append("<button id="+i+">"+tools[i].frage+"</button>");
     $('#'+i).click(function() {
      tool_id = this.id;
      console.log("currentquestionid " + endresultid + " id " + id);
      loadResults();
     });
   }
}

var id;
var tool_id;
var endresultid;


//Erste Frage laden
$(document).ready(function(){
  loadNextQuestion(0);
});

function loadResults(){
  $('#finge').hide();
  $('#btns').hide();
  $('#result').show();
  $('#addeventatc1').hide();


  switch(endresultid){
    case 3: id=0; break;
    case 4: id=1; break;
    case 66: id=2; break;
    case 77: id=3; break;
    case 88: id=4; break;
    default: loadNextQuestion(0); break;
  }

  //Text laden
  $('#what').append(results[id].name);
  $('#what').append(results[id].text);

  //Spartooltext laden
  //$("how").append(tools[tool_id].name)
  //$("how").append(tools[tool_id].text)

  //input fields laden
  $("#i_goal").val(results[id].name);
  $("#i_tool").val(tools[tool_id].tool);
}

function loadNextQuestion(quest_id){
   //shizzle leeren
   id = 0;
   tool_id = 0;
   $("#finge").empty();
   $('#btns').empty();
   $('#finge').show();
   $('#btns').show();
   $('#result').hide();

   //checken, ob ein Endscreen kommen muss
   if(quest_id==3||quest_id==4){
     endresultid = quest_id;
     toolfrage();
   }else{
   //ansonsten Frage updaten
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
}

//Checken, ob Input Felder ausgefüllt sind und Values an den Kalender-Button weitergeben
$(document).on('change','input', function(){
  if($("#i_beschreibung").val() != "" && $("#i_sum").val() != null && $("#i_sum_t").val() != null && $("#datepicker").val() != ""){
    var date = $("#datepicker").val() + " 20:00"
    var title = results[id].name;
    var description = "Zielbetrag: "+ $("#i_sum_t").val() +"<br> Sparregel: " + $("#i_tool").val() + "<br>Jedes Mal, wenn du diese Regel triggerst, füge deinem Ziel " + $("#i_sum").val() + " Euro hinzu.";
    console.log(date + title + description);
    $("#adddate").html(date);
    $("#addtitle").html(title);
    $("#adddis").html(description);

    $('#addeventatc1').show();
  }
});


$(function() {
  $("#datepicker" ).datepicker();
  });
