
/* =========================================================
   1️⃣ UTILILY FUNCTION
   ========================================================= */

function removerAcentos(texto){
    
    // Normalize NFD (Adicionar na documentacao)
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function isNull(valor){
    if(valor === null){
        return true;
    }
    return false;
}
