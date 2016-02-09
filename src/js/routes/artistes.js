import Service from "../service";
import Method from "../methods/method";
//import convert from "./convert";
//import Param from "./param";



@Service.path("/test")
export default class ServiceArtistes {

  @Method.get("/:id")
  testGet(params, req) { //  testGet(req, res, next)
    return new Promise((resolve) => {
      req.db.get('userlist').find({},{},function(e,docs){
        resolve(docs);
      });
    });
  }

};
