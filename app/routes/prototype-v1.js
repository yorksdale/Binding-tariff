// JavaScript Document
module.exports = function (router) {

	router.post('/prototype-v1/bti-start', function (req, res) {
        res.redirect(301, '/prototype-v1/sign-in');
    });
	
	router.post('/prototype-v1/sign-in', function (req, res) {
        res.redirect(301, '/prototype-v1/bti-home');
    });
	
	
// Radio buttons example from index page
	router.post('/prototype-v1/bti-eori', function (req, res) {
		console.log(req.body);
		req.session.radioothercontact = req.body.radioothercontact;
        if (req.session.radioothercontact == "Yes") {
            res.redirect(301, '/prototype-v1/bti-agent');
        }
       
        else {
            res.redirect(301, '/prototype-v1/bti-contacts');
        }
    });
	router.post('/prototype-v1/bti-agent', function (req, res) {
		req.session.radioagent = req.body.radioagent;
        if (req.session.radioagent == "Yes") {
            res.redirect(301, '/prototype-v1/bti-other-eori');
        }
        //else if (req.session.radioagent == "checkbox") {
          //  res.redirect(301, '/routing-demos/checkbox/index');
       // }
        else {
            res.redirect(301, '/prototype-v1/bti-re-issue');
        }
    });
	router.post('/prototype-v1/bti-contacts', function (req, res) {
        res.redirect(301, '/prototype-v1/bti-other-eori');
    });
	router.post('/prototype-v1/bti-other-eori', function (req, res) {
        res.redirect(301, '/prototype-v1/bti-confirm-other-eori');
    });
	router.post('/prototype-v1/bti-confirm-other-eori', function (req, res) {
		console.log(req.body);
		req.session.radioconfirmeori = req.body.radioconfirmeori;
        if (req.session.radioconfirmeori == "Yes") {
            res.redirect(301, '/prototype-v1/bti-upload-auth');
        }
       
        else {
            res.redirect(301, '/prototype-v1/bti-exit');
        }
    });
	router.post('/prototype-v1/bti-upload-auth', function (req, res) {
        res.redirect(301, '/prototype-v1/bti-re-issue');
    });
	router.post('/prototype-v1/bti-re-issue', function (req, res) {
		console.log(req.body);
		req.session.radioreissue = req.body.radioreissue;
        if (req.session.radioreissue == "Yes") {
            res.redirect(301, '/prototype-v1/bti-re-issue-number');
        }
       
        else {
            res.redirect(301, '/prototype-v1/bti-com-code');
        }
    });
	router.post('/prototype-v1/bti-re-issue-number', function (req, res) {
        res.redirect(301, '/prototype-v1/bti-com-code');
    });
	router.post('/prototype-v1/bti-com-code', function (req, res) {
        res.redirect(301, '/prototype-v1/bti-description-v1');
    });
	router.post('/prototype-v1/bti-description-v1', function (req, res) {
        res.redirect(301, '/prototype-v1/bti-confidential');
    });
	router.post('/prototype-v1/bti-confidential', function (req, res) {
        res.redirect(301, '/prototype-v1/bti-upload-photos');
    });
	router.post('/prototype-v1/bti-upload-photos', function (req, res) {
        res.redirect(301, '/prototype-v1/bti-samples');
    });
	router.post('/prototype-v1/bti-samples', function (req, res) {
		console.log(req.body);
		req.session.radiosamples = req.body.radiosamples;
        if (req.session.radiosamples == "Yes") {
            res.redirect(301, '/prototype-v1/bti-samples-return');
        }
       
        else {
            res.redirect(301, '/prototype-v1/bti-other-bti');
        }
    });
	router.post('/prototype-v1/bti-samples-return', function (req, res) {
		console.log(req.body);
		req.session.radioreturn = req.body.radioreturn;
        if (req.session.radioreturn == "Yes") {
            res.redirect(301, '/prototype-v1/bti-other-bti');
        }
       
        else {
            res.redirect(301, '/prototype-v1/bti-other-bti');
        }
    });
	router.post('/prototype-v1/bti-other-bti', function (req, res) {
		console.log(req.body);
		req.session.radiootherbti = req.body.radiootherbti;
        if (req.session.radiootherbti == "Yes") {
            res.redirect(301, '/prototype-v1/bti-enter-bti');
        }
       
        else {
            res.redirect(301, '/prototype-v1/bti-aware');
        }
    });
	router.post('/prototype-v1/bti-enter-bti', function (req, res) {
        res.redirect(301, '/prototype-v1/bti-aware');
    });
	router.post('/prototype-v1/bti-aware', function (req, res) {
		console.log(req.body);
		req.session.radiootherbti = req.body.radiootherbti;
        if (req.session.radiootherbti == "Yes") {
            res.redirect(301, '/prototype-v1/bti-enter-aware');
        }
       
        else {
            res.redirect(301, '/prototype-v1/bti-other');
        }
    });
router.post('/prototype-v1/bti-enter-aware', function (req, res) {
        res.redirect(301, '/prototype-v1/bti-other');
    });
};


