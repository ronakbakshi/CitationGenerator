/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $("#submitBTN").click(function (){
        var firstName = $("#fName").val();
        var middleName = $("#mName").val();
        var lastName = $("#lName").val();
        var year = $("#yop").val();
        var articletitle = $("#title").val();
        var journalTitle = $("#journalTitle").val();
        var volume = $("#volume").val();
        var issue = $("#issue").val();
        var page = $("#page").val();
        var choice = $('input:radio[name=choice]:checked').val();
        var doi = $("#doi").val();
        var permalink = $("#permalink").val();
        alert(firstName+middleName+lastName);
        // window.location= "citation.html";
        
        });
});

