// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('surveyController', function($scope, waveCemService) {

    // setup nav
    $("#nav_applications").removeClass("active");
    $("#nav_survey").addClass("active");    

    // intiialize

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

    // here fetch subquestions
    $scope.subQuestions = [{
    	id:"A-01-01",
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

    $scope.selectedCategory = $scope.categories[0];
    $scope.questionsForCategory = [];

    $scope.changeSelectedCategoryQuestions = function() {
    	var subQuestionFiltered = $.grep($scope.subQuestions, function(q) {
		    return q.id.charAt(0) === $scope.selectedCategory.id;
		});

    	$scope.questionsForCategory = subQuestionFiltered;
    }

	angular.element(document).ready(function () {
	  $('select').material_select();
	});


	/**
		Map categories to colors
		returns a color with the Materialize format (ie. ligthen blue)
	**/	    
    $scope.getColorForCategory = function(category) {
        return waveCemService.getColorForCategory(category);
    }

	/**
		Map categories to colors
		returns a hexadecimal color 
	**/	 
    $scope.getHexColorForCategory = function(category) {
        return waveCemService.getHexColorForCategory(category);
    }

});
