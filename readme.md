


Para não ser necessário toda hora ir no terminal e ficar digitando 'tsc  .\app.ts' para assim transpilar o arquivo '.ts'  gerando um arquivo '.js', é necessário dar um comando na raiz da pasta criando o arquivo 'tsconfig.json', para isso insira o seguinte comando 'npx tsc --init'.

Após criado o arquivo 'tsconfig.json' verifique o target para setar a versão que vai ser utilizada.

Feito as configurações no arquivo 'app.ts' pressione as teclas Crtl + Shift + B nas escolhas que abrir escolha a 'tsc-build - tsconfig.json', assim será transpilkado em tempo de execução criando o arquivo '.js'.

Arquivo em modulos:
* Módulo_1 => configuração do tscconfig, impressão o hello world.
* Módulo_2 => introdução a tipagem e seustipos em typescript:
    + type Annotation
    + type boolean
    + type number & bigint
    + type String
    + type Array
    + type Tupla
    + type Enums 