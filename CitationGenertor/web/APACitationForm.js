/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();


    $("#submitBTN").click(function () {
        var firstName = $("#fName").val();
        var middleName = $("#mName").val();
        var lastName = $("#lName").val();
        var year = $("#yop").val();
        var articletitle = $("#title").val();
        var journalTitle = $("#journalTitle").val();
        var volume = $("#volume").val();
        var issue = $("#issue").val();
        var page = $("#page").val();
        var doi = $("#doiTF").val();
        var msgError = "";
        
        //var choice = $('input:radio[name=choice]:checked').val();
        //alert("Button pressed");
        if (firstName === "") {
            msgError += "Enter First Name <br/> ";
            //alert(msgError);
            $("#fName").css("border-color", "red");
        } else
        {
            firstName = firstName.charAt(0).toUpperCase();
            //alert(firstName);
            $("#fName").css("border-color", "rgba(221, 221, 221, 1)");
        }
        if (lastName === "") {
            msgError += "Enter Last Name <br/> ";
            $("#lName").css("border-color", "red");
        } else
        {
            $("#lName").css("border-color", "rgba(221, 221, 221, 1)");
            lastName = lastName.toLowerCase();
            var lastNameInitial = lastName.charAt(0).toUpperCase();
            var newLastName = lastNameInitial;
            for (var i = 1; i < lastName.length; i++) {
                newLastName += lastName.charAt(i).toLowerCase();
            }
        }
        if (middleName === "") {
            msgError += "Enter middle name <br/> ";
            $("#mName").css("border-color", "red");
        } else
        {
            var newMiddleName = "";
            var middleNameArr = middleName.split(" ");
            //alert(middleNameArr);
            for (var i = 0; i < middleNameArr.length; i++) {
                if (i === middleNameArr.length - 1) {
                    newMiddleName += middleNameArr[i].charAt(0).toUpperCase();
                } else {
                    newMiddleName += middleNameArr[i].charAt(0).toUpperCase() + ". ";
                }
                //alert(newMiddleName);
            }
            $("#mName").css("border-color", "rgba(221, 221, 221, 1)");
        }
        if (year === "") {
            msgError += "Enter year <br/> ";
            $("#yop").css("border-color", "red");
        } else
        {
            $("#yop").css("border-color", "rgba(221, 221, 221, 1)");
        }
        if (articletitle === "") {
            msgError += "Enter title of article <br/> ";
            $("#title").css("border-color", "red");
        } else
        {
            $("#title").css("border-color", "rgba(221, 221, 221, 1)");
        }
        if (journalTitle === "") {
            msgError += "Enter journal title <br/> ";
            $("#journalTitle").css("border-color", "red");
        } else
        {
            $("#journalTitle").css("border-color", "rgba(221, 221, 221, 1)");
        }
        if (volume === "") {
            msgError += "Enter volume <br/> ";
            $("#volume").css("border-color", "red");
        } else
        {
            $("#volume").css("border-color", "rgba(221, 221, 221, 1)");
        }
        if (issue === "") {
            msgError += "Enter issue number <br/> ";
            $("#issue").css("border-color", "red");
        } else
        {
            $("#issue").css("border-color", "rgba(221, 221, 221, 1)");
        }
        if (page === "") {
            msgError += "Enter page numbers <br/> ";
            $("#page").css("border-color", "red");
        } else
        {
            $("#page").css("border-color", "rgba(221, 221, 221, 1)");
        }
        if(doi === ""){
            msgError += "Enter doi/permalink <br/>";
            $("#doiTF").css("border-color", "red");
        }else{
            $("#doiTF").css("border-color", "rgba(221, 221, 221, 1)");
        }
        if (msgError != "") {
            $("#messageTextDoc").html(msgError);
            $("#messageTextDoc").css("display", "block");
        } else {
            $("#messageTextDoc").css("display", "none");
            $('#citation').html("");
            
            var decider = "";
            for (var i = 0; i < 4; i++) {
                decider += doi.charAt(i);
            }
            if (decider === "http") {
                $('#citation').append(newLastName + ', ' + firstName + '. ' + newMiddleName + '. (' + year + '). ' + articletitle + '. ' + journalTitle + ', ' + volume + '(' + issue + '), ' + page + '. Retrieved from:' + doi + '.');
            } else {
                alert(newLastName + ', ' + firstName + '. ' + newMiddleName + '. (' + year + '). ' + articletitle + '. ' + journalTitle + ', ' + volume + '(' + issue + '), ' + page + '. doi:' + doi + '.');
                $('#citation').append(newLastName + ', ' + firstName + '. ' + newMiddleName + '. (' + year + '). ' + articletitle + '. ' + journalTitle + ', ' + volume + '(' + issue + '), ' + page + '. doi:' + doi + '.');
            }
        }
    });
});