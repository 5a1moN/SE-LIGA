function copyText() {
    const texto = "+55 46 8414-3864";
    navigator.permissions.query({ name: "clipboard-write" }).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(texto).then(function () {
                console.log('Texto copiado para a área de transferência!');
                discordSpan.innerText = "Whatsapp Copiado"
                setTimeout(function () {
                    discordSpan.innerText = "Copiar Whatsapp"
                }, 2000)
            });
        }
    });
}