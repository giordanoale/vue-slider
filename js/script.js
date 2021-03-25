var app = new Vue (
    {
        el: "#root",
        data: {
            images: [
                {
                    img: "https://files.salsacdn.com//article/7086_Positano/imagemain/Dollarphotoclub-75249551-1770x1152_z_0_63_514.20181107161534.jpg",
                    nome: "Positano",
                },
                {
                    img: "https://www.costieraamalfitana.com/wp-content/uploads/2016/01/amalfi-1.jpg",
                    nome: "Amalfi",
                },
                {
                    img: "https://images.placesonline.com/photos/424011211180417_Cetara_680552194.jpg",
                    nome: "Cetara",
                },
                {
                    img: "https://static.fanpage.it/wp-content/uploads/sites/4/2018/06/ravello-villa-rufolo-panoramio.jpg",
                    nome: "Ravello",
                },
            ],
            imageIndex: 0,
        },
        methods: {
            nextImage: function() {
                this.imageIndex++
                
                if (this.imageIndex == this.images.length) {
                    this.imageIndex = 0;
                }
            },
            prevImage: function() {
                this.imageIndex--
                    
                if (this.imageIndex < 0) {
                    this.imageIndex = this.images.length - 1;
                }
            }    
        }
    }
);