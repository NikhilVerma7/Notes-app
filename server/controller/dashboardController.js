const Note = require('../models/notesModel');



exports.dashboard = async(req,res)=>{ 

    const locals = {
        title : 'DashBoard',
        description : 'Free NodeJs Notes app'
    }   

    


    try {

        const notes = await Note.find({}); 

        res.render('dashboard/index',{
            userName: req.user.firstName,
            locals,
            notes,
            layout:"../views/layouts/dashboard"
        });

    } catch (error) {
        
    }

  
}


exports.dashboardViewNote = async(req,res)=>{
   const note = Note.findById({_id: req.params.id})
   .where({user: req.user}).lean(); 

   if(note){
    res.render('dashboard/view-notes',{
        noteId: req.params.id,
        note,
        layout : '../views/layouts/dashboard'
    });
   } 

   else{
      res.send('Something went wrong');
   }

}

exports.dashboardUpdateNote = async(req,res)=>{
     
    try {
        await Note.fidOneAndUpdate({
            _id : req.params.id
        },    {
            title : req.body.title,
            body : req.body.body
        }).where({user:req.user.id});

        res.redirect('/dashboard');

    } catch (error) {
        console.log(error);
    }


} 


exports.dashboardDeleteNote = async(req,res)=>{
    try {
        console.log('yahan toh aagya');
        await Note.deleteOne({_id: req.params.id}).where({user: req.user._id});

        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
} 


exports.dashboardAddNote = async(req,res)=>{  

    res.render('dashboard/add', {
        layout: '../views/layouts/dashboard'
    });

} 

exports.dashboardAddNewNote = async(req,res)=>{ 
    console.log('inside what i want');
    await Note.create({
        user : req.user,
        title: req.body.title,
        body:  req.body.body,
    }); 

    res.redirect('/dashboard');
} 

exports.dashboardSearch = async( req, res)=>{
    
    try {

        res.render('dashboard/search',{
            searchResults:'',
            layout:'../views/layout/dashboard'
        })
        
    } catch (error) {
        
    }
} 

exports.dashboardSearchSubmit = async( req, res )=>{
    
    try { 

     let searchTerm = req.body.searchTerm;
     const searchNoSpecialChars = searchTerm.replace(/[^a-zA-Z0-9]/g,"");



        
    } catch (error) {
        console.log(error);
    }
}