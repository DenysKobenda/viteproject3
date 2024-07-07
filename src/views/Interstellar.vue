<template>
	     <div class="site_content">
            <Sidebar />
                <div class="content">
                	<h1><strong>Інтерстеллар</strong></h1>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xHGRCBV46ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="info_film_page">
                        <span class="label">рейтинг: </span><span class="value">8.1 / 10</span>
                        <span class="label">рік: </span><span class="value">2014</span>
                        <span class="label">режисер: </span><span class="value">Кристофер Нолан</span>
                    </div>
                    <hr>
                    <h2>Опис Інтерстеллар</h2>
                    <div class="description_film">
                        <img src="./img/inter.png">
                        <p>Коли посуха приводить людство до продовольчої кризи, колектив дослідників і вчених вирушає крізь чортовину (яка імовірно з'єднує області простору-часу через велику відстань) у подорож, щоб перевершити колишні обмеження для космічних подорожей людини і переселити людство на іншу.</p>
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
  