/*
 * Third party
 */

//= ../assets/js/perfect-scrollbar.jquery.min.js
//= ../assets/js/bootstrap3-typeahead.min.js

//= ../assets/js/moment/moment.min.js
//= ../assets/js/bootstrap-datetimepicker.min.js

//= ../assets/js/dropzone.js

/* 
* config
*/
(function ($) {
  'use strict';

  $(document).ready(function () {
    
    // dropdown hide
    $('.logged').click(function() {
      $(this).toggleClass('open');
    });
    
    $( ".JS_popup_user" ).mouseleave(function() {
       $('.logged').removeClass('open');
    });
    
    $('.mob-menu-toggle').click(function() {
      $('.JStm').toggleClass('open');
      $(this).html() == '<i class="fa fa-times"></i>' ? $(this).html('<i class="fa fa-bars"></i>') : $(this).html('<i class="fa fa-times"></i>');
    });
    
    $('dd').hide();
    $('dt').click(function() {
      var toggle = $(this).nextUntil('dt');
      toggle.slideToggle();
      $('dd').not(toggle).slideUp();
      $(this).toggleClass('active');
    });
    
    //typehaed
    // READ https://github.com/bassjobsen/Bootstrap-3-Typeahead
    //example_collection.json
    // ["item1","item2","item3"]
    /*
    $.get('example_collection.json', function(data){
      $("#name").typeahead({ source:data });
    },'json');
    */

    // example ID
    var $input = $('#id');
    $input.typeahead({
        source:[
          {id: "someId1", name: "Display name 1"}, 
          {id: "someId2", name: "12341"},
          {id: "someId1", name: "1234567899"},
          {id: "someId1", name: "12345672134"},
          {id: "someId1", name: "Display name 1"},
          {id: "someId1", name: "Display name 1"},
          {id: "someId1", name: "Display name 1"},
          {id: "someId1", name: "Display name 1"},
          {id: "someId1", name: "Display name 1"}
        ], 
        autoSelect: true
    }); 
    $input.change(function() {
        var current = $input.typeahead("getActive");
        if (current) {
            // Some item from your model is active!
            if (current.name == $input.val()) {
                // This means the exact match is found. Use toLowerCase() if you want case insensitive match.
            } else {
                // This means it is only a partial match, you can either add a new item 
                // or take the active if you don't want new items
            }
        } else {
            // Nothing is active so it is a new value (or maybe empty value)
        }
    });
    
    // example ID
    $('#client').typeahead({
        source:[
          {id: "someId1", name: "Александр Витальевич"}, 
          {id: "someId2", name: "ООО Газпром"},
          {id: "someId1", name: "ОАО ВТБ 24"},
          {id: "someId1", name: "Рога и копыта"},
          {id: "someId1", name: "Apple"},
          {id: "someId1", name: "Sony"},
          {id: "someId1", name: "Panasonic"},
          {id: "someId1", name: "Vitek"},
          {id: "someId1", name: "Display 1"}
        ], 
        autoSelect: true
    });
    
    // example kuda
    $('#kuda').typeahead({
        source:[
          {id: "someId1", name: "Москва"}, 
          {id: "someId2", name: "Воркута"}
        ], 
        autoSelect: true
    });
    
    // example tovar
    $('#kuda').typeahead({
        source:[
          {id: "someId1", name: "Телевизоры"}, 
          {id: "someId2", name: "Холодильники"}
        ], 
        autoSelect: true
    });
    
    // example tovar
    $('#tnved').typeahead({
        source:[
          {id: "someId1", name: "124124"}, 
          {id: "someId2", name: "1231245645"},
          {id: "someId2", name: "Текстовое название"}
        ], 
        autoSelect: true
    });
    
    // DATE
    // http://eonasdan.github.io/bootstrap-datetimepicker/
    $(function () {
        $('#datetimepicker1').datetimepicker();
    });
    
    //checkboxes
    
    $(function() {
        $('#ch1').on('change', function() {
          $('#form1').toggleClass('hide');
          $('#uploader').toggleClass('hide');
          $('#q-answer').toggleClass('hide');
          $('#fsubmit').toggleClass('hide');
        });
        $('#ch2').on('change', function() {
          $('#form2').toggleClass('hide');
          $('#uploader').toggleClass('hide');
          $('#q-answer').toggleClass('hide');
          $('#fsubmit').toggleClass('hide');
        });
        $('#ch3').on('change', function() {
          $('#q-answer').toggleClass('hide');
          $('#fsubmit').toggleClass('hide');
        });
        $('#ch4').on('change', function() {
          $('#q-answer').toggleClass('hide');
          $('#fsubmit').toggleClass('hide');
        });
        $('#ch5').on('change', function() {
          $('#q-answer').toggleClass('hide');
          $('#fsubmit').toggleClass('hide');
        });
        $('#ch6').on('change', function() {
          $('#q-answer').toggleClass('hide');
          $('#fsubmit').toggleClass('hide');
        });
        $('#ch7').on('change', function() {
          $('#q-answer').toggleClass('hide');
          $('#fsubmit').toggleClass('hide');
        });
        $('#ch8').on('change', function() {
          $('#other').toggleClass('hide');
          $('#fsubmit').toggleClass('hide');
        });
    });
    
    // data tabel
    $('#dataTable').DataTable();
    
    //smart placeholder
    $(".form-group input").smartPlaceholder();
    
    Dropzone.autoDiscover = false;
    $("#dZUpload").dropzone({
        url: "hn_SimpeFileUploader.ashx",
        //addRemoveLinks: true,
        success: function (file, response) {
            var imgName = response;
            file.previewElement.classList.add("dz-success");
            console.log("Successfully uploaded :" + imgName);
        },
        error: function (file, response) {
            file.previewElement.classList.add("dz-error");
        }
    });
    
  }); //end ready

}(jQuery));

