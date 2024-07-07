<template>
    <div class="site_content">
       <Sidebar />
       <div class="content">
            <h1>Контакти</h1>
            <p>Надішліть Ваш відгук про портал MovieFinder!</p>
                <div class="send">
                    <form method="post" action="#" id="review">
                        <input type="text" name="review_name" placeholder="ваше ім'я">
                        <input type="text" name="review_name" placeholder="ваш email">
                        <textarea name="review_text"></textarea>
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