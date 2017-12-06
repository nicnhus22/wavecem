

waveCemApp.factory('helperFactory', function() {
    return {
        getColorForCategory: function(category) {
            category = this.cleanUpSpecialChars(category);
            switch(category) {
                case "Contrainteslgales":
                    return "indigo accent-4";
                case "Gestiondesdonnes":
                    return "light-blue accent-4";
                case "Contraintesfournisseurs":
                    return "cyan accent-4";
                case "Contraintesdinfrastructure":
                    return "teal accent-4";
                case "Contrainteslogiciel":
                    return "green darken-4";
                case "Contraintesapplicatives":
                    return "light-green accent-4";
                case "Contraintesprojet":
                    return "lime darken-4";
                default:
                    return "deep-purple accent-4"
            }
        },
        getHexColorForCategory: function(category) {
            category = this.cleanUpSpecialChars(category);
            switch(category) {
                case "Contrainteslgales":
                    return "#304ffe";
                case "Gestiondesdonnes":
                    return "#0091ea";
                case "Contraintesfournisseurs":
                    return "#00b8d4";
                case "Contraintesdinfrastructure":
                    return "#00bfa5";
                case "Contrainteslogiciel":
                    return "#1B5E20";
                case "Contraintesapplicatives":
                    return "#64dd17";
                case "Contraintesprojet":
                    return "#827717";
                default:
                    return "deep-purple accent-4"
            }
        },
        getRandomNumber: function(length) {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(length)
              .substring(1);
        },
        cleanUpSpecialChars: function(str) {
            str = str.replace(/[ÀÁÂÃÄÅ]/g,"A");
            str = str.replace(/[àáâãäå]/g,"a");
            str = str.replace(/[ÈÉÊË]/g,"E");
            //.... all the rest
            return str.replace(/[^a-z0-9]/gi,''); // final clean up
        }
    };
});