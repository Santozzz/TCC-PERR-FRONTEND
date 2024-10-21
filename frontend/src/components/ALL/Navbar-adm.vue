<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><router-link to="/CadastroVaga">Cadastro Vagas</router-link></li>
                    <li><router-link to="/CadastroCurso">Cadastro Cursos</router-link></li>
                    <li><router-link to="/DashboardUser">Validar usuarios</router-link></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Navbar-adm',
    data () {
        return {

        }
    }
}
</script>

<style  scoped>
header{
    width: 100%;
    height: 8vh;
    background-color: #f7f7f7;
    box-shadow: 0px 2px 1px 1px #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}

nav{
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

ul{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
}

li a{
    text-decoration: none;
    color: #000;
}
</style>