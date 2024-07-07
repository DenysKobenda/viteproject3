<template>
    <div class="site_content">
       <Sidebar />
       <div class="content">
            <h1><strong>Шалений Макс</strong></h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-3ZoAp6owdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="info_film_page">
                        <span class="label">рейтинг: </span><span class="value">7.5 / 10</span>
                        <span class="label">рік: </span><span class="value">2015</span>
                        <span class="label">режисер: </span><span class="value">Джордж Міллер</span>
                    </div>
                    <hr>
                    <h2>Опис Шалений Макс</h2>
                    <div class="description_film">
                        <img src="./img/max.png">
                        <p>Війна за ресурси призвела до краху цивілізації, на просторах постапокаліптичної пустки Австралії панують божевілля та дикі банди на саморобному транспорті. Дія відбувається у постапокаліптичному майбутньому після падіння цивілізації. Протягом фільму герої на вантажівці намагаються перетнути пустелю і дістатися легендарних «Зелених Земель» на сході; їх переслідує тиран Несмертний Джо.</p>
                    </div>
                    <hr>
                    <h2>Відгуки</h2>
                    <div class="send"> 
                        <form method="post" action="#" id="review">
                            <input type="text" name="review_name" placeholder="ваше ім'я">
                            <textarea name="review_text" placeholder="залиште свій коментар тут"></textarea>
                            <input type="submit" value="надіслати">
                        </form>
                    </div>
                </div>     	
         </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
components: {
 Sidebar
}
};
</script>

<style scoped>

</style>
