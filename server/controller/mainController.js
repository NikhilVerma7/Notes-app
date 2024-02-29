
//  GET homepage

exports.homepage = async(req,res)=>{
    
    const locals = {
        title : 'noteIt',
        description : 'Free NodeJs Notes app'
    }

    res.render('index',locals);
}
 

//  GET about

exports.about = async(req,res)=>{
    
    const locals = {
        title : 'noteIt - about',
        description : 'Free NodeJs Notes app'
    }

    res.render('about',locals);
}
