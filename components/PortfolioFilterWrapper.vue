<template>
    <div class="portfolio-area portfolio-default-area">
        <div class="container-fluid">
            <div v-masonry class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 portfolio-list box">
                <div  v-for="(item, index) in datas" :key="index"  class="item mix col cat--1 mb-30">
                    <!-- Single Portfolio Start -->
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img :src="item.src" alt="portfolio">
                        </div>
                        <div class="content">
                            <h3 class="title">
                                <n-link to="/portfolio-details">{{ item.title }}</n-link>
                            </h3>
                            <p class="desc">{{ item.description }}</p>
                        </div>
                    </div>
                    <!-- Single Portfolio End -->
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                datas: [
                    {
                        title: "falken on the pulse",
                        src: "/images/portfolio/falken-cover.jpg",
                        description: "Ini deskripsi Project"
                    },
                    {
                        title: "falken on the pulse",
                        src: "/images/portfolio/dunlop2021.jpg",
                        description: "Ini deskripsi Project"
                    },  
                    {
                        title: "falken on the pulse",
                        src: "/images/portfolio/mount.jpg",
                        description: "Ini deskripsi Project"
                    },                   
                    {
                        title: "Dunlop Leaflet",
                        src: "images/portfolio/dunlop-leaflet.jpg",
                        description: "Ini deskripsi Project"                        
                    },
                    {
                        title: "The Abide Farm",
                        src: "images/portfolio/rusa.jpg",
                        description: "Ini deskripsi Project"
                    },
                    {
                        title: "TPPI",
                        src: "images/portfolio/tppi.jpg",
                        description: "Ini deskripsi Project"
                    },  
                    {
                        title: "Falken",
                        src: "images/portfolio/falken2020.jpg",
                        description: "Ini deskripsi Project"
                    },
                    {
                        title: "PJB",
                        src: "images/portfolio/pjb.jpg",
                        description: "Ini deskripsi Project"
                    },
                    {
                        title: "KMI Wire",
                        src: "images/portfolio/kmi.jpg",
                        description: "Ini deskripsi Project"
                    }                                                                                                   
                ]
            }
        },
        mounted () {

            if (typeof this.$redrawVueMasonry === 'function') {
                this.$redrawVueMasonry()
            }
            this.onLoad();
        },

        methods:{
            async onLoad(){
                await this.sleep(950)
                this.$redrawVueMasonry()
            },
            sleep(ms){
                return new Promise(resolve => setTimeout(resolve, ms))
            }
        }, 
    };
</script>
