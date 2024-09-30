<template>
    <div>
        <div class="container">
            <!-- <div class="header-cursos">
                <div class="pesquisa-cursos">
                    <div class="input-cursos">
                        <input type="text" placeholder="Procurar curso">
                    </div>
                </div>
            </div> -->
            <h1>Cursos</h1>

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

.header-cursos {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 10vh;
    background-color: #ffffff;
    box-shadow: 0 1px 1px 1px #ccc;
    border-radius: 2px;
}

.pesquisa-cursos {
    display: flex;
    justify-content: center;
    width: 100%;
}

.input-cursos input {
    width: 90%;
    padding: 5px;
    border-radius: 2px 0 0 2px;
    border: 1px solid #ccc;
}

.input-cursos {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 95%;
    background-color: #252F3F;
    border-radius: 2px;
}



h1 {
    font-size: 30px;
    color: #252F3F;
    width: 95%;
    font-weight: 500;
}
</style>