<template>
    <div class="site_content">
       <Sidebar />
       <div class="content">
            <h1><strong>Шерлок</strong></h1>
                <h2>Перегляньте трейлер, можливо зацікавить!</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/eMM7sX4-6gc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="info_film_page">
                    <span class="label">рейтинг: </span><span class="value">9.2 / 10</span>
                    <span class="label">рік: </span><span class="value">2010</span>
                    <span class="label">режисер: </span><span class="value">Марк Гетіс и Стівен Мофат</span>
                </div>
                <hr>
                <h2>Опис серіалу Шерлок</h2>
                <div class="description_film">
                    <img src="./img/3.png">
                    <p>Опис серіалу є вільною адаптацією книг Артура Конан Дойля про детектива Шерлока Холмса і його напарника Джона Ватсона, в якій дія перенесена в XXI століття. Детектив Шерлок Холмс, шукаючи сусіда по квартирі, знайомиться з Джоном Ватсоном — військовим лікарем, який повернувся з Афганістану.</p>
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
