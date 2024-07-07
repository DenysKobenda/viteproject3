<template>
	<div class="site_content">
    <Sidebar />
        <div class="content">            
            <table>
                <tr>
                    <th></th>
                    <th>Фільми</th>
                    <th class="center">Рік</th>
                    <th class="center">Рейтинг</th>
                </tr>
                <tr>
                    <td class="center"><img src="./img/inter.png"></td>
                    <td>1. <router-link to="/interstellar">Інтерстеллар</router-link></td>
                    <td class="center">2014</td>
                    <td class="center rating">8.1</td>
                </tr>
                <tr>
                    <td class="center"><img src="./img/matrix.png"></td>
                    <td>2. <router-link to="/matrix">Матриця: Революція</router-link></td>
                    <td class="center">2003</td>
                    <td class="center rating">8.0</td>
                </tr>
                <tr>
                    <td class="center"><img src="./img/max.png"></td>
                    <td>3. <router-link to="/max">Шалений Макс</router-link></td>
                    <td class="center">2015</td>
                    <td class="center rating">7.5</td>
                </tr>
                <tr>
                    <td class="center"><img src="./img/cloud.png"></td>
                    <td>4. <router-link to="/cloud">Хмарний атлас</router-link></td>
                    <td class="center">2013</td>
                    <td class="center rating">7.4</td>
                </tr>
            </table>
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
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
    .content {
        width: 100%;
        text-align: center;
        padding: 0px 20px 20px 20px;
    }
}
  </style>
  