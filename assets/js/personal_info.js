$(document).ready(function(){
    const pnum = document.getElementById('pnum');
    const submit = document.getElementById('next');

    function blurEventValidator(e){
        let max_length = 0;
        let min_length = 0;
        switch(e.target){
            case pnum:
                min_length = max_length = 14;
                break;
        }

        if ((e.target.value.length >= min_length && e.target.value.length <= max_length)){
            if (e.target.classList.contains('invalid-input'))
                e.target.classList.remove('invalid-input');
        }else{
            if (!e.target.classList.contains('invalid-input'))
                e.target.classList.add('invalid-input');
        }
        
    }

 
    pnum.addEventListener('blur', addEventListener);

    submit.addEventListener('click', function(e){
        if (pnum.classList.contains('invalid-input') ||
            pnum.value.length == 0)
            e.preventDefault();
    });

 

    var pnum_mask = new IMask(pnum, {
        mask:"(XXX) YYY ZZZZ",
        groups: {
            XXX:  new IMask.MaskedPattern.Group.Range([200, 999]),
            YYY:  new IMask.MaskedPattern.Group.Range([000, 999]),
            ZZZZ:  new IMask.MaskedPattern.Group.Range([0000, 9999]),
        }
    });

    
});