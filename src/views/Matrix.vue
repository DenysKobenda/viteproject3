<template>
    <div class="site_content">
       <Sidebar />
       <div class="content">
            <h1><strong>Матриця: Революція</strong></h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PCHMZH998aY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="info_film_page">
                        <span class="label">рейтинг: </span><span class="value">8.0 / 10</span>
                        <span class="label">рік: </span><span class="value">2003</span>
                        <span class="label">режисер: </span><span class="value">брати Вачовскі</span>
                    </div>
                    <hr>
                    <h2>Опис Матриця: Революція</h2>
                    <div class="description_film">
                        <img src="./img/matrix.png">
                        <p>Дія фільму розвивається відразу після подій другого фільму. Бейн і Нео непритомні. Морфеус перебуває в глибокій депресії після усвідомлення того, що все, у що він вірив, є брехнею. Нео виявляється на станції метро — виявляється, що це перехідний пункт між Матрицею і реальним світом. Він зустрічає програміста-індуса Рама-Кандру з дружиною Камалою та дочкою Саті. Рама-Кандра повідомляє Нео, що станцією управляє Провідник, який підпорядковується Французі</p>
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
