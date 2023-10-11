const calculating = () => {

    const ip=document.getElementById('intake').value;
    const tempSelect=document.getElementById('tmpdiff');
    const valtemp= tmpdiff.options[tempSelect.selectedIndex].value;

    const celtofa = (cel) => {
        let fahrenheit=((cel * 9/5)+32).toFixed(1);
        return fahrenheit;
    }

    const fatocel = (fah) => {
        let celsius=((fah-32)* 5/9).toFixed(1);
        return celsius;
    }

    if(valtemp=='cel')
    {
        document.getElementById("res").innerHTML=celtofa(ip) + "&#176; Fahrenheit";
    }
    else
    {
        document.getElementById("res").innerHTML=fatocel(ip) + "&#176; Celsius";
    }
}
