
let ReemplazoEncriptar = /a|e|i|o|u/g;
let ReemplazoDesencriptar = /ai|enter|imes|ober|ufat/g;

function CodigoEncriptacion() {
    return {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };
}

function CodigoDesencriptacion() {
    return {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    };
}

function btnEncriptar() {
    if (valorTextoEncriptar() === "") {
        alert("Ingrese un texto a encriptar");
    } else {
        cambioDeVista();
        valorDeTextoEncriptado(
            "textoEncriptado",
            valorTextoEncriptar()
                .toLowerCase()
                .replace(ReemplazoEncriptar, (matched) => {
                    return CodigoEncriptacion()[matched];
                })
        );
    }
}

function btnDesencriptar() {
    if (valorTextoEncriptar() === "") {
        alert("Ingrese un texto a desencriptar");
    } else {
        cambioDeVista();
        valorDeTextoEncriptado(
            "textoEncriptado",
            valorTextoEncriptar()
                .toLowerCase()
                .replace(ReemplazoDesencriptar, (matched) => {
                    return CodigoDesencriptacion()[matched];
                })
        );
    }
}

function valorDeTextoEncriptado(elemento, texto) {
    let valorDeTextoEncriptado = document.getElementById(elemento);
    valorDeTextoEncriptado.innerHTML = texto;
}

function valorTextoEncriptar() {
    return document.getElementById("area__texto").value;
}

function validarTexto(input) {
    const regex = /^[a-zA-Z0-9\s]*$/;
    input.value = input.value.replace(/[^a-zA-Z0-9\s]/g, "");
}

function cambioDeVista() {
    document.getElementById("mostrar__resultado").style.display = "block";
    document.getElementById("inicioEncriptar").style.display = "none";
}

function copiartexto() {
    let Copiar = document.getElementById("textoEncriptado").value;
    navigator.clipboard.writeText(Copiar);

    if (Copiar === "") {
        alert("No hay texto para copiar");
    } else {
        alert("Texto copiado al portapapeles");
    }
}

function btnLimpiar() {
    valorDeTextoEncriptado("textoEncriptado", "");
    document.getElementById("area__texto").value = "";
    document.getElementById("inicioEncriptar").style.display = "block";
    document.getElementById("mostrar__resultado").style.display = "none";
}
