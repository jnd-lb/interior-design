//Jquery
let prevSelectedFilterElement;
$(document).ready(()=>{
    const tilt = $('.js-tilt').tilt({
        glare: true,
        maxGlare: .1
    });


    AOS.init({once: true});



    //Circular Text


    let text = $("#circlar-text-js").html()

    text = text.split("").map((char,i)=>{
            return `<span style="transform:rotate(${(i * 16 )}deg) translate(-50%,-50%)">${char}</span>`
    })

    $("#circlar-text-js").html(text)





    //Filtering projects
    prevSelectedFilterElement = $("#all-projects").get(0)
})



function filterProducts(event,category){

    if(prevSelectedFilterElement){
      prevSelectedFilterElement.classList.remove('active')
    }
  
    if(!event.target.classList.contains('active')){
      event.target.classList.add('active')
      prevSelectedFilterElement = event.target;
    }
  
    let cards = $('.projects-js').each(function(){
      if(($(this).data('category') == category) || category == 'all'){
        console.log($(this).data('category') , category)
        if($(this).hasClass('hide')){
          $(this).removeClass('hide');
        }
      }else{
        if(!$(this).hasClass('hide')){
          $(this).addClass('hide');
        }
      }


      //Reorder the elements by placing the hidden elements at the end
      $('.hide').appendTo('.our-projects-images-js');

       //$(this).data('category') != category;
    });


  }