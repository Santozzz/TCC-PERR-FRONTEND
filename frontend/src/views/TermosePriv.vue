<template>
    <div>
        <router-link to="/cadastro" class="back-button">← Voltar</router-link>
        <div class="container">
            <h1 id="inicio"> Diretrizes do Site</h1>
            <div class="ttl">
                <h1 id="termos">
                    Termos De Uso
                </h1>
                    <h2>1. Aceitação dos Termos</h2> 
                     <p>Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se não concordar, não use o site.</p><br>

                    <h2>2. Detalhes do Proprietário</h2>
                    <p>Este site é de propriedade de PERR - Parceria para Emprego e Reintegração de Refugiados, desenvolvido na Etec MCM, com sede em R. Bélgica, 88 - Jardim Alvorada, Ribeirão Pires - SP, 09402-060.</p><br>
                    <h2>3. Informações de Contato</h2>
                    <p>Se você tiver dúvidas ou preocupações sobre estes Termos de Uso, entre em contato conosco pelo e-mail: etecmcmperr@gmail.com .</p><br>

                    <h2>4. Uso do Conteúdo</h2>
                     <p>O conteúdo deste site é protegido por leis de propriedade intelectual. Você não pode reproduzir, distribuir ou modificar o conteúdo sem a nossa autorização prévia por escrito. É permitido o uso para fins pessoais e não comerciais, desde que a fonte seja devidamente citada.</p><br>

                    <h2>5. Requisitos de Registro</h2>
                     <p>Para acessar certas áreas do site, pode ser necessário o registro. Você concorda em fornecer informações verdadeiras e precisas ao se registrar. É sua responsabilidade manter a confidencialidade da sua senha e outras informações de segurança. Você é responsável por todas as atividades que ocorrem em sua conta.</p><br>

                    <h2>6. Conteúdo Gerado pelo Usuário</h2>
                     <p>Se o site permitir comentários ou conteúdo gerado pelo usuário, você concorda em não publicar nada que seja ilegal, abusivo, difamatório ou que infrinja os direitos de terceiros. Reservamo-nos o direito de remover qualquer conteúdo que consideremos inadequado.</p><br>

                    <h2>7. Limitação de Responsabilidade</h2>
                     <p>O site não é responsável por danos diretos, indiretos, acidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de uso do site, incluindo, mas não se limitando, a danos por perda de lucros, dados ou outras perdas intangíveis.</p><br>

                    <h2>8. Política de Privacidade e Cookies</h2>
                     <p>A coleta e uso de informações pessoais são regidos pela nossa Política de Privacidade, que pode ser acessada em [link para a Política de Privacidade]. O site pode usar cookies para melhorar a experiência do usuário. Para mais informações, consulte nossa Política de Cookies.</p><br>

                    <h2>9. Alterações nos Termos</h2>
                     <p>Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. As alterações serão publicadas nesta página e entrarão em vigor imediatamente.</p><br>

                    <h2>10. Legislação Aplicável</h2>
                     <p>Estes Termos de Uso são regidos pelas leis do Brasil - São Paulo, e quaisquer disputas serão resolvidas nos tribunais competentes.</p><br>

                <h1 id="politicas">Políticas de Privacidade</h1>
                
                    <h2>Introdução</h2> 
                    <p>Esta Política de Privacidade descreve como coletamos, usamos, protegemos e compartilhamos suas informações pessoais quando você visita ou utiliza o site PERR. Ao usar o site, você concorda com a coleta e o uso de suas informações de acordo com esta política.</p> <br>

                    <h2>1. Informações Coletadas </h2>
                    <p>Coletamos informações pessoais que você nos fornece voluntariamente, como:</p> 

                    <ul>
                        <li> Nome.</li>
                        <li>Endereço de e-mail.</li>
                        <li>Informações de contato.</li>
                        <li>Qualquer outra informação que você optar por fornecer.</li>
                    </ul> <br>
                    <p>Além disso, coletamos informações automaticamente, como:</p>
                    <ul>
                        <li>Endereço IP.</li>
                        <li>Tipo de navegador</li>
                        <li>Páginas visitadas e tempo gasto no site.</li>
                        <li>Informações de cookies</li>
                    </ul> <br>
                    <h2>2. Compartilhamento de Informações</h2> 
                    <p>As informações coletadas podem ser compartilhadas com terceiros apenas nas seguintes situações:</p> 

                    <ul>
                        <li>Para prestadores de serviços que nos ajudam a operar o site (ex.: serviços de hospedagem, análise de dados).</li>
                        <li>Para cumprir obrigações legais ou responder a solicitações de autoridades competentes.</li>
                        <li>Em caso de fusão, aquisição ou venda de ativos, em que suas informações podem ser transferidas.</li> <br>
                    </ul>

                    <h2>3. Armazenamento das Informações</h2> 
                    <p>As informações coletadas são armazenadas em servidores seguros. Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, não podemos garantir a segurança absoluta de suas informações.</p> <br>

                    <h2>4. Modificações da Política de Privacidade</h2> 
                    <p>Podemos alterar esta Política de Privacidade periodicamente. Notificaremos os usuários sobre quaisquer modificações significativas, publicando um aviso em destaque no site ou enviando um e-mail para os usuários registrados. Recomendamos que você reveja esta política regularmente para estar ciente de qualquer alteração.</p> <br>

                    <h2>5. Uso de Cookies</h2> <p>Este site utiliza cookies para melhorar a experiência do usuário e analisar o uso do site. Para mais informações sobre como usamos cookies, consulte nossa Política de <router-link :to="{ path: '/termos', hash: '#cookies' }">Cookies</router-link></p> <br>

                    <h2>6. Faixa Etária</h2> 
                    <p>Nosso site é destinado a usuários com idade mínima de 18 anos. Se você é menor de 18 anos, não deve fornecer informações pessoais. Se tomarmos conhecimento de que coletamos informações pessoais de um adolescente menor de 18 anos, tomaremos medidas para excluir essas informações.</p> <br>

                    Contato Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: etecmcmperr@gmail.com . <br>
                 <br>
                    <h1 id="cookies">Política de Cookies</h1>
                        <h2> O que são Cookies?</h2>
                        <p>Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou smartphone) quando você visita um site. Eles permitem que o site reconheça seu dispositivo e armazene certas informações sobre sua visita, como preferências de idioma e configurações de exibição.</p><br>
                        <h2>Como usamos Cookies</h2> 
                        Utilizamos cookies para:
                        <ul>
                            <li>Melhorar a experiência do usuário: Cookies ajudam a lembrar suas preferências e personalizar sua experiência ao usar nosso site.</li>
                            <li>Análise e desempenho: Usamos cookies para coletar informações sobre como os visitantes usam nosso site. Isso nos ajuda a entender o que funciona bem e a identificar áreas para melhoria.</li>
                            <li>Publicidade: Podemos usar cookies para exibir anúncios que sejam relevantes para você, com base em suas visitas anteriores ao nosso site ou a outros sites.</li>
                        </ul> <br>
                        <h2>Tipos de Cookies que Utilizamos</h2>
                        <p><strong>Cookies Necessários:</strong> Esses cookies são essenciais para o funcionamento do nosso site. Sem eles, algumas partes do site não funcionarão corretamente.</p> <br>
                        <p><strong>Cookies de Desempenho:</strong> Esses cookies coletam informações sobre como os visitantes usam nosso site, como as páginas mais visitadas e se os usuários recebem mensagens de erro. Eles não coletam informações que identificam um visitante.</p> <br>
                        <p><strong>Cookies de Funcionalidade:</strong> Esses cookies permitem que o site lembre-se das escolhas que você fez (como seu nome de usuário, idioma ou região) e ofereça funcionalidades aprimoradas e personalizadas.</p> <br>
                        <p><strong>Cookies de Publicidade:</strong> Esses cookies são usados para exibir anúncios relevantes para você e para acompanhar a eficácia das campanhas publicitárias.</p> <br>
                        <h2>Como Gerenciar Cookies</h2>
                        Você pode controlar e gerenciar cookies de várias maneiras. A maioria dos navegadores permite que você:
                        <ul>
                            <li>Visualize os cookies que estão armazenados no seu dispositivo.</li>
                            <li>Exclua cookies.</li>
                            <li>Bloqueie cookies de sites específicos ou todos os sites.</li>
                            <li>Configure seu navegador para que ele o avise quando um cookie estiver sendo enviado.</li>
                            <li>Consulte a seção de ajuda do seu navegador para obter instruções específicas. Observe que, se você optar por excluir ou bloquear cookies, isso pode afetar sua experiência de uso do site.</li> <br>
                            
                        </ul>
                        <h2>Alterações na Política de Cookies </h2>
                            Podemos atualizar esta Política de Cookies periodicamente. Qualquer alteração será publicada nesta página e entrará em vigor imediatamente. <br> 
                        <br>
                        <h2>Contato</h2>
                        Se você tiver dúvidas ou preocupações sobre nossa Política de Cookies, entre em contato conosco pelo e-mail: etecmcmperr@gmail.com  <br> 
                    
            </div>

        </div>
    </div>
</template>

<script>


export default {
    name: 'TermosePriv',
}
</script>

<style scoped>
.container{
    width: 80%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: visible;
}

.ttl{
    width: 60%;
    /* height: 95%; */
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    position: sticky;
    top: 20px; /* Distância do topo */
    background-color: #e2eeef53;  
    padding: 20px;              
    border-radius: 15px;        
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    border: 1px solid #b2ebf2;  
    margin: 20px 0;             
}


.ttl h1{
    color: orange;
}

.ttl ul{
    padding-left: 50px;
}

.inicio{
    text-align: left;
}

.ttl p{
    font-size: 1.15em;
}
</style>

