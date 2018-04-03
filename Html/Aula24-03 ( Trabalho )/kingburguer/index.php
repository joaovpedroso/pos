<!DOCTYPE html>
<html>
    <head>
        <title>Kingburguer</title>
        <meta charset="utf-8">
        <meta name="description" content="A melhor hamburgueria de Umuarama">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <base href="http://localhost/kingburguer/">
        <link rel="stylesheet" type="text/css" href="css/estilo.css">
        <link rel="stylesheet" type="text/css" href="css/fontawesome-all.min.css">
        <link rel="shortcut icon" href="images/logo.png">
        
        <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
    </head>
    
    <body>
        <header>
            <nav>
                <a href="index.php" title="Home" class="logo">
                    <img src="images/kingburger.png" title="Kingburguer" alt="Kingburguer">
                </a>
                <button type="button" id="menu">
                    <i class="fas fa-bars"></i>
                </button>
                <ul>
                    <li><a href="home" title="Home">Home</a></li>
                    <li><a href="sobre" title="Sobre">Sobre</a></li>
                    <li><a href="cardapio" title="Cardápio">Cardápio</a></li>
                    <li><a href="contato" title="Contato">Contato</a></li>
                </ul>
            </nav>
            <div class="clear"></div>
            <div class="msg">
                <h1>Mega Max Burguer</h1>
                <p>4 Hamburgueres de Carne + 4 Bacon Crocante</p>
            </div>
            <img src="images/10.png" title="Mega Max Burguer" alt="Mega Max Burguer" class="max">
        </header>
        <main>
            <?php
            if( isset( $_GET["p"] ) ){
                $p = $_GET["p"];
            }else {
                $p = "home";
            }
            
            $paginas = "paginas/".$p.".php";
            
            if(file_exists($paginas) ){
                include $paginas;
            }else {
                include "paginas/404.php";
            }
            
            ?>
        </main>
        <footer>
            <p>Desenvolvido por Web Dev ALFA 2018 - Turma III</p>
        </footer>
        
        <script>
            $("#menu").click(function(){
                $("nav ul ").toggle();
            });
        </script>
    </body>
</html>