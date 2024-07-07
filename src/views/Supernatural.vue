<template>
    <div class="site_content">
       <Sidebar />
       <div class="content">
            <h1><strong>Надприродне</strong></h1>
                <h2>Перегляньте трейлер, можливо зацікавить!</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4oL4OdhOyzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div class="info_film_page">
                    <span class="label">рейтинг: </span><span class="value">8.6 / 10</span>
                    <span class="label">рік: </span><span class="value">2005</span>
                    <span class="label">режисер: </span><span class="value">над створенням серіалу працювали 27 режисерів</span>
                </div>
                <hr>
                <h2>Опис серіалу Надприродне</h2>
                <div class="description_film">
                    <img src="./img/4.png">
                    <p>На початку «Надприродне» був серіалом про двох братів — мисливців на нечисть, які вирушили на пошуки свого батька, такого ж мисливця. Джон Вінчестер безвісти зник у ході чергового полювання, але незабаром з'ясувалося, що він просто не хоче, щоб його знайшли.
                    Справа в тому, що Джон вийшов на слід Азазеля, могутнього жовтоокого демона, винного у смерті Мері, матері Діна і Сема, і Джессіки, дівчини Сема. Джон з'ясував, що Азазель працює над втіленням зловісного та масштабного плану, в якому може бути причетний Сем. Азазелю допомагали інші демони, здатні вселятися у тіла людей.</p>
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
