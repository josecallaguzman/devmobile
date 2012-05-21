document.addEventListener('DOMContentLoaded', function () {
                          
                          var myS0 = document.getElementById('MYSESSION0');
                          var myS1 = document.getElementById('MYSESSION1');
                          var myS2 = document.getElementById('MYSESSION2');
                          var myS3 = document.getElementById('MYSESSION3');
                          var myS4 = document.getElementById('MYSESSION4');
                          var myS5 = document.getElementById('MYSESSION5');
                          
                          var dialogVar = "Empty";
                          var dialogVarElem = document.createElement('div');
                          dialogVarElem.appendChild(document.createTextNode(dialogVar));                                                              
                          
                          function sessionChooser(myS, newChoice){
                          var newChoiceRegexp = new RegExp(newChoice, "gi");
                          
                          while( dialogVarElem.lastChild )
                          dialogVarElem.removeChild(dialogVarElem.lastChild);
                          
                          dialogVarElem.appendChild(document.createTextNode(dialogVar));
                          
                          var dialogContent = document.getElementById('dialogContent');
                          
                          while( dialogContent.lastChild )
                          dialogContent.removeChild( dialogContent.lastChild );                          
                          
                          var splitStr = newChoice.split("_");
                          var splitExists = myS.innerText.split("\"");
                          
                          if(myS.innerHTML.match(/NA/gi)){
                          dialogContent.appendChild(document.createTextNode("Do you want to add \"" + splitStr[2] + "\" to your agenda?"));                
                          
                          var twoButtons = document.getElementById('twoButtons');
                          twoButtons.setAttribute('style','display:');
                          
                          var oneButton = document.getElementById('oneButton');
                          oneButton.setAttribute('style','display:none');
                          
                          }else if(splitExists[1] == splitStr[2]){
                          
                          dialogContent.appendChild(document.createTextNode("You have already chosen \"" + splitStr[2] + "\"."));                
                          
                          var twoButtons = document.getElementById('twoButtons');
                          twoButtons.setAttribute('style','display: none');
                          
                          var oneButton = document.getElementById('oneButton');
                          oneButton.setAttribute('style','display:');
                          
                          }else{
                                                    
                          dialogContent.appendChild(document.createTextNode("Do you want to replace \"" + splitExists[1] + "\" with \"" + splitStr[2] + "\"?"));                
                          
                          var twoButtons = document.getElementById('twoButtons');
                          twoButtons.setAttribute('style','display:');
                          
                          var oneButton = document.getElementById('oneButton');
                          oneButton.setAttribute('style','display:none');
                          
                          }
                          
                          }
                          
                          document.getElementById('SESSION 0-bra').
                          addEventListener('click', function (evt) {
                                           dialogVar = "0_Brännö_Top 11 Trends for Enterprise Mobile";
                                           sessionChooser(myS0, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-sal').
                          addEventListener('click', function (evt) {
                                           dialogVar = "1_Saltö_Securing mobile applications";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-ell').
                          addEventListener('click', function (evt) {
                                           dialogVar = "1_Ellös_Spel och apputveckling Cross plattform";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-bra').
                          addEventListener('click', function (evt) {
                                           dialogVar = "1_Brännö_Mobile app vs. mobile site";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-asp').
                          addEventListener('click', function (evt) {
                                           dialogVar = "1_Asperö_Cross-platform development with HTML5 and Sencha Touch";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-kon').
                          addEventListener('click', function (evt) {
                                           dialogVar = "1_Kongressalen_Windows Phone för utvecklare";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-sal').
                          addEventListener('click', function (evt) {
                                           dialogVar = "2_Saltö_Så når du ut med din app";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-ell').
                          addEventListener('click', function (evt) {
                                           dialogVar = "2_Ellös_Skapa snygga appar i Metro design";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-bra').
                          addEventListener('click', function (evt) {
                                           dialogVar = "2_Brännö_An app is not enough";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-asp').
                          addEventListener('click', function (evt) {
                                           dialogVar = "2_Asperö_So you have the greatest idea for the Next Big Hit Windows Phone Game?";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-kon').
                          addEventListener('click', function (evt) {
                                           dialogVar = "2_Kongressalen_Having fun with Android mashups";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-sal').
                          addEventListener('click', function (evt) {
                                           dialogVar = "3_Saltö_Understanding mobile design patterns";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-ell').
                          addEventListener('click', function (evt) {
                                           dialogVar = "3_Ellös_Windows Phone Development - Best Practices";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-bra').
                          addEventListener('click', function (evt) {
                                           dialogVar = "3_Brännö_Tackling Android fragmentation";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-asp').
                          addEventListener('click', function (evt) {
                                           dialogVar = "3_Asperö_Ending the Web Versus Native Debate";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-kon').
                          addEventListener('click', function (evt) {
                                           dialogVar = "3_Kongressalen_Mobile cross-platform development with JQuery Mobile";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-sal').
                          addEventListener('click', function (evt) {
                                           dialogVar = "4_Saltö_Mobil webbutveckling med HTML5, CSS3 och JavaScript";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-ell').
                          addEventListener('click', function (evt) {
                                           dialogVar = "4_Ellös_Game Development with Unity for Mobile Devices";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-bra').
                          addEventListener('click', function (evt) {
                                           dialogVar = "4_Brännö_Low Latency Messaging for Mobile Apps - Or When HTTP and Push Messages Are Simply Not Enough";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-asp').
                          addEventListener('click', function (evt) {
                                           dialogVar = "4_Asperö_Introduktion till Windows 8 och Metro style apps";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-kon').
                          addEventListener('click', function (evt) {
                                           dialogVar = "4_Kongressalen_Getting Started with PhoneGap";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 5-sal').
                          addEventListener('click', function (evt) {
                                           dialogVar = "5_Saltö_En applikations resa från Windows Phone till Windows 8";
                                           sessionChooser(myS5, dialogVar);
                                           return false;
                                           }, false);   
                          document.getElementById('SESSION 5-asp').
                          addEventListener('click', function (evt) {
                                           dialogVar = "5_Asperö_Titanium Mobile – A brief overview and introduction to a cross platform framework";
                                           sessionChooser(myS5, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 5-kon').
                          addEventListener('click', function (evt) {
                                           dialogVar = "5_Kongressalen_Modern Mobile Web Design with Maquetta and Dojo/Dojo Mobile";
                                           sessionChooser(myS5, dialogVar);
                                           return false;
                                           }, false);
                          
                          
                          var l = window.localStorage.length;
                          var i = 0;
                          var storedListName;
                          function addNewListItem(newItem) {
                          
                          var splitStr2 = newItem.split("_");
                          
                          if(newItem.match(/0/gi)){
                          myS0.innerHTML = "\"" + splitStr2[2] + "\"" + "<br />Room: " + splitStr2[1];
                          }else if(newItem.match(/1/gi)){
                          myS1.innerHTML = "\"" + splitStr2[2] + "\"" + "<br />Room: " + splitStr2[1];
                          }else if(newItem.match(/2/gi)){
                          myS2.innerHTML = "\"" + splitStr2[2] + "\"" + "<br />Room: " + splitStr2[1];
                          }else if(newItem.match(/3/gi)){
                          myS3.innerHTML = "\"" + splitStr2[2] + "\"" + "<br />Room: " + splitStr2[1];
                          }else if(newItem.match(/4/gi)){
                          myS4.innerHTML = "\"" + splitStr2[2] + "\"" + "<br />Room: " + splitStr2[1];
                          }else if(newItem.match(/5/gi)){
                          myS5.innerHTML = "\"" + splitStr2[2] + "\"" + "<br />Room: " + splitStr2[1];
                          }
                          
                          }
                          
                          for (i; i < l; i++) {
                          storedListName = window.localStorage.key(i);
                          if (storedListName.match(/^item[.]/))
                          addNewListItem(window.localStorage.getItem(storedListName));
                          }
                          
                          document.getElementById('yesButton').
                          addEventListener('click', function (evt) {
                                           var newListValue = dialogVarElem.innerHTML;
                                           
                                           var itemKey = "item." + (window.localStorage.length + 1);
                                           
                                           addNewListItem(newListValue);
                                           window.localStorage.setItem(itemKey, newListValue);
                                           
                                           return false;
                                           }, false);
                          
                          
                          });