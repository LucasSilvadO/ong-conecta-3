// SPA BÁSICA - ONG CONECTA
document.addEventListener("DOMContentLoaded", () => {
    const conteudo = document.getElementById("conteudo");
    
    const paginas = {
        index: `
            <!-- Seção principal -->
            <section class="card">
                <h2>Bem-vindo à ONG Conecta 💙</h2>
                <p>
                    A ONG Conecta é uma plataforma que conecta voluntários e projetos sociais,
                    promovendo solidariedade e impacto positivo nas comunidades.
                </p>
                <!-- Imagem principal -->
                <img src="imagens/voluntario.png" alt="Voluntários sorrindo em ação comunitária">
                <!-- Vídeo principal -->
                <div class="video-wrapper">
                    <video controls style="width: 70%; max-width: 700px; border-radius: 12px;">
                        <source src="imagens/video-institucional.mp4" type="video/mp4">
                        Seu navegador não suporta vídeos.
                    </video>
                </div>
            </section>

            <!-- Seção de projetos -->
            <section class="card">
            <h3>Projeto de Educação Digital</h3>
            <img src="imagens/projeto1.png" alt="Aula de informática para idosos">
            <p>
                Promovendo a inclusão digital para idosos através de oficinas práticas e
                acompanhamento individualizado.
            </p>
            <div class="tag">📚 Educação ✨</div>
            <div class="tag">🧑‍💻 Inclusão 🌈</div>
            </section>

            <section class="card">
            <h3>Ação Comunitária</h3>
            <img src="imagens/projeto2.png" alt="Distribuição de alimentos">
            <p>
                Organizando campanhas de arrecadação e distribuição de alimentos, roupas e brinquedos
                para famílias em vulnerabilidade social.
            </p>
            <div class="tag">❤️ Solidariedade 🤗</div>
            <div class="tag">🏘️ Comunidade 💪</div>
            </section>

            <!-- Formulário de cadastro -->
            <section class="card">
            <h3>Cadastro de Voluntário</h3>
            <form id="form-voluntario">
                <fieldset>
                <legend>Informações Pessoais</legend>

                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="telefone">Telefone:</label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(11)99999-9999"
                    required
                >

                <label for="endereco">Endereço Completo:</label>
                <input type="text" id="endereco" name="endereco" required>
                </fieldset>

                <fieldset>
                <legend>Interesse de Voluntariado</legend>

                <label for="area">Área de Interesse:</label>
                <select id="area" name="area" required>
                    <option value="">Selecione...</option>
                    <option value="educacao">Educação</option>
                    <option value="ambiental">Meio Ambiente</option>
                    <option value="comunitario">Ação Comunitária</option>
                </select>

                <label for="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" rows="4"></textarea>
                </fieldset>

                <button type="submit">Enviar Cadastro</button>
            </form>
            </section>

            <div class="alert sucesso" id="mensagem-sucesso" style="display:none;">
            ✅ Cadastro enviado com sucesso! Obrigado por se voluntariar.
            </div>
        `,

        sobre: `
            <section class="card">
            <h2>Quem Somos</h2>
            <p>
                A <strong>ONG Conecta</strong> nasceu com o propósito de unir pessoas dispostas a transformar o mundo
                por meio de ações solidárias, educativas e sustentáveis.
            </p>
            <img src="imagens/voluntario.png" alt="Voluntários sorrindo em ação comunitária">
            </section>

            <section class="card">
            <h2>Nossa Missão</h2>
            <p>
                Promover conexões entre voluntários e instituições, gerando impacto social positivo através da
                <strong>tecnologia, empatia e colaboração</strong>.
            </p>
            <div class="alert aviso">💡 Junte-se a nós e faça parte dessa transformação!</div>
            </section> 
        `,
    
    projetos:`
      <section class="card">
        <h2>Nossos Projetos</h2>
          <p>
             Conheça algumas das iniciativas da <strong>ONG Conecta</strong> que estão transformando vidas em todo o país. <br>   
              Seja voluntário ou doador e faça parte dessa rede de solidariedade 💙
           </p>
      </section>

      <section class="card">
        <h3>Projeto Alimenta Esperança</h3>
        <img src="imagens/projeto1.png" alt="Distribuição de alimentos">
          <p>
            Arrecadamos e distribuímos cestas básicas para famílias em vulnerabilidade social. <br> 
            Junte-se a nós e ajude a combater a fome e promover dignidade.
          </p>
        <div class="tag">❤️ Solidariedade 🤗</div>
        <div class="tag">🏘️ Comunidade 💪</div>
      </section>

      <section class="card">
        <h3>Educação Digital</h3>
        <img src="imagens/projeto2.png" alt="Oficina de informática para idosos">
          <p>
            Oferecemos cursos gratuitos de informática básica para jovens e idosos, promovendo
            a <strong>inclusão digital</strong> e ampliando oportunidades de aprendizado.
          </p>
        <div class="tag">📚 Educação ✨</div>
        <div class="tag">🧑‍💻 Inclusão 🌈</div>
      </section>

      <section class="card">
        <h3>Ação Comunitária</h3>
        <img src="imagens/projeto3.png" alt="Mutirão comunitário">
          <p>
            Realizamos campanhas de arrecadação, oficinas e eventos de integração
            para fortalecer laços comunitários e apoiar famílias locais.
          </p>
        <div class="tag">🤝 Voluntariado 💫</div>
        <div class="tag">💙 Impacto Social 🌍</div>
      </section>
    `,

    cadastro: `
      <section class="card">
        <h2>Cadastro de Voluntário</h2>
        <p>
          Preencha o formulário abaixo para fazer parte da ONG Conecta e contribuir
          com nossas ações sociais 💙
        </p>

        <form id="form-cadastro">
          <fieldset>
          <legend>Informações Pessoais</legend>

          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required>

          <label for="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="(11)99999-9999"
            required
            >

          <label for="endereco">Endereço Completo:</label>
          <input type="text" id="endereco" name="endereco" required>
        </fieldset>

        <fieldset>
          <legend>Áreas de Interesse</legend>

          <label for="area">Selecione uma área:</label>
          <select id="area" name="area" required>
            <option value="">Selecione...</option>
            <option value="educacao">Educação</option>
            <option value="meioambiente">Meio Ambiente</option>
            <option value="comunitario">Ação Comunitária</option>
        </select>

        <label for="mensagem">Mensagem (opcional):</label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="4"
             placeholder="Conte um pouco sobre você..."
          ></textarea>
        </fieldset>

        <button type="submit">Enviar Cadastro</button>
      </form>

      <div class="alert aviso">
        ⚠️ Certifique-se de preencher todos os campos obrigatórios antes de enviar!
      </div>

      <div
        class="alert sucesso"
        id="mensagem-sucesso"
        style="display: none;"
        >
        ✅ Cadastro enviado com sucesso! Obrigado por se voluntariar 💙
      </div>
  </section>
    `,
  };


  
  function carregarPagina() {
    const hash = window.location.hash.substring(1) || "index";
    conteudo.innerHTML = paginas[hash] || "<h2>Página não encontrada 😢</h2>";
  }

 
  window.addEventListener("hashchange", carregarPagina);

  // Carrega a página inicial
  carregarPagina();
});
