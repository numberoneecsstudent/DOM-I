const digit  = document.querySelectorAll('digit');

msten = 0;
mshuned = 0;
sec1 = 0;
sec10 = 0;

digit[0].textContent = sec10;
digit[1].textContent = sec1;
digit[3].textContent = mshuned;
digit[4].textContent = msten;


function  mstenfunc () 
{
    msten++
    if(msten >= 10) {
        msten = 0;
    }

    digit[3].textContent = msten;
}

function mshunedfunc ()
{
    mshuned++
    if(mshuned >= 10)
    {
        mshuned = 0;
    }
    digit[4].textContent = mshuned;
}

function sec1func ()
{
    sec1++
    if(sec1 >= 10)
    {
        sec1 = 0;
    }
    digit[1].textContent = sec1;
}

function sec10func ()
{
    sec10++
    if(sec10 >= 10)
    {
        sec10 = 0;
    }
    digit[0].textContent = sec10;
}


setInterval(mshuned, 10)
setInterval(mstenfunc, 100)
setInterval(sec10func, 1000)
setInterval(sec10func, 10000)