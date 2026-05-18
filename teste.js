async function teste(){

    const bcrypt = require('bcrypt');
    const senha = "123456"
    const senhaDigitada = "123465"
    
    const salt =  await bcrypt.genSalt(10);
    const senhaCrip =  await bcrypt.hash(senha, salt);
    const status = await bcrypt.compare(senhaDigitada, senhaCrip);

    console.log (`Senha Criptografada: ${senhaCrip}`)
    console.log (`Senha:  ${senha}`)
    console.log (`Status: ${status}`)

    console.log (`Salt ${salt}`)
}

teste()