$(document).ready(function($){
  
    $('.nav-button').click(function () {
        // удаляем у всего меню синию подсветку
        $(this).parent().find(".active").removeClass('active') 
        // добавляем подсветку выбранному меню
        $(this).addClass('active')
        
        // получаем имя файла для загузки страницы
        var filename = $(this).attr("data-lab-id")
        // загружаем страницу по имени файла
        $(".content").load(filename+".html")
    }) 
    // загружает первый пункт меню
        $(".content").load($(".nav-button.active").attr("data-lab-id")+".html") 
});