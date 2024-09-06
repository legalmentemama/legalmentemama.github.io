window.innerWidth < 768 &&
    [].slice.call(document.querySelectorAll("[data-bss-disabled-mobile]")).forEach(function (e) {
        e.classList.remove("animated"), e.removeAttribute("data-bss-hover-animate"), e.removeAttribute("data-aos");
    }),
    document.addEventListener("DOMContentLoaded", function () {}, !1),
    addEventListener("beforeprint", () => {
        (document.getElementById("imprimir").style.display = "none"),
            (document.getElementById("navbar").style.display = "none"),
            (document.getElementById("infofinal").style.display = "none"),
            (document.getElementById("isotipo").style.transform = "translateX(-60px) scale(0.6)"),
            (document.getElementById("logosolo").style.transform = "translateX(+35px) scale(0.6)"),
            (document.getElementById("cellmama").style.marginTop = "0px");
    }),
    addEventListener("afterprint", () => {
        (document.getElementById("imprimir").style.display = "flex"),
            (document.getElementById("navbar").style.display = "flex"),
            (document.getElementById("infofinal").style.display = "flex"),
            (document.getElementById("isotipo").style.transform = "translateX(0px) scale(1)"),
            (document.getElementById("logosolo").style.transform = "translateX(0px) scale(1)"),
            (document.getElementById("cellmama").style.marginTop = "18px");
    });
    (document.getElementById("calculopension").style.display = "none");
    //(document.getElementById("resultados").style.display = "none");

const miregex = "[0-9]";
const regexespacio = /\s+/gi;
const regexguion = /\-+/gi;

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
    
    let e = temphijosmediacion;
    e < 1 || e % 1 != 0 || null == e || NaN == e || e.toString().includes("e") || e.toString().includes("+") || e.toString().includes("-") ? (DisplayError("hijosmediacion"), (hijosmediacionok = !1)) : (RemoveError("hijosmediacion"), (hijosmediacionok = !0));

    e = tempgastostotales;
    e < 1 || e % 1 != 0 || null == e || NaN == e || e.toString().includes("e") || e.toString().includes("+") || e.toString().includes("-") ? (DisplayError("gastostotales"), (gastostotalesok = !1)) : (RemoveError("gastostotales"), (gastostotalesok = !0));

    IsNumberValid(tempingresospadre)? ingresospadreok = true: ingresospadreok = false;
    IsNumberValid(tempingresosmadre)? ingresosmadreok = true: ingresosmadreok = false;

    if (hijosmediacionok && gastostotalesok && ingresosmadreok && ingresospadreok) {
        (document.getElementById("errorcalculo").style.display = "none"), (document.getElementById("calculopension").style.display = "block"), (document.getElementById("formulario").style.display = "none");
        document.getElementById("calculopension").scrollIntoView({behavior: "smooth"});

        let costoparapadre = tempgastostotales/2;
        let pensionapagar = 0;

        if (tempingresospadre <= 500000) {
            if (temphijosmediacion >= 2){
                pensionapagar = (150000 * temphijosmediacion);
            } else {
                pensionapagar = 200000;
            }
        } else if (costoparapadre >= (tempingresospadre/2)) {
            pensionapagar = (tempingresospadre/2);
        } else {
            pensionapagar = costoparapadre;
        }
        document.getElementById("resultadostexto").innerHTML = (`
            <br>
            <b>DATOS INGRESADOS:</b><br>
            <br>            
            Número de hijos: ${temphijosmediacion}<br>
            Gastos totales mensuales: $${tempgastostotales}<br>
            Ingreso mensual promedio del padre: $${tempingresospadre}<br>
            Ingreso mensual promedio de la madre: $${tempingresosmadre}<br>
            <br>
            <b>RESULTADOS:</b><br>
            <br>
            PENSIÓN QUE DEBE PAGAR EL PADRE: $${pensionapagar}<br>
            <br>
            <br>
        `);
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
        for (tempvalue = t; !0 === n; )
            if (tempvalue.toString().search("x") > -1) var tempvalue = tempvalue.toString().replace("x", "00000");
            else if (tempvalue.toString().search("y") > -1) var tempvalue = tempvalue.toString().replace("y", "0000");
            else if (tempvalue.toString().search("z") > -1) var tempvalue = tempvalue.toString().replace("z", "000");
            else if (tempvalue.toString().search("Z") > -1) var tempvalue = tempvalue.toString().replace("Z", "00");
            else n = !1;
        camposEnArray[e] = tempvalue;
    }
    for (const e of Object.values(camposEnArray))
        "A" == e[0] && (document.getElementById("hijosmediacion").value = parseInt(e.slice(1))),
        "W" == e[0] && (document.getElementById("gastostotales").value = parseInt(e.slice(1)));
}

function SendWspMsg() {
    let e = "";
    (e = "https://api.whatsapp.com/send/?phone=56953560843&text=Hola, ¿me ayudan con mi caso?%0DRellené el formulario de Legalmente Mamá ♥%0D%0Dlegalmentemama.github.io/?state=" + globalStateString), window.open(e, "_blank");
}
