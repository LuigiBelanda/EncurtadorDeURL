<h1 align="center"> 🔗 API - Encurtador de URL 🔗 </h1>
<h3 align="center">Encurtador de URL (Node, Typescript e MongoDB)</h3>

<br>

<h2>⭐ Objetivos deste repo</h2>
<p>Criar uma API que servi para encurtar URLs, usando como base os vídeos do projeto <code>Construindo Encurtador de URL</code> da plataforma<a href="https://web.dio.me/home"> Digital Innovation One </a> </p>

<br>

<h2>🔬 Tecnologias / Linguagens usadas neste repo</h2>
<ul>
<li>Node</li>
    <ul>
        <li>Dependências: <code>express</code>, <code>@typescript-eslint/eslint-plugin</code>, <code>@typescript-eslint/parser</code>, <code>@hasezoey/typegoose</code>, <code>@types/express</code>, <code>@types/mongoose</code>, <code>@types/shortid</code>, <code>cors</code>, <code>typescript</code>, <code>mongoose</code>, <code>nodemon</code>, <code>shortid</code>, <code>eslint</code></li>
    </ul>
<li>Typescript</li>
<li>MongoDB</li>
</ul>

<br>

<h2>📝 Scripts npm</h2>

<code>npm run build:watch</code>

> "build:watch": "tsc -w"
<p> serve para ficarmos vendo as alterações nos arquivos e fazermos a conversação para JS

<br>

<code>npm run dev</code>

> "dev": "nodemon ./dist/src/index.js"
<p> serve para nosso aplicação ficar se atualizando constantemente, usando como base os arquivos no caminho do comando acima

<br>

<h2>🔧 Imagens de algumas partes do projeto</h2> 
<p>Exemplo de requisição para encurtar uma URL</p>
<img src="./imgs readme/req insomnia.png">

<br>

<p>Exemplo de como os dados ficam guardados no MongoDB</p>
<img src="./imgs readme/dados mongodb.png">
