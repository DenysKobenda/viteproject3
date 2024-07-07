<template>
    <div class="site_content">
       <Sidebar />
       <div class="content">
            <h1><strong>Хмарний атлас</strong></h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_rZou_PqFoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="info_film_page">
                    <span class="label">рейтинг: </span><span class="value">7.4 / 10</span>
                    <span class="label">рік: </span><span class="value">2012</span>
                    <span class="label">режисер: </span><span class="value">Лана та Ендрю Вачовскі</span>
                </div>
                <hr>
                <h2>Опис Хмарний атлас</h2>
                <div class="description_film">
                    <img src="./img/cloud.png">
                    <p>Історико-фантастичний фільм «Хмарний атлас» розповідає кілька історій із життя кількох людей у ​​різний період часу, які виявилися переплетеними між собою. Минуле та майбутнє переплелися міцною ниткою, але мало хто замислюється про це у теперішньому. Кожна дія, кожен зроблений вибір веде до певних наслідків і саме ці дії визначають наступний перебіг подій у житті. який саме буде цей зв'язок. Кохання, надія, сміливість. Смерть, життя, народження. Майбутнє, сьогодення, минуле. Все це існувало до нас і існуватиме після. Все взаємопов'язано. </p>
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
