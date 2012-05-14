
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
                          
                          if(myS.innerHTML.match(/NA/gi)){
                          dialogContent.appendChild(document.createTextNode("Do you want to add " + newChoice + " to your agenda?"));                
                          
                          var twoButtons = document.getElementById('twoButtons');
                          twoButtons.setAttribute('style','display:');
                          
                          var oneButton = document.getElementById('oneButton');
                          oneButton.setAttribute('style','display:none');
                          
                          }else if(myS.innerHTML.match(newChoiceRegexp)){
                          
                            dialogContent.appendChild(document.createTextNode("You have already chosen " + newChoice + "."));                
                          
                          var twoButtons = document.getElementById('twoButtons');
                          twoButtons.setAttribute('style','display: none');
                          
                          var oneButton = document.getElementById('oneButton');
                          oneButton.setAttribute('style','display:');
                          
                          }else{
                        
                          dialogContent.appendChild(document.createTextNode("Do you want to replace " + myS.innerText + " with " + newChoice + "?"));                
                          
                          var twoButtons = document.getElementById('twoButtons');
                          twoButtons.setAttribute('style','display:');

                          var oneButton = document.getElementById('oneButton');
                          oneButton.setAttribute('style','display:none');
                          
                          }
                          
                          }
                          
                          document.getElementById('SESSION 0-bra').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 0 in Brännö";
                                           sessionChooser(myS0, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-sal').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 1 in Saltö";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-ell').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 1 in Ellös";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-bra').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 1 in Brännö";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-asp').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 1 in Asperö";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 1-kon').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 1 in Kongressalen";
                                           sessionChooser(myS1, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-sal').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 2 in Saltö";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-ell').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 2 in Ellös";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-bra').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 2 in Brännö";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-asp').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 2 in Asperö";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 2-kon').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 2 in Kongressalen";
                                           sessionChooser(myS2, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-sal').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 3 in Saltö";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-ell').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 3 in Ellös";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-bra').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 3 in Brännö";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-asp').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 3 in Asperö";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 3-kon').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 3 in Kongressalen";
                                           sessionChooser(myS3, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-sal').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 4 in Saltö";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-ell').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 4 in Ellös";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-bra').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 4 in Brännö";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-asp').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 4 in Asperö";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 4-kon').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 4 in Kongressalen";
                                           sessionChooser(myS4, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 5-sal').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 5 in Saltö";
                                           sessionChooser(myS5, dialogVar);
                                           return false;
                                           }, false);   
                          document.getElementById('SESSION 5-asp').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 5 in Asperö";
                                           sessionChooser(myS5, dialogVar);
                                           return false;
                                           }, false);
                          document.getElementById('SESSION 5-kon').
                          addEventListener('click', function (evt) {
                                           dialogVar = "session 5 in Kongressalen";
                                           sessionChooser(myS5, dialogVar);
                                           return false;
                                           }, false);
                         
                          
                          var l = window.localStorage.length;
                          var i = 0;
                          var storedListName;
                          function addNewListItem(newItem) {

                          if(newItem.match(/0/gi)){
                          myS0.innerHTML = newItem;
                          }else if(newItem.match(/1/gi)){
                          myS1.innerHTML = newItem;
                          }else if(newItem.match(/2/gi)){
                          myS2.innerHTML = newItem;
                          }else if(newItem.match(/3/gi)){
                          myS3.innerHTML = newItem;
                          }else if(newItem.match(/4/gi)){
                          myS4.innerHTML = newItem;
                          }else if(newItem.match(/5/gi)){
                          myS5.innerHTML = newItem;
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