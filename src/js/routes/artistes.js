import Service from "../service";
import Method from "../methods/method";
//import convert from "./convert";
//import Param from "./param";



@Service.path("/test")
export default class ServiceArtistes {

  @Method.get("/:id")
  testGet(req, res) { //  testGet(req, res, next)
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
  }

}

