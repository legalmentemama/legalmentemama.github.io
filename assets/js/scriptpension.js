window.innerWidth < 768 &&
    [].slice.call(document.querySelectorAll("[data-bss-disabled-mobile]")).forEach(function (e) {
        e.classList.remove("animated"), e.removeAttribute("data-bss-hover-animate"), e.removeAttribute("data-aos");
    }),
    document.addEventListener("DOMContentLoaded", function () { }, !1),
    addEventListener("beforeprint", () => {
        (document.getElementById("imprimir").style.display = "none"),
            (document.getElementById("navbar").style.display = "none"),
            (document.getElementById("infofinal").style.display = "none"),
            (document.getElementById("isotipo").style.transform = "translateX(-75px) scale(0.6)"),
            (document.getElementById("logosolo").style.transform = "translateX(+35px) scale(0.6)"),
            (document.getElementById("cellmama").style.marginTop = "0px");
    }),
    addEventListener("afterprint", () => {
        (document.getElementById("imprimir").style.display = "flex"),
            (document.getElementById("navbar").style.display = "flex"),
            (document.getElementById("infofinal").style.display = "flex"),
            (document.getElementById("isotipo").style.transform = "translateX(-15px) scale(1)"),
            (document.getElementById("logosolo").style.transform = "translateX(0px) scale(1)"),
            (document.getElementById("cellmama").style.marginTop = "18px");
    });
(document.getElementById("calculopension").style.display = "none");
//(document.getElementById("resultados").style.display = "none");

const miregex = "[0-9]";
const regexespacio = /\s+/gi;
const regexguion = /\-+/gi;
const regexpuntos = /\B(?=(\d{3})+(?!\d))/gi;

var formStateString = "", globalStateString = "";


const hijosmediacion = document.querySelector("#hijosmediacion"),
    gastostotales = document.querySelector("#gastostotales"),
    ingresospadre = document.querySelector("#ingresospadre"),
    ingresosmadre = document.querySelector("#ingresosmadre");

var arraycampos = [ingresospadre, ingresosmadre];

arraycampos.forEach((element) => {
    eval?.("var " + element.id + "ok = false;"),
        element.addEventListener("focusout", () => {
            IsNumberValid(element.value) ? (RemoveError(element.id), eval?.("var " + element.id + "ok = true;")) : (DisplayError(element.id), eval?.("var " + element.id + "ok = false;"));
        });
});

arraycampos.push(hijosmediacion, gastostotales);

var hijosmediacionok = false;
var gastostotalesok = false;

document.getElementById("hijosmediacion").addEventListener("focusout", () => {
    let e = document.getElementById("hijosmediacion").value;
    e < 1 || e % 1 != 0 || null == e || NaN == e || e.toString().includes("e") || e.toString().includes("+") || e.toString().includes("-") ? (DisplayError("hijosmediacion"), (hijosmediacionok = !1)) : (RemoveError("hijosmediacion"), (hijosmediacionok = !0));
});

document.getElementById("gastostotales").addEventListener("focusout", () => {
    let e = document.getElementById("gastostotales").value;
    e < 1 || e % 1 != 0 || null == e || NaN == e || e.toString().includes("e") || e.toString().includes("+") || e.toString().includes("-") ? (DisplayError("gastostotales"), (gastostotalesok = !1)) : (RemoveError("gastostotales"), (gastostotalesok = !0));
});



function HidePrintButton() {
    document.getElementById("imprimir").style.display = "none";
}

function HideAccordion(e) {
    document.getElementById(e).className = "accordion-button collapsed";
    let t = document.getElementById(e + "content").className;
    (document.getElementById(e + "content").className = "accordion-collapse item-" + t.match(miregex) + " collapse"), document.getElementById(e).setAttribute("aria-expanded", false);
}

function ShowAccordion(e) {
    document.getElementById(e).className = "accordion-button";
    let t = document.getElementById(e + "content").className;
    (document.getElementById(e + "content").className = "accordion-collapse item-" + t.match(miregex) + " collapse show"), document.getElementById(e).setAttribute("aria-expanded", true);
}

function DisplayError(e) {
    (document.getElementById(e).style.border = "2px solid red"), (document.getElementById("error" + e.toString()).style.display = "flex");
}

function RemoveError(e) {
    (document.getElementById(e).style.border = "hidden"), (document.getElementById("error" + e.toString()).style.display = "none");
}

function IsNumberValid(e) {
    return !(e < 0 || e % 1 != 0 || e > 999999999 || null == e || NaN == e || "" == e || e.toString().includes("e") || e.toString().includes("+") || e.toString().includes("-"));
}

function CalculoFinal() {
    let temphijosmediacion = document.getElementById("hijosmediacion").value;
    let tempgastostotales = document.getElementById("gastostotales").value;
    let tempingresospadre = document.getElementById("ingresospadre").value;
    let tempingresosmadre = document.getElementById("ingresosmadre").value;

    // 0 = default
    // 1 = padre gana menos de 500.000 con un hijo
    // 2 = padre gana menos de 500.000 con mas de un hijo
    // 3 = gastos son mayores que el 50% del sueldo del padre

    let casopadre = 0;


    let e = temphijosmediacion;
    e < 1 || e % 1 != 0 || null == e || NaN == e || e.toString().includes("e") || e.toString().includes("+") || e.toString().includes("-") ? (DisplayError("hijosmediacion"), (hijosmediacionok = !1)) : (RemoveError("hijosmediacion"), (hijosmediacionok = !0));

    e = tempgastostotales;
    e < 1 || e % 1 != 0 || null == e || NaN == e || e.toString().includes("e") || e.toString().includes("+") || e.toString().includes("-") ? (DisplayError("gastostotales"), (gastostotalesok = !1)) : (RemoveError("gastostotales"), (gastostotalesok = !0));

    IsNumberValid(tempingresospadre) ? ingresospadreok = true : ingresospadreok = false;
    IsNumberValid(tempingresosmadre) ? ingresosmadreok = true : ingresosmadreok = false;

    if (hijosmediacionok && gastostotalesok && ingresosmadreok && ingresospadreok) {
        (document.getElementById("errorcalculo").style.display = "none"), (document.getElementById("calculopension").style.display = "block");
        document.getElementById("calcular").style = "min-width: 168px;min-height: 60px;font-size: 30px;background: #c7c7c7;box-shadow: inset 0px -5px #9e9e9e, 1px 1px 5px 2px rgba(0,0,0,0.19);color: rgb(255,255,255);text-shadow: 3px 3px 0px #505050;font-weight: bold;letter-spacing: 0px;padding-right: 8px;padding-left: 8px;padding-top: 3px;padding-bottom: 5px;border-radius: 0px;border-style: hidden;";
        
        tempingresosmadre = parseInt(tempingresosmadre);
        tempingresospadre = parseInt(tempingresospadre);
        tempgastostotales = parseInt(tempgastostotales);
        
        if (tempingresosmadre < 500000) tempingresosmadre = 500000;
        if (tempingresospadre < 500000) tempingresospadre = 500000;
        
        let porcentajepadre = tempingresospadre / (tempingresospadre + tempingresosmadre);
        let costoparapadre = tempgastostotales * porcentajepadre;
        
        let pensionapagar = 0;
        
        if (tempingresospadre <= 500000) {
            if (temphijosmediacion >= 2) {
                pensionapagar = (150000 * temphijosmediacion);
                casopadre = 2;
            } else {
                pensionapagar = 200000;
                casopadre = 1;
            }
        } else {
            pensionapagar = costoparapadre;
            casopadre = 0;
        }

        if (pensionapagar >= (tempingresospadre / 2)) {
            pensionapagar = (tempingresospadre / 2);
            casopadre = 3;
        }
        
        let calculospadre = "";
        let calculosmadre = "";
        
        
        document.getElementById("resultadostexto").innerHTML = (`
            <br><br><br><br>
            <b><font size="32">Resultado 💕</font></b><br><br>
            <br><br>
            Monto legal de pensión de alimentos 💸<br><br><br>
            <b><font size="36">$${parseInt(pensionapagar).toString().replace(regexpuntos, ".")}</font></b><br>
            <br><br><br><br><br><br><br>
            `);
            
            var formState = {};
            
            formState.A = document.getElementById("hijosmediacion").value;
            formState.W = document.getElementById("gastostotales").value;
            formState.P = document.getElementById("ingresospadre").value;
            formState.M = document.getElementById("ingresosmadre").value;
            
            for (const [e, t] of Object.entries(formState)) {
                let n = !0;
                for (tempvalue = t; !0 === n;)
                    if (tempvalue.toString().search("00000") > -1) var tempvalue = tempvalue.toString().replace("00000", "x");
                else if (tempvalue.toString().search("0000") > -1) var tempvalue = tempvalue.toString().replace("0000", "y");
                else if (tempvalue.toString().search("000") > -1) var tempvalue = tempvalue.toString().replace("000", "z");
                else if (tempvalue.toString().search("00") > -1) var tempvalue = tempvalue.toString().replace("00", "Z");
                else n = !1;
                parseInt(tempvalue), (formStateString += e + tempvalue + "!");
            }
            globalStateString = formStateString;
            history.pushState(null, "", "index3.html?state=" + formStateString);
            document.getElementById("resultadostexto").scrollIntoView({ behavior: "smooth", block: "start" });
            
        } else {
            document.getElementById("errorcalculo").style.display = "table-row";
        arraycampos.forEach((element) => {
            eval("var tempbool = " + element.id + "ok;"), 0 == tempbool ? DisplayError(element.id) : RemoveError(element.id);
        });
    }
}

const queryString = window.location.search,
    urlParams = new URLSearchParams(queryString);

if (urlParams.has("state")) {

    var tempState = urlParams.get("state"),
        remainingState = tempState,
        tempvalue = "";

    const camposEnArray = tempState.split("!");
    for (const [e, t] of Object.entries(camposEnArray)) {
        let n = !0;
        for (tempvalue = t; !0 === n;)
            if (tempvalue.toString().search("x") > -1) var tempvalue = tempvalue.toString().replace("x", "00000");
            else if (tempvalue.toString().search("y") > -1) var tempvalue = tempvalue.toString().replace("y", "0000");
            else if (tempvalue.toString().search("z") > -1) var tempvalue = tempvalue.toString().replace("z", "000");
            else if (tempvalue.toString().search("Z") > -1) var tempvalue = tempvalue.toString().replace("Z", "00");
            else n = !1;
        camposEnArray[e] = tempvalue;
    }
    for (const e of Object.values(camposEnArray))
        "A" == e[0] && (document.getElementById("hijosmediacion").value = parseInt(e.slice(1))),
        "W" == e[0] && (document.getElementById("gastostotales").value = parseInt(e.slice(1))),
        "P" == e[0] && (document.getElementById("ingresospadre").value = parseInt(e.slice(1))),
        "M" == e[0] && (document.getElementById("ingresosmadre").value = parseInt(e.slice(1)));
}

function SendWspMsg() {
    let e = "";
    (e = "https://api.whatsapp.com/send?phone=56953560843&text=%C2%A1Hola!%20Me%20interesa%20agendar%20una%20asesor%C3%ADa%20jur%C3%ADdica%20sobre%20pensi%C3%B3n%20de%20alimentos%20%F0%9F%92%95.%0D%0DEste%20es%20mi%20formulario:%0Dlegalmentemama.github.io/index3.html?state=" + globalStateString + "0"), window.open(e, "_blank");
}
