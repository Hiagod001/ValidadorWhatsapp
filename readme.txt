# WhatsApp Number Checker Bot

Bot em Node.js que verifica se números brasileiros têm WhatsApp usando a API do [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js).

---

## Funcionalidades

- Gera QR Code para autenticação.
- Lê números de `numeros.txt`.
- Verifica quais números **não têm WhatsApp**.
- Salva o resultado em `resultado.txt`.

---

## Como usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/seurepositorio.git
   cd seurepositorio
Instale as dependências:

bash
Copiar
Editar
npm install
Coloque os números que deseja verificar no arquivo numeros.txt, um por linha (apenas números, pode ter formatos variados).

Rode o bot:

bash
Copiar
Editar
node index.js
Escaneie o QR Code com seu WhatsApp para autenticar.

Aguarde o processo finalizar. O arquivo resultado.txt conterá os números que não têm WhatsApp.

Observações
Os números devem estar no formato nacional (DDD + número), o código do Brasil (55) é adicionado automaticamente.

Recomendado usar com número de WhatsApp que você possui e está ativo.

Para maior segurança, os dados de autenticação são salvos localmente.

Licença
