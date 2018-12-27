var express = require('express');
var router = express.Router();



const Tender = require("../models/tender");

router.get('/', function (req, res) {
    Tender.findAll().then(tenders=>{
        res.render('index',{
            tenders:tenders,
            errors:''
        });
    })

});
router.get('/add', function (req, res) {
    res.render('tender', {
        title: '',
        article: '',
        errors:''
    });

});

router.post('/add', function(req, res){
    req.checkBody('name','Нэр хоосон байна').notEmpty();
    req.checkBody('number','Дугаар хоосон байна').notEmpty();
    
    // get error
    let errors =req.validationErrors();

    if(errors){
        res.render('tender',{
            errors:errors
        });
        //console.log(errors);
    }else{
        const tenderData = {
            name: req.body.name,
            number: req.body.number,
            about: req.body.about
        }
        Tender.create(tenderData).then(
            Tender.findAll().then(tenders=>{
                res.render('index',{
                    tenders:tenders,
                    errors:''
                });
            })
            
        )
        .catch(err => {
            console.log(err);
            return;

        });
        


    }
    
    return;
});
router.get('/tender/:id',function(req,res){
    Tender.findOne({
        where:{
            id:req.params.id
        }
    }).then(tender=>{
        tender.update({
            people: tender.people+1
        })
        res.render('single', {
            tender: tender,
            errors:''
        });
    })
})

router.get('/company', function (req, res) {
    res.render('company', {
        title: '',
        article: '',
        errors:''
    });

});

router.get('/sanal/:id', function (req, res) {
    res.render('sanal', {
        title: '',
        article: '',
        errors:''
    });

});

module.exports = router;