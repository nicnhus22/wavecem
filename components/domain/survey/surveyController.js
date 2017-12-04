// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('surveyController', function($scope, helperFactory) {

    angular.element(document).ready(function () {
        $('select').material_select();
        $('.modal').modal();
    });

    // setup nav
    $("#nav_applications").removeClass("active");
    $("#nav_survey").addClass("active");    

    // intiialize
    $scope.addedQuestion = {};

    $scope.questionsForCategory = [];

    $scope.changeSelectedCategoryQuestions = function() {
        $scope.questionsForCategory = $scope.getQuestionsForCategory($scope.selectedCategory);
    }

    $scope.getQuestionsForCategory = function() {
        var questions = $.grep($scope.subQuestions, function(q) {
            return q.id.charAt(0) === $scope.selectedCategory.id;
        });
        return questions;
    }

    $scope.addQuestion = function() {
        $scope.addedQuestion.id = $scope.incrementSubQuestionID($scope.questionsForCategory[$scope.questionsForCategory.length-1].id);
        $scope.addedQuestion.category = $scope.selectedCategory.name;

        $('#addQuestionModal').modal('open');
    }

    $scope.submitAddQuestion = function() {
        $scope.subQuestions.push($scope.addedQuestion);
        $scope.changeSelectedCategoryQuestions();
        $scope.addedQuestion = {};
        $('#addQuestionModal').modal('close');
    }


    // here fetch or extract categories
    $scope.categories = [{
        id:"A",
        name:"Contraintes legales"
    },{
        id:"B",
        name:"Gestion des donnees"
    },{
        id:"C",
        name:"Contraintes fournisseurs"
    },{
        id:"D",
        name:"Contraintes d'infrastructure"
    },{
        id:"E",
        name:"Contraintes logiciel"
    },{
        id:"F",
        name:"Contraintes applicatives"
    },{
        id:"G",
        name:"Contraintes projet"
    }];
    $scope.selectedCategory = $scope.categories[0]; // select first item

    // here fetch subquestions
    $scope.subQuestions = [{
    	id:"A-01-01",
    	question:"Etes-vous sujets a des lois ou reglementations dans le cadre de votre projet (certifications ou auditabilite, donnees personnelles ou bancaires, applications du SIIV etc.) ?",
    	actionIfNo:"Merci pour votre reponse. Pas de limitation particuliere liee a un hebergement dans le Cloud Public.",
    	actionIfYes:"Attention - La conformite avec ces tab_question devra etre assuree dans le cadre de votre demande. BPCE-IT dans le cadre d'une infogerance complete pourra assurer ce cadre reglementaire : politiques de securite, audit, cartographie, patching, gestion des logs, gestion des alertes, supervision, detection d'intrusion, gestion de crise, IAM, administration conforme, politique de filtrage et durcissement, KPI. Si certaines de ces thematiques restent a votre main, une gestion des privileges, un chiffrement, des regles precises de filtrage, une structure IAM et du monitoring devront absolument etre assures. Pour plus de details : https://www.ssi.gouv.fr/entreprise/protection-des-oiv/les-regles-de-securite.",
    	actionIfUnknown:"Cet element est indispensable pour statuer precisement sur l'eligibilite de votre demande. Nous vous invitons a vous rapprocher de votre correspondant BPCE-IT pour vous aider a repondre a cette question.",
    	category:"Contraintes legales"
    },{
    	id:"A-01-02",
    	question:"Etes-vous sujets a des lois ou reglementations dans le cadre de votre projet (certifications ou auditabilite, donnees personnelles ou bancaires, applications du SIIV etc.) ?",
    	actionIfNo:"Merci pour votre reponse. Pas de limitation particuliere liee a un hebergement dans le Cloud Public.",
    	actionIfYes:"Attention - La conformite avec ces tab_question devra etre assuree dans le cadre de votre demande. BPCE-IT dans le cadre d'une infogerance complete pourra assurer ce cadre reglementaire : politiques de securite, audit, cartographie, patching, gestion des logs, gestion des alertes, supervision, detection d'intrusion, gestion de crise, IAM, administration conforme, politique de filtrage et durcissement, KPI. Si certaines de ces thematiques restent a votre main, une gestion des privileges, un chiffrement, des regles precises de filtrage, une structure IAM et du monitoring devront absolument etre assures. Pour plus de details : https://www.ssi.gouv.fr/entreprise/protection-des-oiv/les-regles-de-securite.",
    	actionIfUnknown:"Cet element est indispensable pour statuer precisement sur l'eligibilite de votre demande. Nous vous invitons a vous rapprocher de votre correspondant BPCE-IT pour vous aider a repondre a cette question.",
    	category:"Contraintes legales"
    },{
    	id:"B-01-01",
    	question:"Avez-vous des besoins specifiques concernant la donnee (i.e. localisation des donnees en France, besoin en securite de la donnee type chiffrement ou anonymisation etc.) ?",
    	actionIfNo:"Merci pour votre reponse. Pas de limitation particuliere liee a un hebergement dans le Cloud Public.",
    	actionIfYes:"Attention - La conformite avec ces tab_question devra etre assuree dans le cadre de votre demande. BPCE-IT dans le cadre d'une infogerance complete pourra assurer ce cadre reglementaire : politiques de securite, audit, cartographie, patching, gestion des logs, gestion des alertes, supervision, detection d'intrusion, gestion de crise, IAM, administration conforme, politique de filtrage et durcissement, KPI. Si certaines de ces thematiques restent a votre main, une gestion des privileges, un chiffrement, des regles precises de filtrage, une structure IAM et du monitoring devront absolument etre assures. Pour plus de details : https://www.ssi.gouv.fr/entreprise/protection-des-oiv/les-regles-de-securite.",
    	actionIfUnknown:"Cet element est indispensable pour statuer precisement sur l'eligibilite de votre demande. Nous vous invitons a vous rapprocher de votre correspondant BPCE-IT pour vous aider a repondre a cette question.",
    	category:"Gestion des donnees"
    },{
    	id:"C-01-01",
    	question:"Avez-vous des contraintes liees au fournisseur d'hebergement Cloud Public (fournisseur deja identifie/selectionne, mode SaaS, criteres de reversibilite etc.) ?",
    	actionIfNo:"Merci pour votre reponse. Pas de limitation particuliere liee a un hebergement dans le Cloud Public.",
    	actionIfYes:"Attention - La conformite avec ces tab_question devra etre assuree dans le cadre de votre demande. BPCE-IT dans le cadre d'une infogerance complete pourra assurer ce cadre reglementaire : politiques de securite, audit, cartographie, patching, gestion des logs, gestion des alertes, supervision, detection d'intrusion, gestion de crise, IAM, administration conforme, politique de filtrage et durcissement, KPI. Si certaines de ces thematiques restent a votre main, une gestion des privileges, un chiffrement, des regles precises de filtrage, une structure IAM et du monitoring devront absolument etre assures. Pour plus de details : https://www.ssi.gouv.fr/entreprise/protection-des-oiv/les-regles-de-securite.",
    	actionIfUnknown:"Cet element est indispensable pour statuer precisement sur l'eligibilite de votre demande. Nous vous invitons a vous rapprocher de votre correspondant BPCE-IT pour vous aider a repondre a cette question.",
    	category:"Contraintes fournisseurs"
    },{
    	id:"D-01-01",
    	question:"Avez-vous des contraintes specifiques liees a l’infrastructure (i.e. utilisation de serveurs physiques ou composants dedies, dependances hardware etc.) ?",
    	actionIfNo:"Merci pour votre reponse. Pas de limitation particuliere liee a un hebergement dans le Cloud Public.",
    	actionIfYes:"Attention - La conformite avec ces tab_question devra etre assuree dans le cadre de votre demande. BPCE-IT dans le cadre d'une infogerance complete pourra assurer ce cadre reglementaire : politiques de securite, audit, cartographie, patching, gestion des logs, gestion des alertes, supervision, detection d'intrusion, gestion de crise, IAM, administration conforme, politique de filtrage et durcissement, KPI. Si certaines de ces thematiques restent a votre main, une gestion des privileges, un chiffrement, des regles precises de filtrage, une structure IAM et du monitoring devront absolument etre assures. Pour plus de details : https://www.ssi.gouv.fr/entreprise/protection-des-oiv/les-regles-de-securite.",
    	actionIfUnknown:"Cet element est indispensable pour statuer precisement sur l'eligibilite de votre demande. Nous vous invitons a vous rapprocher de votre correspondant BPCE-IT pour vous aider a repondre a cette question.",
    	category:"Contraintes d'infrastructure"
    },{
    	id:"E-01-01",
    	question:"Avez-vous des contraintes particulieres liees au logiciel (licences editeurs, association entre composants logiciels et composants physiques, utilisation de licence serveur ou fichiers locaux specifiques) ?",
    	actionIfNo:"Merci pour votre reponse. Pas de limitation particuliere liee a un hebergement dans le Cloud Public.",
    	actionIfYes:"Attention - La conformite avec ces tab_question devra etre assuree dans le cadre de votre demande. BPCE-IT dans le cadre d'une infogerance complete pourra assurer ce cadre reglementaire : politiques de securite, audit, cartographie, patching, gestion des logs, gestion des alertes, supervision, detection d'intrusion, gestion de crise, IAM, administration conforme, politique de filtrage et durcissement, KPI. Si certaines de ces thematiques restent a votre main, une gestion des privileges, un chiffrement, des regles precises de filtrage, une structure IAM et du monitoring devront absolument etre assures. Pour plus de details : https://www.ssi.gouv.fr/entreprise/protection-des-oiv/les-regles-de-securite.",
    	actionIfUnknown:"Cet element est indispensable pour statuer precisement sur l'eligibilite de votre demande. Nous vous invitons a vous rapprocher de votre correspondant BPCE-IT pour vous aider a repondre a cette question.",
    	category:"Contraintes logiciel"
    },{
    	id:"F-01-01",
    	question:"Votre projet presente-t-il des dependances applicatives qui pourraient etre impactantes dans un contexte de migration (information codee en dur, couplage fort avec des composants On Premise etc.) ?",
    	actionIfNo:"Merci pour votre reponse. Pas de limitation particuliere liee a un hebergement dans le Cloud Public.",
    	actionIfYes:"Attention - La conformite avec ces tab_question devra etre assuree dans le cadre de votre demande. BPCE-IT dans le cadre d'une infogerance complete pourra assurer ce cadre reglementaire : politiques de securite, audit, cartographie, patching, gestion des logs, gestion des alertes, supervision, detection d'intrusion, gestion de crise, IAM, administration conforme, politique de filtrage et durcissement, KPI. Si certaines de ces thematiques restent a votre main, une gestion des privileges, un chiffrement, des regles precises de filtrage, une structure IAM et du monitoring devront absolument etre assures. Pour plus de details : https://www.ssi.gouv.fr/entreprise/protection-des-oiv/les-regles-de-securite.",
    	actionIfUnknown:"Cet element est indispensable pour statuer precisement sur l'eligibilite de votre demande. Nous vous invitons a vous rapprocher de votre correspondant BPCE-IT pour vous aider a repondre a cette question.",
    	category:"Contraintes applicatives"
    },{
    	id:"G-01-01",
    	question:"Avez-vous un cadre projet bien delimite a respecter (enjeux planning et financier de transformation ou migration, ROI cible, enjeux de consommation de services Cloud etc.) ?",
    	actionIfNo:"Merci pour votre reponse. Pas de limitation particuliere liee a un hebergement dans le Cloud Public.",
    	actionIfYes:"Attention - La conformite avec ces tab_question devra etre assuree dans le cadre de votre demande. BPCE-IT dans le cadre d'une infogerance complete pourra assurer ce cadre reglementaire : politiques de securite, audit, cartographie, patching, gestion des logs, gestion des alertes, supervision, detection d'intrusion, gestion de crise, IAM, administration conforme, politique de filtrage et durcissement, KPI. Si certaines de ces thematiques restent a votre main, une gestion des privileges, un chiffrement, des regles precises de filtrage, une structure IAM et du monitoring devront absolument etre assures. Pour plus de details : https://www.ssi.gouv.fr/entreprise/protection-des-oiv/les-regles-de-securite.",
    	actionIfUnknown:"Cet element est indispensable pour statuer precisement sur l'eligibilite de votre demande. Nous vous invitons a vous rapprocher de votre correspondant BPCE-IT pour vous aider a repondre a cette question.",
    	category:"Contraintes projet"
    }];


    /**
        Helper to increment string
    **/
    $scope.incrementSubQuestionID = function(questionID) {
        var idToArray = questionID.split("-");
        var lastBlockInt = parseInt(idToArray[2]); // (ie. input A-01-02 will output 02)
        var newLastBlockInt = lastBlockInt + 1;
        var formattedNumber = ("0" + newLastBlockInt).slice(-2);
        idToArray[2] = formattedNumber;
        return idToArray.join("-");
    }


	/**
		Map categories to colors
		returns a color with the Materialize format (ie. ligthen blue)
	**/	    
    $scope.getColorForCategory = function(category) {
        return helperFactory.getColorForCategory(category);
    }

	/**
		Map categories to colors
		returns a hexadecimal color 
	**/	 
    $scope.getHexColorForCategory = function(category) {
        return helperFactory.getHexColorForCategory(category);
    }

});
