const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Lê os números do arquivo numeros.txt
const numeros = fs.readFileSync('numeros.txt', 'utf-8')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0);

const client = new Client({
    authStrategy: new LocalAuth()
});

// Gera o QR Code para login
client.on('qr', (qr) => {
    console.log('Escaneie o QR Code abaixo com seu WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', async () => {
    console.log('✔️ Cliente conectado!');

    const resultados = [];

    for (const numero of numeros) {
        // Formata o número para o padrão do WhatsApp
        const numeroFormatado = '55' + numero.replace(/\D/g, '') + '@c.us';

        const isRegistered = await client.isRegisteredUser(numeroFormatado);

        if (!isRegistered) {
            const resultado = `${numero} - ❌ Não tem WhatsApp`;
            console.log(resultado);
            resultados.push(resultado);
        }
    }

    // Salva apenas os que NÃO têm WhatsApp
    fs.writeFileSync('resultado.txt', resultados.join('\n'), 'utf-8');

    console.log('\n✅ Verificação concluída! Resultado salvo em resultado.txt');

    client.destroy();
});

client.initialize();
