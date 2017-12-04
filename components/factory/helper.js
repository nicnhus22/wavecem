

waveCemApp.factory('helperFactory', function() {
    return {
        getColorForCategory: function(category) {
            switch(category) {
                case "Contraintes legales":
                    return "indigo accent-4";
                case "Gestion des donnees":
                    return "light-blue accent-4";
                case "Contraintes fournisseurs":
                    return "cyan accent-4";
                case "Contraintes d'infrastructure":
                    return "teal accent-4";
                case "Contraintes logiciel":
                    return "green darken-4";
                case "Contraintes applicatives":
                    return "light-green accent-4";
                case "Contraintes projet":
                    return "indigo accent-4";
                default:
                    return "deep-purple accent-4"
            }
        },
        getHexColorForCategory: function(category) {
            switch(category) {
                case "Contraintes legales":
                    return "#304ffe";
                case "Gestion des donnees":
                    return "#0091ea";
                case "Contraintes fournisseurs":
                    return "#00b8d4";
                case "Contraintes d'infrastructure":
                    return "#00bfa5";
                case "Contraintes logiciel":
                    return "#1B5E20";
                case "Contraintes applicatives":
                    return "#64dd17";
                case "Contraintes projet":
                    return "#aeea00";
                default:
                    return "deep-purple accent-4"
            }
        },
        getRandomNumber: function(length) {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(length)
              .substring(1);
        }
    };
});