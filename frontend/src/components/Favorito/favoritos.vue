<template>
    <div>
        <div class="container">
            <div class="container-vagasFav">
                <h3 class="ttl-padrao">Vagas favoritas</h3>
                <div class="container-cardVagasFav">
                    <div class="card-vagas">
                        <div class="img-vaga-1"></div>
                        <div class="ttl-vaga">
                            <h3>Vaga de ajudante de obras</h3>
                        </div>
                        <div class="btn-assistir">
                            <button>Ver mais</button>
                        </div>
                    </div>
                    <div class="card-vagas">
                        <div class="img-vaga-2"></div>
                        <div class="ttl-vaga">
                            <h3>Vaga de auxiliar administrativo</h3>
                        </div>
                        <div class="btn-assistir">
                            <button>Ver mais</button>
                        </div>
                    </div>
                    <div class="card-vagas">
                        <div class="img-vaga-3"></div>
                        <div class="ttl-vaga">
                            <h3>Vaga de auxiliar de vendas</h3>
                        </div>
                        <div class="btn-assistir">
                            <button>Ver mais</button>
                        </div>
                    </div>
                    <div class="card-vagas">
                        <div class="img-vaga-4"></div>
                        <div class="ttl-vaga">
                            <h3>Vaga de recepcionista</h3>
                        </div>
                        <div class="btn-assistir">
                            <button>Ver mais</button>
                        </div>
                    </div>
                    <div class="card-vagas">
                        <div class="img-vaga-5"></div>
                        <div class="ttl-vaga">
                            <h3>Vaga repositor de produtos</h3>
                        </div>
                        <div class="btn-assistir">
                            <button>Ver mais</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-vagasFav">
                <h3 class="ttl-padrao">Cursos favoritos</h3>
                <div class="container-cardVagasFav">
                    <div class="card-vagas">
                        <div class="img-vaga-6"></div>
                        <div class="ttl-vaga">
                            <h3>Curso de português básico</h3>
                        </div>
                        <div class="btn-assistir">
                            <button>Assistir</button>
                        </div>
                    </div>
                    <div class="card-vagas">
                        <div class="img-vaga-7"></div>
                        <div class="ttl-vaga">
                            <h3>Curso de inglês básico</h3>
                        </div>
                        <div class="btn-assistir">
                            <button>Assistir</button>
                        </div>
                    </div>
                    <div class="card-vagas">
                        <div class="img-vaga-8"></div>
                        <div class="ttl-vaga">
                            <h3>Curso de HTML e CSS básico ao avançado</h3>
                        </div>
                        <div class="btn-assistir">
                            <button>Assistir</button>
                        </div>
                    </div>
                    <div class="card-vagas">
                        <div class="img-vaga-9"></div>
                        <div class="ttl-vaga">
                            <h3>Curso de Administração</h3>
                        </div>
                        <div class="btn-assistir">
                            <button>Assistir</button>
                        </div>
                    </div>
                    <div class="card-vagas">
                        <div class="img-vaga-10"></div>
                        <div class="ttl-vaga">
                            <h3>Curso de Design Gráfico</h3>
                        </div>
                        <div class="btn-assistir">
                            <button>Assistir</button>
                        </div>
                    </div>
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

.ttl-padrao {
    font-size: 20px;
    color: #252F3F;
    width: 95%;
}

.img-vaga-1 {
    width: 100%;
    height: 50%;
    background-image: url(../../assets/img/Favoritos/aj-obras.jpg);
    background-position: center;
    background-size: cover;
}

.img-vaga-2 {
    width: 100%;
    height: 50%;
    background-image: url(../../assets/img/Favoritos/aux-adm.jpg);
    background-position: center;
    background-size: cover;
}

.img-vaga-3 {
    width: 100%;
    height: 50%;
    background-image: url(../../assets/img/Favoritos/aux-vend.webp);
    background-position: center;
    background-size: cover;
}

.img-vaga-4 {
    width: 100%;
    height: 50%;
    background-image: url(../../assets/img/Favoritos/recep.png);
    background-position: center;
    background-size: cover;
}

.img-vaga-5 {
    width: 100%;
    height: 50%;
    background-image: url(../../assets/img/Favoritos/repo.jpg);
    background-position: center;
    background-size: cover;
}

.img-vaga-6 {
    width: 100%;
    height: 50%;
    background-image: url(../../assets/img/Favoritos/curso-de-portugues-online.png);
    background-position: center;
    background-size: cover;
}

.img-vaga-7 {
    width: 100%;
    height: 50%;
    background-image: url(../../assets/img/Favoritos/Cursoing.jpg);
    background-position: center;
    background-size: cover;
}

.img-vaga-8 {
    width: 100%;
    height: 50%;
    background-image: url(../../assets/img/Favoritos/hc.png);
    background-position: center;
    background-size: cover;
}

.img-vaga-9 {
    width: 100%;
    height: 50%;
    background-image: url(../../assets/img/Favoritos/adm.webp);
    background-position: center;
    background-size: cover;
}

.img-vaga-10 {
    width: 100%;
    height: 50%;
    background-image: url(../../assets/img/Favoritos/Design_Grafico.webp);
    background-position: center;
    background-size: cover;
}

.ttl-vaga {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
}

.ttl-vaga h3 {
    font-weight: 500;
    font-size: 16px;
    width: 90%;
    height: 100%;
}

.btn-assistir {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
}

.btn-assistir button {
    width: 90%;
    height: 90%;
    background-color: #F78024;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: 500;
    cursor: pointer;
}

.container-vagasFav {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.container-cardVagasFav {
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 95%;
    height: 45vh;
    gap: 20px;
    user-select: none;
    overflow-x: scroll;
    scroll-behavior: smooth;
    padding: 0px 10px;
}

.card-vagas {
    position: relative;
    display: flex;
    flex: 1 1 300px;
    max-width: 280px;
    min-width: 270px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 90%;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: 0 1px 1px 1px #ccc;
    transition: .3s ease-in-out;
    overflow: hidden;
}
</style>