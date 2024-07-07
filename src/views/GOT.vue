<template>
    <div class="site_content">
       <Sidebar />
       <div class="content">
            <h1><strong>Гра престолів</strong></h1>
                <h2>Перегляньте трейлер, можливо зацікавить!</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tlNYHPBYu28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="info_film_page">
                    <span class="label">рейтинг: </span><span class="value">9.5 / 10</span>
                    <span class="label">рік: </span><span class="value">2011</span>
                    <span class="label">режисер: </span><span class="value">19 режисерів працювали над створенням серіалу</span>
                </div>
                <hr>
                <h2>Опис серіалу Гра престолів</h2>
                <div class="description_film">
                    <img src="./img/1.png">
                    <p>Після смерті свого правиці (найближчого помічника і радника) Джона Аррена король Роберт Баратеон вирушає на північ: відвідати свого старого друга Неда Старка і запропонувати йому посаду, що звільнилася. З королем подорожують його дружина, королева Серсея, та її брат-близнючок Джейме, лицар Королівської гвардії. Бран, молодший син Неда, випадково застає їх під час бурхливого сексу, і Джейме, намагаючись зберегти їхній зв'язок у таємниці, виштовхує Брана з вікна високої вежі. Нед приймає пропозицію Роберта і вирушає на південь у супроводі двох дочок, залишаючи сімейний замок на старшого сина та спадкоємця Робба. Кейтілін, дружина Неда, залишається доглядати Брана.</p>
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
