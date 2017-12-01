

// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('applicationController', function($scope, $routeParams, waveCemService) {

	// initialize
	$('ul.tabs').tabs();

    // here fetch app with name
    $scope.application = {
    	name:$routeParams.name,
   		status:"ELI",
   		progress:100,
    }

    // here fetch questions
    $scope.mandatoryQuestions = [{
    	id:"A-01",
    	question:"Etes-vous sujets a des lois ou reglementations dans le cadre de votre projet (certifications ou auditabilite, donnees personnelles ou bancaires, applications du SIIV etc.) ?",
    	answer:"unknown",
    	category:"Contraintes legales"
    },{
    	id:"B-01",
    	question:"Avez-vous des besoins specifiques concernant la donnee (i.e. localisation des donnees en France, besoin en securite de la donnee type chiffrement ou anonymisation etc.) ?",
    	answer:"no",
    	category:"Gestion des donnees"
    },{
    	id:"C-01",
    	question:"Avez-vous des contraintes liees au fournisseur d'hebergement Cloud Public (fournisseur deja identifie/selectionne, mode SaaS, criteres de reversibilite etc.) ?",
    	answer:"yes",
    	category:"Contraintes fournisseurs"
    },{
    	id:"D-01",
    	question:"Avez-vous des contraintes specifiques liees a l’infrastructure (i.e. utilisation de serveurs physiques ou composants dedies, dependances hardware etc.) ?",
    	answer:"unknown",
    	category:"Contraintes d'infrastructure"
    },{
    	id:"E-01",
    	question:"Avez-vous des contraintes particulieres liees au logiciel (licences editeurs, association entre composants logiciels et composants physiques, utilisation de licence serveur ou fichiers locaux specifiques) ?",
    	answer:"no",
    	category:"Contraintes logiciel"
    },{
    	id:"F-01",
    	question:"Votre projet presente-t-il des dependances applicatives qui pourraient etre impactantes dans un contexte de migration (information codee en dur, couplage fort avec des composants On Premise etc.) ?",
    	answer:"yes",
    	category:"Contraintes applicatives"
    },{
    	id:"G-01",
    	question:"Avez-vous un cadre projet bien delimite a respecter (enjeux planning et financier de transformation ou migration, ROI cible, enjeux de consommation de services Cloud etc.) ?",
    	answer:"yes",
    	category:"Contraintes projet"
    }];

    // here fetch subquestions
    $scope.subQuestions = [{
    	id:"A-01-01",
    	question:"Etes-vous sujets a des lois ou reglementations dans le cadre onnelles ou bancaires, applications du SIIV etc.) ?",
    	answer:"unknown",
    	category:"Contraintes legales"
    },{
    	id:"A-01-02",
    	question:"Avez-vous des besoins specifiques concernant lacurite de la donnee type chiffrement ou anonymisation etc.) ?",
    	answer:"no",
    	category:"Contraintes legales"
    },{
    	id:"B-01-01",
    	question:"Avez-vous des contraintes liees au fournisne, mode SaaS, criteres de reversibilite etc.) ?",
    	answer:"yes",
    	category:"Gestion des donnees"
    }];

    /*
    	This gets all the sub questions given a mandatory question
    	It looks for the first letter to determine whether or not a subquestion is in the right category
    */
    $scope.getSubQuestions = function(question) {
    	var subQuestionFiltered = $.grep($scope.subQuestions, function(q) {
		    return q.id.charAt(0) === question.id.charAt(0);
		});

    	return subQuestionFiltered;
    }

	
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








