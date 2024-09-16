<template>
    <div>
        <div class="container">
            <div class="header-cursos">
                <div class="pesquisa-cursos">
                    <div class="input-cursos">  
                        <input type="text" placeholder="Procurar curso">
                    </div>
                </div>
            </div>
                <div class="container-cursosdis">
                    <h3>Cursos Disponíveis</h3>   
                    <div class="container-cardcursos">
                        <div class="CardCursos"></div>
                    </div>
                </div>
                <div class="container-cursosand">
                    <h3>Cursos Em Andamento</h3>
                    <div class="container-cardcursos">
                        <div class="CardCursos"></div>
                    </div>
                </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 30px 20%;
    justify-content: space-evenly;
    align-items: center;
}

.header-cursos{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 90%;
        height: 10vh;
        background-color: #ffffff;
        box-shadow: 0 1px 1px 1px #ccc;
        border-radius: 2px;
    }

.pesquisa-cursos{
    display: flex;
        justify-content: center;
        width: 100%;
}
.input-cursos input{
    width: 90%;
    padding: 5px;
    border-radius: 2px 0 0 2px;
    border: 1px solid #ccc;
}
.input-cursos{
        display: flex;
        justify-content: left;
        align-items: center;
        width: 95%;
        background-color: #252F3F;
        border-radius: 2px;
}

.container-cursosdis, h3{
    font-size: 25px;
    color: #252F3F;
    width: 95%;
    margin-top: 20px;
}

.container-cursosdis{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-cursosand{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-cardcursos{
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 95%;
    height: 40vh;
    gap: 20px;
    user-select: none;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding: 0px 10px;
}

.CardCursos{
    position: relative;
    display: flex;
    flex: 1 1 300px;
    max-width: 280px;
    min-width: 270px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 70%;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 1px 1px #ccc;
    transition: .3s ease-in-out;
    overflow: hidden;
}


</style>