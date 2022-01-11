import {Router} from "express";
import casual from "casual";

const router = Router();

router.get("/",(req,res)=>{
    let lista_contactos = [];

    for(let i=0;i<100;i++){
        lista_contactos.push({
            first_name:casual.first_name,
            last_name:casual.last_name,
            phone:casual.phone,
            country:casual.country,
            city:casual.city,
            address:casual.address1,
            email:casual.email
        })
    }   

    res.render("index.ejs",{
            title:"Contactos",
            lista_contactos:lista_contactos
        }
    );
});

export default router;