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
    }),
    (document.getElementById("resultados").style.display = "none");

const miregex = "[0-9]";
const regexespacio = /\s+/gi;
const regexguion = /\-+/gi;
const regexnombre = /^_.*a/g;
const regexpuntos = /\B(?=(\d{3})+(?!\d))/gi;


var formStateString = "", globalStateString = "";

const nombre = document.querySelector("#nombre"),
    personas = document.querySelector("#personas"),
    hijosmediacion = document.querySelector("#hijosmediacion"),
    arriendo = document.querySelector("#arriendo"),
    luz = document.querySelector("#luz"),
    agua = document.querySelector("#agua"),
    internet = document.querySelector("#internet"),
    calefa = document.querySelector("#calefa"),
    superm = document.querySelector("#superm"),
    feria = document.querySelector("#feria"),
    almacen = document.querySelector("#almacen"),
    arancel = document.querySelector("#arancel"),
    transporte = document.querySelector("#transporte"),
    utiles = document.querySelector("#utiles"),
    consultas = document.querySelector("#consultas"),
    medicamentos = document.querySelector("#medicamentos"),
    ropa = document.querySelector("#ropa"),
    calzado = document.querySelector("#calzado"),
    esparcimiento = document.querySelector("#esparcimiento"),
    talleres = document.querySelector("#talleres"),
    aseo = document.querySelector("#aseo"),
    diapers = document.querySelector("#diapers"),
    salacuna = document.querySelector("#salacuna"),
    ninera = document.querySelector("#ninera"),
    madre = document.querySelector("#madre");

var arraycampos = [arriendo, luz, agua, internet, calefa, superm, feria, almacen, arancel, transporte, utiles, consultas, medicamentos, ropa, calzado, esparcimiento, talleres, aseo, diapers, salacuna, ninera, madre];

arraycampos.forEach((element) => {
    eval?.("var " + element.id + "ok = false;"),
        element.addEventListener("focusout", () => {
            IsNumberValid(element.value) ? (RemoveError(element.id), eval?.("var " + element.id + "ok = true;")) : (DisplayError(element.id), eval?.("var " + element.id + "ok = false;"));
        });
});

arraycampos.push(nombre, personas, hijosmediacion);

var personasok = false, nombreok = false, hijosmediacionok = false;

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
    if (
        (HideAccordion("sobretibutton"),
        HideAccordion("viviendabutton"),
        HideAccordion("alimentacionbutton"),
        HideAccordion("educacionbutton"),
        HideAccordion("saludbutton"),
        HideAccordion("vestuariobutton"),
        HideAccordion("recreacionbutton"),
        HideAccordion("higienebutton"),
        HideAccordion("laboresbutton"),
        personasok &&
	    hijosmediacionok &&
            nombreok &&
            arriendook &&
            luzok &&
            aguaok &&
            internetok &&
            calefaok &&
            supermok &&
            feriaok &&
            almacenok &&
            arancelok &&
            transporteok &&
            utilesok &&
            consultasok &&
            medicamentosok &&
            ropaok &&
            calzadook &&
            esparcimientook &&
            talleresok &&
            aseook &&
            diapersok &&
            salacunaok &&
            nineraok &&
            madreok)
    ) {
        (document.getElementById("errorcalculo").style.display = "none"), (document.getElementById("resultados").style.display = "block"), (document.getElementById("formulario").style.display = "none");
        
	const e = new Date();
        let t = { timezone: "UTC", weekday: "long", year: "numeric", month: "long", day: "numeric" };
        document.getElementById("fecha").innerHTML = e.toLocaleString("es-CL", t);

        var intPersonas = parseInt(document.getElementById("personas").value),
            intArriendo = parseInt(document.getElementById("arriendo").value),
            intLuz = parseInt(document.getElementById("luz").value),
            intAgua = parseInt(document.getElementById("agua").value),
            intInternet = parseInt(document.getElementById("internet").value),
            intCalefa = parseInt(document.getElementById("calefa").value),
            intSuperm = parseInt(document.getElementById("superm").value),
            intFeria = parseInt(document.getElementById("feria").value),
            intAlmacen = parseInt(document.getElementById("almacen").value),
            intArancel = parseInt(document.getElementById("arancel").value),
            intTransporte = parseInt(document.getElementById("transporte").value),
            intUtiles = parseInt(document.getElementById("utiles").value),
            intConsultas = parseInt(document.getElementById("consultas").value),
            intMedicamentos = parseInt(document.getElementById("medicamentos").value),
            intRopa = parseInt(document.getElementById("ropa").value),
            intCalzado = parseInt(document.getElementById("calzado").value),
            intEsparcimiento = parseInt(document.getElementById("esparcimiento").value),
            intTalleres = parseInt(document.getElementById("talleres").value),
            intAseo = parseInt(document.getElementById("aseo").value),
            intDiapers = parseInt(document.getElementById("diapers").value),
            intSalacuna = parseInt(document.getElementById("salacuna").value),
            intNinera = parseInt(document.getElementById("ninera").value),
            intMadre = parseInt(document.getElementById("madre").value),
	    intHijos = parseInt(document.getElementById("hijosmediacion").value),
            calculoVivienda = (Math.round((intArriendo + intLuz + intAgua + intInternet + intCalefa) / intPersonas)) * intHijos,
            calculoAlimentacion = Math.round(intSuperm + intFeria + intAlmacen),
            calculoEducacion = Math.round(intArancel + intTransporte + intUtiles),
            calculoSalud = Math.round(intConsultas + intMedicamentos),
            calculoVestuario = Math.round(intRopa + intCalzado),
            calculoRecreacion = Math.round(intEsparcimiento + intTalleres),
            calculoHigiene = Math.round(intAseo + intDiapers),
            calculoLabores = Math.round(intSalacuna + intNinera + intMadre);

    var grantotal = calculoVivienda + calculoAlimentacion + calculoEducacion + calculoSalud + calculoVestuario + calculoRecreacion + calculoHigiene + calculoLabores;

	//var fullNombres = (document.getElementById("nombre").value + " (" + intHijos + " hijos)").toString();
    var fullNombres = (document.getElementById("nombre").value + " (" + intHijos + (intHijos>1? " hijos)": " hijo/a)")).toString();
        (document.getElementById("resultadosnombre").innerHTML += fullNombres),
            (document.getElementById("totalvivienda").innerHTML = "$ " + calculoVivienda.toString().replace(regexpuntos,"."),
            (document.getElementById("totalalimentacion").innerHTML = "$ " + calculoAlimentacion.toString().replace(regexpuntos,".")),
            (document.getElementById("totaleducacion").innerHTML = "$ " + calculoEducacion.toString().replace(regexpuntos,".")),
            (document.getElementById("totalsalud").innerHTML = "$ " + calculoSalud.toString().replace(regexpuntos,".")),
            (document.getElementById("totalvestuario").innerHTML = "$ " + calculoVestuario.toString().replace(regexpuntos,".")),
            (document.getElementById("totalrecreacion").innerHTML = "$ " + calculoRecreacion.toString().replace(regexpuntos,".")),
            (document.getElementById("totalhigiene").innerHTML = "$ " + calculoHigiene.toString().replace(regexpuntos,".")),
            (document.getElementById("totalcuidado").innerHTML = "$ " + calculoLabores.toString().replace(regexpuntos,".")),
            (document.getElementById("totalfinal").innerHTML = "$ " + (grantotal.toString().replace(regexpuntos,"."))),

        
        var tempnombre = document.getElementById("nombre").value.replace(regexespacio,"-");
        var formState = {};

        (formState._ = tempnombre),
            (formState.a = document.getElementById("personas").value),
            (formState.A = document.getElementById("hijosmediacion").value),
            (formState.W = grantotal),
            intArriendo > 0 && (formState.b = intArriendo),
            intLuz > 0 && (formState.c = intLuz),
            intAgua > 0 && (formState.d = intAgua),
            intInternet > 0 && (formState.e = intInternet),
            intCalefa > 0 && (formState.f = intCalefa),
            intSuperm > 0 && (formState.g = intSuperm),
            intFeria > 0 && (formState.h = intFeria),
            intAlmacen > 0 && (formState.i = intAlmacen),
            intArancel > 0 && (formState.j = intArancel),
            intTransporte > 0 && (formState.k = intTransporte),
            intUtiles > 0 && (formState.l = intUtiles),
            intConsultas > 0 && (formState.m = intConsultas),
            intMedicamentos > 0 && (formState.n = intMedicamentos),
            intRopa > 0 && (formState.o = intRopa),
            intCalzado > 0 && (formState.p = intCalzado),
            intEsparcimiento > 0 && (formState.q = intEsparcimiento),
            intTalleres > 0 && (formState.r = intTalleres),
            intAseo > 0 && (formState.s = intAseo),
            intDiapers > 0 && (formState.t = intDiapers),
            intSalacuna > 0 && (formState.u = intSalacuna),
            intNinera > 0 && (formState.v = intNinera),
            intMadre > 0 && (formState.w = intMadre),
            (formStateString = "");
        for (const [e, t] of Object.entries(formState)) {
            let n = !0;
            for (tempvalue = t; !0 === n; )
                if (tempvalue.toString().search("00000") > -1) var tempvalue = tempvalue.toString().replace("00000", "x");
                else if (tempvalue.toString().search("0000") > -1) var tempvalue = tempvalue.toString().replace("0000", "y");
                else if (tempvalue.toString().search("000") > -1) var tempvalue = tempvalue.toString().replace("000", "z");
                else if (tempvalue.toString().search("00") > -1) var tempvalue = tempvalue.toString().replace("00", "Z");
                else n = !1;
            parseInt(tempvalue), (formStateString = formStateString + e + tempvalue + "!"), (globalStateString = formStateString);
        }
        //history.pushState(null, "", "index2.html?state=" + formStateString);
        history.pushState(null, "", "index.html?state=" + formStateString);
    } else
        (document.getElementById("errorcalculo").style.display = "table-row"),
            nombreok || ShowAccordion("sobretibutton"),
            (personasok && arriendook && luzok && aguaok && internetok && calefaok) || ShowAccordion("viviendabutton"),
            (supermok && feriaok && almacenok) || ShowAccordion("alimentacionbutton"),
            (arancelok && transporteok && utilesok) || ShowAccordion("educacionbutton"),
            (consultasok && medicamentosok) || ShowAccordion("saludbutton"),
            (consultasok && medicamentosok) || ShowAccordion("vestuariobutton"),
            (esparcimientook && talleresok) || ShowAccordion("recreacionbutton"),
            (aseook && diapersok) || ShowAccordion("higienebutton"),
            (salacunaok && nineraok && madreok) || ShowAccordion("laboresbutton"),
            arraycampos.forEach((element) => {
                eval("var tempbool = " + element.id + "ok;"), 0 == tempbool ? DisplayError(element.id) : RemoveError(element.id);
            });
}
document.getElementById("personas").addEventListener("focusout", () => {
    let e = document.getElementById("personas").value;
    e < 2 || e % 1 != 0 || null == e || NaN == e || e.toString().includes("e") || e.toString().includes("+") || e.toString().includes("-") ? (DisplayError("personas"), (personasok = !1)) : (RemoveError("personas"), (personasok = !0));
}),
    document.getElementById("hijosmediacion").addEventListener("focusout", () => {
    let e = document.getElementById("hijosmediacion").value;
    e < 1 || e % 1 != 0 || null == e || NaN == e || e.toString().includes("e") || e.toString().includes("+") || e.toString().includes("-") ? (DisplayError("hijosmediacion"), (hijosmediacionok = !1)) : (RemoveError("hijosmediacion"), (hijosmediacionok = !0));
}),
    document.getElementById("nombre").addEventListener("focusout", () => {
        let e = document.getElementById("nombre").value;
        e.toString().length < 1 || null == e || null == e || " " == e || !e.toString().match(/^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\s'\,]+$/gi) || e.toString().length > 50
            ? (DisplayError("nombre"), (nombreok = !1))
            : (RemoveError("nombre"), (nombreok = !0));
    });
const queryString = window.location.search,
    urlParams = new URLSearchParams(queryString);
if (urlParams.has("state")) {
    arraycampos.push(nombre, personas),
        arraycampos.forEach((element) => {
            (document.getElementById(element.id).value = "0"), eval?.("var " + element.id + "ok = true;");
        });
    var tempState = urlParams.get("state");
    var remainingState = tempState;
    var tempvalue = "";
    var tempArrayFix = tempState.split("!");
    var camposEnArray = tempArrayFix.slice(1);
    var nombreExtraido = tempArrayFix.slice(0,1);
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
    camposEnArray = nombreExtraido.concat(camposEnArray);
    for (const e of Object.values(camposEnArray))
        "_" == e[0] && (document.getElementById("nombre").value = (e.slice(1)).replace(regexguion," ")),
            "a" == e[0] && (document.getElementById("personas").value = parseInt(e.slice(1))),
	    "A" == e[0] && (document.getElementById("hijosmediacion").value = parseInt(e.slice(1))),
            "b" == e[0] && (document.getElementById("arriendo").value = parseInt(e.slice(1))),
            "c" == e[0] && (document.getElementById("luz").value = parseInt(e.slice(1))),
            "d" == e[0] && (document.getElementById("agua").value = parseInt(e.slice(1))),
            "e" == e[0] && (document.getElementById("internet").value = parseInt(e.slice(1))),
            "f" == e[0] && (document.getElementById("calefa").value = parseInt(e.slice(1))),
            "g" == e[0] && (document.getElementById("superm").value = parseInt(e.slice(1))),
            "h" == e[0] && (document.getElementById("feria").value = parseInt(e.slice(1))),
            "i" == e[0] && (document.getElementById("almacen").value = parseInt(e.slice(1))),
            "j" == e[0] && (document.getElementById("arancel").value = parseInt(e.slice(1))),
            "k" == e[0] && (document.getElementById("transporte").value = parseInt(e.slice(1))),
            "l" == e[0] && (document.getElementById("utiles").value = parseInt(e.slice(1))),
            "m" == e[0] && (document.getElementById("consultas").value = parseInt(e.slice(1))),
            "n" == e[0] && (document.getElementById("medicamentos").value = parseInt(e.slice(1))),
            "o" == e[0] && (document.getElementById("ropa").value = parseInt(e.slice(1))),
            "p" == e[0] && (document.getElementById("calzado").value = parseInt(e.slice(1))),
            "q" == e[0] && (document.getElementById("esparcimiento").value = parseInt(e.slice(1))),
            "r" == e[0] && (document.getElementById("talleres").value = parseInt(e.slice(1))),
            "s" == e[0] && (document.getElementById("aseo").value = parseInt(e.slice(1))),
            "t" == e[0] && (document.getElementById("diapers").value = parseInt(e.slice(1))),
            "u" == e[0] && (document.getElementById("salacuna").value = parseInt(e.slice(1))),
            "v" == e[0] && (document.getElementById("ninera").value = parseInt(e.slice(1))),
            "w" == e[0] && (document.getElementById("madre").value = parseInt(e.slice(1)));
}
function SendWspMsg() {
    let e = "";
    (e = "https://api.whatsapp.com/send/?phone=56953560843&text=Hola, ¿me ayudan con mi caso?%0DRellené el formulario de Legalmente Mamá ♥%0D%0Dlegalmentemama.github.io/?state=" + globalStateString), window.open(e, "_blank");
}
