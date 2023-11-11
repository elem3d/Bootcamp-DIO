# CSS

Cascading Style Sheets / Folha de Estilo em Cascata

- Adiciona estilos a um documento web, com ele é possível costumizar o site
- Determina o layout do site
- Criado por Hakon Wium Lie, foi desenvolvido pela W3C

- É utilizado para outoras aplicações hoje em dia, como aplicativos, entre outros

- É uma linguagem de estilos

	linguagem de programação precisa necessariamente de :
		- fazer cálculos
		- alterar informações em memória
		- tomar decisões e mudar o fluxo de execução de um sistema

- não é uma linguagem de marcação, como o html, pois ele apenas declara como os elementos devem ser apresentados na tela, não defini-los, como o html
_________________________________________________________________________________


##  Coisas possíveis de se fazer com HTML e CSS:

- Layout e estilização de pg web
- Animações
    - Vantagens; mais leve e simples e não interfere no roteamento de sites
    - pode ser feito com imagens 2d, elementos 3d e textos
- Desenhos
- Filtros  
- Contadores

___________________________________________________________

Propriedade = características de um elemento html (cor, fundo, largura, altura...)

Valor = define o resultado da propriedade na tela

: = divide propriedade e valor
; = termina a definição de uma propriedade e um valor.

Como declarar:

	propriedade: valor;
----------------------
Como aplicar:

CSS Inline = adicionar atributo "style" dentro de tags html, precisando manualmente definir os estilos nas tags uma a uma
porém possui prioridade sobre outras implementações de estilos. Também é útil para testar os estilos no próprio arquivo html

CSS Interno = códico adicionado dentro da tag head do html
  - agiliza a escrita do código
  - padronização mais fácil
  - Estilos só valem para o arquivo em que está escrito

CSS Externo = criar um arquivo .css e chama ele dentro do head da página
  - tag <link> serve para linkar arquivos css, não para links como a tag <a>
  - velocidade de carregamento aumenta
  - é possível aplicar o mesmo código em diversas páginas, otimisando o tempo de escrita de código
  - É possível que a página fique sem estilo por um ou menos de segundos pelo carregamento do html ter sido mais rápido dependendo do código
____________________________________________________

Tipos de Setelor CSS:

  - Seletor de Tag = utiliza tags html para selecionar os elementos e aplicar as propriedades css
  - Seletor de ID = cria um identificador dentro da tag html e busca por ele
aplicação na tag em body: id="exemplo"
aplicação no <style> em head: #exemplo {propriedade:valor;}

   - Seletor de Classes = forma de identificar um grupo de elementos. É possível tem mais de um no mesmo elemento ao contrário do id que só pode ser usado uma vez
aplicação em body: class="exemplo"
aplicação em style: .exemplo {propriedade: valor;}

   - Seletor universal = seleciona todo o texto de uma página *
  

-------------------------------------------------------------




