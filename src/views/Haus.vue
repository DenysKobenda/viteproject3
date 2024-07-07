<template>
    <div class="site_content">
       <Sidebar />
       <div class="content">
            <h1><strong>Доктор Хаус</strong></h1>
                <h2>Перегляньте трейлер, можливо зацікавить!</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zpiFx_6dSBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="info_film_page">
                    <span class="label">рейтинг: </span><span class="value">8.8 / 10</span>
                    <span class="label">рік: </span><span class="value">2004</span>
                    <span class="label">режисер: </span><span class="value">над створенням серіала працювали 23 режисера</span>
                </div>
                <hr>
                <h2>Опис серіалу Доктор Хаус</h2>
                <div class="description_film">
                    <img src="./img/2.png">
                    <p>Лікар-діагност Грегорі Хаус очолює команду лікарів. Разом вони мають поставити правильний діагноз. Самого Хауса можна назвати справді геніальним. Але чого в нього немає, то це тактовності і проникливості. За будь-якої можливості він намагається уникати спілкування з пацієнтами. Але все це з лишком компенсує його нетиповий розум і бездоганний інстинкт. Він любить вирішувати медичні загадки.</p>
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
