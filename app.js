
// taking input and adding to list
$('input').keypress(function(e){
    if(e.which===13){
        const todoText=$(this).val();
        $('.list').append(`<div class="li">
        <div class="text">${todoText}</div>
            <div class="cross">
                <span class="material-symbols-outlined">
                    close
                </span>
            </div>
        </div>`);
        $(this).val('');
    }
})

$('.add').on('click',function(){
    const todoText=$('input').val();
    $('.list').append(`<div class="li">
    <div class="text">${todoText}</div>
        <div class="cross">
            <span class="material-symbols-outlined">
                close
            </span>
        </div>
    </div>`);
    $('input').val('');
})

// mark as completed
$('.list').on('click','.li',function(){
    $(this).toggleClass('completed');
})

// deleting the completed task
$('.list').on('click','.cross',function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(600, function(){
        $(this).remove();
    })
})