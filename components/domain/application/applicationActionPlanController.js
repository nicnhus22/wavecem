

// create the controller and inject Angular's $scope
angular.module('waveCemApp').controller('applicationActionPlanController', function($scope, $location) {


	// here fetch subquestions
    $scope.actionPlanQuestions = [{
    	id:"A-01-01",
    	question:"Etes-vous sujets a des lois ou reglementations dans le cadre de votre projet (certifications ou auditabilite, donnees personnelles ou bancaires, applications du SIIV etc.) ?",
    	actionIfNo:"Merci pour votre reponse. Pas de limitation particuliere liee a un hebergement dans le Cloud Public.",
    	actionIfYes:"Attention - La conformite avec ces tab_question devra etre assuree dans le cadre de votre demande. BPCE-IT dans le cadre d'une infogerance complete pourra assurer ce cadre reglementaire : politiques de securite, audit, cartographie, patching, gestion des logs, gestion des alertes, supervision, detection d'intrusion, gestion de crise, IAM, administration conforme, politique de filtrage et durcissement, KPI. Si certaines de ces thematiques restent a votre main, une gestion des privileges, un chiffrement, des regles precises de filtrage, une structure IAM et du monitoring devront absolument etre assures. Pour plus de details : https://www.ssi.gouv.fr/entreprise/protection-des-oiv/les-regles-de-securite.",
    	actionIfUnknown:"Cet element est indispensable pour statuer precisement sur l'eligibilite de votre demande. Nous vous invitons a vous rapprocher de votre correspondant BPCE-IT pour vous aider a repondre a cette question.",
    	category:"Contraintes legales"
    },{
    	id:"B-01-03",
    	question:"Etes-vous sujets a des lois ou reglementations dans le cadre de votre projet (certifications ou auditabilite, donnees personnelles ou bancaires, applications du SIIV etc.) ?",
    	actionIfNo:"Merci pour votre reponse. Pas de limitation particuliere liee a un hebergement dans le Cloud Public.",
    	actionIfYes:"Attention - La conformite avec ces tab_question devra etre assuree dans le cadre de votre demande. BPCE-IT dans le cadre d'une infogerance complete pourra assurer ce cadre reglementaire : politiques de securite, audit, cartographie, patching, gestion des logs, gestion des alertes, supervision, detection d'intrusion, gestion de crise, IAM, administration conforme, politique de filtrage et durcissement, KPI. Si certaines de ces thematiques restent a votre main, une gestion des privileges, un chiffrement, des regles precises de filtrage, une structure IAM et du monitoring devront absolument etre assures. Pour plus de details : https://www.ssi.gouv.fr/entreprise/protection-des-oiv/les-regles-de-securite.",
    	actionIfUnknown:"Cet element est indispensable pour statuer precisement sur l'eligibilite de votre demande. Nous vous invitons a vous rapprocher de votre correspondant BPCE-IT pour vous aider a repondre a cette question.",
    	category:"Contraintes legales"
    }];

    // eligible if no action plan required
    $scope.actionPlanStatus = "NEL";

});








